import React, { useRef, useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const ModalAllMovies = ({ movie, closeModal }) => {
  const modalRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeModal]);

  const modalContentStyle = {
    position: "relative",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  };

  const closeStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    cursor: "pointer",
    color: "#aaa",
  };

  const movieInfoStyle = {
    textAlign: "center",
  };

  const titleStyle = {
    marginTop: "-20px",
    marginBottom: "10px",
    fontSize: "28px",
    color: "#fff",
  };

  const subtitleStyle = {
    fontStyle: "italic",
    color: "#fff",
  };

  const descriptionStyle = {
    marginTop: "20px",
    color: "#fff",
  };

  const videoContainerStyle = {
    position: "relative",
    width: "600px",
    paddingBottom: "56.25%",
    overflow: "hidden",
  };

  const iframeStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "400px",
    height: "400px",
    border: "0",
    borderRadius: "15px",
  };

  const handleWatchClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="modal">
      <div
        ref={modalRef}
        className="modal-content"
        style={{
          backgroundImage: `url(${movie.backgroundImageUrl})`,
          backgroundSize: "cover",
          ...modalContentStyle,
        }}
      >
        <span className="close" onClick={closeModal} style={closeStyle}>
          &times;
        </span>

        <div className="movie-info" style={movieInfoStyle}>
          <h2 style={titleStyle}>{movie.title}</h2>
          <p className="subtitle" style={subtitleStyle}>
            {movie.subTitle}
          </p>
          <p className="description" style={descriptionStyle}>
            {movie.description}
          </p>
          {showVideo ? (
            <div className="video-container" style={videoContainerStyle}>
              <iframe
                src={movie.trailerUrl}
                allowFullScreen
                style={iframeStyle}
              ></iframe>
            </div>
          ) : (
            <div className="watch_button2" style={{ marginLeft: "330px" }}>
              <button className="watch_button2" onClick={handleWatchClick}>
                <PlayArrowIcon />
                Смотреть
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalAllMovies;
