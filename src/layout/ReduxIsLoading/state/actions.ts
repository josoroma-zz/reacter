import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('@@Pages/ReduxIsLoading');

const newsActions = {
  isLoadingOff: actionCreator('REDUX_STATE_IS_LOADING_OFF'),
  isLoadingOn: actionCreator('REDUX_STATE_IS_LOADING_ON'),
};

export default newsActions;
