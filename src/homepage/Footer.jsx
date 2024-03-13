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
            width={600}
            className="footermain__main_upper_pic"
            src="https://yastatic.net/s3/kinopoisk-frontend/frontend-www/release/_next/static/images/amediateka-promo@2x-e62077c5e51f7292.png"
            alt=""
          />
        </div>
      </div>
      <div style={{ backgroundColor: "black", marginTop: "7%" }}>
        <footer>
          <div className="home-icons">
            <a href="https://vk.com/kinopoisk" target="_blank">
              <img
                style={{ width: "23px", height: "23px", marginTop: "2%" }}
                src="https://img.icons8.com/glyph-neue/64/4D4D4D/vk-com.png"
                alt="vk-com"
              />
            </a>
            <a href="https://t.me/plus_yndx" target="_blank">
              <img
                style={{ width: "23px", height: "23px", marginTop: "2%" }}
                src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/4D4D4D/external-send-new-mail-button-email-bold-tal-revivo.png"
                alt="external-send-new-mail-button-email-bold-tal-revivo"
              />
            </a>
            <a href="https://www.youtube.com/@kinopoisk-extra" target="_blank">
              <img
                style={{ width: "23px", height: "23px", marginTop: "2%" }}
                src="https://img.icons8.com/glyph-neue/64/4D4D4D/youtube-play.png"
                alt="youtube-play"
              />
            </a>
            <a
              href="https://dzen.ru/kinopoisk.ru?utm_referrer=hd.kinopoisk.ru"
              target="_blank"
            >
              <img
                style={{ width: "25px", height: "25px", marginTop: "1.8%" }}
                src="https://img.icons8.com/ios-filled/50/4D4D4D/yandex-zen.png"
                alt="yandex-zen"
              />
            </a>
            <a href="https://www.tiktok.com/@kinopoisk" target="_blank">
              <img
                style={{ width: "23px", height: "23px", marginTop: "2%" }}
                src="https://img.icons8.com/glyph-neue/64/4D4D4D/tiktok.png"
                alt="tiktok"
              />
            </a>
          </div>
          {/* <div>
            <p>Мы всегда готовы вам помочь.</p>
            <p style={{ fontWeight: "600", cursor: "pointer" }}>
              Задать вопрос
            </p>
          </div> */}
        </footer>
      </div>
      <div className="footermain__main_second">
        <ul>
          <li>
            <a
              href="https://yandex.ru/jobs/vacancies?services=kinopoisk"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Вакансии
            </a>
          </li>
          <li>
            <a
              href="https://yandex.ru/adv/products/display/kinopoiskmedia"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Реклама
            </a>
          </li>{" "}
          <li>
            <a
              href="/docs/usage/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Соглашение
            </a>
          </li>{" "}
          <li>
            <a
              href="https://www.kinopoisk.ru/legal/recommendations/ru/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Правила рекомендаций
            </a>
          </li>{" "}
          <li>
            <a
              href="https://yandex.ru/support/kinopoisk/index.html"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Справка
            </a>
          </li>{" "}
          <li>
            <a
              href="/media/rubric/19/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Блог
            </a>
          </li>
          <li>
            <a
              href="/special/index/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Кинопоиск PRO
            </a>
          </li>
          <li>
            <a
              href="https://kinopoisk.userecho.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Предложения
            </a>
          </li>
          <li>
            <a
              href="/lists/movies/?b=films"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Все фильмы
            </a>
          </li>
          <li>
            <a
              href="/lists/movies/?b=series"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Все сериалы
            </a>
          </li>
          <li>
            <a
              href="/lists/movies/recommendation/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__content-link styles_contentLink__mRKj9"
              data-tid="2e9b873"
            >
              Что посмотреть
            </a>
          </li>
        </ul>
      </div>
      <div className="footermain__main_third"></div>
      <div className="footermain__main_fourth"></div>
      <div className="footermain__main_lower">
        <span>
          ©&nbsp;2003 — 2024{" "}
          <a
            class="styles_bottomSectionInfoLink__Z8Szl footer__bottom-info-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            data-tid="2e9b873"
          >
            Кинопоиск
          </a>
        </span>{" "}
        <span>18+</span>
        <div className="footmenu">
          <ul>
            <li>
              <a
                href="https://tv.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
                class="styles_bottomSectionMenuLink__oh5dU footer__bottom-link"
                data-tid="2e9b873"
              >
                Телепрограмма
              </a>
            </li>
            <li>
              <a
                href="https://music.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
                class="styles_bottomSectionMenuLink__oh5dU footer__bottom-link"
                data-tid="2e9b873"
              >
                Музыка
              </a>
            </li>
            <li>
              <a
                href="https://afisha.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
                class="styles_bottomSectionMenuLink__oh5dU footer__bottom-link"
                data-tid="2e9b873"
              >
                Афиша
              </a>
            </li>
            <li>
              <a
                href="https://bookmate.ru"
                target="_blank"
                rel="noopener noreferrer"
                class="styles_bottomSectionMenuLink__oh5dU footer__bottom-link"
                data-tid="2e9b873"
              >
                Букмейт
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
