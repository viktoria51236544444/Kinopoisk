import React, { useEffect, useState } from "react";
import { useFavorite } from "../../context/FavoriteContextProvider";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRating } from "../../context/RatingContextPovider";
import ReactStars from "react-rating-stars-component";
import Rating from "./Rating";
import AverageRating from "./AverageRating";
import { ADMIN } from "../../helpers/const";

const MoviesCart = ({ elem }) => {
  // console.log(elem.ratings);
  const { deleteProduct } = useProduct();

  const { favorite, addFavorite, removeFavorite } = useFavorite();
  const navigate = useNavigate();

  const [isRatingVisible, setIsRatingVisible] = useState(false);
  const handleRatingButtonClick = () => {
    setIsRatingVisible(true);
  };

  const isFavorite = favorite.some(
    (favoriteItem) => favoriteItem.slug === elem.slug
  );

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(elem);
    } else {
      addFavorite(elem);
    }
  };

  const [currentUser, setCurrentUser] = useState(null);

  const email = localStorage.getItem("email");

  useEffect(() => {
    setCurrentUser(email);
  }, [email]);

  // ! Rating
  const { getRating, ratings } = useRating();
  const [averageRatings, setAverageRatings] = useState([]);
  useEffect(() => {
    getRating();
  }, []);

  useEffect(() => {
    const calculateAverageRatings = () => {
      const uniqueSlugs = [...new Set(ratings.map((rating) => rating.movie))];
      const averageRatingsData = uniqueSlugs.map((slug) => {
        const filteredRatings = ratings.filter(
          (rating) => rating.movie === slug
        );
        const totalStars = filteredRatings.reduce(
          (sum, rating) => sum + rating.star,
          0
        );
        const avgRating =
          Math.round((totalStars / filteredRatings.length) * 2) / 2;
        return { slug, averageRating: avgRating };
      });
      setAverageRatings(averageRatingsData);
      // console.log(averageRatingsData);
    };

    calculateAverageRatings();
  }, [ratings]);

  // ! Ratings finish

  // ! like
  const [liked, setLiked] = useState(false);
  // Используем useEffect чтобы при перезагрузки стрвницы он оставался
  useEffect(() => {
    const likeStatus = localStorage.getItem(`likeStatus-${elem.slug}`);
    if (likeStatus === "liked") {
      setLiked(true);
    }
  }, [elem.slug]);
  // Функция для изменения состояния лайка
  const toggleLike = () => {
    setLiked(!liked);
    // Сохраняем состояние в localStorage
    if (!liked) {
      localStorage.setItem(`likeStatus-${elem.slug}`, "liked");
    } else {
      localStorage.removeItem(`likeStatus-${elem.slug}`);
    }
  };
  // ! finish like

  const handleCardClick = () => {
    navigate(`/movies/${elem.slug}`);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid gray",
          height: "500px",
          width: "320px",
          justifyContent: "flex-end",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {averageRatings
            .filter((item) => item.slug === elem.slug)
            .map((filteredItem) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={filteredItem.slug}
              >
                <p>Средний рейтинг :{filteredItem.averageRating}</p>
                <ReactStars
                  value={filteredItem.averageRating}
                  activeColor="#ffd700"
                  isHalf={true}
                  count={10}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  size={24}
                />
              </div>
            ))}
          <img
            onClick={handleCardClick}
            style={{ width: "200px", height: "auto" }}
            src={elem.poster}
            alt=""
          />
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "195px",
            }}
          >
            <h2 style={{ margin: "5px 0" }}>{elem.title}</h2>
          </div>
          <p style={{ margin: "5px 0" }}>{elem.category}</p>
          {/* <p style={{ margin: "5px 0" }}>{elem.slug}</p> */}
        </div>

        <div style={{ display: "flex", marginBottom: "5px" }}>
          {currentUser && currentUser === ADMIN ? (
            <>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  width: "100px",
                }}
                onClick={() => deleteProduct(elem.slug)}
              >
                Удалить
              </button>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  width: "100px",
                }}
                onClick={() => navigate(`/edit/${elem.slug}`)}
              >
                Редактировать
              </button>
            </>
          ) : (
            <div>
              {isRatingVisible ? (
                <Rating
                  slug={elem.slug}
                  ratings={elem.ratings}
                  onChange={getRating} // Вызываем функцию getRating при изменении оценки
                />
              ) : (
                <button
                  style={{
                    backgroundColor: "#B8860B",
                    color: "white",
                    border: "none",
                  }}
                  onClick={handleRatingButtonClick}
                >
                  Оценить фильм
                </button>
              )}
              <div>
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    width: "100px",
                  }}
                  onClick={handleFavoriteToggle}
                >
                  {isFavorite ? "Удалить" : "Добавить"}
                </button>
                <div
                  style={{ color: liked ? "#f50" : "white", cursor: "pointer" }}
                  onClick={toggleLike}
                >
                  <FavoriteIcon />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesCart;
