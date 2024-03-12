import React, { useEffect, useState } from "react";
import { useReviews } from "../../context/ReviewsContextProvider";
import { useProduct } from "../../context/ProductContextProvider";
import { useParams } from "react-router-dom";

const AddReviews = ({ updateReviews }) => {
  const { getReviews, addReviews } = useReviews();
  const { slug } = useParams();
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getReviews();
    getProducts();
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [movie, setMovie] = useState(slug);

  const handleClick = () => {
    const newReview = {
      email: email,
      name: name,
      text: text,
      movie: movie,
    };
    addReviews(newReview);

    setEmail("");
    setName("");
    setText("");
    updateReviews();
  };

  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "#f9e6f2",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "5px",
          borderRadius: "5px",
          border: "none",
          width: "100%",
          backgroundColor: "#f2d9e6",
        }}
      />
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "5px",
          borderRadius: "5px",
          border: "none",
          width: "100%",
          backgroundColor: "#f2d9e6",
        }}
      />
      <textarea
        placeholder="Коментарий"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "5px",
          borderRadius: "5px",
          border: "none",
          width: "100%",
          backgroundColor: "#f2d9e6",
        }}
      />

      <div>
        <select
          id="filmSelect"
          onChange={(e) => setMovie(e.target.value)}
          value={movie}
          style={{
            marginTop: "-1%",
            marginBottom: "1%",
            padding: "5px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#f2d9e6",
          }}
        >
          <option value="">Выберите фильм</option>
          {products
            .filter((elem) => elem.slug === slug)
            .map((elem) => (
              <option value={elem.slug} key={elem.slug}>
                {elem.title}
              </option>
            ))}
        </select>
      </div>

      <button
        onClick={handleClick}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "8px 15px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Добавить комментарий
      </button>
    </div>
  );
};

export default AddReviews;
