import React, { useState } from "react";
import MoviesList from "../components/product/MoviesList";

import "./filmpage.css";
import Navbar from "../homepage/Navbar";
import SidebarMovies from "../components/product/SidebarMovies";

const FilmPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div style={{ backgroundColor: "#3b0000" }}>
      <Navbar />
      <div
        className="movielist__container"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <div style={{ width: "300px", flex: "none" }}>
          <SidebarMovies
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <MoviesList />
      </div>
    </div>
  );
};

export default FilmPage;
