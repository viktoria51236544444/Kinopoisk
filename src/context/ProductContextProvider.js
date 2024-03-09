import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API2 } from "../helpers/const";
import { logDOM } from "@testing-library/react";
const productContext = createContext();
export const useProduct = () => useContext(productContext);
const INIT_STATE = {
  products: [],
  oneProduct: [],
  categories: [],
  actor: [],
  genre: [],
  pages: 10,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "GET_ACTORS":
      return { ...state, actor: action.payload };
    case "GET_GENRES":
      return { ...state, genre: action.payload };
  }
};
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! config
  const getConfig = () => {
    const access = localStorage.getItem("access_token");
    const Authorization = `Bearer ${access}`;

    const config = {
      headers: { Authorization },
    };
    return config;
  };

  //! categories
  const getCategories = async () => {
    try {
      const { data } = await axios(`${API2}/categories/`);
      console.log(data.results);

      dispatch({
        type: "GET_CATEGORIES",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //! actors
  const getActors = async () => {
    try {
      const { data } = await axios(`${API2}/actors/`);
      console.log(data.results);

      dispatch({
        type: "GET_ACTORS",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //! genres
  const getGenres = async () => {
    try {
      const { data } = await axios(`${API2}/genres/`);
      console.log(data.results);

      dispatch({
        type: "GET_GENRES",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // ! GET
  const getProducts = async () => {
    try {
      const { data } = await axios(`${API2}/movies/`);
      console.log(data);
      dispatch({
        type: "GET_PRODUCTS",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ! CREATE
  const addProducts = async (newProduct) => {
    await axios.post(`${API2}/movies/`, newProduct, getConfig());
  };
  //! delete
  const deleteProduct = async (slug) => {
    try {
      await axios.delete(`${API2}/movies/${slug}/`, getConfig());
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  //! getOneProduct
  const getOneProduct = async (slug) => {
    try {
      const { data } = await axios(`${API2}/movies/${slug}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //! edit
  const editProduct = async (slug, newProduct) => {
    try {
      await axios.patch(`${API2}/movies/${slug}/`, newProduct, getConfig());
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    getProducts,
    addProducts,
    products: state.products,
    getCategories,
    categories: state.categories,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    getActors,
    actor: state.actor,
    genre: state.genre,
    getGenres,
    editProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
