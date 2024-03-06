import React from "react";
import "./movie.scss";
const MovieHeader = () => {
  return (
    <div>
      <div className="movie_header">
        <h1>Списки</h1>
        <ul>
          <li>
            <a href="/">Ожидаемые</a>
          </li>
          <li>
            <a href="/">Календарь</a>
          </li>
          <li>
            <a href="/">Бокс-офис</a>
          </li>
          <li>
            <a href="/">Индекс сериалов</a>
          </li>
          <li>
            <a href="/">Награды</a>
          </li>
          <li>
            <a href="/">Навигатор</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieHeader;
