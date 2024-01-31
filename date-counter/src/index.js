import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);