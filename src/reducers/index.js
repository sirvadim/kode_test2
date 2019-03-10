export default function reducer (state = { sets:[], cards:[] }, action) {
    console.log('reducer', state, action)
    if (action.type === 'LOAD_SETS') {
        return { sets: action.sets };
    } else if (action.type === 'LOAD_CARDS') {
        return { cards: action.cards }
    }
    return state;
}