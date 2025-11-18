import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RadioMap from "./RadioMap.jsx";
import PracticeOnRadio from "./PracticeOnRadio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PracticeOnRadio />
  </StrictMode>
);
