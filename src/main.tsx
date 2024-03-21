import React from "react";
import ReactDOM from "react-dom";
import App from "./Pages/App.tsx";
import Anders from "./Pages/Anders.tsx";
import Lukas from "./Pages/Lukas.tsx";
import Counter from "./Pages/Overraskelse.tsx";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Hallo from "./Pages/Hallo.tsx";
import Layout from "./layout/";

//@ts-ignore
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/hello" element={<Hallo />} />
          <Route path="/Anders" element={<Anders />} />
          <Route path="/Lukas" element={<Lukas />} />
          <Route path="/Overraskelse" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
