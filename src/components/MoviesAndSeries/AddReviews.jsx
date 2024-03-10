import React, { useEffect, useState } from "react";
import { useReviews } from "../../context/ReviewsContextProvider";
import { useProduct } from "../../context/ProductContextProvider";
import { useParams } from "react-router-dom";

const AddReviews = () => {
  const { getReviews, addReviews } = useReviews();
  const { id } = useParams();

  useEffect(() => {
    getReviews();
  }, []);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [movie, setMovie] = useState("");

  const handleClick = () => {
    const newReviews = new FormData();
    newReviews.append("email", email);
    newReviews.append("name", name);
    newReviews.append("text", text);
    newReviews.append("movie", movie);
    addReviews(newReviews);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="text"
        onChange={(e) => setText(e.target.value)}
      />
      <input type="text" onChange={(e) => setMovie(e.target.value)} />

      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default AddReviews;
