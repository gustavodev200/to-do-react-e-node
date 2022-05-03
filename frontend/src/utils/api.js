import axios from 'axios'

export default axios.create({
    baseURL: 'https://to-do-list-api-01.herokuapp.com/',
    validateStatus: (status) => {
        return true
    }
})