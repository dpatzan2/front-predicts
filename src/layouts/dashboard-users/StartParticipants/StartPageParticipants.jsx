import React from "react";
import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingComponent } from "../../../components/LoadignComponent/LoadingComponent";
import { NavbarComponent } from "../../../components/navbar/NavbarComponent";
import { PhasesComponent } from "../../../components/phases/PhasesComponent";
import { PositionsComponent } from "../../../components/PositionsComponents/PositionsComponent";
import { usePhases } from "../../../hooks/phases/usePhases";
import { useRooms } from "../../../hooks/rooms/useRooms";
import stylesStart from  "../sass/StartPageParticipants.module.scss";

export const StartPageParticipants = () => {
  const { getPhases, isLoadignPhases, dataPhases } = usePhases();
  const { getPoinst, isLoadingPoints, dataPoints, dataRoomSelect } = useRooms();
  const navigate = useNavigate();
  const { idRoom } = useParams();

  const navigateMatches = (id) => {
    localStorage.setItem('Phase', id)
    navigate('/room/matches/idRoom')
  }

  useEffect(() => {
    getPhases();
    getPoinst(idRoom);
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className={stylesStart.start__rooms__container__principal}>
        <div className="container text-center">
          {<h1>Room: {dataRoomSelect.nombreSala ?? ''}</h1>}
          <h2>Id union: {dataRoomSelect.idUnion ?? ''}</h2>
          <CopyToClipboard text={dataRoomSelect.idUnion ?? ''}>
          <button>Copy id</button>
        </CopyToClipboard>
          <div className="row">
            <div className="col-12">
              <div class="container text-center">
                <div class="row">
                  {isLoadignPhases ? (
                    <LoadingComponent />
                  ) : dataPhases.length === 0 ? (
                    <h1>Aun no fases registradas</h1>
                  ) : (
                    dataPhases.map((dataPhases) => (
                      <div key={dataPhases._id} class="col-sm-4 col-12" onClick={() => navigateMatches(dataPhases._id)}>
                        <PhasesComponent data={dataPhases} />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={stylesStart.start__rooms__container__principal}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <div class="container text-center">
                <div class="row">
                  {isLoadignPhases ? (
                    <LoadingComponent />
                  ) : (
                    dataPhases.map((data) => (
                      <>
                        {" "}
                        <h1>{data.nombreFase}</h1>{isLoadingPoints ? <LoadingComponent />: <PositionsComponent dataPoints={dataPoints} data={data}/>} {" "}
                      </>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
