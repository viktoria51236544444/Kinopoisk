import React from "react";

import OscarGameNavbar from "../components/oscarGamePage/OscarGameNavbar";
import OscarGameFooter from "../components/oscarGamePage/OscarGameFooter";
import OscarGame from "../components/oscarGamePage/OscarGame";
const OscarGamePage = () => {
  return (
    <div className="oscarGamePage__container">
      <OscarGameNavbar />
      <OscarGame />
      <OscarGameFooter />
    </div>
  );
};

export default OscarGamePage;
