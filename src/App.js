import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Header from "./homepage/Header";
import SideBar from "./homepage/SideBar";

const App = () => {
  return (
    <div>
      <Header />
      <MainRoutes />
    </div>
  );
};

export default App;
