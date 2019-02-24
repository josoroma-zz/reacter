import { Auth } from "aws-amplify";
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { v4 as uuid } from 'uuid';

import { IAppState } from '../../../store/config.reducers';
import debug from '../../../utils/debug';
import { getFileNameFromS3ObjectKey } from '../../../utils/s3';

import { IPictures } from '../model';
import IUpload, { initialIUpload } from './model';

import UploadComponent from './component';
import { uploadOperations, uploadSelectors } from './state';
import uploadValidation from './validation';

const mapStateToProps = (state: IAppState) => uploadSelectors.getSelectors(state);

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  reset: () => dispatch(uploadOperations.reset()),
  uploadPictures: (fileName: string, storageParams: any, apiParams: any) => dispatch(
    uploadOperations.upload(fileName, storageParams, apiParams)
  ),
});

interface IUploadFormikProps {
  uploadPictures(fileName: string, storageParams: any, apiParams: any): void;
}

/**
 * <Props, Values, Payload>
 */
const uploadFormikEnhancer = withFormik<IUploadFormikProps, IPictures, IUpload>({
  displayName: 'UploadForm',
  handleSubmit: async(values: IUpload, { resetForm, props }) => {
    const id = uuid();

    try {
      const { username: owner } = await Auth.currentAuthenticatedUser();

      const apiParams: IPictures = {
        ...values,
        file: {
          bucket: values.file.bucket,
          key: values.file.key,
          region: values.file.region,
        },
        id,
        owner,
      };

      const storageParams: IUpload = {
        ...values,
        id,
        owner,
      };

      const fileName = getFileNameFromS3ObjectKey(values.file.key);

      props.uploadPictures(fileName, storageParams, apiParams);
    } catch(err) {
      debug.log('Error', err);
    }

    resetForm();
  },
  mapPropsToValues: () => initialIUpload,
  validationSchema: uploadValidation,
})(UploadComponent as any);

const UploadConnected = connect(mapStateToProps, mapDispatchToProps)(uploadFormikEnhancer);

export default UploadConnected;
