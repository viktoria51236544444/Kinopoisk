import React, { useState } from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./sidebar-header.css";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header_trailer">
          <div className="header_desc">
            <div className="overlay"></div>
            <div className="header-desciption-text">
              <img
                className="header_img_top"
                src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655383ed11ee265e6c52ae1a_658a9f49eec8b90f6584e22d/scale_1200"
                width={200}
                alt=""
              />
              <div className="movie_description">
                Алеша открывает портал в мир динозавров и древних людей. <br />
                Самая кассовая анимация в истории российского проката
              </div>
              <div className="movie_castTitle">
                <span className="movie_castTitle-span">В главных ролях: </span>
                Олег Куликович, Валерий Соловьев, Дмитрий <br />
                Быковский-Ромашов, Сергей Маковецкий
              </div>
              <div className="movie_directors">
                <span className="movie_castTitle-span">Режиссер: </span>
                Константин Феоктистов
              </div>
              <div className="movie_subtitle">
                Смотрите по подписке
                <div className="movie_subtitle-button-icon">
                  <button className="movie_button">
                    <PlayArrowIcon />
                    Смотреть
                  </button>
                  <IconButton
                    sx={{
                      backgroundColor: "black",
                      marginLeft: "7px",
                      color: "white",
                    }}
                  >
                    <BookmarkAddOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
