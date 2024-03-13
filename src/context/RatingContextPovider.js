import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API2 } from "../helpers/const";
const ratingContext = createContext();
export const useRating = () => useContext(ratingContext);

const INIT_STATE = {
  ratings: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_RATINGS":
      return { ...state, ratings: action.payload };
  }
};

const RatingContextPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // const navigate = useNavigate();

  //! CONFIG
  const getConfig = () => {
    const access = localStorage.getItem("access_token");
    const Authorization = `Bearer ${access}`;

    const config = {
      headers: { Authorization },
    };
    return config;
  };

  //! GET RATING
  const getRating = async () => {
    try {
      const { data } = await axios(`${API2}/ratings/`);

      dispatch({
        type: "GET_RATINGS",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ! CREATE
  const addRating = async (newRating) => {
    await axios.post(`${API2}/ratings/`, newRating, getConfig());
  };

  const values = {
    getRating,
    addRating,
    ratings: state.ratings,
  };

  return (
    <ratingContext.Provider value={values}>{children}</ratingContext.Provider>
  );
};

export default RatingContextPovider;
