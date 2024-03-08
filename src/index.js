import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./auth_redux/store/store";
import { Provider } from "react-redux";
import FavoriteContextProvider from "./context/FavoriteContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <FavoriteContextProvider>
        <App />
      </FavoriteContextProvider>
    </Provider>
  </BrowserRouter>
);
