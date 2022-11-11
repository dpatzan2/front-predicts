import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AdminNavbar } from '../../components/adminNavbar/AdminNavbar';
import { MatchStartComponent } from '../../components/match_start_room/MatchStartComponent';
import { NavbarComponent } from '../../components/navbar/NavbarComponent'
import { ModalAddMatch } from '../../utils/Modals/ModalAddMatch/ModalAddMatch';
import { ModalEditMatch } from '../../utils/Modals/ModalEditMatches/ModalEditMatch';
import stylesMatches from "../dashboard-users/sass/MatchesListStyles.module.scss"

export const MatchesAdmin = () => {
    const [show, setShow] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [fileList, setFileList] = useState([]);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseModalEdit = () => setShowModalEdit(false);
    const handleShowModalEdit = () => setShowModalEdit(true);
  return (
    <>
        <NavbarComponent />
        <AdminNavbar />
        <div className={stylesMatches.matches__list__container__principal}>
        <div className={`container text-center`}>
        <button type="button" class="btn btn-primary" onClick={() => handleShow()}>Primary</button>
          <div className={`row ${stylesMatches.match__list__container__principal}`}>
            <div className="col-sm-2 col-12" onClick={() =>handleShowModalEdit()}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12 " onClick={() =>handleShowModalEdit()}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={() =>handleShowModalEdit()}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={() =>handleShowModalEdit()}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={() =>handleShowModalEdit()}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={() =>handleShowModalEdit()}>
                <MatchStartComponent />
            </div>
            <div className="col-sm-2 col-12" onClick={() =>handleShowModalEdit()}>
                <MatchStartComponent />
            </div>
          </div>
        </div>
      </div>
      <ModalAddMatch show={show} handleClose={handleClose} fileList={fileList} />
      <ModalEditMatch show={showModalEdit} handleClose={handleCloseModalEdit} fileList={fileList} />
    </>
  )
}
