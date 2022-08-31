import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/index.css";
import "./stylesheets/holder.css";
import "./stylesheets/components.css";
import "./stylesheets/MUI.css";
import "remixicon/fonts/remixicon.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
