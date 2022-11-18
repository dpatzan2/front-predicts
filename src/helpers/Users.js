import axios from "axios"

export const register = async (inputs) => {
    console.log('asd')
    const url = `https://drab-puce-puffer-sari.cyclic.app/api/crearUsuario`
    return axios.post(url, inputs,  {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: sessionStorage.getItem('USER_TOKEN'),
        },
      })
}