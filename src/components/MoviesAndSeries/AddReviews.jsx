import React, { useEffect, useState } from "react";
import { useReviews } from "../../context/ReviewsContextProvider";
import { useProduct } from "../../context/ProductContextProvider";
import { useParams } from "react-router-dom";

const AddReviews = () => {
  const { getReviews, addReviews } = useReviews();
  const { id } = useParams();
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getReviews();
    getProducts();
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [movie, setMovie] = useState("");

  const handleClick = () => {
    const newReview = {
      email: email,
      name: name,
      text: text,
      movie: movie,
    };
    addReviews(newReview);
  };

  const handleFilmChange = (event) => {
    const selectedValue = event.target.value;
    setMovie(selectedValue);
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

      <div>
        <label htmlFor="filmSelect">Выберите фильм:</label>
        <select id="filmSelect" onChange={handleFilmChange} value={movie}>
          <option value="">Выберите фильм</option>
          {products.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.slug}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default AddReviews;
