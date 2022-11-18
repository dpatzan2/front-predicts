import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminNavbar } from '../../components/adminNavbar/AdminNavbar';
import { LoadingComponent } from '../../components/LoadignComponent/LoadingComponent';
import { MatchStartComponent } from '../../components/match_start_room/MatchStartComponent';
import { NavbarComponent } from '../../components/navbar/NavbarComponent'
import { useForm } from '../../hooks/forms/useForm';
import { useMatches } from '../../hooks/Matches/useMatches';
import { useTeams } from '../../hooks/Teams/useTeams';
import { ModalAddMatch } from '../../utils/Modals/ModalAddMatch/ModalAddMatch';
import { ModalEditMatch } from '../../utils/Modals/ModalEditMatches/ModalEditMatch';
import stylesMatches from "../dashboard-users/sass/MatchesListStyles.module.scss"

export const MatchesAdmin = () => {
    const [show, setShow] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [fileList, setFileList] = useState([]);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
    };
    const {createMatch, dataMatches, isLoadingMatches, dataEdit, setDataEdit, putMatchFinal} = useMatches()
    const handleCloseModalEdit = () => setShowModalEdit(false);
    const handleShowModalEdit = (data) => {
      setDataEdit(data)
      setShowModalEdit(true);
    }

  const { getTeams, isLoadingTeams, dataTeams} = useTeams();



    const {goalTeam1,goalTeam2, team1, team2, date, onInputChange, onResetForm } = useForm({
      team1:'',
      team2: '',
      date: new Date(),
      goalTeam1: 0,
      goalTeam2: 0
    });

    const handleCreateMatch = () => {
      const inputs = {
        idTeam1: team1,
        idTeam2: team2,
        idFase: localStorage.getItem('Phase'),
        date: date
      }
      createMatch(inputs)
      setShow(false)
    }

    const finishMatch = (id) =>{
      const inputs = {
        goalTeam1: goalTeam1,
        goalTeam2: goalTeam2
      }
      putMatchFinal(inputs, id)
      setShowModalEdit(false)
    }

  

  return (
    <>
        <NavbarComponent />
        <AdminNavbar />
        <div className={stylesMatches.matches__list__container__principal}>
        <div className={`container text-center`}>
        <button type="button" class="btn btn-primary" onClick={() => handleShow()}>Primary</button>
          <div className={`row ${stylesMatches.match__list__container__principal}`}>
            {isLoadingMatches ? (<LoadingComponent/>) : (dataMatches.map((data ) => (<div className="col-sm-2 col-12" onClick={() =>handleShowModalEdit(data)}>
                <MatchStartComponent data={data} />
            </div>)))}
            
          </div>
        </div>
      </div>
      <ModalAddMatch show={show} handleClose={handleClose} isLoadingTeams={isLoadingTeams} date={date} team1={team1} team2={team2} onInputChange={onInputChange} dataTeams={dataTeams} handleCreateMatch={handleCreateMatch}/>
      <ModalEditMatch show={showModalEdit} handleClose={handleCloseModalEdit} putMatchFinal={finishMatch} onInputChange={onInputChange} dataEdit={dataEdit} goalTeam1={goalTeam1} goalTeam2={goalTeam2} />
    </>
  )
}
