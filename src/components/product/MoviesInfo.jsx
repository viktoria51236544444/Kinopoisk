import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { PlayArrow } from "@mui/icons-material";

import FooterSport from "../sportComponents/FooterSport";
import Navbar from "../../homepage/Navbar";
import { IconButton } from "@mui/material";
import { BookmarkAddOutlined, Pause } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useParams } from "react-router-dom";
import { useReviews } from "../../context/ReviewsContextProvider";

const MoviesInfo = () => {
  const { products, getProducts } = useProduct();
  const { slug } = useParams();
  const { getReviews, reviews, deleteReviews } = useReviews();
  const [movieReviews, setMovieReviews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

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
          {products.map((elem) => (
            <div key={elem.slug} className="movie-card">
              <div className="movie-image">
                <img src={elem.poster} alt={elem.title} />
              </div>
              <div className="movie-details">
                <h1 className="movie-title">{elem.title}</h1>
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
                      gap: "30%",
                    }}
                  >
                    <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>
                      Год производства
                    </p>
                    <p className="movie-info">{elem.year}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "50%",
                    }}
                  >
                    <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Страна</p>
                    <p className="movie-info">{elem.country}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "50%",
                    }}
                  >
                    <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Жанры</p>
                    <p className="movie-info"> {elem.genres}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "30%",
                    }}
                  >
                    <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Слоган</p>
                    <p className="movie-info"> {elem.tagline}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "45%",
                    }}
                  >
                    <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Режиссер</p>
                    <p className="movie-info"> {elem.directors}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "48%",
                    }}
                  >
                    <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Бюджет</p>
                    <p className="movie-info">${elem.budget}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "48%",
                    }}
                  >
                    <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>Гонорар</p>
                    <p className="movie-info">${elem.fees_in_usa}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "38%",
                    }}
                  >
                    <p style={{ color: "hsla(0, 0%, 100%, .6)" }}>
                      Сборы в мире
                    </p>
                    <p className="movie-info">${elem.fees_in_world}</p>
                  </div>
                </div>
              </div>
              <div className="movie-actors">
                <strong>В главной роли</strong>
                <p className="movie-info">{elem.actors}</p>
              </div>
            </div>
          </div>
        </div>
        {movieReviews.length > 0 ? (
          <div className="reviews-container">
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
                <li key={review.id} style={{ marginBottom: "20px" }}>
                  <p
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    {review.name}
                  </p>
                  <p style={{ color: "white", margin: 0 }}>{review.text}</p>
                  <button onClick={() => deleteReviews(review.id)}>
                    Удалить
                  </button>
                  <button onClick={() => navigate(`/editReviews/${review.id}`)}>
                    edit
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p style={{ color: "white" }}>Комментарии отсутствуют</p>
        )}

        <FooterSport />
      </div>
    </div>
  );
};

export default MoviesInfo;
