import React, { useEffect, useState } from "react";
import "./SidebarMovies.css";
import { useProduct } from "../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SidebarMovies = () => {
  const {
    categories,
    getCategories,
    getGenres,
    genre,
    getActors,
    actor,
    fetchByParams,
    getProducts,
  } = useProduct();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    setSearchParams({ search: search });
    getProducts();
  }, [search]);

  useEffect(() => {
    getCategories();
    getGenres();
    getActors();
  }, []);

  const [isActive, setIsActive] = useState({
    categories: false,
    genres: false,
    actors: false,
  });

  const toggleMenu = (menu) => {
    setIsActive((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div>
      <div
        className="dropdown"
        style={{ marginLeft: "50px", marginTop: "10%" }}
      >
        <div className="btn_dropdown" onClick={() => toggleMenu("categories")}>
          КАТЕГОРИИ <ArrowDropDownIcon />
        </div>
        {isActive.categories && (
          <div className="dropdown_content">
            <div className="dropdown_item">
              <button
                value={"all"}
                onClick={(e) => fetchByParams("category", e.target.value)}
                className="category_button"
                style={{ borderRadius: "7px" }}
              >
                All
              </button>
              {categories.map((elem) => (
                <button
                  key={elem.id}
                  onClick={() => fetchByParams("category", elem.slug)}
                  className="category_button"
                  style={{ borderRadius: "7px" }}
                >
                  {elem.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className="dropdown"
        style={{ marginLeft: "50px", marginTop: "65%" }}
      >
        <div className="btn_dropdown" onClick={() => toggleMenu("genres")}>
          ЖАНРЫ <ArrowDropDownIcon />
        </div>
        {isActive.genres && (
          <div className="dropdown_content">
            <div className="dropdown_item">
              <button
                value={"all"}
                onClick={(e) => fetchByParams("genres", e.target.value)}
                className="genre_button"
                style={{ borderRadius: "7px" }}
              >
                All
              </button>
              {genre.map((elem) => (
                <button
                  key={elem.id}
                  onClick={() => fetchByParams("genres", elem.slug)}
                  className="genre_button"
                  style={{ borderRadius: "7px" }}
                >
                  {elem.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarMovies;
