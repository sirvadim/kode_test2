import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sets from './Screens/Sets/Sets'
import pokemon from 'pokemontcgsdk'
class App extends Component {
  constructor() {
    super();
    this.sets = []
    this.state = {
      sets: this.sets
    }
    this.getSets()
  }

  getSets() {
    let getSets = pokemon.set.all()
    getSets.on('data', set => {
      this.sets.push({
        name: set.name,
        logo: set.logoUrl
      })
    })
    getSets.on('end', () => {
      this.setState({
        sets: this.sets
      })
    })
  }

  render() {
    console.log('start')
    console.log(this.state.sets)
    return (
      <div>
        {
          this.state.sets.map(set =>
            <Sets set={set}/>
          )
        }
      </div>
    );
  }
}

export default App;
