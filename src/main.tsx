
  import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router-dom";
  import App from "./App.tsx";
  import "./index.css";

  const rootEl = document.getElementById("root")!;
  // Force dark theme on body to use existing CSS variables
  document.body.classList.add("dark");
  createRoot(rootEl).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  