import React, { useState } from "react";
import MoviesList from "../components/product/MoviesList";
import SidebarMovies from "../components/product/SidebarMovies";

const FilmPage = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ width: "300px", flex: "none" }}>
          <SidebarMovies page={page} setPage={setPage} />
        </div>
        <MoviesList />
      </div>
    </div>
  );
};

export default FilmPage;
