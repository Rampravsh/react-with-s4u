import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NewsProvider } from "./context/NewsContext.jsx";

createRoot(document.getElementById("root")).render(
  <NewsProvider>
    <App />
  </NewsProvider>,
);
