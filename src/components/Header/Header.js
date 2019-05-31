import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/images/Adonmo_logo.png';
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    fontWeight:'bold'
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"#20212ba1"}}>
        <Toolbar>
        <img src={Logo} alt ="adonmo" height="70px" style={{top:"5px", position:"relative"}}/> 
          <Typography variant="h6" color="inherit" className={classes.grow}>
            ADONMO
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);