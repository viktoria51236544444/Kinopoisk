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
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../auth_redux/store/actions";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { logoutSuccess } = useSelector(({ userSlice }) => userSlice);
  const user = useSelector(({ userSlice }) => userSlice.user);

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (logoutSuccess === "SUCCESS") {
      navigate("/");
    }
  }, [logoutSuccess]);

  // useEffect(() => {
  //   updateToken();
  // }, []);

  return (
    <div
      className="navbar__main"
      onMouseLeave={() => setDropdownVisible(false)}
    >
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
          onMouseEnter={toggleDropdown}
          src={usericon}
          alt=""
        />
        {dropdownVisible && (
          <div className="navbar__dropdown">
            {!user && (
              <>
                <button
                  className="dropdown-button"
                  onClick={() => navigate("/register")}
                >
                  Регистрация
                </button>
                <button className="dropdown-button" onClick={handleLogin}>
                  Логин
                </button>
              </>
            )}
            {user && (
              <button className="dropdown-button" onClick={logoutHandler}>
                Выйти
              </button>
            )}
          </div>
        )}

        <NavLink
          style={{ textDecoration: "none", color: "white", fontSize: "15px" }}
          href="#"
          disabled
          onMouseEnter={toggleDropdown}
        >
          {user ? user : "Гость"}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
