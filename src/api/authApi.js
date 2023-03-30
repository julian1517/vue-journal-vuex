import axios from "axios";



const authApi = axios.create ({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDFM62XOm9wdr-iC1yB3Qw-vP_-n5PdaEw'
    }
})

//console.log( process.env.NODE_ENV) // TEST durante testing


export default authApi