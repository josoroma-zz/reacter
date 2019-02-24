
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Auth } from "aws-amplify";
import { Form, FormikProps } from 'formik';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

import awsConfig from '../../../aws-exports';
import {
  ContentContainer,
  FormErrorContainer,
  ReduxHasMessage,
  ReduxIsLoading,
} from '../../../layout';
import debug from '../../../utils/debug';

import { IPictures } from '../model';

import { initialIUpload, IS3ObjectUpload } from './model';
import { IUploadState } from './state/model';
import styles from './styles';

interface IUploadStateWithWrappedProps extends IUploadState {
  classes: {
    fileInput: string;
    form: string;
  };
  reset(): void;
  uploadPictures(fileName: string, storageParams: any, apiParams: any): void;
}

class Upload extends React.PureComponent<IUploadStateWithWrappedProps & FormikProps<IPictures>> {
  public handleFileOnChange = async(event: any): Promise<void> => {
    const { currentTarget: { files: pictures = [] } = {} } = event;

    try {
      const { identityId } = await Auth.currentCredentials();
      let file: IS3ObjectUpload = initialIUpload.file;

      if (pictures[0]) {
        const { name: fileName, type: mimeType } = pictures[0] || '';
        const extension = fileName.split('.').pop().toLowerCase();

        file = {
          bucket: awsConfig.aws_user_files_s3_bucket,
          key: `${this.props.values.visibility}/${identityId}/${uuid()}${extension && '.'}${extension}`,
          localUri: pictures[0],
          mimeType,
          region: awsConfig.aws_user_files_s3_bucket_region,
        }
      }

      this.props.setFieldValue('file', file);
    } catch(err) {
      debug.log('Error', err);
    }
  };

  public render() {
    const {
      classes,
      errors,
      handleBlur,
      handleChange,
      hasError,
      isLoading,
      isSubmitting,
      touched,
      values,
      wasUploaded,
      wasStored,
    } = this.props;

    return (
      <ContentContainer>
        {
          isLoading &&
          <ReduxIsLoading
            isLoading={isLoading}
          />
        }
        { hasError &&
          <ReduxHasMessage
            message={'Your custom Error message here!'}
            reset={this.props.reset}
            variant="error"
          />
        }
        { wasUploaded && wasStored &&
          <ReduxHasMessage
            message={'Your custom Success message here!'}
            reset={this.props.reset}
            variant="success"
          />
        }
        <Typography
          gutterBottom={true}
          variant="h1"
        >
          Upload Picture
        </Typography>
        <Form className={classes.form}>
          <FormControl fullWidth={true}>
            <InputLabel
              htmlFor="name"
              shrink={true}
            >
              Give a name
            </InputLabel>
            <InputBase
              id="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              type="text"
              value={values.name}
            />
            <FormErrorContainer
              error={errors.name}
              touched={touched.name}
            />
          </FormControl>
          <FormControl fullWidth={true}>
            <InputLabel
              htmlFor="file"
              shrink={true}
            >
              Choose an image
            </InputLabel>
            <input
              accept="image/*"
              className={classes.fileInput}
              id="file"
              name="file"
              onChange={this.handleFileOnChange}
              onBlur={handleBlur}
              type="file"
            />
            <label htmlFor="file">
              <Button
                component="span"
                fullWidth={true}
                size="large"
                variant="contained"
              >
                Attach
              </Button>
            </label>
            <FormErrorContainer
              error={errors.file}
              touched={touched.file}
            />
          </FormControl>
          <FormControl fullWidth={true}>
            <Button
              // File upload tweak is changing common `{isSubmitting || !isValid}` behavior.
              disabled={isSubmitting}
              fullWidth={true}
              size="large"
              type="submit"
            >
              Upload
            </Button>
          </FormControl>
        </Form>
      </ContentContainer>
    );
  }
}

export default withStyles(styles)(Upload as any);
