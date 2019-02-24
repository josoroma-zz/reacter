import { Epic, ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';

import IPayloadAction from '../../../store/model';

import { INews } from '../model';

import newsActions from './actions';

const newsFetchEpic: Epic<IPayloadAction> = (actions$) => actions$.pipe(
  ofType(newsActions.fetch.started.type),
  mergeMap((action: IPayloadAction) => concat(
    of(newsActions.loadingStarted({ isLoading: true })),
    ajax.getJSON(action.payload.url).pipe(
      map((news: INews[]) => newsActions.fetch.done({
        params: action.payload.url,
        result: { news },
      })),
      catchError(_ => of(newsActions.fetch.failed({
        error: { hasError: true },
        params: action.payload.url,
      }))),
    ),
    of(newsActions.loadingDone({ isLoading: false })),
  )),
);

const newsJustAnotherFetchEpic: Epic<IPayloadAction> = (actions$) => actions$.pipe(
  ofType(newsActions.justAnotherFetch.started.type),
  mergeMap((action: IPayloadAction) => concat(
    of(newsActions.loadingStarted({ isLoading: true })),
    ajax.getJSON(action.payload.url).pipe(
      map((news: INews[]) => newsActions.fetch.done({
        params: action.payload.url,
        result: { news },
      })),
      catchError(_ => of(newsActions.fetch.failed({
        error: { hasError: true },
        params: action.payload.url,
      }))),
    ),
    of(newsActions.loadingDone({ isLoading: false })),
  )),
);

const newsEpics = {
  newsFetchEpic,
  newsJustAnotherFetchEpic,
};

export default newsEpics;
