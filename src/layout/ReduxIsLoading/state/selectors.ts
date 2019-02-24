import { IAppState } from '../../../store/config.reducers';

export const getSelectors = (state: IAppState) => {
  const reduxStateIsLoadingState = state.reduxStateIsLoading;

  const isLoading = reduxStateIsLoadingState.isLoading;

  return {
    isLoading,
  }
}

export default { getSelectors };
