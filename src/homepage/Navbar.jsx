import React, { useEffect, useState } from "react";
import logo from "./assets-homepage/Kinopoisk_white_color_logo_with_black_background_(2021-present).svg.png";
import player from "./assets-homepage/player.svg";
import filter from "./assets-homepage/filter.svg";
import magnifier from "./assets-homepage/magnifier.svg";
import bookmark from "./assets-homepage/bookmark.svg";
import usericon from "./assets-homepage/usericon.jpeg";

import "./navbar_oxana.css";
import { NavLink, useNavigate } from "react-router-dom";
import { updateToken } from "../auth_redux/helpersAuth/functions";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const registerHandler = () => {
    // Обработчик для кнопки register
  };

  const loginHandler = () => {
    // Обработчик для кнопки login
  };

  const logoutHandler = () => {
    // Обработчик для кнопки logout
  };

  // useEffect(() => {
  //   updateToken();
  // }, []);

  return (
    <div className="navbar__main">
      <NavLink className="navbar__main-link" to="/">
        <div className="navbar__logo">
          <img className="navbar__logo-kinopoisk" src={logo} alt="" />
        </div>
      </NavLink>

      <div className="navbar__links">
        <NavLink
          style={{ textDecoration: "none" }}
          className="navbar__main-link"
          to="/"
        >
          <div className="navbar__link-cinema">
            <img className="navbar__playericon" src={player} alt="" />
            <p className="navbar__player-text">Онлайн-кинотеатр</p>
          </div>
        </NavLink>

        <NavLink
          className="navbar__main-link"
          style={{ textDecoration: "none" }}
          to="/"
        >
          <div className="navbar__link-oscar">
            <img
              className="navbar__oscar-icon-white"
              src="https://avatars.mds.yandex.net/get-bunker/61205/8c9f6ee8aa3155e3fad799027d8c5fdd697c5f55/orig"
              alt=""
            />
            <img
              className="navbar__oscar-icon-grey"
              src="https://avatars.mds.yandex.net/get-bunker/60661/f1e8b5500c4808d22ef28d0102e8ac158155c247/orig"
              alt=""
            />
            <p className="navbar__oscar-text">Оскар-2024</p>
          </div>
        </NavLink>
      </div>
      <div className="navbar__search">
        <div className="navbar__search-container">
          <input
            className="navbar__search-input"
            type="search"
            placeholder="Фильмы, сериалы, персоны"
          />
          <img className="navbar__search-filtericon" src={filter} alt="" />
          <img className="navbar__search-mgnicon" src={magnifier} alt="" />
        </div>
      </div>
      <div className="navbar__userblock">
        <img className="navbar__userblock-bmicon" src={bookmark} alt="" />
        <button className="navbar__userblock-button">Расширить подписку</button>
        <img
          className="navbar__userblock-usericon"
          onClick={toggleDropdown}
          src={usericon}
          alt=""
        />
        {dropdownVisible && (
          <div className="navbar__dropdown">
            <button onClick={registerHandler}>Register</button>
            <button onClick={loginHandler}>Login</button>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
