import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      nom_complet: ''
    };
  }

  handleNom = (e) => {
    this.setState({ nom: e.target.value });
  }

  handlePrenom = (e) => {
    this.setState({ prenom: e.target.value });
  }

  afficher = () => {
    this.setState({ nom_complet: this.state.nom + ' ' + this.state.prenom });
  }

  render() {
    return (
      <div>
        Nom: <input 
          type='text' 
          name='nom' 
          id='nom' 
          onChange={this.handleNom} 
        /> 
        <br />
        
        Prénom: <input 
          type='text' 
          name='prenom' 
          id='prenom' 
          onChange={this.handlePrenom} 
        /> 
        <br />
        
        <button onClick={this.afficher}>Afficher Nom Complet</button>
        
        <div>
          Nom Complet: {this.state.nom_complet}
        </div>
      </div>
    );
  }
}
