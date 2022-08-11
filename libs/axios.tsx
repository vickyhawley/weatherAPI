import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/3.0"
})

export default instance;