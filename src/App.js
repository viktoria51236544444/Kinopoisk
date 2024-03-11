import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./homepage/Navbar";
import Footer from "./homepage/Footer";
import SidebarMovies from "./components/product/SidebarMovies";
import FilmPage from "./pages/FilmPage";

const App = () => {
  return (
    <div>
      {/* <FilmPage /> */}
      <Navbar />
      <MainRoutes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
