import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Sport from "./components/sportComponents/Sport";
import OnlineCinema from "./components/OnlineCinema/OnlineCinema";

const App = () => {
  return (
    <div>
      <OnlineCinema />
      <MainRoutes />
    </div>
  );
};

export default App;
