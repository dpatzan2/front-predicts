import React from "react";
import { NavbarComponent } from "../../../components/navbar/NavbarComponent";
import { PhasesComponent } from "../../../components/phases/PhasesComponent";
import "../sass/StartPageParticipants.scss";

export const StartPageParticipants = () => {
  return (
    <>
      <NavbarComponent />
      <div className="start__rooms__container__principal">
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <div class="container text-center">
                <div class="row">
                  <div class="col-sm-4 col-12">
                    <PhasesComponent />
                  </div>
                  <div class="col-sm-4 col-12">
                  <PhasesComponent />
                  </div>
                  <div class="col-sm-4 col-12">
                  <PhasesComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
