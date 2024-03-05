import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import PublicIcon from "@mui/icons-material/Public";
import LabelIcon from "@mui/icons-material/Label";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar_menu">
        {/* <div className="icons"></div> */}
        <hr />
        <Link style={{ textDecorationLine: "none" }}>
          <li className="main">
            <HomeIcon />
            Главная
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <PlayArrowIcon />
            Онлайн-кинотеатр
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <CropLandscapeIcon />
            Фильмы
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <MovieFilterIcon /> Сериалы
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <PublicIcon />
            Спорт
          </li>
        </Link>
        <Link style={{ textDecorationLine: "none" }}>
          <li>
            <LabelIcon />
            Билеты в кино
          </li>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

// @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
// //! SIDEBAR
// .sideBar {
//   list-style-type: none;
//   margin: 60px 30px;
// }
// .icons {
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   align-items: center;
//   width: 40%;
// }
// .sideBar_menu {
//   display: flex;
//   flex-direction: column;
//   // align-items: center;
//   // justify-content: center;
//   gap: 15px;
//   .main {
//     font-weight: 700;
//     color: black;
//   }
//   li {
//     color: rgba(0, 0, 0, 0.6);
//     font-family: Graphik Kinopoisk LC Web, Tahoma, Arial, Verdana, sans-serif;
//     font-size: 15px;
//     font-weight: 500;
//     font-style: normal;
//     line-height: 18px;
//   }
// }
// //! HEADER
// .header {
//   padding-left: 100%;
//   margin: 80px 0px;
//   width: 100%;
//   height: 50vh;
// }

// .header_trailer {
//   // height: 50vh;
//   font-family: Roboto;
//   font-size: 13px;
//   font-weight: 400;
//   line-height: 18px;
//   color: #fff;
// }
// .header_desc {
//   background-image: url("https://j.gifs.com/nZwDk4.gif");
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: absolute;
//   z-index: 2;
//   left: 16%;
//   width: 76%;
//   height: 50%;
//   background: linear-gradient(
//     90deg,
//     #000 6.25%,
//     #000 6.26%,
//     rgba(0, 0, 0, 0.99) 14.15%,
//     rgba(0, 0, 0, 0.961) 20.77%,
//     rgba(0, 0, 0, 0.915) 26.27%,
//     rgba(0, 0, 0, 0.856) 30.8%,
//     rgba(0, 0, 0, 0.785) 34.5%,
//     rgba(0, 0, 0, 0.705) 37.54%,
//     rgba(0, 0, 0, 0.619) 40.06%,
//     rgba(0, 0, 0, 0.529) 42.21%,
//     rgba(0, 0, 0, 0.437) 44.15%,
//     rgba(0, 0, 0, 0.347) 46.03%,
//     rgba(0, 0, 0, 0.261) 47.99%,
//     rgba(0, 0, 0, 0.18) 50.2%,
//     rgba(0, 0, 0, 0.108) 52.79%,
//     rgba(0, 0, 0, 0.047) 55.94%,
//     transparent 59.77%
//   );
//   img {
//     margin-top: 50px;
//   }
// }
// .movie_description {
//   margin: 10px 30px;
// }
// .movie_castTitle {
//   span {
//     font-size: 13px;
//     font-weight: 600;
//     line-height: 18px;
//     color: #fff;
//   }
//   margin: 10px 30px;
// }
// .movie_directors {
//   span {
//     font-size: 13px;
//     font-weight: 600;
//     line-height: 18px;
//     color: #fff;
//   }
//   margin: 10px 30px;
// }
// .movie_subtitle {
//   margin-top: 24px;
//   margin-left: 30px;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
//   color: #f50;
//   display: flex;
//   flex-direction: column;
// }
// .movie_button {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: none;
//   margin-top: 20px;
//   padding: 14px;
//   width: 15%;
//   color: white;
//   font-size: 16px;
//   font-weight: 600;
//   line-height: 20px;
//   border-radius: 1000px;
//   background: linear-gradient(135deg, #f50 69.93%, #d6bb00);
// }
// // .swiper {
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// // }
