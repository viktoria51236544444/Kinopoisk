import React, { useState } from "react";
import logo from "./assets/Kinopoisk_colored_logo_(2021-present).svg.png";
import SearchIcon from "@mui/icons-material/Search";
import avatar from "./assets/images.png";
import title from "./assets/960x540.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./kids.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import first from "./assets/640x360 (1).webp";
import second from "./assets/640x360 (2).webp";
import third from "./assets/640x360 (3).webp";
import fourth from "./assets/640x360 (4).webp";
import five from "./assets/640x360 (5).webp";
import six from "./assets/640x360 (6).webp";
import seven from "./assets/640x360 (7).webp";
import eight from "./assets/640x360 (8).webp";
import { NavLink } from "react-router-dom";
import ff from "./assets/640x360 (9).webp";
import ss from "./assets/640x360 (10).webp";
import tt from "./assets/640x360 (11).webp";
import fo from "./assets/640x360 (12).webp";
import fi from "./assets/640x360 (13).webp";
import si from "./assets/640x360 (14).webp";
import se from "./assets/640x360 (15).webp";
import ei from "./assets/640x360 (16).webp";
import dog from "./assets/dog.webp";
import anime from "./assets/anime.webp";
import travel from "./assets/travel.webp";
import space from "./assets/space.webp";
import Dog from "./Dog";
import dasha from "./assets/dasha.webp";
import vampire from "./assets/vampire.webp";
import vampire2 from "./assets/vampir2.webp";
import monstar from "./assets/monstar.webp";
import vampire3 from "./assets/vampire3.webp";
import pet from "./assets/pet.webp";
import koshey from "./assets/koshey.webp";
import korol from "./assets/korol.webp";
import monstr2 from "./assets/monstr2.webp";
import moris from "./assets/moris.webp";
import prince from "./assets/prince.webp";
import minions from "./assets/minions.webp";
import wol from "./assets/wol.webp";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import Music from "./assets/alladin.mp3";
const KidsNavbar = () => {
  const sliderSettings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  return (
    <div className="kids">
      <div>
        <div className="kids_navbar">
          <NavLink to={"/"}>
            <div className="navbar_logo">
              <img src={logo} width={250} alt="" />
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
              <NavLink style={{ textDecoration: "none" }} to={"/"}>
                <span>Выйти из раздела </span>
              </NavLink>
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
        <div className="content_section">
          <div className="bg_section">
            <div className="title_section">
              <h1>
                <img src={title} width={200} alt="" />
              </h1>
            </div>

            <p>
              Алеша открывает портал в мир динозавров <br />и древних людей.
              Самая кассовая анимация <br /> в истории российского проката
            </p>
            <div className="buttons">
              <NavLink
                style={{ textDecorationLine: "none" }}
                to={
                  "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=fc279332974d4eacba4b4e34278deab2&watch="
                }
                target="_blank"
              >
                <div className="watch_button">
                  <button className="watch_button" onClick={() => ""}>
                    <PlayArrowIcon />
                    Смотреть фильм
                  </button>
                </div>
              </NavLink>

              <NavLink
                style={{ textDecorationLine: "none" }}
                to={
                  "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&rt=4a5bdb6f5e0de68c9cbe83aa9c3b1350"
                }
                target="_blank"
              >
                <div>
                  <button className="watch_trailer">Трейлер</button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="movies_1">
        <div className="h1">
          <h1>Суперхиты</h1>
        </div>
        <div className="superhits">
          <Slider {...sliderSettings}>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=404b90e361a0c3fb8aa61e8003d905b3&rt=404b90e361a0c3fb8aa61e8003d905b3&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={first} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=68f1690e67774eca994197bccfe08927&rt=68f1690e67774eca994197bccfe08927&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={second} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=457d02b3596858888f563f72e3d12b4b&rt=457d02b3596858888f563f72e3d12b4b&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={third} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=4c6a36dc3167be1095d39d6999294868&rt=4c6a36dc3167be1095d39d6999294868&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={fourth} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=40e7fba4dd4e2c53801a0c56a25e6e10&rt=40e7fba4dd4e2c53801a0c56a25e6e10&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={five} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=aaadb998f8dc489d91226b7f400cb2e2&rt=aaadb998f8dc489d91226b7f400cb2e2&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={six} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=4a5bdb6f5e0de68c9cbe83aa9c3b1350&rt=4a5bdb6f5e0de68c9cbe83aa9c3b1350&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={seven} width={330} height={200} alt="" />
              </div>
            </NavLink>

            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=4b74026cc123ad7a836622b2fa34c940&rt=4b74026cc123ad7a836622b2fa34c940&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={eight} width={330} height={200} alt="" />
              </div>
            </NavLink>
          </Slider>
        </div>
      </div>

      <div className="movies_1">
        <div className="h1">
          <h1>Полнометражные мультфильмы</h1>
        </div>
        <div className="superhits">
          <Slider {...sliderSettings}>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=71e4d40348cf4ba7b0c5d54c3e0c3337&rt=71e4d40348cf4ba7b0c5d54c3e0c3337&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={ff} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=4fe9e6141d73cfeabe0d6ce5b1cb5b82&rt=4fe9e6141d73cfeabe0d6ce5b1cb5b82&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={ss} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=47ad5e506732d3859e93f5e7888b5d59&rt=47ad5e506732d3859e93f5e7888b5d59&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={tt} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=b8bd769f62724a39939ba7457cf24f9c&rt=b8bd769f62724a39939ba7457cf24f9c&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={fo} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=424e52a1633d480d94e107322f35c0f2&rt=424e52a1633d480d94e107322f35c0f2&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={fi} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=4278317da5bbb7a2a3eff712bd9e263d&rt=4278317da5bbb7a2a3eff712bd9e263d&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={si} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&episode=1&playingContentId=d7d289c913714b3d9aed102e2c164609&rt=c27eaf13759a432aa425393e2a001f23&season=1&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={se} width={330} height={200} alt="" />
              </div>
            </NavLink>

            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=4afcf98063aef4cd8e534230b275d1ce&rt=4afcf98063aef4cd8e534230b275d1ce&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={ei} width={330} height={200} alt="" />
              </div>
            </NavLink>
          </Slider>
        </div>
      </div>

      <div className="movies_1">
        <div className="h1">
          <h1>Коллекции</h1>
        </div>
        <div className="superhits">
          <Slider {...sliderSettings}>
            <NavLink to={"/kidsDog"}>
              <div className="aa">
                <img src={dog} width={330} height={300} alt="" />
              </div>
            </NavLink>
            <NavLink to={"/kidsAnime"}>
              <div className="aa">
                <img src={anime} width={330} height={300} alt="" />
              </div>
            </NavLink>
            <NavLink to={"/kidsAdventure"}>
              <div className="aa">
                <img src={travel} width={330} height={300} alt="" />
              </div>
            </NavLink>

            <NavLink to={"/kidsSpace"}>
              <div className="aa">
                <img src={space} width={300} height={300} alt="" />
              </div>
            </NavLink>
          </Slider>
        </div>
      </div>

      <div className="movies_1">
        <div className="h1">
          <h1>Пощекотать нервы</h1>
        </div>
        <div className="superhits">
          <Slider {...sliderSettings}>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/?playingContentId=4c05cadddbab247e83c4efd92244ae33&rt=4c05cadddbab247e83c4efd92244ae33&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={dasha} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/?playingContentId=4cab7fb4ce1ac05ebf5425a2e6b0e183&rt=4cab7fb4ce1ac05ebf5425a2e6b0e183&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={vampire} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/?playingContentId=4539f0e8c28de980b51657171fffe8e7&rt=4539f0e8c28de980b51657171fffe8e7&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={vampire2} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/?playingContentId=42ff6cc4d4e9a09da503ac6729d8f602&rt=42ff6cc4d4e9a09da503ac6729d8f602&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={monstar} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/?playingContentId=411a3a79177551b1a637f8de527a1325&rt=411a3a79177551b1a637f8de527a1325&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={vampire3} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/?episode=1&playingContentId=4caf5d4088d2c1fcbcd5455e2fc70019&rt=479e30c8a589ad1cb1ffac92770e1d3a&season=1&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={pet} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/?playingContentId=110ad8ae35934082879ed66eb8ee1e0d&rt=110ad8ae35934082879ed66eb8ee1e0d&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={koshey} width={330} height={200} alt="" />
              </div>
            </NavLink>
          </Slider>
        </div>
      </div>

      <div className="movies_1">
        <div className="h1">
          <h1>На английском с субтитрами</h1>
        </div>
        <div className="superhits">
          <Slider {...sliderSettings}>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/?playingContentId=4465c0429c22fd05919d77f55edd47bb&rt=4465c0429c22fd05919d77f55edd47bb&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={korol} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/454d7f2b37ab30fea4124a90435ee09b?playingContentId=493e123f8195d6b984dbbf9fc3eb2ebc&rt=493e123f8195d6b984dbbf9fc3eb2ebc&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={monstr2} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/454d7f2b37ab30fea4124a90435ee09b?playingContentId=81f8081579fe4e2b95356804f68a89f0&rt=81f8081579fe4e2b95356804f68a89f0&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={moris} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/454d7f2b37ab30fea4124a90435ee09b?playingContentId=454d7f2b37ab30fea4124a90435ee09b&rt=454d7f2b37ab30fea4124a90435ee09b&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={prince} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/454d7f2b37ab30fea4124a90435ee09b?playingContentId=493acf3f945bdfe1b602e54ab99e88a0&rt=493acf3f945bdfe1b602e54ab99e88a0&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={minions} width={330} height={200} alt="" />
              </div>
            </NavLink>
            <NavLink
              to={
                "https://hd.kinopoisk.ru/film/fc279332974d4eacba4b4e34278deab2?content_tab=overview&playingContentId=4278317da5bbb7a2a3eff712bd9e263d&rt=4278317da5bbb7a2a3eff712bd9e263d&watch="
              }
              target="_blank"
            >
              <div className="aa">
                <img src={wol} width={330} height={200} alt="" />
              </div>
            </NavLink>
          </Slider>
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

export default KidsNavbar;
