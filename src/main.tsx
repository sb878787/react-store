// React Import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Styles Import
import "./index.css";

// Components Import
import App from "./App.tsx";

// Contexts Import
import { LoginProvider } from "./context/LoginContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </BrowserRouter>
  </StrictMode>
);
