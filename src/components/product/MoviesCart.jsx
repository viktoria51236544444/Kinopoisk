import React from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const MoviesCart = ({ elem }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  console.log(elem);
  return (
    <div>
      <h2>{elem.title}</h2>

      <p>{elem.category}</p>

      <button onClick={() => deleteProduct(elem.slug)}>delete</button>
      <button onClick={() => navigate(`/edit/${elem.slug}`)}>edit</button>
    </div>
  );
};

export default MoviesCart;
