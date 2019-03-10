import React, { Component } from 'react';
import { connect } from 'react-redux'
import { asyncGetCards } from '../../actions/loadSets'
class Cards extends Component {
  constructor( props ) {
    super(props);
    this.param = new URLSearchParams(this.props.location.search).get('setCode')
    this.props.onGetCards(this.param)
  }
  render() {
    if(!this.props.store.cardsLoaded)
      return(
        <h1>Loading...</h1>
      )

    if (!this.param || this.props.store.cards.length === 0)
      return(<h1>set's error</h1>)

    return (
      <div className = "container">
        <div className = "columns pkmn-gallery fade-in">
          <div className = "column">
            {this.props.store.cards.map((card, index) =>
                <img key={index} src={card.imageUrl} className = "hvr-grow" alt = {card.name}/>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onGetCards: ( code ) => {
      dispatch(asyncGetCards(code));
    }
  })
)(Cards);