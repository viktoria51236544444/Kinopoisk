import React from "react";
import css from "../sportComponents/sport.css";
import { IconButton } from "@mui/material";
import { BookmarkAddOutlined, PlayArrow } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterSport from "../sportComponents/FooterSport";

const OnlineCinema = () => {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzklEQVR4nO3ZwQrCMBAE0PULFVF60G/3YFHoTDb9AIVIFG/9gN0wDwqlpw6TQrI1E4nDgbMDpQKPlTxYRq21nZOsZOuXAy8HJsvIyeUfJHWYtZRjf/khwpRlOW2EeVfyatkUhQmqqJmgipoJqqiZoNRMVGomKjUT1VDNODBtHc7WjDOArTAVmG2QIHfLZIil5b+52NbHfrEsFCIKNRGFmohCTUShJqJwbTuCcDURhI/QRCX3Q/wMrcCcPkRXyWf6EP+l1YcETt76/fehyJg+gJwbqRF865kAAAAASUVORK5CYII=" />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVR4nO3ZTUvDUBSE4eO/K11oaREJuLB/u2AruLozOblr05ZIP6BSg1vPCfNA9hneTe6Nmch01bZdOvDh5NZLmVlGHfnqwKEjh9Pj5LtlH9Fdhmws/Qigd2BuWTjw4sD+bsTBgcay0IgoVCIKlYhCJaJQiShcnx1BuEoE4RMp8Tx2KGpLWVkWwzA8OInUI34M4d2Qr458tGwcaBw4TmJMLeVtZExfyYVlUzUmqKoyQVWVCaqqTFAqE5XKRKUyUU2tzHrscOaZfob+OYbcWUa/xgCfltX5DoDE9VLj6b/fR8RuvgERCx6zV6ROewAAAABJRU5ErkJggg=="
          onClick={onClick}
        />
      </div>
    );
  };

  const sliderSettings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderSettings2 = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <img
          className="nav__iframe"
          src="https://s.afisha.ru/mediastorage/77/9a/e66df9bde71d488e836e37839a77.jpg"
        />
        <nav
          className="nav__sport2"
          style={{
            display: "flex",
          }}
        >
          <div style={{ display: "flex", marginLeft: "6%", marginTop: "2%" }}>
            <div>
              <button class="burger-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </button>
            </div>
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTQuMjgzIDExLjIxN0M1NC4yODMgNS4zODkgNTYuOTMxLjYxIDYyLjI1NS42MWM1LjMyMyAwIDcuOTcxIDQuNzc4IDcuOTcxIDEwLjYwNiAwIDUuODI3LTIuNjQ4IDEwLjYwNS03Ljk3MSAxMC42MDUtNS4zMjQuMDA0LTcuOTcyLTQuNzc0LTcuOTcyLTEwLjYwNVptNy45NzIgNy41NzljMS44NyAwIDIuOTY1LTMuMzUyIDIuOTY1LTcuNTc2cy0xLjA5NS03LjU3NS0yLjk2NS03LjU3NWMtMS44NyAwLTIuOTY2IDMuMzUxLTIuOTY2IDcuNTc1LjAwNCA0LjIyNCAxLjA5NiA3LjU3NiAyLjk2NiA3LjU3NlpNLjAwMyAxLjAyaDQuMDN2Ni4yNjVsNC4yMDQtNi4yNjVoNC44OTRsLTcuMTEgNy4zNDNMMTkuMDAzIDEuMDJ2NC42NjJMNy4zNDcgMTAuMTEybDExLjY1NS0xLjEwNnY0LjQyOUw3LjM0OCAxMi4zM2wxMS42NTUgNC40Mjh2NC42NjJsLTEyLjk4LTcuMzQyIDcuMTEgNy4zNDJIOC4yMzJMNC4wMyAxNS4xNTV2Ni4yNjVIMFYxLjAyMWguMDAzWm0yMS44NzUgMGg0Ljc0N2wtLjcxOCAxMy4xOTggNS44OTktMTMuMTk4aDMuODg2djIwLjM5NmgtNC43NDhsLjcxOS0xMy4xOTgtNS45IDEzLjE5OGgtMy44ODZWMS4wMlptMjEuNDQgMEgzOC41N3YyMC4zOTZoNC43NDh2LTkuMzI0aDQuMDN2OS4zMjRoNC43NDhWMS4wMmgtNC43NDhWOC44OWgtNC4wM1YxLjAyWm00Mi43NjcgMEg3Mi40MTd2MjAuMzk2aDQuNzQ4VjQuMjI0aDQuMTcydjE3LjE5M2g0Ljc0OFYxLjAyWm0yLjE4OCAxMC4xOTZDODguMjczIDUuMzg5IDkwLjkyLjYxIDk2LjI0NC42MWM1LjMyNCAwIDcuOTcyIDQuNzc4IDcuOTcyIDEwLjYwNiAwIDUuODI3LTIuNjQ4IDEwLjYwNS03Ljk3MiAxMC42MDUtNS4zMjMgMC03Ljk3MS00Ljc3NC03Ljk3MS0xMC42MDVabTcuOTc1IDcuNTc5YzEuODcgMCAyLjk2NS0zLjM1MiAyLjk2NS03LjU3NnMtMS4wOTUtNy41NzUtMi45NjUtNy41NzVjLTEuODcgMC0yLjk2NiAzLjM1MS0yLjk2NiA3LjU3NXMxLjA5MiA3LjU3NiAyLjk2NiA3LjU3NlpNMTExLjE1NCAxLjAyaC00Ljc0OHYyMC4zOTZoMy44ODdsNS44OTktMTMuMTk4LS43MTkgMTMuMTk4aDQuNzQ4VjEuMDJoLTMuODg2bC01Ljg5OSAxMy4xOTguNzE4LTEzLjE5OFptMjEuNjk5IDEzLjE5OCA0LjUxOC42OTktLjE0My43Yy0uNzc4IDMuNzg5LTMuMTM2IDYuMjA0LTcuMDIyIDYuMjA0LTUuMzI0IDAtNy44MDEtNC43NzgtNy44MDEtMTAuNjA1IDAtNS44MjggMi40NzctMTAuNjA2IDcuODAxLTEwLjYwNiAzLjc0MyAwIDYuMTI5IDIuNDIgNi45NjYgNS45NzJsLjE0My42MTEtNC42MzIgMS4wNDljLS4zNDYtMi44MjUtMS4xOC00LjYwNS0yLjQ3Ny00LjYwNS0xLjg3IDAtMi43OTEgMy4zNTEtMi43OTEgNy41NzVzLjkyMSA3LjU3NiAyLjc5MSA3LjU3NmMxLjQxMi4wMDcgMi4zMDItMS44OSAyLjY0Ny00LjU3Wk0xNDQuMDc2IDEuMDJoLTQuNzQ1djIwLjM5Nmg0Ljc0OHYtOS4xOGwzLjU5NyA5LjE4SDE1M2wtNS43NTctMTAuNTE4IDUuNjE0LTkuODc4aC00Ljg5NWwtMy44ODYgOS4xNzlWMS4wMjFaIiBmaWxsPSIjZmZmIi8+PC9zdmc+"
                alt=""
              />
              <img
                className="nav__planet-animation"
                style={{
                  backgroundColor: "gray",
                  width: "23px",
                  borderRadius: "90px",
                  marginLeft: "8px",
                }}
                src="https://img.icons8.com/pastel-glyph/64/earth-planet.png"
                alt="earth-planet"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "20%",
              gap: "40px",
              fontSize: "18px",
              marginTop: "1%",
            }}
          >
            <p>Главное</p>
            <p>Мое</p>
            <p>Каналы</p>
            <p>Спорт</p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </nav>
        <div className="nav__description-container">
          <p className="nav__description-p">ГОЛОДНЫЕ ИГРЫ </p>
          <p className="nav__description-ballada">БАЛЛАДА</p>
          <p className="nav__description-ballada">О ЗМЕЯХ И ПЕВЧИХ ПТИЦАХ</p>
          <p className="nav__description7">
            7.2 2023, фантастика, боевикСША2 ч 30 мин 18+
          </p>
          <p className="nav__description7">
            Качество видео: 4K. Качество изображения: HDR. Качество звука: 5.1
            Rus, Eng, Kaz Rus, Kaz, Aze
          </p>
          <p className="nav__description2">
            Как амбициозный юноша стал кровавым тираном? Предыстория антигероя
            главной антиутопии современности
          </p>
        </div>
        <div style={{ width: "500px", marginLeft: "7%" }}>
          <div className="movie_subtitle-button-icon2">
            <button className="movie_button2">
              <PlayArrow />
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://hd.kinopoisk.ru/film/0252df11cc814ab08a2973faa072a96e?content_tab=overview&playingContentId=0252df11cc814ab08a2973faa072a96e&watch="
                target="_blank"
              >
                Смотреть фильм
              </a>
            </button>

            <button className="movie_button1">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="http://www.filmpro.ru/videos/829460"
                target="_blank"
              >
                Трейлер
              </a>
            </button>
            <IconButton
              sx={{
                backgroundColor: "black",
                marginBottom: "-4%",
                color: "white",
              }}
            >
              <BookmarkAddOutlined />
            </IconButton>
          </div>
        </div>
      </div>
      <div>
        <div style={{ backgroundColor: "black" }}>
          <div
            style={{ backgroundColor: "black" }}
            className="container__slider"
          >
            <div className="matches__container">
              <a href="/your-target-page" class="matches__container-link">
                <p class="matches__container-p">
                  Сериалы на основе ваших интересов
                </p>
              </a>

              <Slider {...sliderSettings}>
                <div className="b">
                  <img
                    src="https://fankino.ru/wp-content/uploads/2024/02/Screenshot-4-e1706806689591.png"
                    alt="Match 1"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Андрей Алтыбармакян, Лада
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 5
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://allreleases.ru/wp-content/uploads/2016x1134-19.jpg"
                    alt="Match 2"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Андрей Миронов, Динамо Москва
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 4
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://ubsnet.ru/img/editor/780-6857be135259041e974418f0eb27a3f6.jpeg"
                    alt="Match 3"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Дамир Шарипзянов, Авангард
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 3
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://i.ytimg.com/vi/_V0fEBJ_e2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-ldgkRaYxsbFo4yKAEi_WAzvtog"
                    alt="Match 4"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Василий Атанасов, Торпедо
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 2
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://i.pinimg.com/originals/27/a4/fb/27a4fb17eb66e64d848979c10f01a05d.png"
                    alt="Match 5"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Николай Голдобин, Спартак
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 1
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          <div
            style={{ backgroundColor: "black" }}
            className="container__slider"
          >
            <div className="matches__container">
              <a href="/your-target-page" class="matches__container-link">
                <p class="matches__container-p">Фильмы для вас</p>
              </a>

              <Slider {...sliderSettings}>
                <div className="b">
                  <img
                    src="https://start.ru/images/unsafe/filters:quality(70)/302765054efc42ab82651975bbf4e02b/images-horizontal_poster_1x"
                    alt="Match 1"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Андрей Алтыбармакян, Лада
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 5
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://tengrinews.kz/userdata/news/2022/news_460356/thumb_m/photo_387142.jpeg"
                    alt="Match 2"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Андрей Миронов, Динамо Москва
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 4
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://images.kinorium.com/movie/poster/1656658/h280_50547197.jpg"
                    alt="Match 3"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Дамир Шарипзянов, Авангард
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 3
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://cs14.pikabu.ru/post_img/big/2023/03/30/10/1680198395110695782.png"
                    alt="Match 4"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Василий Атанасов, Торпедо
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 2
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://cdn2.red-media.ru/800x466-2023-01-RM-Vyshka-1280h720.jpg"
                    alt="Match 5"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Николай Голдобин, Спартак
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 1
                  </p>
                </div>
              </Slider>
            </div>
            <div className="matches__container">
              <p class="matches__container-p">Премьера "Холоп 2"</p>

              <Slider {...sliderSettings2}>
                <div className="b2">
                  <img
                    style={{ width: "1300px", height: "600px" }}
                    src="https://api.start.ru/images/unsafe/filters:quality(70)/c4e3d760d48c4351bb363ea97e307ddd/horizontal_poster_15x"
                    alt="Match 1"
                  />
                </div>
                <div className="b2">
                  <img
                    style={{ width: "1300px", height: "600px" }}
                    src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018dfac03541d9c11178978f4ee6df/1152x560"
                    alt="Match 2"
                  />
                </div>
                <div className="b2">
                  <img
                    style={{ width: "1300px", height: "600px" }}
                    src="https://avatars.mds.yandex.net/get-ott/2419418/2a0000018dfac084262aca636cdf7877d0cc/1152x560"
                    alt="Match 3"
                  />
                </div>
                <div className="b2">
                  <img
                    style={{ width: "1300px", height: "600px" }}
                    src="https://avatars.mds.yandex.net/get-ott/374297/2a0000018dfac0dbaff4e300571fa85671b9/1152x560"
                    alt="Match 4"
                  />
                </div>
                <div className="b2">
                  <img
                    style={{ width: "1300px", height: "600px" }}
                    src="https://avatars.mds.yandex.net/get-ott/212840/2a0000018e1c9136e50b87ac84ebb61677a9/1152x560"
                    alt="Match 5"
                  />
                </div>
              </Slider>
            </div>
            <div className="matches__container">
              <a href="/your-target-page" class="matches__container-link">
                <p class="matches__container-p">Фильмы для вас</p>
              </a>

              <Slider {...sliderSettings}>
                <div className="b">
                  <img
                    src="https://api.start.ru/images/unsafe/filters:quality(70)/c4e3d760d48c4351bb363ea97e307ddd/horizontal_poster_15x"
                    alt="Match 1"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Андрей Алтыбармакян, Лада
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 5
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://start.ru/images/unsafe/filters:quality(70)/a11dad21844543aaa96f997d5c63ace0/horizontal_poster_1x"
                    alt="Match 2"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Андрей Миронов, Динамо Москва
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 4
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://i.ytimg.com/vi/p2dpWQdmoQ8/maxresdefault.jpg"
                    alt="Match 3"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Дамир Шарипзянов, Авангард
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 3
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://static.okko.tv/images/v3/22461574?scale=1&quality=80"
                    alt="Match 4"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Василий Атанасов, Торпедо
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 2
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://tv.rambler.ru/epg/pic/6510981?img-format=auto&img-1-resize=height:195,fit:max&img-2-filter=sharpen"
                    alt="Match 5"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Николай Голдобин, Спартак
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 1
                  </p>
                </div>
              </Slider>
            </div>
            <div className="matches__container">
              <a href="/your-target-page" class="matches__container-link">
                <p class="matches__container-p">Что смотреть в выходные</p>
              </a>

              <Slider {...sliderSettings}>
                <div className="b">
                  <img
                    src="https://i.ytimg.com/vi/wNohFm9A7S4/maxresdefault.jpg"
                    alt="Match 1"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Андрей Алтыбармакян, Лада
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 5
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://images.kinorium.com/movie/poster/1670490/h280_51624355.jpg"
                    alt="Match 2"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Андрей Миронов, Динамо Москва
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 4
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://avatars.dzeninfra.ru/get-zen_doc/1781567/pub_64d4612993ac551f96f92a35_64d46252fe3a0d69187b76d1/scale_1200"
                    alt="Match 3"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Дамир Шарипзянов, Авангард
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 3
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://media.alphanews.am/wp-content/uploads/2023/10/11155928/photo_2023-10-11_10-29-43.jpg"
                    alt="Match 4"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Василий Атанасов, Торпедо
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 2
                  </p>
                </div>
                <div className="b">
                  <img
                    src="https://i.ytimg.com/vi/4zor-jRYnFs/maxresdefault.jpg"
                    alt="Match 5"
                  />
                  <p style={{ margin: "0", marginTop: "3%" }}>
                    Николай Голдобин, Спартак
                  </p>
                  <p
                    style={{
                      margin: "0",
                      marginTop: "3%",
                      fontSize: "13px",
                      fontWeight: "100",
                    }}
                  >
                    Хоккейный борт, выпуск 1
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          <FooterSport />
        </div>
      </div>
    </div>
  );
};

export default OnlineCinema;
