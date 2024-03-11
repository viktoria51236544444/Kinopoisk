import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const MoviesInfo = () => {
  const { products, getProducts } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="movies-container">
      {products.map((elem) => (
        <div key={elem.slug} className="movie-card">
          <h3>{elem.title}</h3>
          <p className="tagline">{elem.tagline}</p>3<p>{elem.description}</p>
          <p>{elem.year}</p>
          <p>{elem.country}</p>
          <p>{elem.worldPremiere}</p>
          <p>{elem.budget}</p>
          <p>{elem.feesInUsa}</p>
          <p>{elem.feesInWorld}</p>
          <p>{elem.category}</p>
          <p>{elem.directors}</p>
          <p>{elem.actors}</p>
          <p>{elem.genres}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesInfo;
