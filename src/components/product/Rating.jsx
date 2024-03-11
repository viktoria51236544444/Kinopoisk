import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useRating } from "../../context/RatingContextPovider";

const Rating = ({ id, slug }) => {
  const { getRating, addRating, getOneRating, onerating, ratings } =
    useRating();

  useEffect(() => {
    getRating();
    // getOneRating(id);
  }, []);

  const email = localStorage.getItem("email");

  const handleRatingChanged = (newRating) => {
    const newRatingData = {
      user: email,
      star: newRating,
      movie: slug,
    };
    addRating(newRatingData);
  };

  return (
    <div>
      <ReactStars
        // value={onerating.rating || 0}
        activeColor="#ffd700"
        count={5}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        onChange={handleRatingChanged}
        size={24}
      />
    </div>
  );
};

export default Rating;
