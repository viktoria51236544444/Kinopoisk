import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API2 } from "../helpers/const";

const reviewContext = createContext();
export const useReviews = () => useContext(reviewContext);
const INIT_STATE = {
  reviews: [],
  oneReview: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      return { ...state, reviews: action.payload };
    case "GET_ONE_REVIEW":
      return { ...state, oneReview: action.payload };
  }
};
const ReviewsContextProvider = ({ children }) => {
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

  //! GET_REVIEWS
  const getReviews = async () => {
    try {
      const { data } = await axios(`${API2}/reviews/`);
      dispatch({
        type: "GET_REVIEWS",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! ADD_REVIEWS
  const addReviews = async (newReviews) => {
    try {
      await axios.post(`${API2}/reviews/`, newReviews, getConfig());
    } catch (error) {
      console.log(error);
    }
  };
  //! ADD_DELETE
  const deleteReviews = async (id) => {
    try {
      await axios.delete(`${API2}/reviews/${id}/`, getConfig());
      getReviews();
    } catch (error) {
      console.log(error);
    }
  };
  //! GET_ONE_PRODUCT
  const getOneReviews = async (id) => {
    try {
      const { data } = await axios(`${API2}/reviews/${id}/`);
      dispatch({
        type: "GET_ONE_REVIEW",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! ADD_EDIT
  const editReviews = async (id, newEditReview) => {
    try {
      await axios.patch(`${API2}/reviews/${id}/`, newEditReview, getConfig());
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    getReviews,
    addReviews,
    reviews: state.reviews,
    deleteReviews,
    getOneReviews,
    oneReview: state.oneReview,
    editReviews,
  };
  return (
    <reviewContext.Provider value={values}>{children}</reviewContext.Provider>
  );
};

export default ReviewsContextProvider;
