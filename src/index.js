import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/custom.scss";
import App from "./components/App";
import store from "./store/configureStore";
import { Provider } from "react-redux";
import "./firebase/configFirebase";
import LoaderPage from "./components/LoaderPage";
import { pullDb } from "./actions/usersActions";
import { pullDbEvent } from "./actions/eventsActions";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <LoaderPage />
  </>
);

store
  .dispatch(pullDb())
  .then(() => {
    store
      .dispatch(pullDbEvent())
      .then(() => {
        root.render(
          <Provider store={store}>
            <App />
          </Provider>
        );
      })
      .catch((e) => {
        alert(`Error : ${e}`);
      });
  })
  .catch((e) => {
    alert(`Error : ${e}`);
  });
