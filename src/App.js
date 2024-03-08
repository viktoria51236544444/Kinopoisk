import React from "react";

import MainRoutes from "./routes/MainRoutes";
import Sport from "./components/sportComponents/Sport";
import OscarPage from "./pages/OscarPage";
import OscarGamePage from "./pages/OscarGamePage";
import OnlineCinema from "./components/OnlineCinema/OnlineCinema";
import OscarNomineesPage from "./pages/OscarNomineesPage";

const App = () => {
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
