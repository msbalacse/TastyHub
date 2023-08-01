import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleProvider } from "./context/googleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleProvider>
      <App />
    </GoogleProvider>
  </React.StrictMode>
);
