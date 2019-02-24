import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { ContentContainer } from '../../layout';

const SFCNotFound: React.SFC = () => {
  return (
    <ContentContainer>
      <Typography
        gutterBottom={true}
        variant="h1"
      >
        Not Found
      </Typography>

      <Typography
        gutterBottom={true}
        variant="body1"
      >
        The page you are looking for does not exist or has changed.
      </Typography>

      <Typography
        gutterBottom={true}
        variant="body2"
      >
        back to home page >
      </Typography>
    </ContentContainer>
  );
};

export default SFCNotFound;
