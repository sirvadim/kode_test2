import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Sets from './Screens/Sets/Sets'
import Cards from './Screens/Cards/Cards'
import { asyncGetSets } from './actions/loadSets'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className = "section">
          <div className = "set-gallery">
            <Switch>
              <Route path = "/sets" render={()=> this.props.store.sets.map((set, index) =>
                <Sets key={index} set={set}/>
              )}/>
              <Route exact path = "/cards" search = "?setCode=:code" component = {Cards}/>
              <Redirect from="/" exact to="/sets" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onGetSets: () => {
      dispatch(asyncGetSets());
    }
  })
)(App);
