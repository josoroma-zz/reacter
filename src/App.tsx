import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';

import aws_exports from './aws-exports';
import Routes from './routes/component';
import debug from './utils/debug';

Amplify.configure(aws_exports);

interface IAppProps {
  history: History,
}

const SFCApp: React.SFC<IAppProps> = (props) => {
  debug.log('SFCApp - props', props);
  debug.log('SFCApp - process.env', process.env);

  const { history } = props;

  return(
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
};

const signUpConfig = {
  signUpFields: [
    {
      displayOrder: 4,
      key: 'name',
      label: 'Full Name',
      placeholder: 'Full Name',
      required: true,
    },
  ]
};

export default withAuthenticator(SFCApp, {
  signUpConfig,
});
