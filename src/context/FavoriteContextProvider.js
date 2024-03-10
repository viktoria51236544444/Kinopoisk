import React, { createContext, useContext, useReducer, useEffect } from "react";

const favoriteContext = createContext();

export const useFavorite = () => useContext(favoriteContext);

const INIT_STATE = {
  favorite: JSON.parse(localStorage.getItem("favorites")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const updatedFavorites = [...state.favorite, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { ...state, favorite: updatedFavorites };

    case "REMOVE_FAVORITE":
      const filteredFavorites = state.favorite.filter(
        (item) => item.slug !== action.payload.slug
      );
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      return { ...state, favorite: filteredFavorites };

    default:
      return state;
  }
};

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorite));
  }, [state.favorite]);

  const addFavorite = (item) => {
    const isAlreadyInFavorites = state.favorite.some(
      (favoriteItem) => favoriteItem.slug === item.slug
    );

    if (!isAlreadyInFavorites) {
      dispatch({ type: "ADD_FAVORITE", payload: item });
    }
  };

  const removeFavorite = (item) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: item });
  };

  const values = {
    favorite: state.favorite,
    addFavorite,
    removeFavorite,
  };

  return (
    <favoriteContext.Provider value={values}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

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
