import { reducerWithInitialState } from 'typescript-fsa-reducers';

import newsActions from './actions';
import { INewsState, initialNewsState } from './model';

const newsReducer = reducerWithInitialState(initialNewsState)
  .case(newsActions.loadingStarted, (state: INewsState, payload: any) => (
    {
      ...state,
      isLoading: payload.isLoading
    }
  ))
  .case(newsActions.loadingDone, (state: INewsState, payload: any) => (
    {
      ...state,
      isLoading: payload.isLoading
    }
  ))
  .case(newsActions.fetch.done, (state: INewsState, payload: any) => {
    const { result: { news: data = initialNewsState.news } } = payload;

    return {
      ...state,
      news: data,
    }
  })
  .case(newsActions.fetch.failed, (state: INewsState, payload: any) => (
    {
      ...state,
      hasError: payload.error.hasError
    }
  ))
  .case(newsActions.justAnotherFetch.done, (state: INewsState, payload: any) => {
    const { result: { news: data = initialNewsState.news } } = payload;

    return {
      ...state,
      news: data,
    }
  })
  .case(newsActions.justAnotherFetch.failed, (state: INewsState, payload: any) => (
    {
      ...state,
      hasError: payload.error.hasError
    }
  ))

export default newsReducer;
