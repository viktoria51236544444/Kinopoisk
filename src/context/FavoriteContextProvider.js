import React, { createContext, useContext } from "react";
const favoriteMovie = createContext();
export const useFavorite = () => useContext(favoriteMovie);
const FavoriteContextProvider = ({ children }) => {
  const values = {};
  return (
    <favoriteMovie.Provider value={values}>{children}</favoriteMovie.Provider>
  );
};

export default FavoriteContextProvider;
