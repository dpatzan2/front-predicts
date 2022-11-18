import axios from "axios"

export const SetTeams = (input) => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/addTeam`
    return axios.post(url, input, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: sessionStorage.getItem('USER_TOKEN'),
        },
      })
}

export const SetFile = (formData) => {
    console.log(formData)
    const url = `http://localhost:3001/api/upload`
    return axios.post(url, formData);
}

export const GetTeams = () => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/teams`
    return axios.get(url,{headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}});
}