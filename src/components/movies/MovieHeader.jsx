import React from "react";
import "./movie.scss";
import { Link } from "react-router-dom";
const MovieHeader = () => {
  return (
    <div>
      <div className="movie_header">
        <h1>Списки</h1>
        <ul>
          <Link style={{ textDecoration: "none" }}>
            <li>Ожидаемые</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li>Календарь</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li>Бокс-офис</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li>Индекс сериалов</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li>Награды</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li>Навигатор</li>
          </Link>
        </ul>
      </div>
      <div className="container_categories"></div>
    </div>
  );
};

export default MovieHeader;
