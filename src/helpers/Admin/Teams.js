import axios from "axios"

export const SetTeams = (input) => {
    const url = `http://localhost:3000/api/addTeam`
    return axios.post(url, input,{withCredentials: true})
}

export const SetFile = (formData) => {
    console.log(formData)
    const url = `http://localhost:3000/api/upload`
    return axios.post(url, formData);
}

export const GetTeams = () => {
    const url = `http://localhost:3000/api/teams`
    return axios.get(url, {withCredentials: true});
}