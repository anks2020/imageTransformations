import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});
class OutlinedTextFields extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
          };
        this.handleChange= this.handleChange.bind(this);
    }
  

  handleChange = (event)=>{
    this.setState({
      value: event.target.value,
    });
    this.props.valueChanged(event.target.value)
  };

  render() {
    const { classes } = this.props;

    return (
        <TextField
          id="tfield"
          className={classes.textField}
          type="text"
          name={this.props.name}
          margin="normal"
          variant="outlined"
          value={this.state.value}
          placeholder="( pixels )"
          onChange={(event)=>this.handleChange(event)}
        />
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);