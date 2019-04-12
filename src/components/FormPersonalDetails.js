import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="adresses" />
          <TextField
            hintText="Pays"
            floatingLabelText="pays"
            onChange={handleChange('pays')}
            defaultValue={values.pays}
          />
          <br />
          <TextField
            hintText="ville"
            floatingLabelText="ville"
            onChange={handleChange('ville')}
            defaultValue={values.ville}
          />
          <br />
          <TextField
            hintText="adresse"
            floatingLabelText="adresse"
            onChange={handleChange('adresse')}
            defaultValue={values.adresse}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormPersonalDetails;
