import React from "react";
import { useFavorite } from "../../context/FavoriteContextProvider";
import FooterSport from "../sportComponents/FooterSport";
import Slider from "react-slick";
import Navbar from "../../homepage/Navbar";

const Favorite = () => {
  const { favorite, removeFavorite } = useFavorite();

  const handleRemoveFavorite = (item) => {
    removeFavorite(item);
  };
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
        я
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
    <div>
      <Navbar />
      <div>
        <div style={{ height: "800px", marginTop: "-10%", color: "white" }}>
          <img
            style={{ height: "800px" }}
            className="nav__iframe"
            src="https://wallpapercave.com/wp/wp7006451.jpg"
          />{" "}
        </div>
        <div style={{ backgroundColor: "black", marginTop: "-2%" }}>
          <div>
            <p
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: "30px",
                marginLeft: "2%",
              }}
            >
              Буду смотреть
            </p>
            <Slider {...sliderSettings}>
              {favorite.map((item) => (
                <div key={item.slug} className="b5">
                  <img
                    src={item.poster}
                    alt={item.title}
                    style={{ width: "370px", height: "500px" }}
                  />

                  <button
                    style={{
                      borderRadius: "5px",
                      marginTop: "3%",
                      padding: "10px",
                      border: "1px solig gray",
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={() => handleRemoveFavorite(item)}
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </Slider>
          </div>
          <FooterSport />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
