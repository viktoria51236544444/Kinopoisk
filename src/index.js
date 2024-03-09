import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./auth_redux/store/store";
import { Provider } from "react-redux";
import ProductContextProvider from "./context/ProductContextProvider";
import { ThemeProvider } from "./context/Background";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = setupStore();

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ProductContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProductContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
