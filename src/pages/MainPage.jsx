import React from "react";
import SideBar from "../homepage/SideBar";
import Header from "../homepage/Header";
import FocusTicketsSection from "../homepage/FocusTicketsSection";
import "./mainpage.css";
import WatchSection from "../homepage/WatchSection";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";

import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useTheme } from "../context/Background";
const MainPage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "black",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <Navbar />
      <div className="outer-container">
        <div className="white-container">
          <div className="sidebar-container">
            <SideBar />
          </div>
          <div className="mainpage-content">
            <div
              style={{
                marginTop: "1%",
                marginLeft: "90%",
              }}
              className="theme"
            >
              <WbSunnyOutlinedIcon onClick={toggleTheme} />
              <a
                href="https://web.telegram.org/k/#@moviesbottiik_bot"
                target="blank"
              >
                <img
                  style={{ width: "30px", marginLeft: "2%" }}
                  src="https://img.icons8.com/officel/80/bot.png"
                  alt="bot"
                />{" "}
              </a>
            </div>
            <Header />
            <FocusTicketsSection />
            <WatchSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
