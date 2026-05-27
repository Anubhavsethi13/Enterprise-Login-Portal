import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </>
  </BrowserRouter>,
);
