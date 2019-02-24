import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { IReduxIsLoadingState, reduxStateIsLoadingReducer } from '../layout/ReduxIsLoading/state';

import { INewsState, newsReducer } from '../pages/News/state';
import { IPicturesState, picturesReducer } from '../pages/Pictures/state';
import { IUploadState, uploadReducer } from '../pages/Pictures/Upload/state';

// App State.
export interface IAppState {
  news: INewsState,
  pictures: IPicturesState,
  reduxStateIsLoading: IReduxIsLoadingState,
  router: RouterState,
  upload: IUploadState,
}

// Root Reducers.
const rootReducers = (history: History) => combineReducers<IAppState>({
  news: newsReducer,
  pictures: picturesReducer,
  reduxStateIsLoading: reduxStateIsLoadingReducer,
  router: connectRouter(history),
  upload: uploadReducer,
});

export default rootReducers;
