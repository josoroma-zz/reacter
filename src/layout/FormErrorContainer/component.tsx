import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { IFormErrorContainer } from './model';

const SFCFormErrorContainer: React.SFC<IFormErrorContainer> = (props) => {
  const { touched, error } = props;
  if (touched && error) {
    return (
      <Typography
        color="error"
        variant="caption"
        gutterBottom={true}
      >
        { error }
      </Typography>
    )
  }

  return null;
};

export default (SFCFormErrorContainer as any);
