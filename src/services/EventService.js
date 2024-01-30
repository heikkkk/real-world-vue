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
    getEvents(perPage, page) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    },
}