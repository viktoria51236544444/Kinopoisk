import React from "react";
import "./kids.scss";
import logo from "./assets/Kinopoisk_colored_logo_(2021-present).svg.png";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import village from "./assets/village.webp";
import maugli from "./assets/mauglu.webp";
import planeta from "./assets/planeta.webp";
import gagarin from "./assets/gagarin.webp";
import game from "./assets/game.webp";
import brain from "./assets/brain.webp";
import pobeg from "./assets/pobeg.webp";
import pobeg2 from "./assets/pobeg2.webp";
import inopresh from "./assets/inopresh.webp";
import grandad from "./assets/grandad.webp";
import richard from "./assets/richard.webp";
import fred from "./assets/fred.webp";

const Space = () => {
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
              <span>Выйти из раздела </span>
            </div>
          </div>
        </div>
        <div className="dog_conetnt">
          <h1 className="h1_dog">Космос и пришельцы</h1>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?episode=1&playingContentId=0b67d42aef684d87b8cd13daa5aeb40d&rt=4155a88009824db685e260a1a611d17c&season=1&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={village} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=4278317da5bbb7a2a3eff712bd9e263d&rt=4278317da5bbb7a2a3eff712bd9e263d&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={maugli} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=484f1b2645f91167a4b05f03e697f681&rt=484f1b2645f91167a4b05f03e697f681&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={planeta} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=44c3219e72cc72be9e1d30f1226f3c92&rt=44c3219e72cc72be9e1d30f1226f3c92&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={gagarin} width={320} height={200} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=4ef3905614c31be49ab58c524dd68c02&rt=4ef3905614c31be49ab58c524dd68c02&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={game} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=ecc4eeb77cfc42e7813a63663b55cb38&rt=ecc4eeb77cfc42e7813a63663b55cb38&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={brain} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=bc3149cbd400415ba8ea893cb3c34b1b&rt=bc3149cbd400415ba8ea893cb3c34b1b&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={pobeg} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=4206886a3df44e82ac5175f919f47a37&rt=4206886a3df44e82ac5175f919f47a37&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={pobeg2} width={320} height={200} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="movies_menu1">
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=ba3aa6fbf1dd416c841de1ecc3039522&rt=ba3aa6fbf1dd416c841de1ecc3039522&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={inopresh} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=4338d5970fe988de9f202704ecee8dbb&rt=4338d5970fe988de9f202704ecee8dbb&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={grandad} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?playingContentId=458abae5934000e2ab112b1e312fd4f8&rt=458abae5934000e2ab112b1e312fd4f8&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={richard} width={320} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/selection/798?episode=1&playingContentId=42e3f04e35c854eab5ebdd8affb10242&rt=48f3a5d20e175803b2d119d820133f24&season=1&selectionWindowId=home&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={fred} width={320} height={200} alt="" />
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

export default Space;
