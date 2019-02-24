
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { IAppState } from '../../store/config.reducers';

import PicturesComponent from './component';
import { picturesOperations, picturesSelectors } from './state';

const mapStateToProps = (state: IAppState) => picturesSelectors.getSelectors(state);

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  listPictures: (params: any) => dispatch(picturesOperations.list(params)),
});

const PicturesConnected = connect(mapStateToProps, mapDispatchToProps)(PicturesComponent);

export default PicturesConnected;
