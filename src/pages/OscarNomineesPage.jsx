import React from "react";
import NavbarOscar from "../components/oscarHomePage/NavbarOscar";
import NomineesOscar from "../components/oscarNomineesPage/NomineesOscar";
import FooterOscar from "../components/oscarHomePage/FooterOscar";
import NomineesOscarNavbar from "../components/oscarNomineesPage/NomineesOscarNavbar";
import NomineesOscarFooter from "../components/oscarNomineesPage/NomineesOscarFooter";

const OscarNomineesPage = () => {
  return (
    <div className="oscarNomineesPage__container">
      <NomineesOscarNavbar />
      <NomineesOscar />
      <NomineesOscarFooter />
    </div>
  );
};

export default OscarNomineesPage;
