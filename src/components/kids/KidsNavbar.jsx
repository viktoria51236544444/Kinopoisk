import React from "react";
import logo from "./assets/Kinopoisk_colored_logo_(2021-present).svg.png";
import SearchIcon from "@mui/icons-material/Search";
import avatar from "./assets/images.png";
import title from "./assets/960x540.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./kids.scss";

const KidsNavbar = () => {
  return (
    <div className="kids">
      <div>
        <div className="kids_navbar">
          <div className="navbar_logo">
            <img src={logo} width={200} alt="" />
          </div>
          <div className="kidsNav_menu">
            <ul className="kids_munu">
              <li>
                <a href="/">Главное</a>
              </li>
              <li>
                <a href="/">Моё</a>
              </li>
              <li>
                <a href="/">Каналы</a>
              </li>
            </ul>
            <div className="search">
              <SearchIcon sx={{ color: "white" }} />
            </div>
          </div>
          <div className="kids_avatar">
            <div className="ageRestriction">
              <span>12+</span>
            </div>
            <div className="log">
              {/* <div>
                <img src={avatar} width={30} alt="" />
              </div> */}
              <span>Выйти из раздела </span>
            </div>
          </div>
        </div>
        <div className="content_section">
          <div className="bg_section">
            {/* <div className="details_section">
            <ul>
              <li>
                <button className="about">О фильме</button>
              </li>
              <li>
                <button className="detail">Детали</button>
              </li>
            </ul>
          </div> */}
            <div className="title_section">
              <h1>
                <img src={title} width={200} alt="" />
              </h1>
            </div>
            {/* <p style={{ color: "white" }}>
              девятое место 2023, мультфильм, приключенияРоссия1 ч 25 мин6+
            </p> */}
            <p>
              Алеша открывает портал в мир динозавров <br />и древних людей.
              Самая кассовая анимация <br /> в истории российского проката
            </p>
            <div className="buttons">
              <div className="watch_button">
                <button className="watch_button">
                  <PlayArrowIcon />
                  Смотреть фильм
                </button>
              </div>
              <div>
                <button className="watch_trailer">Трейлер</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movies_1">
        <div>
          <h1 style={{ color: "white" }}>Суперхиты</h1>
        </div>
        <div className="superhits"></div>
      </div>
    </div>
  );
};

export default KidsNavbar;
