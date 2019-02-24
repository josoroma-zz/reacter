
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';

import { ReduxIsLoading } from '../../layout';

import{ IContentContainer } from './model';
import styles from './styles';

interface ISFCContentContainerWithWrappedProps extends IContentContainer {
  classes: {
    paper: string;
    root: string;
  };
}

const SFCContentContainer: React.SFC<ISFCContentContainerWithWrappedProps> = (props) => {
  const { classes, children, isLoading } = props;

  return (
    <div className={classes.root}>
      <ReduxIsLoading isLoading={isLoading} />
      <Paper className={classes.paper}>
        <Grid container={true}>
          <Grid item={true}>
            {
              children
            }
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(SFCContentContainer as any);
