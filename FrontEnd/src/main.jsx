import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar></Navbar>
    <App></App>
  </StrictMode>
);
