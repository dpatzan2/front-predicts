import axios from "axios"

export const register = async (inputs) => {
    const url = `http://localhost:3000/api/crearUsuario`
    return axios.post(url, inputs, {withCredentials: true})
}