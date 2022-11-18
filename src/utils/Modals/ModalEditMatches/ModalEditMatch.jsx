import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UploadOutlined } from "@ant-design/icons";
import { Button as ButtonAt, Upload } from "antd";
import stylesModalPredict from "../ModalPredict/ModalPredicts.model.scss";
import "antd/dist/antd.css";

export const ModalEditMatch = ({ show, handleClose,goalTeam1,goalTeam2,onInputChange, dataEdit,putMatchFinal }) => {
  console.log(dataEdit)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit match</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={stylesModalPredict.containerGeneralEnterMatches}>
          <div className={stylesModalPredict.containerMiddlePredicts}>
            <p>{!dataEdit ? '' : dataEdit.idTeam1.name}</p>
            <p>GOALS</p>
            <input type="text" id="goalTeam1" name="goalTeam1" value={goalTeam1} onChange={onInputChange} />
            <br />
          </div>
          <div className={stylesModalPredict.containerMiddlePredicts}>
          <p>{!dataEdit ? '' : dataEdit.idTeam2.name}</p>
            <p>GOALS</p>
            <input type="text" id="goalTeam2" name="goalTeam2" value={goalTeam2} onChange={onInputChange} />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => putMatchFinal(dataEdit._id)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
