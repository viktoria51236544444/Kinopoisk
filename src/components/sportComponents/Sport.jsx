import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CSS from "../sportComponents/sport.css";

const Sport = () => {
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

  return (
    <div className="sport__container">
      <div>
        <div className="header__sport">
          <div>
            <p className="header__liga">Лиги и чемпионаты</p>
          </div>
          <div>
            <button>Все</button>
          </div>
        </div>
      </div>

      <div className="matches__container">
        <a href="/your-target-page" class="matches__container-link">
          <p class="matches__container-p">
            Обзоры матчей Фонбет чемпионата КХЛ
          </p>
        </a>

        <Slider {...sliderSettings}>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/2439731/2a0000018e0605f1e1b3a74673c45795604d/375x234"
              alt="Match 1"
            />
            <p>3 марта</p>
            <p>Обзор Кубка Гагарина</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018e007989a1ea8dc7b8d2b119f604/375x234"
              alt="Match 2"
            />
            <p>2 марта</p>
            <p>Обзор Кубка Гагарина</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/212840/2a0000018dfbcf8cff358d1c941327405ab1/375x234"
              alt="Match 3"
            />
            <p>1 марта</p>
            <p>Обзор Кубка Гагарина</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018df73795fde4734e7f069cdb01ad/375x234"
              alt="Match 4"
            />
            <p>29 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/239697/2a0000018df6391daac6381f443a76a1dda8/375x234"
              alt="Match 5"
            />
            <p>Салават Юлаев - Трактор </p>
            <p>Плей-офф. Обзор матча №1</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/200035/2a0000018de791ffba674bb0cedb8c0503c9/375x234"
              alt="Match 6"
            />
            <p>26 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018ddc80ead4f2a83bd8f70d055dd7/375x234"
              alt="Match 7"
            />
            <p>24 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018dd3369a33045e6e34e7ae9db8e3/375x234"
              alt="Match 8"
            />
            <p>22 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/212840/2a0000018dc8e4cbaeaf0afd63827642c41e/375x234"
              alt="Match 9"
            />
            <p>20 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/2419418/2a0000018dc3556f139c18cf25cda6302b49/375x234"
              alt="Match 10"
            />
            <p>19 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/224348/2a0000018dbd5348a30db19cc3ddf9d0ab6a/375x234"
              alt="Match 11"
            />
            <p>18 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/223007/2a0000018db84bb2398aa6c0294f7c10a135/375x234"
              alt="Match 12"
            />
            <p>17 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/223007/2a0000018db067471b17b0f816e1f0e1f06b/375x234"
              alt="Match 13"
            />
            <p>15 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/236744/2a0000018da988364bf2e40dd57cde6e5f02/375x234"
              alt="Match 14"
            />
            <p>14 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
          <div className="b">
            <img
              src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000018da485a75d6fed872fa29bbd4810/375x234"
              alt="Match 15"
            />
            <p>13 февраля</p>
            <p>Обзор игрового дня</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sport;
