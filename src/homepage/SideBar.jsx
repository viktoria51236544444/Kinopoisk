import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublicIcon from "@mui/icons-material/Public";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { Link } from "react-router-dom";
import "./sidebar-header.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar_menu">
        <hr />
        <Link to={"/"} style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <HomeIcon style={{ borderBottom: "3px solid red" }} />
            Главная
          </li>
        </Link>
        <Link to={"/onlineCinema"} style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <PlayArrowIcon />
            Онлайн-кинотеатр
          </li>
        </Link>
        <Link to={"/moviesList"} style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <CropLandscapeIcon />
            Фильмы
          </li>
        </Link>
        <Link to={"/sport"} style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <PublicIcon />
            Спорт
          </li>
        </Link>
        <Link to={"/kids"} style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <ChildCareIcon />
            Дети
          </li>
        </Link>
        <Link to={"/favorite"} style={{ textDecorationLine: "none" }}>
          <li className="sidebar__link">
            <FavoriteIcon />
            Моё
          </li>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
