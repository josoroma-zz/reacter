import actionCreatorFactory from 'typescript-fsa';

import { INews } from '../model';

const actionCreator = actionCreatorFactory('@@Pages/News');

/*
 * actionCreator.async<{foo: string},        // parameter type
 *                   {bar: number},          // success type
 *                   {code: number}          // error type
 *                   >('DO_SOMETHING');
 */
const newsActions = {
  fetch: actionCreator.async<{ url: string }, { news: INews[] }, { hasError: boolean }>('FETCH'),
  justAnotherFetch: actionCreator.async<{ url: string }, { news: INews[] }, { hasError: boolean }>('JUST_ANOTHER_FETCH'),
  loadingDone: actionCreator<{ isLoading: boolean }>('LOADING_DONE'),
  loadingStarted: actionCreator<{ isLoading: boolean }>('LOADING_STARTED'),
};

export default newsActions;
