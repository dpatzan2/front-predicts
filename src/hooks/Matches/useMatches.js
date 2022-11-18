import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { CreateMatch, GetMatches, GetMatchId, PutMatch } from '../../helpers/Admin/Matches';

export const    useMatches = () => {
    const [dataMatches, setDataMatches] = useState([])
    const [isLoadingMatches, setIsLoadingMatches] = useState(true);
    const [dataEdit, setDataEditMatch] = useState(null)
    

    const createMatch = async (inputs) =>{
        await axios.post(`https://drab-puce-puffer-sari.cyclic.app/api/createMatch`, inputs, {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}}).then((res) => {
            console.log(res)
        }).catch((err) => {
            Swal.fire(
                'UPS!',
                err.response.data.message,
                'error'
              )
        });
    }

    const getMatches = async () => {
        try {
            const data = await GetMatches(localStorage.getItem('Phase'))
            console.log(data.data.matches)
            setDataMatches(data.data.matches)
            setIsLoadingMatches(false)
        } catch (err) {
            console.log(err)
        }
    }
    const setDataEdit = (data) => {
        setDataEditMatch(data)
    }

    const putMatchFinal = async (inputs, id) => {
        await axios.put(`https://drab-puce-puffer-sari.cyclic.app/api/goals/${id}/${localStorage.getItem('Phase')}`, inputs, {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}}).then((res) => {
            console.log(res)
        }).catch((err) => {
            Swal.fire(
                'UPS!',
                err.response.data.message,
                'error'
              )
        });
    }

    useEffect(() => {
        getMatches()
    }, [])
    

    return {
        createMatch,
        dataEdit,
        // getMatchId,
        dataMatches,
        // dataModaEnterPredict,
        isLoadingMatches,
        setDataEdit,
        putMatchFinal
    }
}
