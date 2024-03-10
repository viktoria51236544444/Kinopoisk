import React, { useEffect } from "react";
import { useReviews } from "../../context/ReviewsContextProvider";
import ReviewsCard from "./ReviewsCard";

const ReviesList = () => {
  const { getReviews, reviews } = useReviews();
  console.log(reviews);
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div>
      {reviews.map((elem) => (
        <ReviewsCard elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ReviesList;
