import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header/Header";
import Bottom from "./components/Bottom/Bottom";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <div className="mt-24">
        <App />
      </div>
      <Bottom />
    </Provider>
  </React.StrictMode>
);
