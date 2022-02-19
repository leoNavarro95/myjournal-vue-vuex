

import axios from 'axios';

const authApi = axios.create({
    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts', 
    params: {
        key: 'AIzaSyAPE2f-86a0z5zlD4NB5KlYH9UX_yC4Qik'
    }

})

export default authApi
