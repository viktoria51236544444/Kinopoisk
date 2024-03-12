import React from "react";
import { useReviews } from "../../context/ReviewsContextProvider";
import { useNavigate } from "react-router-dom";

const ReviewsCard = ({ elem }) => {
  const { deleteReviews } = useReviews();
  const navigate = useNavigate();
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "none",
    marginLeft: "8px",
  };

  const handleClick = () => {
    deleteReviews(elem.id);
  };

  return (
    <div style={cardStyle}>
      <p style={{ fontWeight: "bold" }}>{elem.name}</p>
      <p>{elem.email}</p>
      <p>{elem.text}</p>
      <p>Movie: {elem.movie}</p>
      <button style={buttonStyle} onClick={handleClick}>
        Delete
      </button>
      <button onClick={() => navigate(`/editReviews/${elem.id}`)}>edit</button>
    </div>
  );
};

export default ReviewsCard;
