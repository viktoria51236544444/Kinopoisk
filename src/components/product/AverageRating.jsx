import React, { useEffect, useState } from "react";
import { useRating } from "../../context/RatingContextPovider";
import ReactStars from "react-rating-stars-component";

const AverageRating = ({ slug }) => {
  const { getRating, addRating, ratings } = useRating();
  const [averageRating, setAverageRating] = useState(0);
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    getRating();
  }, [averageRating]);

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

  // const handleRatingSubmit = () => {
  //   const newRatingData = {
  //     user: email,
  //     star: newRating,
  //     movie: slug,
  //   };
  //   addRating(newRatingData);
  // };

  return (
    <div>
      <div>
        <p>Average Rating: {averageRating}</p>
        <ReactStars
          value={averageRating}
          edit={false} // Disable editing for average rating
          activeColor="#ffd700"
          isHalf={true}
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

export default AverageRating;
