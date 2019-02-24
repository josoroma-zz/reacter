
import { connect } from 'react-redux';

import { IAppState } from '../../store/config.reducers';

import { reduxStateIsLoadingSelectors } from '../../layout/ReduxIsLoading/state';

import ContentContainer from './component';

const mapStateToProps = (state: IAppState) => reduxStateIsLoadingSelectors.getSelectors(state);

const ContentContainerConnected = connect(mapStateToProps)(ContentContainer);

export default ContentContainerConnected;
