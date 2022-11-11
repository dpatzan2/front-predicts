import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { MatchesLis } from "./layouts/dashboard-users/matches/MatchesLis";
import { PrincipalPageDashboard } from "./layouts/dashboard-users/PrincipalPageDashboard";
import { StartPageParticipants } from "./layouts/dashboard-users/StartParticipants/StartPageParticipants";
import { LoginPage } from "./layouts/login/LoginPage";
import { PositionTablesRoom } from "./layouts/PositionTables/PositionTablesRoom";
import { MatchesPredicts } from "./layouts/predicts/MatchesPredicts";
import { RegisterPage } from "./layouts/register/RegisterPage";
import { PublicRoutes } from "./router/PublicRoutes";
import { PrivateRoutes } from "./router/PrivateRoutes";
import { AdminRoutes } from "./router/AdminRoutes";
import { InitialPageAdmin } from "./layouts/dashboard-admin/InitialPageAdmin";
import { MatchesAdmin } from "./layouts/dashboard-admin/MatchesAdmin";
import { TeamsAdmin } from "./layouts/dashboard-admin/TeamsAdmin";

export const LayoutGeneral = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />}>
        <Route index  element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/room/*" element={<PrivateRoutes />}>
        <Route index element={<PrincipalPageDashboard />} />
        <Route path="inicio/:idRoom" element={<StartPageParticipants />} />
        <Route path="matches/:idRoom" element={<MatchesLis />} />
        <Route path="predicts/:idRoom" element={<MatchesPredicts />} />
        <Route path="positions/:idRoom" element={<PositionTablesRoom />} />
      </Route>
      <Route path="/admin/*" element={<AdminRoutes />}>
        <Route index  element={<InitialPageAdmin />}/>
        <Route path="matches/:idPhase" element={<MatchesAdmin />} />
        <Route path="teams/" element={<TeamsAdmin />} />
      </Route>
    </Routes>
  );
};
