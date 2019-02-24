import { Epic, ofType } from 'redux-observable';
import { concat, iif, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { createPicture as mutationUploadPictures } from '../../../../graphql/mutations';
import { ServiceGraphQL } from '../../../../services';
import { ServiceStorage } from '../../../../services';
import { IAppState } from '../../../../store/config.reducers';
import IPayloadAction from '../../../../store/model';

import { IUploadResponse } from  '../model';

import uploadActions from './actions';

const serviceGraphQL = new ServiceGraphQL();
const serviceStorage = new ServiceStorage();

const handleUploadActionFailed = (actions: any, action: any) => (
  of(actions.upload.failed({
    error: { hasError: true },
    params: action.payload.storageParams,
  }))
);

const uploadEpic: Epic<IPayloadAction, IPayloadAction, IAppState> = (actions$, state) => actions$.pipe(
  ofType(uploadActions.upload.started.type),
  switchMap((action: IPayloadAction) => concat(
    of(uploadActions.loadingStarted({ isLoading: true })),
    serviceStorage.put(action.payload.fileName, action.payload.storageParams).pipe(
      map(_ => uploadActions.uploadToBucketDone({ wasUploaded: true })),
      catchError(_ => of(
        handleUploadActionFailed(uploadActions, action),
        uploadActions.uploadToBucketFail({ wasUploaded: false }),
      )),
    ),
    iif(() => !state.value.upload.hasError && state.value.upload.wasUploaded,
      serviceGraphQL.mutation(mutationUploadPictures, { input: action.payload.apiParams }).pipe(
        switchMap((pictures: IUploadResponse) => of(
          uploadActions.upload.done({
            params: action.payload.storageParams,
            result: { pictures },
          }),
          uploadActions.storedToDynamoDBDone({ wasStored: true }),
        )),
        catchError(_ => of(
          handleUploadActionFailed(uploadActions, action),
          uploadActions.storedToDynamoDBFail({ wasStored: false }),
        )),
      ),
      handleUploadActionFailed(uploadActions, action),
    ),
    of(uploadActions.loadingDone({ isLoading: false })),
  )),
);

const uploadEpics = {
  uploadEpic,
};

export default uploadEpics;
