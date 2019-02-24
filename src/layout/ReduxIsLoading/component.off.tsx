
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';

import { IReduxIsLoadingOff } from './model.off';
import stylesOff from './styles.off';

interface IReduxIsLoadingOffWithWrappedProps extends IReduxIsLoadingOff {
  classes: {
    root: string;
  };
}

class ReduxIsLoadingOff extends React.PureComponent<IReduxIsLoadingOffWithWrappedProps> {
  public componentDidMount = () => {
    this.props.reduxStateIsLoadingOff();
  }

  public render() {
    const { classes } = this.props;

    return(
      <div
        className={classes.root}
      >
        off
      </div>
    )
  }
}

export default withStyles(stylesOff)(ReduxIsLoadingOff as any);
