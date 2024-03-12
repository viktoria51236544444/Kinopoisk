import React, { useState } from "react";
import "./OscarHomePage.css";
import { useNavigate } from "react-router-dom";

const Nominees = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const bestMovies = [
    {
      slug: 1,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/60661/f5e8e74421c7f421a82c2741c6e0d6b2ead611c9/orig",
      title: "Анатомия падения",
      subTitle: "Anatomy of a fall",
    },
    {
      slug: 2,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/042e567b3f191585132721025baca6a9f2cb68c9/orig",
      title: "Убийца цветочной луны",
      subTitle: "Killers Of The Flower Moon",
      description:
        "Главный фильм 2017 года. Мюзикл как признание в любви к Голливуду. История отношений джазового музыканта (Райан Гослинг) и начинающей актрисы (Эмма Стоун) в декорациях Лос-Анджелеса покорила и кинозалы, и критиков. Победитель в шести номинациях на премию «Оскар», в том числе «Лучшая актриса» и «Лучшая песня к фильму».",
    },
    {
      slug: 3,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/60661/c271206dfb46a490c3c19a2313a6e1cbc8963087/orig",
      title: "Оппенгеймер",
      subTitle: "Oppenheimer",
    },
    {
      slug: 4,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/c3e32d0b46b37e66fa231c34ddf13d31d6d7bf90/orig",
      title: "Бедные-несчастные",
      subTitle: "Poor Things",
    },
    {
      slug: 5,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/60661/667a9e6dd6bc68933e344284c99af04b71c4b09c/orig",
      title: "Зона интересов",
      subTitle: "The Zone Of Interest",
    },
    {
      slug: 6,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/f131324cee254b8463f1352245f7d55c669413ce/orig",
      title: "Американское чтиво",
      subTitle: "American Fiction",
    },

    {
      slug: 7,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/120922/fb3a798ed239fe9e3a089274a7a89f2f452a85ad/orig",
      title: "Барби",
      subTitle: "Barbie",
    },

    {
      slug: 8,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/d4bec66a89d5c4b655b8914d4134f23a3be12b0c/orig",
      title: "Оставленные",
      subTitle: "The Holdovers",
    },
    {
      slug: 9,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/994123/d89cd96ee80d50917c898345b80057bb40c1cf91/orig",
      title: "Маэстро",
      subTitle: "Maestro",
    },
    {
      slugd: 10,
      imageUrl:
        "https://avatars.mds.yandex.net/get-bunker/118781/24acf96ba1d5e750f36af892e7d6c75179db7b5f/orig",
      title: "Прошлые жизни",
      subTitle: "Past Loves",
    },
  ];

  const bestActorNominees = [
    {
      name: "Пол Джаматти",
      movie: "Оставленные",
    },
    {
      name: "Джеффри Райт",
      movie: "Американское чтиво",
    },
    {
      name: "Брэдли Купер",
      movie: "Маэстро",
    },
    {
      name: "Колман Доминго",
      movie: "Растин",
    },
    {
      name: "Киллиан Мерфи",
      movie: "Оппенгеймер",
    },
  ];

  const bestActressNominees = [
    {
      name: "Аннетт Бенинг",
      movie: "Дайана Найэд",
    },
    {
      name: "Лили Гладстоун",
      movie: "Убийцы цветочной луны",
    },
    {
      name: "Сандра Хюллер",
      movie: "Анатомия падения",
    },
    {
      name: "Кэри Маллиган",
      movie: "Маэстро",
    },
    {
      name: "Эмма Стоун",
      movie: "Бедные-несчастные",
    },
  ];

  const bestDirectorNominees = [
    {
      name: "Жюстин Трие",
      movie: "Анатомия падения",
    },
    {
      name: "Мартин Скорсезе",
      movie: "Убийцы цветочной луны",
    },
    {
      name: "Кристофер Нолан",
      movie: "Оппенгеймер",
    },
    {
      name: "Йоргос Лантимос",
      movie: "Бедные-несчастные",
    },
    {
      name: "Джонатан Глейзер",
      movie: "Зона интересов",
    },
  ];

  return (
    <div className="best" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "white" }}>Номинанты</h2>
      <p
        style={{
          fontWeight: 600,
          fontSize: "15px",
          textTransform: "uppercase",
          color: "#c5a05a",
          textAlign: "start",
          marginLeft: "90px",
        }}
      >
        Лучшие фильмы
      </p>
      <div
        className="movie"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {bestMovies.map((movie, index) => (
          <div
            key={index}
            style={{
              width: "calc(17% - 10px)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="allMovies__container_movies-swiper-img"
              style={{
                transition: "transform 0.3s ease",
                transform:
                  hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
              }}
            >
              <div className="img-container" style={{ position: "relative" }}>
                <img src={movie.imageUrl} alt="" />
                {hoveredIndex === index && (
                  <a href="https://hd.kinopoisk.ru/personal" target="blank">
                    <img
                      src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/favorites.png"
                      alt="favorites"
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "24px",
                        height: "24px",
                        zIndex: "1",
                        marginTop: "7px",
                        marginRight: "2px",
                      }}
                    />
                  </a>
                )}
              </div>
              <p style={{ marginLeft: "-50px" }}>{movie.title}</p>
              <p style={{ marginLeft: "-50px", marginTop: "-13px" }}>
                {movie.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="best"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        {/* Лучшая мужская роль */}
        <div className="actr" style={{ textAlign: "left" }}>
          <h3
            style={{
              fontSize: "15px",
              lineHeight: "1.47",
              color: "#b7a261",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Лучшая мужская роль
          </h3>
          {bestActorNominees.map((actor, index) => (
            <div className="aaa" key={index}>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  fontSize: "15px",
                  lineHeight: 1.2,
                  color: "#FFF",
                  transition: "color 0.3s",
                }}
                className="actor-name"
              >
                {actor.name}
              </p>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  marginTop: "4px",
                  pointerEvents: "none",
                  fontSize: "13px",
                  lineHeight: 1.15,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "-10px",
                }}
              >
                {actor.movie}
              </p>
              {index !== bestActorNominees.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* Лучшая женская роль */}
        <div style={{ textAlign: "left" }}>
          <h3
            style={{
              fontSize: "15px",
              lineHeight: "1.47",
              color: "#b7a261",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Лучшая женская роль
          </h3>
          {bestActressNominees.map((actress, index) => (
            <div key={index}>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  fontSize: "15px",
                  lineHeight: 1.2,
                  color: "#FFF",
                  fontWeight: 600,
                  transition: "color 0.3s",
                }}
                className="actor-name"
              >
                {actress.name}
              </p>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  marginTop: "4px",
                  pointerEvents: "none",
                  fontSize: "13px",
                  lineHeight: 1.15,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "-10px",
                }}
              >
                {actress.movie}
              </p>
              {index !== bestActressNominees.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>

        {/* Лучший режиссер */}
        <div style={{ textAlign: "left" }}>
          <h3
            style={{
              fontSize: "15px",
              lineHeight: "1.47",
              color: "#b7a261",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Лучший режиссер
          </h3>
          {bestDirectorNominees.map((director, index) => (
            <div key={index}>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  fontSize: "15px",
                  lineHeight: 1.2,
                  color: "#FFF",
                  fontWeight: 600,
                  transition: "color 0.3s",
                }}
                className="actor-name"
              >
                {director.name}
              </p>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  marginTop: "4px",
                  pointerEvents: "none",
                  fontSize: "13px",
                  lineHeight: 1.15,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "-10px",
                }}
              >
                {director.movie}
              </p>
              {index !== bestDirectorNominees.length - 1 && (
                <hr style={{ border: "0.1px solid #D2B48C" }} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="headerOscar__container-playBtn"
        style={{ marginTop: "50px", marginRight: "400px" }}
      >
        <button className="game" onClick={() => navigate("/oscarNominee")}>
          Все номинации
        </button>
      </div>
    </div>
  );
};

export default Nominees;
