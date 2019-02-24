import { IAppState } from '../../../../store/config.reducers';

export const getSelectors = (state: IAppState) => {
  const uploadState = state.upload;

  const hasError = uploadState.hasError;
  const isLoading = uploadState.isLoading;
  const upload = uploadState.pictures;
  const wasStored = uploadState.wasStored;
  const wasUploaded = uploadState.wasUploaded;

  return {
    hasError,
    isLoading,
    upload,
    wasStored,
    wasUploaded,
  }
}

export default { getSelectors };
