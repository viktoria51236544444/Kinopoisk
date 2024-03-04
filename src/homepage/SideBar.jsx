import React from "react";
import "./aidana.scss";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import PublicIcon from "@mui/icons-material/Public";
import LabelIcon from "@mui/icons-material/Label";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar_menu">
        <div className="icons"></div>
        <Link style={{ textDecorationLine: "none" }}>
          <li className="main">
            <HomeIcon />
            Главная
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <PlayArrowIcon />
            Онлайн-кинотеатр
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <CropLandscapeIcon />
            Фильмы
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <MovieFilterIcon /> Сериалы
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <PublicIcon />
            Спорт
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <LabelIcon />
            Билеты в кино
          </li>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
