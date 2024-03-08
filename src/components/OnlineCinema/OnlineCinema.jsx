import React from "react";
import css from "../sportComponents/sport.css";
const OnlineCinema = () => {
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
            7.2 2023, фантастика, боевикСША2 ч 30 мин18+
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
      </div>
    </div>
  );
};

export default OnlineCinema;
