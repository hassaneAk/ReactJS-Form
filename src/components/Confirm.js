import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {raisonSociale, nomUsuel,  tailleEntreprise, denominationCommerciale, marchePrincipal, paysNationalite, dateCreation ,pays,ville,adresse,nom}
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="raisonSociale" secondaryText={raisonSociale} />
            <ListItem primaryText="nomUsuel" secondaryText={nomUsuel} />
            <ListItem primaryText="marchePrincipal" secondaryText={marchePrincipal} />
            <ListItem primaryText="tailleEntreprise" secondaryText={tailleEntreprise} />
            <ListItem primaryText="denominationCommerciale" secondaryText={denominationCommerciale} />
            <ListItem primaryText="paysNationalite" secondaryText={paysNationalite} />
            <ListItem primaryText="dateCreation" secondaryText={dateCreation} />
            <ListItem primaryText="pays" secondaryText={pays} />
            <ListItem primaryText="ville" secondaryText={ville} />
            <ListItem primaryText="adresse" secondaryText={adresse} />
            <ListItem primaryText="nom" secondaryText={nom} />
           
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
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

export default Confirm;
