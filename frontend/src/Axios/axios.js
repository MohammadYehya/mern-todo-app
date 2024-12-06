import axios from "axios"
const instance = axios.create({
    baseURL:"https://shayantestback.azurewebsites.net/api"
})
export default instance