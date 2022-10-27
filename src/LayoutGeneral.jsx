import React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { LoginPage } from './layouts/login/LoginPage';
import { RegisterPage } from './layouts/register/RegisterPage';

export const LayoutGeneral = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registro" element={<RegisterPage />} />
    </Routes>
  )
}
