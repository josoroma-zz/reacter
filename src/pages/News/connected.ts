
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { IAppState } from '../../store/config.reducers';

import NewsComponent from './component';
import { newsOperations, newsSelectors } from './state';

const mapStateToProps = (state: IAppState) => newsSelectors.getSelectors(state);

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  fetchNews: (url: string) => dispatch(newsOperations.fetch(url)),
});

const NewsConnected = connect(mapStateToProps, mapDispatchToProps)(NewsComponent);

export default NewsConnected;
