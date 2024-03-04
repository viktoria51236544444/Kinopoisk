import React from "react";
import logo from "./assets-homepage/Kinopoisk_white_color_logo_with_black_background_(2021-present).svg.png";
import player from "./assets-homepage/player.svg";
import filter from "./assets-homepage/filter.svg";
import magnifier from "./assets-homepage/magnifier.svg";
import bookmark from "./assets-homepage/bookmark.svg";

import "./navbar_oxana.css";

const Navbar = () => {
  return (
    <div className="navbar__main">
      <div className="navbar__logo">
        <img className="navbar__logo-kinopoisk" src={logo} alt="" />
      </div>
      <div className="navbar__links">
        <div className="navbar__link-cinema">
          <img className="navbar__playericon" src={player} alt="" />
          <p className="navbar__player-text">Онлайн-кинотеатр</p>
        </div>
        <div className="navbar__link-oscar">
          <img
            className="navbar__oscar-icon-white"
            src="https://avatars.mds.yandex.net/get-bunker/61205/8c9f6ee8aa3155e3fad799027d8c5fdd697c5f55/orig"
            alt=""
          />
          <img
            className="navbar__oscar-icon-grey"
            src="https://avatars.mds.yandex.net/get-bunker/60661/f1e8b5500c4808d22ef28d0102e8ac158155c247/orig"
            alt=""
          />
          <p className="navbar__oscar-text">Оскар-2024</p>
        </div>
      </div>
      <div className="navbar__search">
        <div navbar__search-container>
          <input type="search" />
          <img src={filter} alt="" />
          <img src={magnifier} alt="" />
        </div>
      </div>
      <div className="navbar__userblock">
        <img src={bookmark} alt="" />
        <button>Расширить подписку</button>
      </div>
    </div>
  );
};

export default Navbar;
