
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { IAppState } from '../../store/config.reducers';

import {
  reduxStateIsLoadingOperations,
  reduxStateIsLoadingSelectors,
} from './state';

import ReduxIsLoadingOn from './component.on';

const mapStateToProps = (state: IAppState) => reduxStateIsLoadingSelectors.getSelectors(state);

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  reduxStateIsLoadingOn: () => dispatch(reduxStateIsLoadingOperations.isLoadingOn()),
});

const ReduxIsLoadingOnConnected = connect(mapStateToProps, mapDispatchToProps)(ReduxIsLoadingOn);

export default ReduxIsLoadingOnConnected;
