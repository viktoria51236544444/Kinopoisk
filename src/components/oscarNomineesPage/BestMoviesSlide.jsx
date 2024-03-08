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
            }}
          >
            <div className="allMovies__container_movies-swiper-img">
              <div className="img-container" style={{ position: "relative" }}>
                <img src={movie.imageUrl} alt="" />
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
