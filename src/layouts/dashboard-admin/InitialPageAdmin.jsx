import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminNavbar } from "../../components/adminNavbar/AdminNavbar";
import { LoadingComponent } from "../../components/LoadignComponent/LoadingComponent";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { PhasesComponent } from "../../components/phases/PhasesComponent";
import { usePhases } from "../../hooks/phases/usePhases";
import { useRooms } from "../../hooks/rooms/useRooms";
import stylesStart from  "../dashboard-users/sass/StartPageParticipants.module.scss";

export const InitialPageAdmin = () => {
  const { getPhases, isLoadignPhases, dataPhases } = usePhases();
  const { getPoinst, isLoadingPoints, dataPoints } = useRooms();
  const navigate = useNavigate();
  const { idRoom } = useParams();

  const navigateMatches = (id) => {
    localStorage.setItem('Phase', id)
    navigate(`/admin/matches/${id}`)
  }

  useEffect(() => {
    getPhases();
    getPoinst(idRoom);
  }, []);

  return (
    <>
      <NavbarComponent />
        <AdminNavbar />
      <div className={stylesStart.start__rooms__container__principal}>
        <div className="container text-center">
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
    </>
  );
};
