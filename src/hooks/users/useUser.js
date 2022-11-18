import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { register } from '../../helpers/Users'

export const useUser = () => {
    const [err, setErr] = useState(null)
    const [isLoadingRegister, setIsLoadingRegister] = useState(false)

    const Register = async (inputs) => {
        
        setIsLoadingRegister(true)
        await axios.post(`https://drab-puce-puffer-sari.cyclic.app/api/crearUsuario`, inputs, {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}}).then((res) => {
            Swal.fire(
                'Good!',
                'User has been created',
                'success'
              )
              setIsLoadingRegister(false)
        }).catch((err) => {
            Swal.fire(
                'UPS!',
                err.response.data.message,
                'error'
              )
        });
    }

    return {
        Register
    }

}
