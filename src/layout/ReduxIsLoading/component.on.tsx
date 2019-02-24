
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';

import { IReduxIsLoadingOn } from './model.on';
import stylesOn from './styles.on';

interface IReduxIsLoadingOnWithWrappedProps extends IReduxIsLoadingOn {
  classes: {
    root: string;
  };
}

class ReduxIsLoadingOn extends React.PureComponent<IReduxIsLoadingOnWithWrappedProps> {
  public componentDidMount = () => {
    this.props.reduxStateIsLoadingOn();
  }

  public render() {
    const { classes } = this.props;

    return(
      <div
        className={classes.root}
      >
        on
      </div>
    )
  }
}

export default withStyles(stylesOn)(ReduxIsLoadingOn as any);
