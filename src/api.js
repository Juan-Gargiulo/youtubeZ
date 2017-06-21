import axios from 'axios'


//TODO ver como setear el token al iniciar la app en el componente app

const API_ROOT = "https://www.googleapis.com/youtube/v3"

//config general del api
const config = {
    method: null,
    headers: {
        'Accept': 'application/json'
    },
    params: null
}

const videos = {
    search: (query, token) => {

        config.method = 'GET'
        config.params = { 
            'part': 'snippet', 
            'q': query, 
            'maxResults': 50
        }
        config.headers.Authorization = `Bearer ${token}`
        console.log(config)
        return axios.get(`${API_ROOT}/search`,config)
            .then( res => res.data.items )
            .catch( (err) => console.log(err) )
    }
}

export default {
    videos,
    setToken: oToken.setToken
}