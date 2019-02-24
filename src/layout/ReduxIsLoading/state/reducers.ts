import { reducerWithInitialState } from 'typescript-fsa-reducers';

import reduxStateIsLoadingActions from './actions';
import IReduxIsLoadingState, { initialReduxIsLoadingState } from './model';

const reduxStateIsLoadingReducer = reducerWithInitialState(initialReduxIsLoadingState)
  .case(reduxStateIsLoadingActions.isLoadingOn, (state: IReduxIsLoadingState, payload: any) => (
    {
      ...state,
      isLoading: true,
    }
  ))
  .case(reduxStateIsLoadingActions.isLoadingOff, (state: IReduxIsLoadingState, payload: any) => (
    {
      ...state,
      isLoading: false,
    }
  ))

export default reduxStateIsLoadingReducer;
