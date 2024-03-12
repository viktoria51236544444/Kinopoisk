import React, { useState } from "react";
import logo from "./assets/Kinopoisk_colored_logo_(2021-present).svg.png";
import SearchIcon from "@mui/icons-material/Search";
import avatar from "./assets/images.png";
import title from "./assets/960x540.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./kids.scss";
import wol from "./assets/wol.webp";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import Music from "./assets/alladin.mp3";
import { NavLink } from "react-router-dom";

const Chanel = () => {
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
  return (
    <div className="kids">
      <div>
        <div className="kids_navbar">
          <NavLink to={"/kids"}>
            <div className="navbar_logo">
              <img src={logo} width={200} alt="" />
            </div>
          </NavLink>
          <div className="kidsNav_menu">
            <ul className="kids_munu">
              <li>
                <a href="/kids">Главное</a>
              </li>
              <li>
                <a href="/">Моё</a>
              </li>
              <li>
                <a href="/chanelKids">Каналы</a>
              </li>
            </ul>
          </div>
          <div className="kids_avatar">
            <div className="ageRestriction">
              <span>12+</span>
            </div>
            <div className="log">
              <span>Выйти из раздела </span>
            </div>
            <div style={{ marginTop: "15px", marginLeft: "10px" }}>
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
          </div>
        </div>
        <div style={{ height: "30vh" }}>
          <h1 className="h1_dog">Каналы</h1>
        </div>
        <div className="footerKids">
          <p className="p1">Мы всегда готовы вам помочь.</p>
          <div className="ss">
            <p className="p2">
              © 2003–2024 Кинопоиск. 18+ <br />
              Федеральные каналы доступны для бесплатного просмотра
              круглосуточно <br /> HBO ® and related service marks are the
              property of Home Box Office, Inc <br />
              ООО «Кинопоиск», адрес местонахождения: 115035, Россия, г. Москва,
              ул. Садовническая, д. 82, стр. 2, пом. 9А01 <br />
              Адрес для обращений пользователей: kinopoisk@support.yandex.ru{" "}
              <br />
              Кинопоиск — крупнейший онлайн-кинотеатр в России по выручке, по
              результатам исследования TMT за первое полугодие 2023 г. <br />{" "}
              Результаты исследования: https://clck.ru/3633Tr Соглашение Правила
              рекомендаций Справка
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chanel;
