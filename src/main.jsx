import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { InventoryProvider } from "./contexts/InventoryContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InventoryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InventoryProvider>
  </React.StrictMode>
);
