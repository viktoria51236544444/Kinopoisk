import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Header from "./homepage/Header";
import SideBar from "./homepage/SideBar";
import Sport from "./components/sportComponents/Sport";
import Navbar from "./homepage/Navbar";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
