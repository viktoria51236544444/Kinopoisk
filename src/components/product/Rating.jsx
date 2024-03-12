import React, { useEffect, useState } from "react";
import { useRating } from "../../context/RatingContextPovider";
import ReactStars from "react-rating-stars-component";

const Rating = ({ slug }) => {
  const { addRating, getRating } = useRating();
  const [newRating, setNewRating] = useState(0);

  const email = localStorage.getItem("email");

  const handleNewRatingChanged = (newRating) => {
    setNewRating(newRating);
    const newRatingData = {
      user: email,
      star: newRating,
      movie: slug,
    };
    addRating(newRatingData).then(() => {
      getRating();
      // if (onRatingChanged) {
      //   onRatingChanged();
      // }
    });
  };

  return (
    <div>
      <div>
        <ReactStars
          value={newRating}
          onChange={handleNewRatingChanged}
          activeColor="#ffd700"
          count={10}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          size={24}
        />
      </div>
    </div>
  );
};

export default Rating;
