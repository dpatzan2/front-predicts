import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import stylesModalPredict from '../ModalPredict/ModalPredicts.model.scss'

export const ModalModifyPredict = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify prediction for this match</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={stylesModalPredict.containerGeneralEnterMatches}>
            <div className={stylesModalPredict.containerMiddlePredicts}>
              <p>TEAM 1</p>
              <input type="number" />
            </div>
            <div className={stylesModalPredict.containerMiddlePredicts}>
              <p>TEAM 1</p>
              <input type="number" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
