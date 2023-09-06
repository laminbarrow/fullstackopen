import axios from 'axios'

const baseURL = 'http://localhost:3002/persons'

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}
const create = newContact => {
    return axios.post(baseURL, newContact).then(response => response.data)
}

const update = (id, updatedObject) => {
    return axios.put(`${baseURL}/${id}`, updatedObject).then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseURL}/${id}`).then(response => response.data)
}


export default {getAll, create, update, remove}