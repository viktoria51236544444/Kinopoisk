import React from "react";
import Telegram from "../oscarHomePage/assets/icons8-телеграмма-app.svg";
import Vk from "../oscarHomePage/assets/icons8-vk.svg";
const OscarGameFooter = () => {
  return (
    <div className="footerOscar__container">
      <div className="footerOscar__container-content">
        <div className="footerOscar__container_socialIcons">
          <div>
            <img src={Telegram} alt="" />
          </div>
          <div>
            <img src={Vk} alt="" />
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

export default OscarGameFooter;
