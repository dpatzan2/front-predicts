import React, { useState } from "react";
import { AdminNavbar } from "../../components/adminNavbar/AdminNavbar";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { ModalAddTeamAdmin } from "../../utils/Modals/ModalAddTeamAdmin/ModalAddTeamAdmin";
import stylesTeams from "./styles.module.scss";

export const TeamsAdmin = () => {
    const [show, setShow] = useState(false);
    const [fileList, setFileList] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <NavbarComponent />
      <AdminNavbar />
      <div class="container text-center">
      <button type="button" class="btn btn-primary" onClick={() => handleShow()}>Primary</button>
        <div class="row">
          <div class="col-md-3 col-12">
            <div class="card" style={{ width: "18rem;" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12">
            <div class="card" style={{ width: "18rem;" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12">
            <div class="card" style={{ width: "18rem;" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAddTeamAdmin show={show} handleClose={handleClose} fileList={fileList} />
    </>
  );
};
