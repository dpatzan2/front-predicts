import React, { useState } from "react";
import { LoadingMatches } from "../../components/LoadignComponent/LoadingMatches/LoadingMatches";
import { PrincipalPageMatchs } from "../../components/matchs/PrincipalPageMatchs";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./sass/PrincipalPageStyles.scss";
import { useForm } from "../../hooks/forms/useForm";
import { RoomsJoinde } from "../../components/RoomsJoined/RoomsJoinde";

export const PrincipalPageDashboard = () => {
  const { nameRoom, roomCode, onInputChange } = useForm({
    nameRoom: "",
    roomCode: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [join, setJoin] = useState(false);

  const handleCloseJoin = () => setJoin(false);
  const handleShowJoin = () => setJoin(true);
  return (
    
    <div className="inicio__container__principal">
      <NavbarComponent />
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-10 col-12">
            <div className="principal__create__join__rooms">
              <div className="container text-center">
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <button
                      className="principal__buttons__join__create create__principal__button"
                      onClick={handleShow}
                    >
                      Create a room
                    </button>
                  </div>
                  <div class="col-sm-6 col-12">
                    <button
                      className="principal__buttons__join__create join__principal__button"
                      onClick={handleShowJoin}
                    >
                      Join a room
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container__rooms__joinned">
              <RoomsJoinde />
            </div>
          </div>
          <div className="col-sm-2 col-12 principal__matchs__recent">
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
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={join} onHide={handleCloseJoin}>
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
                id="roomCode"
                className="form-control"
                name="roomCode"
                value={roomCode}
                onChange={onInputChange}
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseJoin}>
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
