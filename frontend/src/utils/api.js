import axios from 'axios'

export default axios.create({
    baseURL: 'https://todo-list-gustavo.herokuapp.com',
    validateStatus: (status) => {
        return true
    }
})