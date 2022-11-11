import React, { useEffect, useState } from "react";
import { PrincipalPageMatchs } from "../../components/matchs/PrincipalPageMatchs";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import stylesPrincipal from "./sass/PrincipalPageStyles.module.scss";
import { useForm } from "../../hooks/forms/useForm";
import { RoomsJoinde } from "../../components/RoomsJoined/RoomsJoinde";
import { useRooms } from "../../hooks/rooms/useRooms";
import { LoadingComponent } from "../../components/LoadignComponent/LoadingComponent";
import { useNavigate } from "react-router-dom";
import {LoadingMatches} from '../../components/LoadignComponent/LoadingMatches/LoadingMatches'

export const PrincipalPageDashboard = () => {

  const navigate = useNavigate();

  const {joinRoom, getRooms, dataRooms, isLoadingRooms, createRoom} = useRooms();
  const { nameRoom, roomId, onInputChange } = useForm({
    nameRoom: "",
    roomId: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [join, setJoin] = useState(false);

  const handleCloseJoin = () => {
    setJoin(false)
    joinRoom(roomId)
  };

  const handleCreateRoom = (e) => {
    e.preventDefault();
    createRoom({nameRoom:nameRoom});
    setShow(false)
  }

  const handleShowJoin = () => setJoin(true);
  const handleCloseJoin2 = () => setJoin(false);


  const handleGetDataRoom = (id, owner) => {
    console.log(id)
   localStorage.setItem('currentRoom', id);
   localStorage.setItem('OWNER', owner);
    navigate(`/room/inicio/${id}`)
  }

  useEffect(() => {
    getRooms();
  
  }, [])
  

  return (
    
    <div className={stylesPrincipal.inicio__container__principal}>
      <NavbarComponent />
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-10 col-12">
            <div className={stylesPrincipal.principal__create__join__rooms}>
              <div className="container text-center">
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <button
                      className={`${stylesPrincipal.principal__buttons__join__create} ${stylesPrincipal.create__principal__button}`}
                      onClick={handleShow}
                    >
                      Create a room
                    </button>
                  </div>
                  <div class="col-sm-6 col-12">
                    <button
                      className={`${stylesPrincipal.principal__buttons__join__create} ${stylesPrincipal.join__principal__button}`}
                      onClick={handleShowJoin}
                    >
                      Join a room
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={stylesPrincipal.container__rooms__joinned}>
              {isLoadingRooms ? <LoadingComponent /> : dataRooms.length === 0 ? <h1>Aun no entras en una sala</h1>:   <div className={stylesPrincipal.cardsLlist}>{ dataRooms.map((data) => (<div key={data._id} onClick={ () => handleGetDataRoom(data.idRoom._id, data.idRoom.dueñoSala)}><RoomsJoinde data={data}/></div>))}</div>}
            </div>
          </div>
          <div className={`col-sm-2 col-12 ${stylesPrincipal.principal__matchs__recent}`}>
            <LoadingMatches />
            <PrincipalPageMatchs />
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-3 align-items-center">
            <div className="col-4">
              <label for="inputPassword6" className="col-form-label">
                Room name
              </label>
            </div>
            <div className="col-8">
              <input
                type="text"
                id="nameRoom"
                className="form-control"
                name="nameRoom"
                value={nameRoom}
                onChange={onInputChange}
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateRoom}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={join} onHide={handleCloseJoin2}>
        <Modal.Header closeButton>
          <Modal.Title>Join a room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row g-3 align-items-center">
            <div className="col-4">
              <label for="inputPassword6" className="col-form-label">
                Room code
              </label>
            </div>
            <div className="col-8">
              <input
                type="text"
                id="roomId"
                className="form-control"
                name="roomId"
                value={roomId}
                onChange={onInputChange}
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseJoin2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseJoin}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
