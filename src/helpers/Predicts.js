import axios from "axios"

export const SetPredict = (idRoom, idMatch, inputs) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/createPredict/${idMatch}/${idRoom}`
    return axios.post(url, inputs,  {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: sessionStorage.getItem('USER_TOKEN'),
        },
      })
}

export const GetPredicts = (idRoom) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/getPredicts/${idRoom}`
    return axios.get(url, idRoom, {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}})
}