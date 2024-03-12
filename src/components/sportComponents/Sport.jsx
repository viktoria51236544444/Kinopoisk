import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sportComponents/sport.css";
import FooterSport from "./FooterSport";
import { useTheme } from "../../context/Background";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Music from "./assets/sport.mp3";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import PublicIcon from "@mui/icons-material/Public";
import LabelIcon from "@mui/icons-material/Label";
const Sport = () => {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzklEQVR4nO3ZwQrCMBAE0PULFVF60G/3YFHoTDb9AIVIFG/9gN0wDwqlpw6TQrI1E4nDgbMDpQKPlTxYRq21nZOsZOuXAy8HJsvIyeUfJHWYtZRjf/khwpRlOW2EeVfyatkUhQmqqJmgipoJqqiZoNRMVGomKjUT1VDNODBtHc7WjDOArTAVmG2QIHfLZIil5b+52NbHfrEsFCIKNRGFmohCTUShJqJwbTuCcDURhI/QRCX3Q/wMrcCcPkRXyWf6EP+l1YcETt76/fehyJg+gJwbqRF865kAAAAASUVORK5CYII=" />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev">
        я
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVR4nO3ZTUvDUBSE4eO/K11oaREJuLB/u2AruLozOblr05ZIP6BSg1vPCfNA9hneTe6Nmch01bZdOvDh5NZLmVlGHfnqwKEjh9Pj5LtlH9Fdhmws/Qigd2BuWTjw4sD+bsTBgcay0IgoVCIKlYhCJaJQiShcnx1BuEoE4RMp8Tx2KGpLWVkWwzA8OInUI34M4d2Qr458tGwcaBw4TmJMLeVtZExfyYVlUzUmqKoyQVWVCaqqTFAqE5XKRKUyUU2tzHrscOaZfob+OYbcWUa/xgCfltX5DoDE9VLj6b/fR8RuvgERCx6zV6ROewAAAABJRU5ErkJggg=="
          onClick={onClick}
        />
      </div>
    );
  };

  const sliderSettings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { theme, toggleTheme } = useTheme();
  //! Music
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  // ! Burger menu
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="sport__container"
      style={{
        background: theme === "light" ? "#fff" : "black",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <nav
        className="nav__sport"
        style={{
          display: "flex",
        }}
      >
        <div style={{ display: "flex", marginLeft: "6%", marginTop: "2%" }}>
          <div style={{ position: "relative", marginRight: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginRight: "6%",
                marginTop: "2%",
              }}
            >
              <button className="burger-button" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
            {isOpen && (
              <ul
                className="dropdown-menu"
                ref={menuRef}
                style={{
                  position: "absolute",
                  top: "285%",
                  left: "570%",
                  transform: "translate(-50%, -50%)",
                  minWidth: "200px",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(1, 1, 2, 0.76)",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  zIndex: "1",
                  listStyle: "none",
                }}
              >
                <li className="mainHover">
                  <NavLink
                    to={"/"}
                    onClick={handleMenuItemClick}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    <HomeIcon style={{ marginRight: "5px" }} />
                    Главная
                  </NavLink>
                </li>
                <li className="mainHover">
                  <NavLink
                    to={"/onlineCinema"}
                    onClick={handleMenuItemClick}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    <PlayArrowIcon style={{ marginRight: "5px" }} />
                    Онлайн-Кинотеатр
                  </NavLink>
                </li>
                <li className="mainHover">
                  <NavLink
                    to={"/moviesList"}
                    onClick={handleMenuItemClick}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    <CropLandscapeIcon style={{ marginRight: "5px" }} />
                    Фильмы
                  </NavLink>
                </li>
                <li className="mainHover">
                  <NavLink
                    to={"/moviesList"}
                    onClick={handleMenuItemClick}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    <MovieFilterIcon style={{ marginRight: "5px" }} />
                    Сериалы
                  </NavLink>
                </li>
                <li className="mainHover">
                  <NavLink
                    to={"/sport"}
                    onClick={handleMenuItemClick}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    <PublicIcon style={{ marginRight: "5px" }} />
                    Спорт
                  </NavLink>
                </li>
                <li className="mainHover">
                  <NavLink
                    to={"/oscarHome"}
                    href="#"
                    onClick={handleMenuItemClick}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    <LabelIcon style={{ marginRight: "5px" }} />
                    Оскар
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <div className="logo_nav">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTQuMjgzIDExLjIxN0M1NC4yODMgNS4zODkgNTYuOTMxLjYxIDYyLjI1NS42MWM1LjMyMyAwIDcuOTcxIDQuNzc4IDcuOTcxIDEwLjYwNiAwIDUuODI3LTIuNjQ4IDEwLjYwNS03Ljk3MSAxMC42MDUtNS4zMjQuMDA0LTcuOTcyLTQuNzc0LTcuOTcyLTEwLjYwNVptNy45NzIgNy41NzljMS44NyAwIDIuOTY1LTMuMzUyIDIuOTY1LTcuNTc2cy0xLjA5NS03LjU3NS0yLjk2NS03LjU3NWMtMS44NyAwLTIuOTY2IDMuMzUxLTIuOTY2IDcuNTc1LjAwNCA0LjIyNCAxLjA5NiA3LjU3NiAyLjk2NiA3LjU3NlpNLjAwMyAxLjAyaDQuMDN2Ni4yNjVsNC4yMDQtNi4yNjVoNC44OTRsLTcuMTEgNy4zNDNMMTkuMDAzIDEuMDJ2NC42NjJMNy4zNDcgMTAuMTEybDExLjY1NS0xLjEwNnY0LjQyOUw3LjM0OCAxMi4zM2wxMS42NTUgNC40Mjh2NC42NjJsLTEyLjk4LTcuMzQyIDcuMTEgNy4zNDJIOC4yMzJMNC4wMyAxNS4xNTV2Ni4yNjVIMFYxLjAyMWguMDAzWm0yMS44NzUgMGg0Ljc0N2wtLjcxOCAxMy4xOTggNS44OTktMTMuMTk4aDMuODg2djIwLjM5NmgtNC43NDhsLjcxOS0xMy4xOTgtNS45IDEzLjE5OGgtMy44ODZWMS4wMlptMjEuNDQgMEgzOC41N3YyMC4zOTZoNC43NDh2LTkuMzI0aDQuMDN2OS4zMjRoNC43NDhWMS4wMmgtNC43NDhWOC44OWgtNC4wM1YxLjAyWm00Mi43NjcgMEg3Mi40MTd2MjAuMzk2aDQuNzQ4VjQuMjI0aDQuMTcydjE3LjE5M2g0Ljc0OFYxLjAyWm0yLjE4OCAxMC4xOTZDODguMjczIDUuMzg5IDkwLjkyLjYxIDk2LjI0NC42MWM1LjMyNCAwIDcuOTcyIDQuNzc4IDcuOTcyIDEwLjYwNiAwIDUuODI3LTIuNjQ4IDEwLjYwNS03Ljk3MiAxMC42MDUtNS4zMjMgMC03Ljk3MS00Ljc3NC03Ljk3MS0xMC42MDVabTcuOTc1IDcuNTc5YzEuODcgMCAyLjk2NS0zLjM1MiAyLjk2NS03LjU3NnMtMS4wOTUtNy41NzUtMi45NjUtNy41NzVjLTEuODcgMC0yLjk2NiAzLjM1MS0yLjk2NiA3LjU3NXMxLjA5MiA3LjU3NiAyLjk2NiA3LjU3NlpNMTExLjE1NCAxLjAyaC00Ljc0OHYyMC4zOTZoMy44ODdsNS44OTktMTMuMTk4LS43MTkgMTMuMTk4aDQuNzQ4VjEuMDJoLTMuODg2bC01Ljg5OSAxMy4xOTguNzE4LTEzLjE5OFptMjEuNjk5IDEzLjE5OCA0LjUxOC42OTktLjE0My43Yy0uNzc4IDMuNzg5LTMuMTM2IDYuMjA0LTcuMDIyIDYuMjA0LTUuMzI0IDAtNy44MDEtNC43NzgtNy44MDEtMTAuNjA1IDAtNS44MjggMi40NzctMTAuNjA2IDcuODAxLTEwLjYwNiAzLjc0MyAwIDYuMTI5IDIuNDIgNi45NjYgNS45NzJsLjE0My42MTEtNC42MzIgMS4wNDljLS4zNDYtMi44MjUtMS4xOC00LjYwNS0yLjQ3Ny00LjYwNS0xLjg3IDAtMi43OTEgMy4zNTEtMi43OTEgNy41NzVzLjkyMSA3LjU3NiAyLjc5MSA3LjU3NmMxLjQxMi4wMDcgMi4zMDItMS44OSAyLjY0Ny00LjU3Wk0xNDQuMDc2IDEuMDJoLTQuNzQ1djIwLjM5Nmg0Ljc0OHYtOS4xOGwzLjU5NyA5LjE4SDE1M2wtNS43NTctMTAuNTE4IDUuNjE0LTkuODc4aC00Ljg5NWwtMy44ODYgOS4xNzlWMS4wMjFaIiBmaWxsPSIjZmZmIi8+PC9zdmc+"
              alt=""
            />
            <img
              className="nav__planet-animation"
              style={{
                backgroundColor: "gray",
                width: "23px",
                borderRadius: "90px",
                marginLeft: "8px",
              }}
              src="https://img.icons8.com/pastel-glyph/64/earth-planet.png"
              alt="earth-planet"
            />
          </div>
        </div>
        <div
          className="menus"
          style={{
            display: "flex",
            marginLeft: "20%",
            gap: "40px",
            fontSize: "18px",
            marginTop: "1%",
          }}
        >
          <p className="menua">Главное</p>
          <NavLink
            to={"/favorite"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <p className="menua">Мое</p>
          </NavLink>
          <p className="menua">Каналы</p>
        </div>
        <div
          style={{
            marginTop: "2.5%",
            marginLeft: "25%",
          }}
          className="theme"
        >
          <WbSunnyOutlinedIcon onClick={toggleTheme} />
        </div>
        <div
          className="audios"
          style={{ marginTop: "25px", marginLeft: "10px" }}
        >
          <IconButton color="secondary" onClick={togglePlay}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
          <audio
            id="audio"
            src={Music}
            autoPlay={isPlaying}
            onEnded={() => setIsPlaying(false)}
          ></audio>
        </div>
      </nav>
      <div>
        <div className="header__sport">
          <div>
            <p className="header__liga">Лиги и чемпионаты</p>
          </div>
          <div>
            <button className="header__sport-all">Все</button>
          </div>
        </div>
      </div>
      <div className="container__slider">
        <div className="matches__container">
          <a href="/your-target-page" class="matches__container-link">
            <p class="matches__container-p">
              Обзоры матчей Фонбет чемпионата КХЛ
            </p>
          </a>

          <Slider {...sliderSettings}>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/2439731/2a0000018e0605f1e1b3a74673c45795604d/375x234"
                alt="Match 1"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>3 марта</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор Кубка Гагарина
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018e007989a1ea8dc7b8d2b119f604/375x234"
                alt="Match 2"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>2 марта</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор Кубка Гагарина
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/212840/2a0000018dfbcf8cff358d1c941327405ab1/375x234"
                alt="Match 3"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>1 марта</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор Кубка Гагарина
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018df73795fde4734e7f069cdb01ad/375x234"
                alt="Match 4"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>29 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/239697/2a0000018df6391daac6381f443a76a1dda8/375x234"
                alt="Match 5"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Салават Юлаев - Трактор{" "}
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Плей-офф. Обзор матча №1
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/200035/2a0000018de791ffba674bb0cedb8c0503c9/375x234"
                alt="Match 6"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>26 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018ddc80ead4f2a83bd8f70d055dd7/375x234"
                alt="Match 7"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>24 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018dd3369a33045e6e34e7ae9db8e3/375x234"
                alt="Match 8"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>22 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/212840/2a0000018dc8e4cbaeaf0afd63827642c41e/375x234"
                alt="Match 9"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>20 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/2419418/2a0000018dc3556f139c18cf25cda6302b49/375x234"
                alt="Match 10"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>19 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/224348/2a0000018dbd5348a30db19cc3ddf9d0ab6a/375x234"
                alt="Match 11"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>18 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/223007/2a0000018db84bb2398aa6c0294f7c10a135/375x234"
                alt="Match 12"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>17 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/223007/2a0000018db067471b17b0f816e1f0e1f06b/375x234"
                alt="Match 13"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>15 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018da988364bf2e40dd57cde6e5f02/375x234"
                alt="Match 14"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>14 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018da485a75d6fed872fa29bbd4810/375x234"
                alt="Match 15"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>13 февраля</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Обзор игрового дня
              </p>
            </div>
          </Slider>
        </div>
        <div className="matches__container">
          <a href="/your-target-page" class="matches__container-link">
            <p class="matches__container-p">
              Спортивные видеоэссе от Кинопоиска
            </p>
          </a>

          <Slider {...sliderSettings}>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/239697/2a0000018df195ce811b3c0e2288382a6e2c/375x234"
                alt="Match 1"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Почему плей-офф - лучшее время в жизни?
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Спортивное видеоэссе
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1652588/2a0000018d2c23c2787028592b774e36e37d/375x234"
                alt="Match 2"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Почему все полюбили "Торпедо"?
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Спортивное видеоэссе
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1652588/2a0000018c3a3cd08caf9c5f9b8b12cfe379/375x234"
                alt="Match 3"
              />
              <p style={{ margin: "0", marginTop: "3%", fontSize: "15px" }}>
                Как Суперсерия СССР-Канада изменила хоккей
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Спортивное видеоэссе
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/224348/2a0000018bb3e3ddea3d193ecf1b875eb7f2/375x234"
                alt="Match 4"
              />
              <p style={{ margin: "0", marginTop: "3%", fontSize: "15.5px" }}>
                Какое место хоккей занимает в поп-культуре
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Спортивное видеоэссе
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018bb3e20349118b2b6a62af5d551b/375x234"
                alt="Match 5"
              />
              <p style={{ margin: "0", marginTop: "3%", fontSize: "14.5px" }}>
                Как устроен хоккей и почему его стоит смотреть?
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Спортивное видеоэссе
              </p>
            </div>
          </Slider>
        </div>
        <div className="matches__container">
          <a href="/your-target-page" class="matches__container-link">
            <p class="matches__container-p">"Спартак". Видео от клуба</p>
          </a>

          <Slider {...sliderSettings}>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/374297/2a0000018df0037ff00b414df6157a711a1e/375x234"
                alt="Match 1"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Новый нападающий клуба
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Интерьвью. Выпуск 3
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1531675/2a0000018dea53399e787b9b92a2a576f665/375x234"
                alt="Match 2"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>Легендарный тренер</p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Интерьвью. Выпуск 2
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1531675/2a0000018dea5a468d3efa6f3ef41ccd7e46/375x234"
                alt="Match 3"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Новый спортивный директор
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Интерьвью. Выпуск 1
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/239697/2a0000018df0012085211feaee1bb9f006b0/375x234"
                alt="Match 4"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Как работают врачи клуба
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                База. Выпуск 2
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1531675/2a0000018dea4ea1aa95a7d542b916ac1675/375x234"
                alt="Match 5"
              />
              <p style={{ margin: "0", marginTop: "3%", fontSize: "14.5px" }}>
                Гильермо Абаскаль про работу тренерского штаба
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                База. Выпуск 1
              </p>
            </div>
          </Slider>
        </div>
        <div className="matches__container">
          <a href="/your-target-page" class="matches__container-link">
            <p class="matches__container-p">
              Хороший гол: хоккей глазами судей
            </p>
          </a>

          <Slider {...sliderSettings}>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018e09eaf36b64357d1e88a278a8e9/375x234"
                alt="Match 1"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Спартак — Северсталь глазами судей
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 12
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1531675/2a0000018dd2545fc9059a30f545ed04b609/375x234"
                alt="Match 2"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Спартак — Торпедо глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 11
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018d8eb0d4663ae1e8cae89f1b1db6/375x234"
                alt="Match 3"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Локомотив — Сибирь глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 10
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/374297/2a0000018d748d15c9167bd1d0566c1164d3/375x234"
                alt="Match 4"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                ЦСКА — СКА глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 9
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1652588/2a0000018d5febd5b679cfaa1f2af8a3fe53/375x234"
                alt="Match 5"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Спартак — Торпедо глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 8
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/200035/2a0000018d3bb3a9b2123996ab954ac0f1ce/375x234"
                alt="Match 6"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Ак Барс — Спартак глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 7
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/2439731/2a0000018ce45001935de66b2ea4ab163187/375x234"
                alt="Match 7"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                СКА — Локомотив глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 6
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018c906285bbde22f46aa19d6670cb/375x234"
                alt="Match 8"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Авангард — Ак Барс глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 5
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1652588/2a0000018c62478790978362a0012db5550a/375x234"
                alt="Match 9"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Фонбет Матч Звезд КХЛ глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 4
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/212840/2a0000018c22532724fbf3b5a7b1e447b538/375x234"
                alt="Match 10"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                СКА — Динамо глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 3
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/1648503/2a0000018bf16da3e30dfe8a87cf5b124384/375x234"
                alt="Match 11"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Ак Барс — Салават Юлаев глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 2
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/239697/2a0000018bee51d53317203a8e12858a7702/375x234"
                alt="Match 12"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Торпедо — Салават Юлаев глазами арбитров
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хороший гол, выпуск 1
              </p>
            </div>
          </Slider>
        </div>
        <div className="matches__container">
          <a href="/your-target-page" class="matches__container-link">
            <p class="matches__container-p">
              Хоккейный борт: истории от звезд КХЛ
            </p>
          </a>

          <Slider {...sliderSettings}>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/212840/2a0000018ddc072eca8b129c0457372728a6/375x234"
                alt="Match 1"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Андрей Алтыбармакян, Лада
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хоккейный борт, выпуск 5
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/2419418/2a0000018d8575c934719495c69c98880c3e/375x234"
                alt="Match 2"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Андрей Миронов, Динамо Москва
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хоккейный борт, выпуск 4
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/374297/2a0000018d85747cc744c99828c6d5fbee95/375x234"
                alt="Match 3"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Дамир Шарипзянов, Авангард
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хоккейный борт, выпуск 3
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018d3202eb84e8aff5f2c2e32eeb9c/375x234"
                alt="Match 4"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Василий Атанасов, Торпедо
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хоккейный борт, выпуск 2
              </p>
            </div>
            <div className="b">
              <img
                src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018d3202578f07f208f74bc2da0a8d/375x234"
                alt="Match 5"
              />
              <p style={{ margin: "0", marginTop: "3%" }}>
                Николай Голдобин, Спартак
              </p>
              <p
                style={{
                  margin: "0",
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Хоккейный борт, выпуск 1
              </p>
            </div>
          </Slider>
        </div>
        <div className="matches__container2">
          <p class="matches__container-pp">Телеканалы</p>

          <div className="telekanal" style={{ display: "flex" }}>
            <div style={{ marginLeft: "5%", marginTop: "6%" }}>
              <span
                style={{
                  marginTop: "3%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                Удар
              </span>
              <h4 style={{ width: "250px", margin: "0", marginTop: "2%" }}>
                Бокс. RCC Boxing. Турнир 11.09.2022. З. Абдуллаев - Х. Страффон
              </h4>
              <span
                style={{
                  marginTop: "4%",
                  fontSize: "13px",
                  fontWeight: "100",
                }}
              >
                спорт
              </span>
            </div>
            <div>
              <img
                style={{ width: "60px", height: "60px", marginTop: "66%" }}
                src="https://avatars.mds.yandex.net/get-ott/239697/2a00000189b5bfe3b81321f3cabba901cbbc/112x112"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <FooterSport />
    </div>
  );
};

export default Sport;
