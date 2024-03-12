import React from "react";
import "./watchSection.css";
import { NavLink } from "react-router-dom";

const WatchSection = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="contentContainer-watch">
        <h2 className="watch-heading">Продолжить просмотр</h2>
        <div className="watch-itemContainer">
          <div className="carouselItem">
            <img
              className="image-watch"
              src="//avatars.mds.yandex.net/get-ott/1531675/2a00000179f1e7f236020b1a4e7d3faf4bb0/448x292"
              loading="lazy"
              width="220"
              height="118"
              alt="Мастер и Маргарита"
            />
            <div className="watch-progressBar">
              <div
                className="watch-progressBarValue"
                style={{ width: "46%" }}
              ></div>
            </div>
            <div className="watch-duration">47 мин</div>
            <div className="watch-playButton"></div>

            <NavLink
              className="watch-filmLink"
              to="https://hd.kinopoisk.ru/film/4614d5da06a58aada1cb5122974002c4?season=1&amp;episode=1&amp;watch="
            >
              Мастер и Маргарита
            </NavLink>

            <div className="watch-info">1 серия</div>
          </div>
        </div>

        <div>
          <h2 className="watch-heading">Смотрят сейчас</h2>
        </div>
      </div>
    </div>
  );
};

export default WatchSection;
