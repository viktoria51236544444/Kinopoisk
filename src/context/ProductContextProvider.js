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
  oneCategory: [],
  oneActor: [],
  oneGenre: [],
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
    case "GET_ONE_CATEGORY":
      return { ...state, oneCategory: action.payload };
    case "GET_ONE_ACTOR":
      return { ...state, oneActor: action.payload };
    case "GET_ONE_GENRE":
      return { ...state, oneGenre: action.payload };
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
  // ! =========================CATEGORIES===================================
  //! get categories
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

  // ! create categories
  const addCategories = async (newCategory) => {
    await axios.post(`${API2}/categories/`, newCategory, getConfig());
  };

  // ! delete categories
  const deleteCategory = async (slug) => {
    try {
      await axios.delete(`${API2}/categories/${slug}/`, getConfig());
      getCategories();
    } catch (error) {
      console.log(error);
    }
  };
  // ! get One Category
  const getOneCategory = async (slug) => {
    try {
      const { data } = await axios(`${API2}/categories/${slug}/`);

      dispatch({
        type: "GET_ONE_CATEGORY",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // ! edit categories
  const editCategory = async (slug, newCategory) => {
    try {
      await axios.patch(
        `${API2}/categories/${slug}/`,
        newCategory,
        getConfig()
      );
    } catch (error) {
      console.log(error);
    }
  };

  // ! =========================ACTORS===================================
  //!  get actors
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
  // ! create actors
  const addActors = async (newActor) => {
    await axios.post(`${API2}/actors/`, newActor, getConfig());
  };

  // ! delete actors
  const deleteActors = async (slug) => {
    try {
      await axios.delete(`${API2}/actors/${slug}/`, getConfig());
      getActors();
    } catch (error) {
      console.log(error);
    }
  };
  // ! get One Actor
  const getOneActor = async (slug) => {
    try {
      const { data } = await axios(`${API2}/actors/${slug}/`);

      dispatch({
        type: "GET_ONE_ACTOR",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // ! edit actors
  const editActors = async (slug, newActor) => {
    try {
      await axios.patch(`${API2}/categories/${slug}/`, newActor, getConfig());
    } catch (error) {
      console.log(error);
    }
  };
  // ! =========================GENRES===================================
  //! get genres
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
  // ! create genres
  const addGenres = async (newGenre) => {
    await axios.post(`${API2}/genres/`, newGenre, getConfig());
  };

  // ! delete genres
  const deleteGenres = async (slug) => {
    try {
      await axios.delete(`${API2}/genres/${slug}/`, getConfig());
      getGenres();
    } catch (error) {
      console.log(error);
    }
  };
  // ! get One Genre
  const getOneGenre = async (slug) => {
    try {
      const { data } = await axios(`${API2}/genres/${slug}/`);

      dispatch({
        type: "GET_ONE_GENRE",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // ! edit genres
  const editGenres = async (slug, newGenre) => {
    try {
      await axios.patch(`${API2}/genres/${slug}/`, newGenre, getConfig());
    } catch (error) {
      console.log(error);
    }
  };
  // ! =========================PRODUCTS===================================
  // ! GET
  const getProducts = async () => {
    try {
      const { data } = await axios(`${API2}/movies/${window.location.search}`);
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
    pages: state.pages,
    addCategories,
    deleteCategory,
    oneCategory: state.oneCategory,
    getOneCategory,
    editCategory,
    addActors,
    oneActor: state.oneActor,
    deleteActors,
    getOneActor,
    editActors,
    addGenres,
    oneGenre: state.oneGenre,
    deleteGenres,
    getOneGenre,
    editGenres,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
