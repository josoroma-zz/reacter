import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

import { IReduxHasMessage, IState } from './model';
import styles from './styles';

interface IReduxHasMessageWithWrappedProps extends IReduxHasMessage {
  classes: {
    root: string;
    snackbar: string;
    snackbarContentError: string;
    snackbarContentSuccess: string;
    snackbarContentTypographyError: string;
    snackbarContentTypographySuccess: string;
  };
}

class ReduxHasMessage extends React.PureComponent<IReduxHasMessageWithWrappedProps, IState> {
  public readonly state: IState = {
    open: true,
  };

  public handleClose = () => {
    this.setState({ open: false });
    this.props.reset();
  };

  public render() {
    const { classes, message, variant } = this.props;
    const { open } = this.state;

    const classContent = variant === 'success' ?
      classes.snackbarContentSuccess :
      classes.snackbarContentError;

    const classTypography = variant === 'success' ?
      classes.snackbarContentTypographySuccess :
      classes.snackbarContentTypographyError;

    return (
      <Snackbar
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'top',
        }}
        className={classes.snackbar}
        autoHideDuration={5000}
        key={uuid()}
        onClose={this.handleClose}
        open={open}
        TransitionComponent={Fade}
      >
        <SnackbarContent
          className={classContent}
          message={
            <Typography
              className={classTypography}
            >
              { message }
            </Typography>
          }
        />
      </Snackbar>
    )
  }
}

export default withStyles(styles)(ReduxHasMessage as any);
