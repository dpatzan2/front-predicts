import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingComponent } from "../../components/LoadignComponent/LoadingComponent";
import { MatchPredictsRoom } from "../../components/match_start_room/MatchPredictsRoom";
import { MatchStartComponent } from "../../components/match_start_room/MatchStartComponent";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { SecondNavbarComponent } from "../../components/SecondNavbarComponent/SecondNavbarComponent";
import { usePredicts } from "../../hooks/Predicts/usePredicts";
import { ModalModifyPredict } from "../../utils/Modals/ModalPredictModify/ModalModifyPredict";

export const MatchesPredicts = () => {
  const navigate = useNavigate();

  const { getPredicts, dataEnterPredict,isLoadingPredicts } = usePredicts();

  const handleNavigate = () => {
    navigate(`/room/inicio/${localStorage.getItem("currentRoom")}`);
  };

  useEffect(() => {
    getPredicts();
  }, []);
  return (
    <>
      <NavbarComponent />
      <SecondNavbarComponent />
      <div className="matches__list__container__principal">
        <div class="container text-center">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => handleNavigate()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-return-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </button>
          <div class="row match__list__container__principal">
          {isLoadingPredicts ? (<LoadingComponent/>) : (dataEnterPredict.map((data ) => (<div className="col-sm-2 col-12">
                <MatchPredictsRoom data={data} />
            </div>)))}
            {/* <div class="col-sm-2 col-12">
              <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12">
              <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12">
              <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12">
              <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12">
              <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12">
              <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12">
              <MatchStartComponent />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
