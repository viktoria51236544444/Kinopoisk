import React, { useEffect, useState } from "react";
import { useFavorite } from "../../context/FavoriteContextProvider";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRating } from "../../context/RatingContextPovider";
import ReactStars from "react-rating-stars-component";
import Rating from "./Rating";
import AverageRating from "./AverageRating";

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
  // ! fihish like

  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <h2>{elem.title}</h2>
        <p>{elem.category}</p>
        <p>{elem.slug}</p>

        {averageRatings
          .filter((item) => item.slug === elem.slug)
          .map((filteredItem) => (
            <div key={filteredItem.slug}>
              <p>
                Average Rating for {filteredItem.slug}:{" "}
                {filteredItem.averageRating}
              </p>
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
        {isRatingVisible ? (
          <Rating slug={elem.slug} ratings={elem.ratings} />
        ) : (
          <button onClick={handleRatingButtonClick}>Оценить фильм</button>
        )}
        <button onClick={() => deleteProduct(elem.slug)}>delete</button>
        <button onClick={() => navigate(`/edit/${elem.slug}`)}>edit</button>
        <button onClick={handleFavoriteToggle}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        <div
          style={{ color: liked ? "#f50" : "black", cursor: "pointer" }}
          onClick={toggleLike}
        >
          <FavoriteIcon />
        </div>
      </div>
    </div>
  );
};

export default MoviesCart;
