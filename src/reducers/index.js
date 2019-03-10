export default function reducer (state = { sets:[], cards:[] }, action) {
    console.log('reducer', state, action)
    if (action.type === 'LOAD_SETS') {
        return {
            ...state,
            sets: action.sets
        };
    } else if (action.type === 'LOAD_CARDS') {
        return {
            ...state,
            cards: action.cards,
            cardsLoaded: action.cardsLoaded
        }
    }
    return state;
}