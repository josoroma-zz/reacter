import { reducerWithInitialState } from 'typescript-fsa-reducers';

import picturesActions from './actions';
import { initialPicturesState, IPicturesState } from './model';

const picturesReducer = reducerWithInitialState(initialPicturesState)
  .case(picturesActions.loadingStarted, (state: IPicturesState, payload: any) => (
    {
      ...state,
      isLoading: payload.isLoading
    }
  ))
  .case(picturesActions.loadingDone, (state: IPicturesState, payload: any) => (
    {
      ...state,
      isLoading: payload.isLoading
    }
  ))
  .case(picturesActions.list.done, (state: IPicturesState, payload: any) => {
    const { listPictures: { items: pictures = initialPicturesState.pictures } = {} } = payload.result.pictures;

    return {
      ...state,
      pictures,
    }
  })
  .case(picturesActions.list.failed, (state: IPicturesState, payload: any) => (
    {
      ...state,
      hasError: payload.error.hasError
    }
  ))

export default picturesReducer;
