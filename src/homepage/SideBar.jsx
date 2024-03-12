import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import PublicIcon from "@mui/icons-material/Public";
import LabelIcon from "@mui/icons-material/Label";
import { Link } from "react-router-dom";
import "./sidebar-header.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar_menu">
        <hr />
        <Link style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <HomeIcon style={{ borderBottom: "3px solid red" }} />
            Главная
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <PlayArrowIcon />
            Онлайн-кинотеатр
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <CropLandscapeIcon />
            Фильмы
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <MovieFilterIcon /> Сериалы
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <PublicIcon />
            Спорт
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <LabelIcon />
            Билеты в кино
          </li>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
