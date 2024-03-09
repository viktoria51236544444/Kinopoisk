import React from "react";

const BestMoviesSlide = ({ movies }) => {
  return (
    <div>
      <h3 style={{ color: "#c5a05a", textAlign: "start", marginLeft: "90px" }}>
        Лучшие фильмы
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {movies.map((movie, index) => (
          <div
            key={index}
            style={{
              width: "calc(17% - 10px)",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease", // добавляем анимацию при изменении transform
            }}
            className="movie-container"
          >
            <div
              className="allMovies__container_movies-swiper-img"
              style={{ cursor: "pointer" }}
            >
              <div
                className="img-container"
                style={{
                  position: "relative",
                  transition: "transform 0.3s ease", // добавляем анимацию при изменении transform
                }}
              >
                <img
                  src={movie.imageUrl}
                  alt=""
                  style={{ maxWidth: "100%", display: "block" }}
                  className="movie-image"
                />
              </div>
              <p style={{ marginLeft: "-50px" }}>{movie.title}</p>
              <p style={{ marginLeft: "-50px", marginTop: "-13px" }}>
                {movie.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestMoviesSlide;
