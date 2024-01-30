import axios from "axios";

const apiClient =  axios.create({
    baseURL: 'https://my-json-server.typicode.com/heikkkk/real-world-vue',
    withCredentials: false,
    headers: {
        Accept: 'appliaction/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    },
}