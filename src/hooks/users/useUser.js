import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { register } from '../../helpers/Users'

export const useUser = () => {
    const [err, setErr] = useState(null)
    const [isLoadingRegister, setIsLoadingRegister] = useState(false)

    const Register = async (inputs) => {
        setIsLoadingRegister(true)
        try {
            const data = await register(inputs);
            Swal.fire(
                'Good!',
                'User has been created',
                'success'
              )
              setIsLoadingRegister(false)
        } catch (err) {
            Swal.fire(
                'UPS!',
                err.response.data.message,
                'error'
              )
        }
    }

    return {
        Register
    }

}
