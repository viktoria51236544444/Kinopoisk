import React, { useEffect, useState } from "react";
import { useRating } from "../../context/RatingContextPovider";
import ReactStars from "react-rating-stars-component";

const Rating = ({ slug }) => {
  const { getRating, addRating, ratings } = useRating();
  const [averageRating, setAverageRating] = useState(0);
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    getRating();
  }, []);

  useEffect(() => {
    if (ratings.length > 0) {
      const filteredRatings = ratings.filter((rating) => rating.movie === slug);
      const totalStars = filteredRatings.reduce(
        (sum, rating) => sum + rating.star,
        0
      );
      const avgRating =
        Math.round((totalStars / filteredRatings.length) * 2) / 2;

      setAverageRating(avgRating);
    }
  }, [ratings, slug]);

  const email = localStorage.getItem("email");

  const handleNewRatingChanged = (newRating) => {
    setNewRating(newRating);
    const newRatingData = {
      user: email,
      star: newRating,
      movie: slug,
    };
    addRating(newRatingData);
  };

  return (
    <div>
      <div>
        <ReactStars
          value={newRating}
          onChange={handleNewRatingChanged}
          activeColor="#ffd700"
          count={5}
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
