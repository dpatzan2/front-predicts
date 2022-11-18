import { useState } from "react"
import Swal from "sweetalert2";
import { CreateRoom, GetDataRoom, GetPoints, GetRooms, JoinRoom } from "../../helpers/Rooms";
import Cookies from 'universal-cookie';
import axios from "axios";




export const useRooms = () => {
    const [dataRooms, setDataRooms] = useState([]);
    const [errorRooms, setErrorRooms] = useState(null);
    const [dataRoomSelect, setDataRoomSelect] = useState([])
    const [isLoadingRooms, setIsLoadingRooms] = useState(true);
    const [isLoadingPoints, setIsLoadingPoints] = useState(true)
    const [dataPoints, setDataPoints] = useState(null)
    const cookies = new Cookies();

    const joinRoom = async (roomId) => {
        await axios.post(`https://drab-puce-puffer-sari.cyclic.app/api/joinRoom/${roomId}`, roomId, {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}}).then((res) => {
            Swal.fire(
                'Good job!',
                res.data.message,
                'success'
              )
              getRooms()
        }).catch((err) => {
            Swal.fire(
                'UPS!',
                err.response.data.message,
                'error'
              )
        });
    }

    const getRooms =  async () => {
        try {
            const data = await GetRooms();
            setIsLoadingRooms(false)
            setDataRooms(data.data.participaciones)
            
        } catch (err) {
            console.log(err)
            Swal.fire(
                'UPS!',
                err.response.data.message,
                'error'
              )
        }
    }

    const createRoom = async (inputs) => {
        await axios.post(`https://drab-puce-puffer-sari.cyclic.app/api/crearRoom`, inputs, {headers: {Authorization: sessionStorage.getItem('USER_TOKEN')}}).then((res) => {
            getRooms()
        }).catch((err) => {
            Swal.fire(
                'UPS!',
                err.response.data.message,
                'error'
              )
        });
    }

    const getPoinst = async (idRoom) => {
        try {
            const data = await GetPoints(idRoom);
            setIsLoadingPoints(false)
            setDataPoints(data.data.puntos)
            const dataRomm = await GetDataRoom(idRoom)
            console.log(dataRomm.data.participaciones.dueñoSala.usuario)
            setDataRoomSelect(dataRomm.data.participaciones)
        } catch (err) {
            console.log(err)
        }
    }


    return {
        dataRooms,
        errorRooms,
        isLoadingRooms,
        joinRoom,
        getRooms,
        createRoom,
        dataRoomSelect,
        getPoinst,
        isLoadingPoints,
        dataPoints
    }
}
