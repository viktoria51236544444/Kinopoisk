import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../auth_redux/componentsAuth/loginForm/LoginForm";
import RegistrationForm from "../auth_redux/componentsAuth/registration/RegistrationForm";
import ConfirmEmailCode2 from "../auth_redux/componentsAuth/confirmEmail/ConfirmEmailCode2";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/login", element: <LoginForm /> },
    { id: 2, link: "/register", element: <RegistrationForm /> },
    { id: 3, link: "/confirm-email", element: <ConfirmEmailCode2 /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} key={elem.id} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
