// los getters sirven para obtener informacion del state, que ademas se puede procesar en los getters


// export const myGetter = ( state ) => {
//      return state.lo_que_necesite_del_state
// }

export const getEntriesByTerm = ( state ) => ( term = '' ) => {
    
    if ( term.length === 0 ) return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLowerCase()) )
}

export const getEntryById = ( state ) => ( id = '') => {
    
    // if( id.length === 0 ) return {}
    // return state.entries.filter( entry => entry.id.toLowerCase() === id.toLowerCase() )[0]

    const entry = state.entries.find( entry => entry.id === id ) 

    // find() si no encuetra una entrada con ese id retorna undefine
    if( !entry ) return 

    return { ...entry }

}
