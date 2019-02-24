import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';

import IReduxIsLoading from './model';
import styles from './styles';

interface ISFCReduxIsLoadingWithWrappedProps extends IReduxIsLoading {
  classes: {
    blockContainer: string;
    blockOverlay: string;
    circularProgress: string;
    circularProgressBg: string;
    circularProgressContainer: string;
    root: string;
  };
}

const SFCReduxIsLoading: React.SFC<ISFCReduxIsLoadingWithWrappedProps> = (props) => {
  const { classes, isLoading } = props;

  if (!isLoading) {
    return null;
  }

  return(
    <div className={classes.root}>
    <div className={classes.blockContainer}>
      <div className={classes.blockOverlay} />
      <div className={classes.circularProgressContainer}>
        <div className={classes.circularProgressBg}>
          <CircularProgress
            className={classes.circularProgress}
            disableShrink={true}
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default withStyles(styles)(SFCReduxIsLoading as any);
