import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Layout from "./components/Layout.jsx";
import DeleteTask from "./components/DeleteTask.jsx";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/delete-task/:id" element={<DeleteTask/>}/>
      </Routes>
    </Router>
  </StrictMode>
);
