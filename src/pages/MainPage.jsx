import React from "react";
import SideBar from "../homepage/SideBar";
import Header from "../homepage/Header";
import FocusTicketsSection from "../homepage/FocusTicketsSection";
import "./mainpage.css";
import WatchSection from "../homepage/WatchSection";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="outer-container">
        <div className="white-container">
          <div className="sidebar-container">
            <SideBar />
          </div>
          <div className="mainpage-content">
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
