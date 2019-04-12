import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Informations" />
          <TextField
            hintText="Raison sociale"
            floatingLabelText="Raison sociale"
            onChange={handleChange('raisonSociale')}
            defaultValue={values.raisonSociale}
          />
          <br />
           
          <TextField
            hintText="Nom Usuel"
            floatingLabelText="Nom Usuel"
            onChange={handleChange('nomUsuel')}
            defaultValue={values.nomUsuel}
          />
          <br />

          <TextField
            hintText="Identifiant marché principal"
            floatingLabelText="marché principal"
            onChange={handleChange('marchePrincipal')}
            defaultValue={values.marchePrincipal}
          />
          <br />
          <TextField
            hintText="Taille d'entreprise"
            floatingLabelText="Taille entreprise"
            onChange={handleChange('tailleEntreprise')}
            defaultValue={values.tailleEntreprise}
          />
          <br />

          
          <TextField
            hintText=" Denomination commerciale"
            floatingLabelText="Denomination commerciale"
            onChange={handleChange('denominationCommerciale')}
            defaultValue={values.denominationCommerciale}
          />
          <br />
          
          <TextField
            hintText=" Pays de nationalité"
            floatingLabelText="Pays de nationalité"
            onChange={handleChange('paysNationalite')}
            defaultValue={values.paysNationalite}
          />
          <br />
          <TextField
            hintText=" date de création"
            floatingLabelText="date de création"
            onChange={handleChange('dateCreation')}
            defaultValue={values.dateCreation}
          />
          <br />
         
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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

export default FormUserDetails;
