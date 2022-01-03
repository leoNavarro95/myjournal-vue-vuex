// las acciones son tareas asincronas que mueden llamar a una mutacion

import journalApi from "@/api/journalApi"


// export const myAction = async ( { commit } ) => {

// }


export const loadEntries = async ( { commit } ) => {
    const { data } = await journalApi.get('/entries.json')
    
    if( !data ){
        // there is not data
        return commit( 'setEntries', [] )
    }

    const entries = []

    for( let id of Object.keys( data ) ){
        entries.push({
            id,
            ...data[ id ]
        })
    }

    commit( 'setEntries', entries)
    
}

export const updateEntry = async ( { commit }, entryToUpdate )  => {
    
    const { date, text, picture } = entryToUpdate
    const dataToSave = {date, text, picture}
    
    const { data } = await journalApi.put( `/entries/${ entryToUpdate.id }.json`,  dataToSave)
    
    console.log( data );
    
    commit('updateEntry', { ...entryToUpdate}) //{ ...newEntry} con esto se evita pasar por referencia a newEntry, pues se desectructura al objeto  
}

export const createEntry = async ( { commit }, newEntry ) => {
    
    const { date, text, picture } = newEntry
    const dataToSave = {date, text, picture}

    const { data } = await journalApi.post( `/entries.json`,  dataToSave)
   
    // data = { "name": "-Ms3RY6jdpOq1NlGfScb" }      name tiene un ID generado automaticamente por fireBase
    const newID = data.name
    newEntry.id = newID

    commit( 'addEntry', newEntry )

    return newID

}


export const deleteEntry = async ( { commit }, id ) => {

    await journalApi.delete(`/entries/${ id }.json`)

    commit( 'deleteEntry', id )
}