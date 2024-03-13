import React, { useEffect } from "react";
import { useReviews } from "../../context/ReviewsContextProvider";
import ReviewsCard from "./ReviewsCard";
import MoviesInfo from "../product/MoviesInfo";

const ReviesList = () => {
  const { getReviews, reviews } = useReviews();
  console.log(reviews);
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div>
      {reviews.map((elem) => (
        <MoviesInfo elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ReviesList;
