import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { PlayArrow } from "@mui/icons-material";

import FooterSport from "../sportComponents/FooterSport";
import Navbar from "../../homepage/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useParams } from "react-router-dom";
import { useReviews } from "../../context/ReviewsContextProvider";
import AddReviews from "../MoviesAndSeries/AddReviews";

const MoviesInfo = () => {
  const { products, getProducts } = useProduct();
  const { slug } = useParams();
  const { getReviews, reviews, deleteReviews } = useReviews();
  const [movieReviews, setMovieReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    getReviews();
  }, []);

  useEffect(() => {
    const filteredReviews = reviews.filter(
      (review) => review.movie.toLowerCase() === slug.toLowerCase()
    );
    setMovieReviews(filteredReviews);
  }, [slug, reviews]);

  useEffect(() => {
    getProducts();
  }, []);
  const selectedMovie = products.find((elem) => elem.slug === slug);

  if (!selectedMovie) {
    return <p>Фильм не найден</p>;
  }

  return (
    <div>
      <Navbar />
      <div style={{ height: "800px", marginTop: "-10%" }}>
        <img
          style={{ height: "800px" }}
          className="nav__iframe"
          src="https://wallpapercave.com/wp/wp7006451.jpg"
        />
        <div style={{ width: "500px", marginLeft: "7%" }}></div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <div className="movies-container">
          <div key={selectedMovie.slug} className="movie-card">
            <div className="movie-image">
              <img src={selectedMovie.poster} alt={selectedMovie.title} />
            </div>
            <div className="movie-details">
              <h1 className="movie-title">{selectedMovie.title}</h1>
              <button
                className="movie_button2"
                style={{ width: "200px", marginLeft: "-1%", height: "50px" }}
              >
                <PlayArrow />
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="https://hd.kinopoisk.ru/film/0252df11cc814ab08a2973faa072a96e?content_tab=overview&playingContentId=0252df11cc814ab08a2973faa072a96e&watch="
                  target="_blank"
                >
                  Смотреть фильм
                </a>
              </button>
              <h3>О фильме</h3>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "23%",
                  }}
                >
                  <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>
                    Год производства
                  </p>
                  <p className="movie-info">{selectedMovie.year}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "35%",
                  }}
                >
                  <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Страна</p>
                  <p className="movie-info">{selectedMovie.country}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "35%",
                  }}
                >
                  <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Жанры</p>
                  <p className="movie-info"> {selectedMovie.genres}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "35%",
                  }}
                >
                  <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Слоган</p>
                  <p style={{ fontSize: "14px" }} className="movie-info2">
                    {" "}
                    {selectedMovie.tagline}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "32.5%",
                  }}
                >
                  <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Режиссер</p>
                  <p className="movie-info"> {selectedMovie.directors}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "34%",
                  }}
                >
                  <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Бюджет</p>
                  <p className="movie-info">${selectedMovie.budget}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "34%",
                  }}
                >
                  <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Гонорар</p>
                  <p className="movie-info">${selectedMovie.fees_in_usa}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "28%",
                  }}
                >
                  <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Сборы в мире</p>
                  <p className="movie-info">${selectedMovie.fees_in_world}</p>
                </div>
              </div>
            </div>
            <div className="movie-actors">
              <strong>В главной роли</strong>
              <p className="movie-info">{selectedMovie.actors}</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "7%" }}>
          <AddReviews updateReviews={getReviews} />
          {movieReviews.length > 0 ? (
            <div
              className="reviews-container"
              style={{ width: "60%", margin: "auto" }}
            >
              <h2
                style={{
                  color: "white",
                  borderBottom: "1px solid white",
                  paddingBottom: "10px",
                }}
              >
                Отзывы к фильму
              </h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {movieReviews.map((review) => (
                  <li
                    key={review.id}
                    style={{
                      marginBottom: "20px",
                      backgroundColor: "#FFE4E1",
                      padding: "20px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <p style={{ fontSize: "15px", color: "black" }}>
                      {review.email}
                    </p>
                    <p
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "15px",
                        fontSize: "25px",
                        marginTop: "-1%",
                      }}
                    >
                      {review.name}
                    </p>
                    <p style={{ color: "black", margin: 0, fontSize: "17px" }}>
                      {review.text}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "1%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        className="revies__button"
                        style={{
                          marginRight: "10px",
                          backgroundColor: "#9370DB",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => deleteReviews(review.id)}
                      >
                        Удалить
                      </button>
                      <button
                        className="revies__button"
                        style={{
                          backgroundColor: "#9370DB",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate(`/editReviews/${review.id}`)}
                      >
                        Редактировать
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p style={{ color: "white" }}>Комментарии отсутствуют</p>
          )}
        </div>
        <FooterSport />
      </div>
    </div>
  );
};

export default MoviesInfo;
