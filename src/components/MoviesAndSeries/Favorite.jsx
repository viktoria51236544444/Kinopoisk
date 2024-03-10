import React from "react";
import { useFavorite } from "../../context/FavoriteContextProvider";

const Favorite = () => {
  const { favorite, removeFavorite } = useFavorite();

  const handleRemoveFavorite = (item) => {
    removeFavorite(item);
  };

  return (
    <div>
      <h2>My Favorites</h2>
      {favorite.length === 0 ? (
        <p>No items in favorites</p>
      ) : (
        <div>
          {favorite.map((item) => (
            <div
              key={item.slug}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <button onClick={() => handleRemoveFavorite(item)}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
