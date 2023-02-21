// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Components
import App from "./App";

// Store
import { store } from "./store/index";

// Styles
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
