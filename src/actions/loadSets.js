import pokemon from 'pokemontcgsdk'

export const asyncGetSets = () => dispatch => {
    let sets = [];
    let getSets = pokemon.set.all();
    getSets.on('data', set => {
        sets.push({
            code: set.code,
            name: set.name,
            logo: set.logoUrl,
            symbolUrl: set.symbolUrl,
            standardLegal: set.standardLegal,
            expandedLegal: set.expandedLegal,
            releaseDate: set.releaseDate
        })
    })
    getSets.on('end', () => {
        dispatch({ type: 'LOAD_SETS', sets: sets.reverse() });
    })
}