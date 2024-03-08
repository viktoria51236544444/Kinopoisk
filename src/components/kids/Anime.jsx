import React from "react";
import "./kids.scss";
import logo from "./assets/Kinopoisk_colored_logo_(2021-present).svg.png";
import SearchIcon from "@mui/icons-material/Search";
import mary from "./assets/mary.webp";
import mag from "./assets/mag.webp";
import student from "./assets/student.webp";
import ukrast from "./assets/ukrast.webp";
import { NavLink } from "react-router-dom";
import pogoda from "./assets/pogoda.webp";
import beauty from "./assets/beauty.webp";
import sad from "./assets/sad.webp";
import hakuro from "./assets/hakuro.webp";
import wish from "./assets/wish.webp";
import oko from "./assets/oko.webp";
import hello from "./assets/hello.webp";
import love from "./assets/love.webp";
import lovsy from "./assets/lovsy.webp";
import volna from "./assets/volna.webp";
import clouds from "./assets/clouds.webp";
import tokio from "./assets/tokio.webp";

const Anime = () => {
  return (
    <div className="kids">
      <div>
        <div className="kids_navbar">
          <div className="navbar_logo">
            <img src={logo} width={200} alt="" />
          </div>
          <div className="kidsNav_menu">
            <ul className="kids_munu">
              <li>
                <a href="/">Главное</a>
              </li>
              <li>
                <a href="/">Моё</a>
              </li>
              <li>
                <a href="/">Каналы</a>
              </li>
            </ul>
            <div className="search">
              <SearchIcon sx={{ color: "white" }} />
            </div>
          </div>
          <div className="kids_avatar">
            <div className="ageRestriction">
              <span>12+</span>
            </div>
            <div className="log">
              <span>Выйти из раздела </span>
            </div>
          </div>
        </div>
      </div>
      <div className="dog_conetnt">
        <h1 className="h1_dog">Аниме</h1>
        <div className="movies_menu1">
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=4ba9aac113e640f08df620ac1f406dd2&rt=4ba9aac113e640f08df620ac1f406dd2&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={mary} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?episode=1&playingContentId=b4e9ff12b376453e998b9d5c0c076c1d&rt=ec07f7cab9a8429f9d9a0e57830cfcff&season=1&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={mag} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=4cd6216592f768afb65b68cffc2992ff&rt=4cd6216592f768afb65b68cffc2992ff&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={student} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=4ee0dcd9fc7b11e5ace47b537b04c44f&rt=4ee0dcd9fc7b11e5ace47b537b04c44f&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={ukrast} width={320} height={200} alt="" />
            </div>
          </NavLink>
        </div>
        <div className="movies_menu1">
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=420582e59b0ad54caeb47d0273e6f93d&rt=420582e59b0ad54caeb47d0273e6f93d&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={pogoda} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=427536afc7f9f1c39c0b8813649949e8&rt=427536afc7f9f1c39c0b8813649949e8&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={beauty} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=428a14295b9d9e159e3dc26572dbc7a2&rt=428a14295b9d9e159e3dc26572dbc7a2&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={sad} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?episode=1&playingContentId=41ec6b9230a022dfb2f57163db6aefd1&rt=4dd614e7f7a32d8d95615105b5e16d1f&season=1&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={hakuro} width={320} height={200} alt="" />
            </div>
          </NavLink>
        </div>
        <div className="movies_menu1">
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=45fc5f8762e278f380b7208f3fe8c255&rt=45fc5f8762e278f380b7208f3fe8c255&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={wish} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?episode=1&playingContentId=493380047235248a9bbaf20cf61a9ade&rt=4decc368dab951a5af601f8b4619ea8b&season=1&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={tokio} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=b7afb258c9f942b99b495b081e67b696&rt=b7afb258c9f942b99b495b081e67b696&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={oko} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=4e73b42e6a1810f3af3db3c9be3a797d&rt=4e73b42e6a1810f3af3db3c9be3a797d&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={hello} width={320} height={200} alt="" />
            </div>
          </NavLink>
        </div>
        <div className="movies_menu1">
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=46bee37e3bc5f72ba5120795e5df2102&rt=46bee37e3bc5f72ba5120795e5df2102&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={love} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=4fc1718c68d7310ea54eefcf378c4a60&rt=4fc1718c68d7310ea54eefcf378c4a60&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={lovsy} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=48243c43d93e30b09638b4c4eaf80613&rt=48243c43d93e30b09638b4c4eaf80613&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={volna} width={320} height={200} alt="" />
            </div>
          </NavLink>
          <NavLink
            to={
              "https://hd.kinopoisk.ru/selection/1262?playingContentId=483fef6962de6f598e71ccb63bbf7ff9&rt=483fef6962de6f598e71ccb63bbf7ff9&selectionWindowId=home&watch="
            }
            target="_blank"
          >
            <div className="aa">
              <img src={clouds} width={320} height={200} alt="" />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="footerKids">
        <p className="p1">Мы всегда готовы вам помочь.</p>
        <div className="ss">
          <p className="p2">
            © 2003–2024 Кинопоиск. 18+ <br />
            Федеральные каналы доступны для бесплатного просмотра круглосуточно{" "}
            <br /> HBO ® and related service marks are the property of Home Box
            Office, Inc <br />
            ООО «Кинопоиск», адрес местонахождения: 115035, Россия, г. Москва,
            ул. Садовническая, д. 82, стр. 2, пом. 9А01 <br />
            Адрес для обращений пользователей: kinopoisk@support.yandex.ru{" "}
            <br />
            Кинопоиск — крупнейший онлайн-кинотеатр в России по выручке, по
            результатам исследования TMT за первое полугодие 2023 г. <br />{" "}
            Результаты исследования: https://clck.ru/3633Tr Соглашение Правила
            рекомендаций Справка
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anime;
