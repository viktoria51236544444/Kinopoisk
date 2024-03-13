import React, { useState } from "react";
import "./focusTicket.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {
  Pagination,
  Controller,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FocusTicketsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.activeIndex);
  // };

  return (
    <div>
      <div className="focus-ticket-section-wrapper">
        <h2>В фокусе</h2>
        <Swiper
          className="swiper-focus"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
          }}
          // onSlideChange={(swiper) => handleSlideChange(swiper)}
          // speed={1500}
        >
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1528730/c6aa037f2fcdc5ef8010660fbd32d976/440x588"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/2381555/d836b51451ad2b5532cd99430ac71128/440x588"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/2381555/96f16547411b200b885ee58a1ec01dab/440x588"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1528730/0b1033550fdc076d152af2f0820b00b3/440x588"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1528730/c6aee130bc1aa9b1a99fe9c156647781/440x588"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <div className="swiper-button-next swiper-button-next3"></div>
          <div className="swiper-button-prev swiper-button-prev3"></div>
        </Swiper>
      </div>
      <div className="ticket-section-wrapper">
        <h2>Билеты в кино</h2>
        <Swiper
          className="swiper-focus"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
          }}
          // onSlideChange={(swiper) => handleSlideChange(swiper)}
          // speed={1500}
        >
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/0626de3c-b731-4f72-9bd0-906aacc3bbe1/300x450"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/56d4e2fb-f71c-419e-845e-d667e57f92ad/300x450"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/6877edf2-5dc5-4fcd-9daf-8c7d5e45b52c/300x450"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-image/10809116/50522549-28a0-407d-b03a-be5dfcd2e7a0/300x450"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/4f426122-87e9-46f8-b775-f64f0e44c8d3/300x450"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/de03e962-cea1-43e0-801b-249704a5ebbb/300x450"
              alt=""
              width={250}
            />
          </SwiperSlide>
          <div className="swiper-button-next swiper-button-next1"></div>
          <div className="swiper-button-prev swiper-button-prev1"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default FocusTicketsSection;
