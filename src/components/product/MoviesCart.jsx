import React, { useEffect, useState } from "react";
import { useFavorite } from "../../context/FavoriteContextProvider";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
const MoviesCart = ({ elem }) => {
  const { deleteProduct } = useProduct();
  const { favorite, addFavorite, removeFavorite } = useFavorite();
  const navigate = useNavigate();

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
