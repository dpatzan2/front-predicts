import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UploadOutlined } from "@ant-design/icons";
import { Button as ButtonAt, Upload } from "antd";
import stylesModalPredict from "../ModalPredict/ModalPredicts.model.scss";
import "antd/dist/antd.css";

export const ModalEditMatch = ({ show, handleClose,date, team1, team2, onInputChange, dataTeams,isLoadingTeams }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit match</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={stylesModalPredict.containerGeneralEnterMatches}>
          <div className={stylesModalPredict.containerMiddlePredicts}>
            <p>TEAM 1</p>
            <select
              class="form-select"
              aria-label="Default select example"
              id="team1"
              name="team1"
              onChange={onInputChange}
            >
              <option selected>Open this select menu</option>
            {isLoadingTeams
                ? ""
                : dataTeams.map((data) => (
                    <option value={data._id}>{data.name}</option>
                  ))}
            </select>
            <p>GOALS</p>
            <input type="text" id="fname" name="fname" />
            <br />
          </div>
          <div className={stylesModalPredict.containerMiddlePredicts}>
            <p>TEAM 1</p>
            <select
              class="form-select"
              aria-label="Default select example"
              id="team2"
              name="team2"
              onChange={onInputChange}
            >
              <option selected>Open this select menu</option>
              {isLoadingTeams
                ? ""
                : dataTeams.map((data) => (
                    <option value={data._id}>{data.name}</option>
                  ))}
            </select>
            <p>GOALS</p>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className={stylesModalPredict.containerMiddlePredicts}>
            <p>Match Day</p>
          <input type="datetime-local" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" id="date" name="date" value={date} onChange={onInputChange} />
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
  );
};
