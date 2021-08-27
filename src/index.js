import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <FavoritesContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
