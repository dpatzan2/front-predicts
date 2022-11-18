import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useMatches } from '../../../hooks/Matches/useMatches';
import stylesModalPredict from './ModalPredicts.model.scss'

export const ModalPredict = ({show, handleClose, onInputChange, goalTeam1, goalTeam2, dataModaEnterPredict, handleEnterPredict}) => {
  console.log(dataModaEnterPredict ?? 'ando cargando...')
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter prediction for this match</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={stylesModalPredict.containerGeneralEnterMatches}>
            <div className={stylesModalPredict.containerMiddlePredicts}>
              {!dataModaEnterPredict ? 'loading' : <><p>{dataModaEnterPredict.idTeam1.name}</p>
              <input
                type="number"
                id="goalTeam1"
                className="form-control"
                name="goalTeam1"
                value={goalTeam1}
                onChange={onInputChange}
              /></>}
            </div>
            <div className={stylesModalPredict.containerMiddlePredicts}>
            {!dataModaEnterPredict ? 'loading' : <><p>{dataModaEnterPredict.idTeam2.name}</p>
              <input
                type="number"
                id="goalTeam2"
                className="form-control"
                name="goalTeam2"
                value={goalTeam2}
                onChange={onInputChange}
              /></>}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEnterPredict()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
