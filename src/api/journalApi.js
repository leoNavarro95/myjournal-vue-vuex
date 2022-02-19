

import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue-apps-678dd-default-rtdb.firebaseio.com',

})


// los intervetors siempre se van a ejecutar cada vez q se ejecute una peticion al backend
journalApi.interceptors.request.use( (config) => {

    //se le pasa el par'ametro auth con el valor del idToken, pues es requerido por Firebase para que solo pueden leer y escribir los usuarios autenticados
    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})

export default journalApi
