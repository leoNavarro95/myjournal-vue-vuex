// los getters sirven para obtener informacion del state, que ademas se puede procesar en los getters


// export const myGetter = ( state ) => {
//      return state.lo_que_necesite_del_state
// }


export const currentStatus = ( state ) => {
     return state.status
}

export const userName = ( state ) => {
     return state.user?.name || ''
}

