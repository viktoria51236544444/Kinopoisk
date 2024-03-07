import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API2 } from "../helpers/const";
const productContext = createContext();
export const useProduct = () => useContext(productContext);
const INIT_STATE = {
  products: [],
  oneProduct: [],
  categories: [],
  pages: 10,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
  }
};
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getCategories = async () => {
    try {
      const { data } = await axios(`${API2}/categories/`);
      console.log(data.results);

      if (data.results) {
        dispatch({
          type: "GET_CATEGORIES",
          payload: data.results,
        });
      }
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
    await axios.post(`${API2}/movies/`, newProduct);
  };

  const values = {
    getProducts,
    addProducts,
    products: state.products,
    getCategories,
    categories: state.categories,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
