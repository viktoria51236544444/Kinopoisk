// import React, { useEffect, useState } from "react";
// import "./SidebarMovies.css";
// import { useProduct } from "../../context/ProductContextProvider";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const SidebarMovies = () => {
//   const [isActiveCategories, setIsActiveCategories] = useState(false);
//   const [isActiveGenres, setIsActiveGenres] = useState(false);
//   const [isActiveActors, setIsActiveActors] = useState(false);

//   const {
//     categories,
//     getCategories,
//     getProducts,
//     fetchByParams,
//     getGenres,
//     genre,
//     getActors,
//     actor,
//   } = useProduct();

//   const [searchParams, setSearchParams] = useSearchParams();
//   const [search, setSearch] = useState(searchParams.get("q") || "");
//   const navigate = useNavigate();

//   useEffect(() => {
//     setSearchParams({
//       q: search,
//     });
//     getProducts();
//   }, [search]);

//   useEffect(() => {
//     getCategories();
//     getGenres();
//     getActors();
//   }, []);

//   return (
//     <div>
//       <div className="dropdown">
//         <div
//           className="btn_dropdown"
//           onClick={() => setIsActiveCategories(!isActiveCategories)}
//         >
//           КАТЕГОРИИ <ArrowDropDownIcon />
//         </div>
//         {isActiveCategories && (
//           <div className="dropdown_content">
//             <div className="dropdown_item">
//               <button
//                 value={"all"}
//                 onClick={(e) => fetchByParams("category", e.target.value)}
//               >
//                 All
//               </button>
//               {categories.map((elem) => (
//                 <button
//                   key={elem.id}
//                   onClick={() => fetchByParams("category", elem.slug)}
//                 >
//                   {elem.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="dropdown">
//         <div
//           className="btn_dropdown"
//           onClick={() => setIsActiveGenres(!isActiveGenres)}
//         >
//           ЖАНРЫ <ArrowDropDownIcon />
//         </div>
//         {isActiveGenres && (
//           <div className="dropdown_content">
//             <div className="dropdown_item">
//               <button
//                 value={"all"}
//                 onClick={(e) => fetchByParams("genres", e.target.value)}
//               >
//                 All
//               </button>
//               {genre.map((elem) => (
//                 <button
//                   key={elem.id}
//                   onClick={() => fetchByParams("genres", elem.slug)}
//                 >
//                   {elem.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="dropdown">
//         <div
//           className="btn_dropdown"
//           onClick={() => setIsActiveActors(!isActiveActors)}
//         >
//           АКТЕРЫ <ArrowDropDownIcon />
//         </div>
//         {isActiveActors && (
//           <div className="dropdown_content">
//             <div className="dropdown_item">
//               <button
//                 value={"all"}
//                 onClick={(e) => fetchByParams("actors", e.target.value)}
//               >
//                 All
//               </button>
//               {actor.map((elem) => (
//                 <button
//                   key={elem.id}
//                   onClick={() => fetchByParams("actors", elem.slug)}
//                 >
//                   {elem.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SidebarMovies;

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
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: search });
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
      <div className="dropdown">
        <div className="btn_dropdown" onClick={() => toggleMenu("categories")}>
          КАТЕГОРИИ <ArrowDropDownIcon />
        </div>
        {isActive.categories && (
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
      <div className="dropdown">
        <div className="btn_dropdown" onClick={() => toggleMenu("genres")}>
          ЖАНРЫ <ArrowDropDownIcon />
        </div>
        {isActive.genres && (
          <div className="dropdown_content">
            <div className="dropdown_item">
              <button
                value={"all"}
                onClick={(e) => fetchByParams("genres", e.target.value)}
              >
                All
              </button>
              {genre.map((elem) => (
                <button
                  key={elem.id}
                  onClick={() => fetchByParams("genres", elem.slug)}
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
