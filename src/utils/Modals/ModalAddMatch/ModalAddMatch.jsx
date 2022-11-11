import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UploadOutlined } from "@ant-design/icons";
import { Button as ButtonAt, Upload } from "antd";
import stylesModalPredict from "../ModalPredict/ModalPredicts.model.scss";
import "antd/dist/antd.css";

export const ModalAddMatch = ({ show, handleClose, fileList }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add match</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={stylesModalPredict.containerGeneralEnterMatches}>
          <div className={stylesModalPredict.containerMiddlePredicts}>
            <p>TEAM 1</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <br />
          </div>
          <div className={stylesModalPredict.containerMiddlePredicts}>
            <p>TEAM 1</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
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
