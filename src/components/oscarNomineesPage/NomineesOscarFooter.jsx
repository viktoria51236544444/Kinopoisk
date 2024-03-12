import React from "react";
import Telegram from "../oscarHomePage/assets/icons8-телеграмма-app.svg";
import Vk from "../oscarHomePage/assets/icons8-vk.svg";
import "./OscarNomineesPage.css";
const NomineesOscarFooter = () => {
  return (
    <div className="footerOscar__container">
      <div className="footerOscar__container-content">
        <div className="footerOscar__container_socialIcons">
          <div>
            <a
              href="https://t.me/share/url?url=https%3A%2F%2Fwww.kinopoisk.ru%2Fspecial%2Foscar%2Fnominees%2F&text=%D0%9D%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D1%82%D1%8B%20%D0%9E%D1%81%D0%BA%D0%B0%D1%80%D0%B0%202024&utm_source=share2"
              target="_blank"
            >
              <img src={Telegram} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252Fspecial%252Foscar%252Fnominees%252F%26title%3D%25D0%259D%25D0%25BE%25D0%25BC%25D0%25B8%25D0%25BD%25D0%25B0%25D0%25BD%25D1%2582%25D1%258B%2520%25D0%259E%25D1%2581%25D0%25BA%25D0%25B0%25D1%2580%25D0%25B0%25202024%26utm_source%3Dshare2&display=widget"
              target="_blank"
            >
              <img src={Vk} alt="" />{" "}
            </a>
          </div>
        </div>
        <p>© 2003 – 2024, Кинопоиск, 18+</p>
        <p style={{ marginTop: "-5px" }}>
          Oscar Statuette and trademarks OSCAR ©®A.M.P.A.S.®
        </p>
      </div>
    </div>
  );
};

export default NomineesOscarFooter;
