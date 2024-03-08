import React from "react";

const ModalAllMovies = ({ movie, closeModal }) => {
  return (
    <div className="modal">
      <div
        className="modal-content"
        style={{
          backgroundImage:
            "url('https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/1da2e276dd48000a68ccfeeb07823fa8/960x540')",
          backgroundSize: "cover",
        }}
      >
        <span className="close" onClick={closeModal}>
          &times;
        </span>

        <p>{movie.title}</p>
        <p>{movie.subTitle}</p>
        <p>{movie.description}</p>
        <iframe src={movie.trailerUrl} allowFullScreen></iframe>
      </div>
    </div>
  );
};
export default ModalAllMovies;
