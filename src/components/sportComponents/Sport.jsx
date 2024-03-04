import React from "react";
import CSS from "../sportComponents/sport.css";
const Sport = () => {
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
    </div>
  );
};

export default Sport;
