import axios from 'axios'

export default axios.create({
    baseURL: 'https://api-todo-app-dede.herokuapp.com',
    validateStatus: (status) => {
        return true
    }
})