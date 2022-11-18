import axios from "axios"
import { makeRequest } from "../axios/axios"

export const JoinRoom = async (roomId) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/joinRoom/${roomId}`
    return axios.post(url,  {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}})
}

export const GetRooms = async () => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/getRooms`
    return axios.get(url,  {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}})
}

export const CreateRoom = async (inputs) => {
    console.log(inputs, 'inputs')
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/crearRoom`
    return axios.post(`https://drab-puce-puffer-sari.cyclic.app/api/crearRoom`, inputs,  {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}})
    // return makeRequest.post(`/crearRoom`)
}

export const GetPoints = async (idRoom) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/getPoints/${idRoom}`
    console.log(url)
    return axios.get(url,  {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}})
}

export const GetDataRoom = async (id) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/getDataRoom/${id}`
    console.log(url)
    return axios.get(url,   {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}})
    
}