import React, { useState } from "react";
import "./aidana.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Header = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <div className="header">
        <div className="header_trailer">
          <div className="header_desc">
            <img
              src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655383ed11ee265e6c52ae1a_658a9f49eec8b90f6584e22d/scale_1200"
              width={200}
              alt=""
            />
            <div className="movie_description">
              Алеша открывает портал в мир динозавров и древних людей. <br />
              Самая кассовая анимация в истории российского проката
            </div>
            <div className="movie_castTitle">
              <span>В главных ролях: </span>
              Олег Куликович, Валерий Соловьев, Дмитрий <br />
              Быковский-Ромашов, Сергей Маковецкий
            </div>
            <div className="movie_directors">
              <span>Режиссер:</span>
              Константин Феоктистов
            </div>
            <div className="movie_subtitle">
              Смотрите по подписке
              <button className="movie_button">
                <PlayArrowIcon />
                Смотреть
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <h2>В фокусе</h2>
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={1}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="swiper">
            <SwiperSlide>
              <img
                src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1528730/c6aa037f2fcdc5ef8010660fbd32d976/440x588"
                alt=""
                width={250}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/2381555/d836b51451ad2b5532cd99430ac71128/440x588"
                alt=""
                width={250}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/2381555/96f16547411b200b885ee58a1ec01dab/440x588"
                alt=""
                width={250}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1528730/0b1033550fdc076d152af2f0820b00b3/440x588"
                alt=""
                width={250}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1528730/c6aee130bc1aa9b1a99fe9c156647781/440x588"
                alt=""
                width={250}
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
