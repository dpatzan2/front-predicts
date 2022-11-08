import React from "react";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { PositionsComponent } from "../../components/PositionsComponents/PositionsComponent";
import { SecondNavbarComponent } from "../../components/SecondNavbarComponent/SecondNavbarComponent";

export const PositionTablesRoom = () => {
  return (
    <>
      <NavbarComponent />
      <SecondNavbarComponent />
      <div class="container text-center">
        <div class="row">
          <div class="col-12">
            <PositionsComponent />
          </div>
        </div>
      </div>
    </>
  );
};
