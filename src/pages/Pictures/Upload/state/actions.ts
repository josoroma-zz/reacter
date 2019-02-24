import actionCreatorFactory from 'typescript-fsa';

import { IUploadResponse } from '../model';

const actionCreator = actionCreatorFactory('@@Pages/Pictures/Upload');

const picturesActions = {
  loadingDone: actionCreator<{ isLoading: boolean }>('LOADING_DONE'),
  loadingStarted: actionCreator<{ isLoading: boolean }>('LOADING_STARTED'),
  reset: actionCreator('RESET'),
  storedToDynamoDBDone: actionCreator<{ wasStored: boolean }>('STORED_TO_DYNAMODB_DONE'),
  storedToDynamoDBFail: actionCreator<{ wasStored: boolean }>('STORED_TO_DYNAMODB_FAIL'),
  upload: actionCreator.async<{ fileName: string, storageParams: any, apiParams: any }, { pictures: IUploadResponse }, { hasError: boolean }>('UPLOAD'),
  uploadToBucketDone: actionCreator<{ wasUploaded: boolean }>('UPLOAD_TO_BUCKET_DONE'),
  uploadToBucketFail: actionCreator<{ wasUploaded: boolean }>('UPLOAD_TO_BUCKET_FAIL'),
};

export default picturesActions;
