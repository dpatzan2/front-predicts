import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { GetPredicts, SetPredict } from '../../helpers/Predicts'

export const usePredicts = () => {
    const [dataEnterPredict, setdataEnterPredict] = useState(null)
    const [isLoadingPredicts, setisLoadingPredicts] = useState(true)

    const setPredict = async (inputs, matchId) =>{
        await axios.post(`https://drab-puce-puffer-sari.cyclic.app/api/createPredict/${matchId}/${localStorage.getItem('currentRoom')}`, inputs, {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}}).then((res) => {
            Swal.fire(
                'Good job!',
                res.data.message,
                'success'
              )
        }).catch((err) => {
            Swal.fire(
                'UPS!',
                err.response.data.message,
                'error'
              )
        });
    }

    const getPredicts = async () => {
        console.log(sessionStorage.getItem('USER_TOKEN'))
        await axios.get(`https://drab-puce-puffer-sari.cyclic.app/api/getPredicts/${localStorage.getItem('currentRoom')}`, {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}}).then((res) => {
            setdataEnterPredict(res.data.predicts);
            setisLoadingPredicts(false)
        }).catch((err) => {
            console.log(err)
            Swal.fire(
                'UPS!',
                err.response.data.message,
                'error'
              )
        });
    }

  
    

    return {
        setPredict,
        getPredicts,
        dataEnterPredict,
        isLoadingPredicts
    }
}
