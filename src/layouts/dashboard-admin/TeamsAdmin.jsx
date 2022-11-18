import React, { useState } from "react";
import { useEffect } from "react";
import { AdminNavbar } from "../../components/adminNavbar/AdminNavbar";
import { AdminCardTeams } from "../../components/adminteams/AdminCardTeams";
import { LoadingComponent } from "../../components/LoadignComponent/LoadingComponent";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { useForm } from "../../hooks/forms/useForm";
import { useTeams } from "../../hooks/Teams/useTeams";
import { ModalAddTeamAdmin } from "../../utils/Modals/ModalAddTeamAdmin/ModalAddTeamAdmin";
import stylesTeams from "./styles.module.scss";

export const TeamsAdmin = () => {
  const { name, onInputChange, onResetForm } = useForm({
    name:'',
  });
  
  const [show, setShow] = useState(false);
  const [fileList, setFileList] = useState([]);

  const {setTeams,upload, getTeams, isLoadingTeams, dataTeams} = useTeams();

  const handleSetTeam =async (e) => {
    e.preventDefault();
    const res = await upload( fileList);
    console.log(res)
    const inputs = {
      name: name,
      image: res
    }
    setTeams(inputs)
    setShow(false)
    setFileList([])
    getTeams()
  }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      getTeams()
    }, [])
    
  return (
    <>
      <NavbarComponent />
      <AdminNavbar />
      <div class="container text-center">
      <button type="button" class="btn btn-primary" onClick={() => handleShow()}>Add team</button>
        <div class="row">
          {isLoadingTeams ? (<LoadingComponent />) : (dataTeams.length === 0 ? <h1>teams not found</h1>: dataTeams.map((data) => (<AdminCardTeams data={data}/>)) )}
        </div>
      </div>
      <ModalAddTeamAdmin show={show} handleClose={handleClose} fileList={fileList} name={name} onInputChange={onInputChange} setFileList={setFileList} handleSetTeam={handleSetTeam} />
    </>
  );
};
