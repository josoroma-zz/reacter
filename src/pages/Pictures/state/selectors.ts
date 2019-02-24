import { IAppState } from '../../../store/config.reducers';

export const getSelectors = (state: IAppState) => {
  const picturesState = state.pictures;

  const hasError = picturesState.hasError;
  const isLoading = picturesState.isLoading;
  const pictures = picturesState.pictures;

  return {
    hasError,
    isLoading,
    pictures,
  }
}

export default { getSelectors };
