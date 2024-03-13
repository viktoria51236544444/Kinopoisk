import React, { useEffect, useState } from "react";
import "./SidebarMovies.css";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SidebarMovies = () => {
  const [isActive, setIsActive] = useState(false);
  const { categories, getCategories, getProducts, fetchByParams } =
    useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const navigate = useNavigate;

  useEffect(() => {
    setSearchParams({
      q: search,
    });
    getProducts();
  }, [search]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="dropdown">
      <div className="btn_dropdown" onClick={(e) => setIsActive(!isActive)}>
        CATEGORY <ArrowDropDownIcon />
      </div>
      {isActive && (
        <div className="dropdown_content">
          <div className="dropdown_item">
            <button
              value={"all"}
              onClick={(e) => fetchByParams("category", e.target.value)}
            >
              All
            </button>

            {categories.map((elem) => (
              <button
                // type="button"
                key={elem.id}
                onClick={() => fetchByParams("category", elem.slug)}
              >
                {elem.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMovies;
