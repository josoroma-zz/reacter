import { Epic, ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { listPictures as queryListPictures } from '../../../graphql/queries';
import { ServiceGraphQL } from '../../../services';
import IPayloadAction from '../../../store/model';

import { IPicturesListResponse } from  '../model';

import picturesActions from './actions';

const serviceGraphQL = new ServiceGraphQL();

const picturesListEpic: Epic<IPayloadAction> = actions$ => actions$.pipe(
  ofType(picturesActions.list.started.type),
  switchMap((action: IPayloadAction) => concat(
    of(picturesActions.loadingStarted({ isLoading: true })),
    serviceGraphQL.query(queryListPictures).pipe(
      map((pictures: IPicturesListResponse) => picturesActions.list.done({
        params: action.payload.params,
        result: { pictures },
      })),
      catchError(_ => of(picturesActions.list.failed({
        error: { hasError: true },
        params: action.payload.params,
      }))),
    ),
    of(picturesActions.loadingDone({ isLoading: false })),
  )),
);

const picturesEpics = {
  picturesListEpic,
};

export default picturesEpics;
