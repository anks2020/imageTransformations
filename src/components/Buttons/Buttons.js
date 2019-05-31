import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontWeight:"bold"
  },
  input: {
    display: 'none',
  },
});


function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div style={{textAlign: 'center',display:'inline-flex', marginTop:30 , marginLeft:props.mleft}}>
      
      <Button variant="contained" style={{background:props.color }}className={classes.button} onClick={props.onClick}>
       {props.label}
      </Button>
     
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);