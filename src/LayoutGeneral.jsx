import React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { LoginPage } from './layouts/login/LoginPage';

export const LayoutGeneral = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registro" element={<LoginPage />} />
    </Routes>
  )
}
