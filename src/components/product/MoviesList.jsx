import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import MoviesCart from "./MoviesCart";
import { useParams, useSearchParams } from "react-router-dom";

const MoviesList = () => {
  const { products, getProducts, pages } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const getPagesCount = () => {
    const pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  };

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage]);

  if (currentPage < 1) setCurrentPage(1);
  if (currentPage > pages) setCurrentPage(pages);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div>
      {products.map((elem) => (
        <MoviesCart elem={elem} key={elem.slug} />
      ))}
      <div className="pagination">
        <button
          className="pagination__button-back pagination__button"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Назад
        </button>
        {getPagesCount().map((elem) => (
          <button
            onClick={() => handlePageChange(elem)}
            key={elem}
            className={`pagination__button ${
              currentPage === elem ? "active" : ""
            }`}
          >
            {elem}
          </button>
        ))}
        <button
          className="pagination__button-back pagination__button"
          disabled={currentPage === pages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
