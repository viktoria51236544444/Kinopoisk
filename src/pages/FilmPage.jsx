import React, { useState } from "react";
import MoviesList from "../components/product/MoviesList";
import SidebarMovies from "../components/product/SidebarMovies";
import "./filmpage.css";
import Navbar from "../homepage/Navbar";

const FilmPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
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
