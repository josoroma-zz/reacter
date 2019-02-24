import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider} from '@material-ui/core/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore, { history } from './store';
import theme from './theme';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <App history={history} />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
  )
}

render();
