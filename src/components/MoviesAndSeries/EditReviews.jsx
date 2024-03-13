import React, { useEffect, useState } from "react";
import { useReviews } from "../../context/ReviewsContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "./edit.css";
const EditReviews = () => {
  const { getOneReviews, oneReview, editReviews } = useReviews();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneReviews(id);
  }, [id]);

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

  const handleSave = async () => {
    const newEditReview = {
      email: email,
      name: name,
      text: text,
      movie: movie,
    };

    await editReviews(id, newEditReview);

    navigate(`/movies/${movie}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage:
          "url('https://c4.wallpaperflare.com/wallpaper/307/12/896/simple-background-black-background-minimalism-theater-photography-hd-wallpaper-preview.jpg')",
        minHeight: "100vh",
      }}
    >
      <div style={{ marginTop: "200px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{
              width: "300px",
              padding: "10px",
              border: "none",
              borderBottom: "2px solid #000",
              background: "linear-gradient(to bottom, #2c2c2c, #fff)",
              color: "white",
              fontWeight: 500,
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            style={{
              width: "300px",
              padding: "10px",
              border: "none",
              borderBottom: "2px solid #000",
              background: "linear-gradient(to bottom,#2c2c2c, #fff)",
              color: "white",
              fontWeight: 500,
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
            style={{
              width: "300px",
              padding: "10px",
              border: "none",
              borderBottom: "2px solid #000",
              background: "linear-gradient(to bottom, #2c2c2c, #fff)",
              color: "white",
              fontWeight: 500,
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Movie"
            style={{
              width: "300px",
              padding: "10px",
              border: "none",
              borderBottom: "2px solid #000",
              background: "linear-gradient(to bottom, #2c2c2c, #fff)",
              color: "white",
              fontWeight: 500,
              fontSize: "16px",
            }}
          />
        </div>
        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            border: "none",
            background: "linear-gradient(to bottom, #2c2c2c, #000000)",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          className="saveBtn"
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default EditReviews;
