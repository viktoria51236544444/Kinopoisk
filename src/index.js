import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./auth_redux/store/store";
import { Provider } from "react-redux";
import ProductContextProvider from "./context/ProductContextProvider";
import { ThemeProvider } from "./context/Background";
import FavoriteContextProvider from "./context/FavoriteContextProvider";
import ReviewsContextProvider from "./context/ReviewsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = setupStore();

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ProductContextProvider>
        <FavoriteContextProvider>
          <ReviewsContextProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </ReviewsContextProvider>
        </FavoriteContextProvider>
      </ProductContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
