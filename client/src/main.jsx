import { BrowserRouter } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ScrollToTop from "./helpers/ScrollToTop";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
      <ScrollToTop />
    </StrictMode>
  </BrowserRouter>
);
