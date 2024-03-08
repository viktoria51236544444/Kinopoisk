import React from "react";
import { Route, Routes } from "react-router-dom";
import OscarPage from "../pages/OscarPage";
import OscarGamePage from "../pages/OscarGamePage";
import OscarNomineesPage from "../pages/OscarNomineesPage";
import LoginForm from "../auth_redux/componentsAuth/loginForm/LoginForm";
import RegistrationForm from "../auth_redux/componentsAuth/registration/RegistrationForm";
import MainPage from "../pages/MainPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/oscarHome" element={<OscarPage />} />
      <Route path="/oscarGame" element={<OscarGamePage />} />
      <Route path="/oscarNominee" element={<OscarNomineesPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default MainRoutes;
