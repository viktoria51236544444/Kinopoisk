import React from "react";
import OnlineCinema from "./components/OnlineCinema/OnlineCinema";

import MainRoutes from "./routes/MainRoutes";
import Header from "./homepage/Header";
import SideBar from "./homepage/SideBar";
import Sport from "./components/sportComponents/Sport";
import Navbar from "./homepage/Navbar";
import MainPage from "./pages/MainPage";
import MovieHeader from "./components/movies/MovieHeader";
import FocusTicketsSection from "./homepage/FocusTicketsSection";

const App = () => {
  return (
    <div>
      <OnlineCinema />
    </div>
  );
};

export default App;
