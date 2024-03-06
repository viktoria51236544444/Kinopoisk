import React from "react";
import CSS from "../sportComponents/sport.css";
const FooterSport = () => {
  return (
    <div style={{ backgroundColor: "black", marginTop: "7%" }}>
      <hr />
      <footer className="footer__sport">
        <div className="container__footer-icons">
          <img
            src="https://img.icons8.com/glyph-neue/64/4D4D4D/vk-com.png"
            alt="vk-com"
          />
          <img
            style={{ width: "23px", height: "23px", marginTop: "2%" }}
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/4D4D4D/external-send-new-mail-button-email-bold-tal-revivo.png"
            alt="external-send-new-mail-button-email-bold-tal-revivo"
          />
          <img
            src="https://img.icons8.com/glyph-neue/64/4D4D4D/youtube-play.png"
            alt="youtube-play"
          />
          <img
            style={{ width: "25px", height: "25px", marginTop: "1.8%" }}
            src="https://img.icons8.com/ios-filled/50/4D4D4D/yandex-zen.png"
            alt="yandex-zen"
          />
          <img
            src="https://img.icons8.com/glyph-neue/64/4D4D4D/tiktok.png"
            alt="tiktok"
          />
        </div>
        <div className="container__footer-sport">
          <p>Мы всегда готовы вам помочь.</p>
          <p style={{ fontWeight: "600", cursor: "pointer" }}>Задать вопрос</p>
        </div>
        <div style={{ display: "flex", color: "gray" }}>
          <div
            style={{
              margin: "0",
              marginTop: "1.4%",
              fontSize: "13px",
              fontWeight: "500",
              marginLeft: "4%",
            }}
          >
            <p> © 2003-2024 Кинопоиск. 18+</p>
            <p>
              Федеральные каналы доступны для бесплатного просмотра
              круглосуточно
            </p>
            <p>
              HBO ® and related service marks are the property of Home Box
              Office, Inc
            </p>
            <p>
              ООО «Кинопоиск», адрес местонахождения: 115035, Россия, г. Москва,
              ул. Садовническая, д. 82, стр. 2, пом. 9А01
            </p>
            <p>
              Адрес для обращений пользователей: kinopoisk@support.yandex.ru
            </p>
            <p>Соглашение Правила рекомендаций Справка</p>
          </div>
          <div>
            <p
              style={{
                margin: "0",
                marginTop: "58%",
                fontSize: "13px",
                fontWeight: "500",
                marginLeft: "270%",
                width: "200px",
              }}
            >
              Проект компании Яндекс
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSport;
