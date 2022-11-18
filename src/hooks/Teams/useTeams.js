import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { GetTeams, SetFile, SetTeams } from '../../helpers/Admin/Teams'

export const useTeams = () => {
    const [dataTeams, setDataTeams] = useState(null)
    const [isLoadingTeams, setIsLoadingTeams] = useState(true)

    const upload = async (file) => {
      try {
        const formData = new FormData();
        formData.append("files", file[0]);
        const res = await SetFile(formData)
        console.log(res.data)
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };

    const setTeams = async (inputs) => {
      console.log(inputs)
       axios.post(`http://localhost:3001/api/addTeam`, inputs, {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}}).then((res) => {
        console.log(res)
        }).catch((err) => {
            console.log(err)
        });
    }

    const getTeams = async () => {
      try {
        const data = await GetTeams();
        console.log(data.data.teams)
        setDataTeams(data.data.teams)
        setIsLoadingTeams(false)
      } catch (err) {
        
      }
    }

      useEffect(() => {
      getTeams();
    }, [])
    

    return {
        setTeams,
        upload,
        getTeams,
        isLoadingTeams,
        dataTeams
    }
}
