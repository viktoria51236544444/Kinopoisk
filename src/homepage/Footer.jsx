import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footermain__main">
      <div className="footermain__main_upper">
        <div className="footermain__main_upper_left">
          <p className="footermain__main_upper_left_text">
            Смотрите сериалы <br /> в Плюсе с Амедиатекой
          </p>
          <button className="footermain__main_upper_left_button">
            Оформить подписку
          </button>
        </div>
        <div className="footermain__main_upper_right">
          <img
            className="footermain__main_upper_pic"
            src="https://yastatic.net/s3/kinopoisk-frontend/frontend-www/release/_next/static/images/amediateka-promo@2x-e62077c5e51f7292.png"
            alt=""
          />
        </div>
      </div>
      <div className="footermain__main_second"></div>
      <div className="footermain__main_third"></div>
      <div className="footermain__main_fourth"></div>
      <div className="footermain__main_lower"></div>
    </div>
  );
};

export default Footer;
