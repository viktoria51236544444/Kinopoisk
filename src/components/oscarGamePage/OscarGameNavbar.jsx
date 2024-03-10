import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Telegram from "../oscarHomePage/assets/icons8-телеграмма-app.svg";
import Vk from "../oscarHomePage/assets/icons8-vk.svg";
import Music from "../oscarHomePage/assets/Game_music.mp3";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
const OscarGameNavbar = () => {
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
    <div>
      <div className="navbarOscar__container dark" id="navbar">
        <div className="navbarOscar__container_logo">
          <img url="" />
        </div>
        <div className="navbarOscar_container_nav-title">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={"/oscarHome"}
          >
            <p className="one">Главная</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            className="two"
            to={"/oscarGame"}
          >
            <p className="two">Игра</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={"/oscarNominee"}
          >
            <p className="three">Номинанты</p>
          </NavLink>
        </div>
        <div className="navbarOscar__container_socialIcons">
          <div>
            <img src={Telegram} alt="" />
          </div>
          <div>
            <img src={Vk} alt="" />
          </div>
        </div>
        <div style={{ marginTop: "-4px", marginLeft: "10px" }}>
          <IconButton color="primary" onClick={togglePlay}>
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
  );
};

export default OscarGameNavbar;
