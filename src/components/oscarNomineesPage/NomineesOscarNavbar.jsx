import React from "react";
import "./OscarNomineesPage.css";
import Telegram from "../oscarHomePage/assets/icons8-телеграмма-app.svg";
import Vk from "../oscarHomePage/assets/icons8-vk.svg";
import { NavLink } from "react-router-dom";
const NomineesOscarNavbar = () => {
  return (
    <div>
      <div className="navbarOscar__container dark" id="navbar">
        <div className="navbarOscar__container_logo">
          <img url="" />
        </div>
        <div className="navbarOscar_container_nav-title">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={"/oscarHome"}
          >
            <p className="one">Главная</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            className="two"
            to={"/oscarGame"}
          >
            <p className="two">Игра</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={"/oscarNominee"}
          >
            <p className="three">Номинанты</p>
          </NavLink>
        </div>
        <div className="navbarOscar__container_socialIcons">
          <div>
            <img src={Telegram} alt="" />
          </div>
          <div>
            <img src={Vk} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NomineesOscarNavbar;
