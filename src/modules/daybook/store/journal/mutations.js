// las mutaciones son SINCRONAS y son las encargadas de modificar el state


// export const myMutation = ( state ) => {
// se muta al state
// }


export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ] //se le anexan a las entries anteriores las nuevas

    state.isLoading = false
}

export const updateEntry = ( state, entryToUpdate ) => {

    // se busca el indice en el arreglo de las entries que coincida con el de la entrada a actualizar
    // const index = state.entries.map( e => e.id ) retorna un arreglo con todos los ids
    // indexOf( 'string' ) devuelve el indice del arreglo del primer elemento que haga match con 'string'
    
    const index = state.entries.map( e => e.id ).indexOf( entryToUpdate.id )

    state.entries[ index ] = entryToUpdate


}

export const addEntry = ( state, newEntry ) => {

    state.entries.unshift( newEntry )

    // state.entries = [ newEntry, ...state.entries ]

}

export const deleteEntry = ( state, id ) => {

    const index = state.entries.map( e => e.id ).indexOf( id )

    state.entries.splice( index, 1 )

}