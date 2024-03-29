import React, { useEffect, useState } from "react";
import logo from "./assets-homepage/Kinopoisk_white_color_logo_with_black_background_(2021-present).svg.png";
import player from "./assets-homepage/player.svg";
import filter from "./assets-homepage/filter.svg";
import magnifier from "./assets-homepage/magnifier.svg";
import bookmark from "./assets-homepage/bookmark.svg";
import usericon from "./assets-homepage/usericon.jpeg";
import micpicture from "./assets-homepage/kisspng-voice-over-google-voice-microphone-sound-change-vo-mic-icon-5b4f9f51337303.1524658615319447852107.jpg";

import "./navbar_oxana.css";
import {
  Link,
  NavLink,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { updateToken } from "../auth_redux/helpersAuth/functions";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../auth_redux/store/actions";
import { useProduct } from "../context/ProductContextProvider";
import { ADMIN } from "../helpers/const";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { logoutSuccess } = useSelector(({ userSlice }) => userSlice);
  const user = useSelector(({ userSlice }) => userSlice.user);
  const [currentUser, setCurrentUser] = useState(null);
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

  const email = localStorage.getItem("email");

  useEffect(() => {
    setCurrentUser(email);
  }, [email]);

  // useEffect(() => {
  //   updateToken();
  // }, []);

  const [isActive, setIsActive] = useState(false);

  const { webkitSpeechRecognition } = window;
  const { categories, getCategories, fetchByParams, getProducts } =
    useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  // ! Voice search start
  function startDictation() {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      let recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function (e) {
        const transcript = e.results[0][0].transcript;

        document.getElementById("transcript").value = transcript.toLowerCase(); // Отображение текста речи в инпуте
        setSearch(transcript); // Обновление состояния search
        console.log(transcript);
        recognition.stop();
      };

      recognition.onerror = function (e) {
        recognition.stop();
      };
    }
  }

  const handleMicClick = (e) => {
    // e.preventDefault();
    startDictation();
    console.log("button clicked");
  };

  // ! Voice search finish

  useEffect(() => {
    setSearchParams({
      search: search,
    });
    getProducts();
  }, [search]);

  useEffect(() => {
    getCategories();
  }, []);

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
          to="/onlineCinema"
        >
          <div className="navbar__link-cinema">
            <img className="navbar__playericon" src={player} alt="" />
            <p className="navbar__player-text">Онлайн-кинотеатр</p>
          </div>
        </NavLink>

        <NavLink
          className="navbar__main-link"
          style={{ textDecoration: "none" }}
          to={"/oscarHome"}
        >
          <div className="navbar__link-oscar">
            {/* <img
              className="navbar__oscar-icon-white"
              src="https://avatars.mds.yandex.net/get-bunker/61205/8c9f6ee8aa3155e3fad799027d8c5fdd697c5f55/orig"
              alt=""
            /> */}
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
        <div
          className="navbar__search-container"
          onClick={(e) => setIsActive(!isActive)}
        >
          <input
            className="navbar__search-input"
            type="search"
            placeholder="Фильмы, сериалы, персоны"
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(e.target.value);
            }}
          />
          <img className="navbar__search-filtericon" src={filter} alt="" />
          <img className="navbar__search-mgnicon" src={magnifier} alt="" />
        </div>
      </div>
      <div className="navbar__userblock">
        {currentUser && currentUser === ADMIN && (
          <NavLink to={"/admin"}>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
              }}
              className="navbar__userblock-button"
            >
              Админ
            </button>
          </NavLink>
        )}

        <img
          className="navbar__userblock-usericon"
          onMouseEnter={toggleDropdown}
          src={usericon}
          alt=""
        />
        {dropdownVisible && (
          <div className="navbar__dropdown">
            {!currentUser && (
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
            {currentUser && (
              <button className="dropdown-button" onClick={logoutHandler}>
                Выйти
              </button>
            )}
            <div>
              {isActive && (
                <div className="for_search">
                  <input
                    id="transcript"
                    placeholder="Search..."
                    type="search"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      console.log(e.target.value);
                    }}
                  />
                  <button
                    style={{ marginBottom: "20px" }}
                    onClick={handleMicClick}
                  >
                    <img
                      style={{
                        width: "26px",
                        height: "26px",
                        backgroundColor: "none",
                        borderRadius: "40px",
                      }}
                      src={micpicture}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <NavLink
          style={{ textDecoration: "none", color: "white", fontSize: "15px" }}
          href="#"
          disabled
          onMouseEnter={toggleDropdown}
        >
          {currentUser ? currentUser : "Гость"}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
