import React from "react";
import NavbarOscar from "../components/oscarHomePage/NavbarOscar";

import AllMovies from "../components/oscarHomePage/AllMovies";
import Nominees from "../components/oscarHomePage/Nominees";
import OscarFacts from "../components/oscarHomePage/OscarFacts";
import FooterOscar from "../components/oscarHomePage/FooterOscar";

const OscarPage = () => {
  return (
    <div className="oscarPage__container">
      <NavbarOscar />

      <AllMovies />
      <Nominees />
      <OscarFacts />
      <FooterOscar />
    </div>
  );
};

export default OscarPage;
