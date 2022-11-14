import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UploadOutlined } from "@ant-design/icons";
import { Button as ButtonAt, Upload } from "antd";
import stylesModalPredict from "../ModalPredict/ModalPredicts.model.scss";
import "antd/dist/antd.css";

export const ModalAddTeamAdmin = ({ show, handleClose, fileList, name, onInputChange, setFileList, handleSetTeam }) => {
  console.log(fileList)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={stylesModalPredict.containerGeneralEnterMatches}>
          <div className={stylesModalPredict.containerMiddlePredicts}>
            <p>TEAM NAME</p>
            <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={name}
                onChange={onInputChange}
              />
              
            <Upload
              action="http://localhost:3001/"
              // multiple={true}
              listType="picture"
              className="upload-list-inline"
              maxCount="1"
              beforeUpload={(file) => {
                const newFile = [...fileList, file];
                setFileList(newFile);
                return false;
              }}
              onRemove={(file) => {
                for (let index = 0; index < fileList.length; index++) {
                  if (file.name === fileList[index].name) {
                    const filter = fileList.filter(
                      (file) => file.name !== fileList[index].name
                    );
                    //setFileList(filter);
                  }
                }
              }}
            >
              <Button size="large" danger icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
            <br />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSetTeam}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
