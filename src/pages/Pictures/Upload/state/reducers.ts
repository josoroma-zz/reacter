import { reducerWithInitialState } from 'typescript-fsa-reducers';

import uploadActions from './actions';
import { initialUploadState, IUploadState } from './model';

const uploadReducer = reducerWithInitialState(initialUploadState)
  .case(uploadActions.loadingStarted, (state: IUploadState, payload: any) => (
    {
      ...state,
      isLoading: payload.isLoading
    }
  ))
  .case(uploadActions.loadingDone, (state: IUploadState, payload: any) => (
    {
      ...state,
      isLoading: payload.isLoading
    }
  ))
  .case(uploadActions.uploadToBucketDone, (state: IUploadState, payload: any) => (
    {
      ...state,
      wasUploaded: payload.wasUploaded
    }
  ))
  .case(uploadActions.uploadToBucketFail, (state: IUploadState, payload: any) => (
    {
      ...state,
      wasUploaded: payload.wasUploaded
    }
  ))
  .case(uploadActions.storedToDynamoDBDone, (state: IUploadState, payload: any) => (
    {
      ...state,
      wasStored: payload.wasStored
    }
  ))
  .case(uploadActions.storedToDynamoDBFail, (state: IUploadState, payload: any) => (
    {
      ...state,
      wasStored: payload.wasStored
    }
  ))
  .case(uploadActions.upload.done, (state: IUploadState, payload: any) => {
    const { createPicture: pictures = {} } = payload.result.pictures;

    return {
      ...state,
      pictures,
    }
  })
  .case(uploadActions.upload.failed, (state: IUploadState, payload: any) => (
    {
      ...state,
      hasError: payload.error.hasError
    }
  ))
  .case(uploadActions.reset, (state: IUploadState) => (
    {
      ...state,
      ...initialUploadState,
    }
  ))

export default uploadReducer;
