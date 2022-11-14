import axios from "axios"
import { makeRequest } from "../axios/axios"

export const JoinRoom = async (roomId) => {
    return makeRequest.post(`/joinRoom/${roomId}`)
}

export const GetRooms = async () => {
    const url = `http://localhost:3000/api/getRooms`
    return axios.get(url, {withCredentials: true})
}

export const CreateRoom = async (inputs) => {
    const url = `http://localhost:3000/api/crearRoom`
    return axios.post(url, inputs, {withCredentials: true})
    // return makeRequest.post(`/crearRoom`)
}

export const GetPoints = async (idRoom) => {
    const url = `http://localhost:3000/api/getPoints/${idRoom}`
    console.log(url)
    return axios.get(url, {withCredentials: true})
}

export const GetDataRoom = async (id) => {
    const url = `http://localhost:3000/api/getDataRoom/${id}`
    console.log(url)
    return axios.get(url, {withCredentials: true})
    
}