import React from "react";
import stylesStart from  "../../layouts/dashboard-users/sass/StartPageParticipants.module.scss";

export const PhasesComponent = ({data}) => {
  return (
    <div className={`card text-center ${stylesStart.start__background__fases}`}>
      <div className="card-body ">
        <h5 className="card-title">{data.nombreFase}</h5>
        <a className="btn btn-primary">Go to matches</a>
      </div>
    </div>
  );
};
