import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MatchStartComponent } from "../../../components/match_start_room/MatchStartComponent";
import { NavbarComponent } from "../../../components/navbar/NavbarComponent";
import { SecondNavbarComponent } from "../../../components/SecondNavbarComponent/SecondNavbarComponent";
import { useForm } from "../../../hooks/forms/useForm";
import { ModalPredict } from "../../../utils/Modals/ModalPredict/ModalPredict";
import stylesMatches from "../sass/MatchesListStyles.module.scss"

export const MatchesLis = () => {

  const { goalTeam1, goalTeam2, onInputChange, onResetForm } = useForm({
    goalTeam1:0,
    goalTeam2: 0,
  });

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/room/inicio/${localStorage.getItem('currentRoom')}`)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavbarComponent />
      <SecondNavbarComponent />
      <div className={stylesMatches.matches__list__container__principal}>
        <div className={`container text-center`}>
        <button type="button" class="btn btn-primary"  onClick={() => handleNavigate()} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg></button>
          <div className={`row ${stylesMatches.match__list__container__principal}`}>
            <div className="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12 " onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
          </div>
        </div>
      </div>
      <ModalPredict show={show} handleClose={handleClose} onInputChange={onInputChange} goalTeam1={goalTeam1} goalTeam2={goalTeam2} />
    </>
  );
};
