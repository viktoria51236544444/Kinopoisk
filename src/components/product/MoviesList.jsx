import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import MoviesCart from "./MoviesCart";
import { useParams } from "react-router-dom";

const MoviesList = () => {
  const { products, getProducts } = useProduct();
  const { slug } = useParams();
  console.log(slug);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((elem) => (
        <MoviesCart elem={elem} key={elem.slug} />
      ))}
    </div>
  );
};

export default MoviesList;
