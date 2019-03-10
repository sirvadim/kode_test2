import React, { Component } from 'react';
import { connect } from 'react-redux'
import { asyncGetCards } from '../../actions/loadSets'
class Cards extends Component {
    constructor( props ) {
        super(props)
        const param = new URLSearchParams(props.location.search)
        this.props.onGetCards(param.get('setCode'))
    }
    render() {
        console.log("cards screen")
        if(this.props.store.cards)
        return (
          <section className = "section">
            <div className = "container">
              <div className = "columns pkmn-gallery fade-in">
                <div className = "column">
                  {this.props.store.cards.map((card, index) =>
                      <img key={index} src={card.imageUrl} className = "hvr-grow" alt = {card.name}/>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
        return(
          <h1>Loading...</h1>
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