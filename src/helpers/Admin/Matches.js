import axios from "axios"

export const CreateMatch = async (inputs) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/createMatch`
    return axios.post(url, inputs,  {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: sessionStorage.getItem('USER_TOKEN'),
        },
      })
} 

export const GetMatches = (id) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/getMatches/${id}`
    return axios.get(url,  {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: sessionStorage.getItem('USER_TOKEN'),
        },
      })
}

export const GetMatchId = (id) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/getMatchId/${id}`
    return axios.get(url,  {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: sessionStorage.getItem('USER_TOKEN'),
        },
      })
}

export const PutMatch = (inputs, id, phase) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/goals/${id}/${phase}`
    return axios.put(url, inputs,  {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: sessionStorage.getItem('USER_TOKEN'),
        },
      })
}