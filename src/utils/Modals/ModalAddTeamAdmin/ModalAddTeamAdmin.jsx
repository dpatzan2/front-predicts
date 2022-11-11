import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UploadOutlined } from "@ant-design/icons";
import { Button as ButtonAt, Upload } from "antd";
import stylesModalPredict from "../ModalPredict/ModalPredicts.model.scss";
import "antd/dist/antd.css";

export const ModalAddTeamAdmin = ({ show, handleClose, fileList }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={stylesModalPredict.containerGeneralEnterMatches}>
          <div className={stylesModalPredict.containerMiddlePredicts}>
            <p>TEAM 1</p>
            <input type="text" />
            <Upload
              action="http://localhost:3001/"
              // multiple={true}
              listType="picture"
              className="upload-list-inline"
              beforeUpload={(file) => {
                const newFile = [...fileList, file];
                //setFileList(newFile);
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
          <div className={stylesModalPredict.containerMiddlePredicts}>
            <p>TEAM 1</p>
            <input type="text" />
            <Upload
              action="http://localhost:3001/"
              // multiple={true}
              listType="picture"
              className="upload-list-inline"
              beforeUpload={(file) => {
                const newFile = [...fileList, file];
                //setFileList(newFile);
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
