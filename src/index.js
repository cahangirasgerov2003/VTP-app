import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/custom.scss";
import App from "./components/App";
import store from "./store/configureStore";
import { Provider } from "react-redux";
import "./firebase/configFirebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
