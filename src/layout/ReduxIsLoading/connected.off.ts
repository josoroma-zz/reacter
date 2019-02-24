
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { IAppState } from '../../store/config.reducers';

import {
  reduxStateIsLoadingOperations,
  reduxStateIsLoadingSelectors,
} from './state';

import ReduxIsLoadingOff from './component.off';

const mapStateToProps = (state: IAppState) => reduxStateIsLoadingSelectors.getSelectors(state);

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  reduxStateIsLoadingOff: () => dispatch(reduxStateIsLoadingOperations.isLoadingOff()),
});

const ReduxIsLoadingOffConnected = connect(mapStateToProps, mapDispatchToProps)(ReduxIsLoadingOff);

export default ReduxIsLoadingOffConnected;
