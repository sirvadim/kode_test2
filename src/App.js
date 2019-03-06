import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sets from './Screens/Sets/Sets'
import pokemon from 'pokemontcgsdk'
class App extends Component {

  render() {
    pokemon.set.all()
      .on('data', card => {
        console.log(card.name)
      })
    return (
      <Sets></Sets>
    );
  }
}

export default App;
