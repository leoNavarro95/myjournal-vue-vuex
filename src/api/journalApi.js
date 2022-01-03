

import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue-apps-678dd-default-rtdb.firebaseio.com',

})

export default journalApi
