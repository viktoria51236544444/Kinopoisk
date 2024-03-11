import React, { useState } from "react";
import "./kids.scss";
import logo from "./assets/Kinopoisk_colored_logo_(2021-present).svg.png";
import SearchIcon from "@mui/icons-material/Search";
import konek from "./assets/konek.webp";
import chidak from "./assets/chudak.webp";
import volk from "./assets/volk.webp";
import desert from "./assets/desert.webp";
import { NavLink } from "react-router-dom";
import vostok from "./assets/vostok.webp";
import vostok2 from "./assets/vostok2.webp";
import boba from "./assets/boba.webp";
import magik from "./assets/magik.webp";
import vostok3 from "./assets/vostok3.webp";
import lassy from "./assets/lassy.webp";
import patrik from "./assets/patrik.webp";
import school from "./assets/school.webp";
import lapa from "./assets/lapa.webp";
import vostok4 from "./assets/vostok4.webp";
import mydog from "./assets/mydog.webp";
import vertalet from "./assets/vertalet.webp";
import inopresh from "./assets/inopresh.webp";
import bel from "./assets/bel.webp";
import delfin from "./assets/delfin.webp";
import krokodile from "./assets/krokodile.webp";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import Music from "./assets/38.mp3";
const Dog = () => {
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
        <div className="dog_conetnt">
          <h1 className="h1_dog">Друг человека</h1>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=45432c22d2bfc82b915f99fcc28a1f1f&rt=45432c22d2bfc82b915f99fcc28a1f1f&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={konek} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=825d6ed2ba9e490fa5de72558cf53ae7&rt=825d6ed2ba9e490fa5de72558cf53ae7&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={chidak} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=440028c0b9218710b89f84a6e4f2667d&rt=440028c0b9218710b89f84a6e4f2667d&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={volk} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=4062031b53bfe399aa1dba105967d463&rt=4062031b53bfe399aa1dba105967d463&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={desert} width={320} height={200} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=425b5b16d0f8e7058afa471397a1e6e4&rt=425b5b16d0f8e7058afa471397a1e6e4&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={vostok} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=449988c9f3d0e15f947319b2eae045e5&rt=449988c9f3d0e15f947319b2eae045e5&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={vostok2} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=449ad63b8aa86fa3afb2ff6f1d65d695&rt=449ad63b8aa86fa3afb2ff6f1d65d695&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={boba} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=fc1aaddfd5e24568b6ef26b2d4d3bd14&rt=fc1aaddfd5e24568b6ef26b2d4d3bd14&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={magik} width={320} height={200} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=4e225e006f023d9c8af4bdda9c9bd8ff&rt=4e225e006f023d9c8af4bdda9c9bd8ff&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={vostok3} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=aad7269b9d43450bb26f60e0a9b72b81&rt=aad7269b9d43450bb26f60e0a9b72b81&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={lassy} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=4b4cd22069356a15b39a9dd63d08d966&rt=4b4cd22069356a15b39a9dd63d08d966&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={patrik} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=8c62e6a83f1f4f3498d0ae0e3e174bf0&rt=8c62e6a83f1f4f3498d0ae0e3e174bf0&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={school} width={320} height={200} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=773bb8564ddb428098766aa5399cb081&rt=773bb8564ddb428098766aa5399cb081&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={lapa} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=487aad14f8efffae8388d5397fc9e008&rt=487aad14f8efffae8388d5397fc9e008&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={vostok4} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=5eaa39c3873d47aabc9597abf520a672&rt=5eaa39c3873d47aabc9597abf520a672&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={mydog} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=484663e741db389282e798737bc877c2&rt=484663e741db389282e798737bc877c2&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={vertalet} width={320} height={200} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=ba3aa6fbf1dd416c841de1ecc3039522&rt=ba3aa6fbf1dd416c841de1ecc3039522&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={inopresh} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=477df8fc41654c6cb2b5f244864676b0&rt=477df8fc41654c6cb2b5f244864676b0&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={bel} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=4193a2317393d6f3ba1078f7f535668a&rt=4193a2317393d6f3ba1078f7f535668a&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={delfin} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/978?playingContentId=f0de8eb00efc4a42b0408b115b1b109a&rt=f0de8eb00efc4a42b0408b115b1b109a&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={krokodile} width={320} height={200} alt="" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footerKids">
        <p className="p1">Мы всегда готовы вам помочь.</p>
        <div className="ss">
          <p className="p2">
            © 2003–2024 Кинопоиск. 18+ <br />
            Федеральные каналы доступны для бесплатного просмотра круглосуточно{" "}
            <br /> HBO ® and related service marks are the property of Home Box
            Office, Inc <br />
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
  );
};

export default Dog;
