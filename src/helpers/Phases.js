import axios from "axios"

export const GetPhases = () => {
    const url = `http://localhost:3000/api/getPhases`
    return axios.get(url, {withCredentials: true});
}