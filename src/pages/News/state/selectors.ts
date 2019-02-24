import { IAppState } from '../../../store/config.reducers';

export const getSelectors = (state: IAppState) => {
  const newsState = state.news;

  const hasError = newsState.hasError;
  const isLoading = newsState.isLoading;
  const news = newsState.news;

  return {
    hasError,
    isLoading,
    news,
  }
}

export default { getSelectors };
