import React, { useEffect, useState } from "react";
import { useReviews } from "../../context/ReviewsContextProvider";
import { useParams } from "react-router-dom";

const EditReviews = () => {
  const { getOneReviews, oneReview, editReviews } = useReviews();
  const { id } = useParams();

  useEffect(() => {
    getOneReviews(id);
  }, []);

  useEffect(() => {
    if (oneReview) {
      setEmail(oneReview.email);
      setName(oneReview.name);
      setText(oneReview.text);
      setMovie(oneReview.movie);
    }
  }, [oneReview]);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [movie, setMovie] = useState("");

  const handleClick = () => {
    const newEditReview = new FormData();
    newEditReview.append("email", email);
    newEditReview.append("name", name);
    newEditReview.append("text", text);
    newEditReview.append("movie", movie);

    editReviews(id, newEditReview);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />

      <button onClick={handleClick}>save</button>
    </div>
  );
};

export default EditReviews;
