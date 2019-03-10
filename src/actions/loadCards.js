import pokemon from 'pokemontcgsdk'

export const asyncGetCards = (code) => dispatch => {
    let cards = [];
    let getCards = pokemon.card.all({ setCode: code })
    getCards.on('data', card => cards.push(card))
    getCards.on('end', () => {
        return dispatch({ type: 'LOAD_CARDS', cards: cards, cardsLoaded: true });
    })
}