import actionCreatorFactory from 'typescript-fsa';

import { IPicturesListResponse } from '../model';

const actionCreator = actionCreatorFactory('@@Pages/Pictures');

const picturesActions = {
  list: actionCreator.async<{ params: any }, { pictures: IPicturesListResponse }, { hasError: boolean }>('LIST'),
  loadingDone: actionCreator<{ isLoading: boolean }>('LOADING_DONE'),
  loadingStarted: actionCreator<{ isLoading: boolean }>('LOADING_STARTED'),
};

export default picturesActions;
