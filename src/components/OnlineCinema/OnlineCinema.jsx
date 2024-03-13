import React, { useEffect, useRef, useState } from "react";
import css from "../sportComponents/sport.css";
import { IconButton } from "@mui/material";
import { BookmarkAddOutlined, Pause, PlayArrow } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterSport from "../sportComponents/FooterSport";
import Music from "./assets/hungryGame.mp3";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import PublicIcon from "@mui/icons-material/Public";
import LabelIcon from "@mui/icons-material/Label";
const OnlineCinema = () => {
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
  const sliderSettings2 = {
    speed: 500,
    slidesToShow: 1,
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
  const sliderSettings3 = {
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
    setIsOpen(false); // Закрываем меню после выбора пункта
  };

  return (
    <div>
      <div>
        <img
          className="nav__iframe"
          src="https://s.afisha.ru/mediastorage/77/9a/e66df9bde71d488e836e37839a77.jpg"
        />
        <nav
          className="nav__sport2"
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

            <NavLink to={"/"}>
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
            </NavLink>
          </div>
          <div
            className="menuaa"
            style={{
              display: "flex",
              marginLeft: "20%",
              gap: "40px",
              fontSize: "18px",
              marginTop: "1%",
            }}
          >
            <p style={{ cursor: "pointer" }}>Главное</p>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to={"/favorite"}
            >
              <p>Мое</p>
            </NavLink>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://hd.kinopoisk.ru/channels"
              target="blank"
            >
              <p>Каналы</p>
            </a>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div
            className="audiou"
            style={{ marginTop: "22px", marginLeft: "30px" }}
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
        <div className="nav__description-container">
          <p className="nav__description-p">ГОЛОДНЫЕ ИГРЫ </p>
          <p className="nav__description-ballada">БАЛЛАДА</p>
          <p className="nav__description-ballada">О ЗМЕЯХ И ПЕВЧИХ ПТИЦАХ</p>
          <p className="nav__description7">
            7.2 2023, фантастика, боевикСША2 ч 30 мин 18+
          </p>
          <p className="nav__description7">
            Качество видео: 4K. Качество изображения: HDR. Качество звука: 5.1
            Rus, Eng, Kaz Rus, Kaz, Aze
          </p>
          <p className="nav__description2">
            Как амбициозный юноша стал кровавым тираном? Предыстория антигероя
            главной антиутопии современности
          </p>
        </div>
        <div style={{ width: "500px", marginLeft: "7%" }}>
          <div className="movie_subtitle-button-icon2">
            <button className="movie_button2">
              <PlayArrow />
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://hd.kinopoisk.ru/film/0252df11cc814ab08a2973faa072a96e?content_tab=overview&playingContentId=0252df11cc814ab08a2973faa072a96e&watch="
                target="_blank"
              >
                Смотреть фильм
              </a>
            </button>

            <button className="movie_button1">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="http://www.filmpro.ru/videos/829460"
                target="_blank"
              >
                Трейлер
              </a>
            </button>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to={"/favorite"}
            >
              <IconButton
                sx={{
                  backgroundColor: "black",
                  marginBottom: "-4%",
                  color: "white",
                }}
              >
                <BookmarkAddOutlined />
              </IconButton>
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <div style={{ backgroundColor: "black" }}>
          <div
            style={{ backgroundColor: "black" }}
            className="container__slider"
          >
            <div className="matches__container">
              <a href="/your-target-page" class="matches__container-link">
                <p style={{ marginTop: "3%" }} class="matches__container-p">
                  Сериалы на основе ваших интересов
                </p>
              </a>

              <Slider {...sliderSettings}>
                <div className="b">
                  <a
                    href="https://hd.kinopoisk.ru/film/4b802cce4a893fd5ace657d04afae7e8?episode=1&playingContentId=427958f66c155d61ad9279e8eca03c79&season=1&watch="
                    target="blank"
                  >
                    <img
                      src="https://fankino.ru/wp-content/uploads/2024/02/Screenshot-4-e1706806689591.png"
                      alt="Match 1"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/d2576156b8b74beaae9bad93d06c1258?episode=1&playingContentId=45f34e7ab3b34285829bd789a5fc5614&season=1&watch="
                    target="blank"
                  >
                    <img
                      src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_659a902f00a7d2583260413b_659a9087eb35721ecb7596cc/scale_1200"
                      alt="Match 2"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/4d928bfb40b34c009a547414584d3ac7?episode=1&playingContentId=830b1d58d12141d79d69c0f4f9d0314e&season=1&watch="
                    target="blank"
                  >
                    <img
                      src="https://ubsnet.ru/img/editor/780-6857be135259041e974418f0eb27a3f6.jpeg"
                      alt="Match 3"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/4a645f2ab54a6f4b8be169cfbaf3488b?episode=1&playingContentId=40e48f08d33ef343abee76e3056f75b8&season=1&watch="
                    target="blank"
                  >
                    <img
                      src="https://i.ytimg.com/vi/_V0fEBJ_e2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-ldgkRaYxsbFo4yKAEi_WAzvtog"
                      alt="Match 4"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/461be081d90c0510b7b27711a6d9381d?episode=11&playingContentId=46df1450d27aff8c80a12241e5a051ae&season=3&watch="
                    target="blank"
                  >
                    <img
                      src="https://i.pinimg.com/originals/27/a4/fb/27a4fb17eb66e64d848979c10f01a05d.png"
                      alt="Match 5"
                    />
                  </a>
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
          </div>
          <div
            style={{ backgroundColor: "black" }}
            className="container__slider"
          >
            <div className="matches__container" style={{ marginTop: "-7%" }}>
              <a href="/your-target-page" class="matches__container-link">
                <p class="matches__container-p">Фильмы для вас</p>
              </a>

              <Slider {...sliderSettings}>
                <div className="b">
                  <a
                    href="https://hd.kinopoisk.ru/film/41ba7241cc896c48b61b39bb2f552f04?playingContentId=41ba7241cc896c48b61b39bb2f552f04&watch="
                    target="blank"
                  >
                    <img
                      src="https://start.ru/images/unsafe/filters:quality(70)/302765054efc42ab82651975bbf4e02b/images-horizontal_poster_1x"
                      alt="Match 1"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/883eb9c0d386436eb8ce47cdbcdfb8a1?playingContentId=883eb9c0d386436eb8ce47cdbcdfb8a1&watch="
                    target="blank"
                  >
                    <img
                      src="https://tengrinews.kz/userdata/news/2022/news_460356/thumb_m/photo_387142.jpeg"
                      alt="Match 2"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/436bd5d28aa8fdfca558e95fb58993fe?playingContentId=436bd5d28aa8fdfca558e95fb58993fe&watch="
                    target="blank"
                  >
                    <img
                      src="https://images.kinorium.com/movie/poster/1656658/h280_50547197.jpg"
                      alt="Match 3"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/411a4de4ea461ddf943dec0dfd29afc1?playingContentId=411a4de4ea461ddf943dec0dfd29afc1&watch="
                    target="blank"
                  >
                    <img
                      src="https://cs14.pikabu.ru/post_img/big/2023/03/30/10/1680198395110695782.png"
                      alt="Match 4"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/48447f2cb2e1e9a9b98f283b7d7010a2?playingContentId=48447f2cb2e1e9a9b98f283b7d7010a2&watch="
                    target="blank"
                  >
                    <img
                      src="https://cdn2.red-media.ru/800x466-2023-01-RM-Vyshka-1280h720.jpg"
                      alt="Match 5"
                    />
                  </a>
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
            <div className="matches__container" style={{ marginTop: "-3%" }}>
              <p class="matches__container-p">Премьера "Холоп 2"</p>

              <Slider {...sliderSettings2}>
                <div className="b2">
                  <a
                    href="https://hd.kinopoisk.ru/film/008e0d83a7cd423a8cba5f0f082891ee?playingContentId=008e0d83a7cd423a8cba5f0f082891ee&watch="
                    target="blank"
                  >
                    <img
                      style={{ width: "1300px", height: "600px" }}
                      src="https://api.start.ru/images/unsafe/filters:quality(70)/c4e3d760d48c4351bb363ea97e307ddd/horizontal_poster_15x"
                      alt="Match 1"
                    />
                  </a>
                </div>
                <div className="b2">
                  <img
                    style={{ width: "1300px", height: "600px" }}
                    src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018dfac03541d9c11178978f4ee6df/1152x560"
                    alt="Match 2"
                  />
                </div>
                <div className="b2">
                  <img
                    style={{ width: "1300px", height: "600px" }}
                    src="https://avatars.mds.yandex.net/get-ott/2419418/2a0000018dfac084262aca636cdf7877d0cc/1152x560"
                    alt="Match 3"
                  />
                </div>
                <div className="b2">
                  <img
                    style={{ width: "1300px", height: "600px" }}
                    src="https://avatars.mds.yandex.net/get-ott/374297/2a0000018dfac0dbaff4e300571fa85671b9/1152x560"
                    alt="Match 4"
                  />
                </div>
                <div className="b2">
                  <img
                    style={{ width: "1300px", height: "600px" }}
                    src="https://avatars.mds.yandex.net/get-ott/212840/2a0000018e1c9136e50b87ac84ebb61677a9/1152x560"
                    alt="Match 5"
                  />
                </div>
              </Slider>
            </div>
            <div className="matches__container">
              <a href="/your-target-page" class="matches__container-link">
                <p class="matches__container-p">Фильмы для вас</p>
              </a>

              <Slider {...sliderSettings}>
                <div className="b">
                  <a
                    href="https://hd.kinopoisk.ru/film/008e0d83a7cd423a8cba5f0f082891ee?playingContentId=008e0d83a7cd423a8cba5f0f082891ee&watch="
                    target="blank"
                  >
                    <img
                      src="https://api.start.ru/images/unsafe/filters:quality(70)/c4e3d760d48c4351bb363ea97e307ddd/horizontal_poster_15x"
                      alt="Match 1"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/cc1d0d60705b4936bc83d19a2f4b358a?playingContentId=cc1d0d60705b4936bc83d19a2f4b358a&watch="
                    target="blank"
                  >
                    <img
                      src="https://start.ru/images/unsafe/filters:quality(70)/a11dad21844543aaa96f997d5c63ace0/horizontal_poster_1x"
                      alt="Match 2"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/77fa39050854401c995a6dadf26a7554?episode=1&playingContentId=8f8d85772c2c44f39e879e5abf1066ae&season=1&watch="
                    target="blank"
                  >
                    <img
                      src="https://i.ytimg.com/vi/p2dpWQdmoQ8/maxresdefault.jpg"
                      alt="Match 3"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/3e699420dcaa456bafd2b8d1e98a2a09?playingContentId=3e699420dcaa456bafd2b8d1e98a2a09&watch="
                    target="blank"
                  >
                    <img
                      src="https://static.okko.tv/images/v3/22461574?scale=1&quality=80"
                      alt="Match 4"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/b50bd0d8d6c14245b33afb4d05f1e8d3?episode=1&playingContentId=5e651fb8726348f695afe7cf80226a5a&season=1&watch="
                    target="blank"
                  >
                    <img
                      src="https://tv.rambler.ru/epg/pic/6510981?img-format=auto&img-1-resize=height:195,fit:max&img-2-filter=sharpen"
                      alt="Match 5"
                    />
                  </a>
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
            <div className="matches__container" style={{ marginTop: "-3%" }}>
              <a href="/your-target-page" class="matches__container-link">
                <p class="matches__container-p">Что смотреть в выходные</p>
              </a>

              <Slider {...sliderSettings}>
                <div className="b">
                  <a
                    href="https://hd.kinopoisk.ru/film/46020c592c198b0c95b955a396fb7b25?playingContentId=46020c592c198b0c95b955a396fb7b25&watch="
                    target="blank"
                  >
                    <img
                      src="https://i.ytimg.com/vi/wNohFm9A7S4/maxresdefault.jpg"
                      alt="Match 1"
                    />
                  </a>

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
                  <a
                    href="https://hd.kinopoisk.ru/film/47649cf90de74aca8da7eb5b17fc8a8a?playingContentId=47649cf90de74aca8da7eb5b17fc8a8a&watch="
                    target="blank"
                  >
                    <img
                      src="https://images.kinorium.com/movie/poster/1670490/h280_51624355.jpg"
                      alt="Match 2"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/49bd056ba7bf9ca5a4baa96d16d60563?episode=1&playingContentId=4e29cd50a1c04793af351b655d2e8dd1&season=1&watch="
                    target="blank"
                  >
                    <img
                      src="https://avatars.dzeninfra.ru/get-zen_doc/1781567/pub_64d4612993ac551f96f92a35_64d46252fe3a0d69187b76d1/scale_1200"
                      alt="Match 3"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/1b774c0023b744ea898dbcb28806cb43?playingContentId=1b774c0023b744ea898dbcb28806cb43&watch="
                    target="blank"
                  >
                    <img
                      src="https://i.ytimg.com/vi/Mp62TKZIZ8Q/maxresdefault.jpg"
                      alt="Match 4"
                    />
                  </a>
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
                  <a
                    href="https://hd.kinopoisk.ru/film/4829059b29ca1a6a9983efefdfd0d144?playingContentId=4829059b29ca1a6a9983efefdfd0d144&watch="
                    target="blank"
                  >
                    <img
                      src="https://i.ytimg.com/vi/4zor-jRYnFs/maxresdefault.jpg"
                      alt="Match 5"
                    />
                  </a>
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
            <div className="matches__container" style={{ marginTop: "-3%" }}>
              <a href="/your-target-page" class="matches__container-link">
                <p class="matches__container-p">
                  Снято специально для Кинопоиска
                </p>
              </a>

              <Slider {...sliderSettings3}>
                <div className="b6">
                  <a
                    href="https://hd.kinopoisk.ru/film/355fa1f85dd44ba59a6646669d4bf45e?episode=1&playingContentId=e99d260929754388927771be589203fe&season=1&watch="
                    target="blank"
                  >
                    <img
                      style={{ width: "350px" }}
                      src="https://avatars.mds.yandex.net/get-ott/374297/2a0000018dcc81f377321faf26a3147f1736/375x562"
                      alt="Match 1"
                    />
                  </a>
                </div>
                <div className="b6">
                  <a
                    href="https://hd.kinopoisk.ru/film/4f3c027cbce13606b74124a9d5b140c7?episode=1&playingContentId=4532da7a4cdbe9cbae74ff8e1c2f7f78&season=1&watch="
                    target="blank"
                  >
                    <img
                      style={{ width: "350px" }}
                      src="https://avatars.mds.yandex.net/get-ott/224348/2a00000187b868222003fd2e9c88daf7db2b/375x562"
                      alt="Match 2"
                    />
                  </a>
                </div>
                <div className="b6">
                  <a
                    href="https://hd.kinopoisk.ru/film/25ecf58c27bc47b6b5b6ee4b190dc36f?episode=1&playingContentId=e27a9df971be4e65ac2641de2059a3cd&season=1&watch="
                    target="blank"
                  >
                    <img
                      style={{ width: "350px" }}
                      src="https://avatars.mds.yandex.net/get-ott/1648503/2a0000018e123ed86000b0029957fafba2cd/375x562"
                      alt="Match 4"
                    />
                  </a>
                </div>
                <div className="b6">
                  <a
                    href="https://hd.kinopoisk.ru/film/5eaba7e14cb84d529463075d0ffa0a50?episode=1&playingContentId=2b7cef37bf364a779f598f56e7368ba9&season=1&watch="
                    target="blank"
                  >
                    <img
                      style={{ width: "350px" }}
                      src="https://avatars.mds.yandex.net/get-ott/1672343/2a000001892531e0c04437fd8fde07fe91e7/375x562"
                      alt="Match 5"
                    />
                  </a>
                </div>
                <div className="b6">
                  <a
                    href="https://hd.kinopoisk.ru/film/4b63db58ab27e92b90a457e533b00007?episode=1&playingContentId=4315082489d87677b21f7c83593fcb73&season=1&watch="
                    target="blank"
                  >
                    <img
                      style={{ width: "350px" }}
                      src="https://avatars.mds.yandex.net/get-ott/1648503/2a0000018e172569449a0c75e8c9eb06787e/375x562"
                      alt="Match 3"
                    />
                  </a>
                </div>

                <div className="b6">
                  <a
                    href="https://hd.kinopoisk.ru/film/c069f386d3e9461f9fa585ed2ec8dbea?episode=1&playingContentId=fcb26227f29a4503b4dcb78e2d5623fd&season=1&watch="
                    target="blank"
                  >
                    <img
                      style={{ width: "350px" }}
                      src="https://avatars.mds.yandex.net/get-ott/1534341/2a000001855a3dd592a2078dcf8e3cefe249/375x562"
                      alt="Match 5"
                    />
                  </a>
                </div>
                <div className="b6">
                  <a
                    href="https://hd.kinopoisk.ru/film/b0f31a689fe94006bfa910bb76921f24?episode=1&playingContentId=76913ff309154a5eb9801cc12d75d6e2&season=1&watch="
                    target="blank"
                  >
                    <img
                      style={{ width: "350px" }}
                      src="https://avatars.mds.yandex.net/get-ott/2439731/2a0000018cbcf9375872c557855074d3421e/375x562"
                      alt="Match 3"
                    />
                  </a>
                </div>
              </Slider>
            </div>
          </div>
          <FooterSport />
        </div>
      </div>
    </div>
  );
};

export default OnlineCinema;
