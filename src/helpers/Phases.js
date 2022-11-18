import axios from "axios"

export const GetPhases = () => {
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/getPhases`
    return axios.get(url,  {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: sessionStorage.getItem('USER_TOKEN'),
        },
      });
}