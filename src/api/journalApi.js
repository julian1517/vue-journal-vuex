import axios from "axios";



const journalApi = axios.create ({
    baseURL: 'https://vue-demos-c6975-default-rtdb.firebaseio.com'
})


export default journalApi