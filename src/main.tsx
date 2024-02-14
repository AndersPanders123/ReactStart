import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.tsx";
import Anders from "./Pages/Anders.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Hallo from "./Pages/Hallo.tsx";
import Layout from "./layout/";

//TODO: Hvis du vil kan du sette opp forskjellige sider. Dette kan du gjøre ved https://reactrouter.com/en/main eller https://tanstack.com/router/latest
// Da Importerer du et par forskjellige ting. https://reactrouter.com/en/main/router-components/browser-router

// npm install react-router-dom // npm install @tanstack-router?

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/hello" element={<Hallo />} />
          <Route path="/Anders" element={<Anders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
