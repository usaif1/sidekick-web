import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import { BrowserRouter } from "react-router";

import App from "./App.tsx";
import "./index.css";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
