import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles';

interface ISFCRoutesNavBarWithWrappedProps {
  classes: {
    navLink : string;
  };
}

const SFCRoutesNavBar: React.SFC<ISFCRoutesNavBarWithWrappedProps> = (props) => {
  const {classes} = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink
          className={classes.navLink}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={classes.navLink}
          to="/random"
        >
          Random
        </NavLink>
        <NavLink
          className={classes.navLink}
          to="/pictures"
        >
          Pictures
        </NavLink>
        <NavLink
          className={classes.navLink}
          to="/pictures/upload"
        >
          Upload
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(SFCRoutesNavBar as any);
