import React from "react";
import NavbarOscar from "../components/oscarHomePage/NavbarOscar";

import AllMovies from "../components/oscarHomePage/AllMovies";
import Nominees from "../components/oscarHomePage/Nominees";

import FooterOscar from "../components/oscarHomePage/FooterOscar";

const OscarPage = () => {
  return (
    <div className="oscarPage__container">
      <NavbarOscar />
      <AllMovies />
      <Nominees />
      <FooterOscar />
    </div>
  );
};

export default OscarPage;
