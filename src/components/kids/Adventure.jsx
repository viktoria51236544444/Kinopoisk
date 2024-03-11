import React, { useState } from "react";
import "./kids.scss";
import logo from "./assets/Kinopoisk_colored_logo_(2021-present).svg.png";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import nevski from "./assets/nevski.webp";
import uaga from "./assets/uaga.webp";
import bogatyr from "./assets/bogatyr.webp";
import artek from "./assets/artek.webp";
import bogatyr2 from "./assets/bogatyr2.webp";
import karli from "./assets/karli.webp";
import bogatyr3 from "./assets//bogatyr3.webp";
import kanilul from "./assets/kanikul.webp";
import hero from "./assets/hero.webp";
import buka from "./assets/buka.webp";
import pon from "./assets/pon.webp";
import wol from "./assets/wol.webp";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import Music from "./assets/hakuna.mp3";
const Adventure = () => {
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
          <h1 className="h1_dog">Время приключений</h1>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?episode=1&playingContentId=d1055157ad5b4a2885ccc1f9b744c1a3&rt=7a1b8dca41f24e479061f955bf6ba537&season=1&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={nevski} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?playingContentId=ecb1792b3f2445b083341f63a526ef20&rt=ecb1792b3f2445b083341f63a526ef20&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={uaga} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?playingContentId=48fc513c0fde2e588c402e07867d4bc8&rt=48fc513c0fde2e588c402e07867d4bc8&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={bogatyr} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?playingContentId=462672f7609260fbaadc67878e3d14a1&rt=462672f7609260fbaadc67878e3d14a1&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={artek} width={320} height={200} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?playingContentId=45d67fb9b6ba74b79223ef993aa44923&rt=45d67fb9b6ba74b79223ef993aa44923&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={bogatyr2} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?episode=1&playingContentId=03bc8efd32e64994a7d679834dbced65&rt=217179fc178d41c5950995363a7af0d5&season=1&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={karli} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?playingContentId=4879c094cc37513d8d9c818908291218&rt=4879c094cc37513d8d9c818908291218&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={bogatyr3} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?playingContentId=a87236309c754a89a2e92e7a14d1807e&rt=a87236309c754a89a2e92e7a14d1807e&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={kanilul} width={320} height={200} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?episode=1&playingContentId=d7d289c913714b3d9aed102e2c164609&rt=c27eaf13759a432aa425393e2a001f23&season=1&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={hero} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?playingContentId=43d3aa8db8031c08bc1a8974cb25c418&rt=43d3aa8db8031c08bc1a8974cb25c418&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={buka} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?playingContentId=4a46e9eef7e169c292e63e095fe3185f&rt=4a46e9eef7e169c292e63e095fe3185f&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={pon} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/820?playingContentId=440028c0b9218710b89f84a6e4f2667d&rt=440028c0b9218710b89f84a6e4f2667d&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={wol} width={320} height={200} alt="" />
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

export default Adventure;
