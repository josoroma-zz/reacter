import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import epics from './config.epics';
import reducers from './config.reducers';

export const history = createBrowserHistory();

const configureStore = () => {
  let store: any = {};
  const epicMiddleware = createEpicMiddleware();

  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    store = createStore(
      reducers(history),
      composeEnhancer(
        applyMiddleware(
          epicMiddleware,
          logger,
          routerMiddleware(history),
        ),
      ),
    );
  } else {
    store = createStore(
      reducers(history),
      applyMiddleware(
        epicMiddleware,
        routerMiddleware(history),
      ),
    );
  }

  // Epics.
  epicMiddleware.run(epics);

  if (process.env.NODE_ENV !== 'production') {
    /**
     * Extends Create React App Hot Reloading features.
     */
    if ((module as any).hot) {
      (module as any).hot.accept('./config.reducers', () => {
        const rootReducers = require('./config.reducers').default;
        store.replaceReducer(rootReducers);
      });

      (module as any).hot.accept('./config.epics', () => {
        const rootEpics = require('./config.epics').default;
        (epicMiddleware as any).replaceEpic(rootEpics);
      });
    }
  }

  return store;
}

export default configureStore;
