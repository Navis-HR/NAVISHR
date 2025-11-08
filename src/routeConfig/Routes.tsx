import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const AppRoutes: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="/news" element={<Home />} />
        <Route path="/navis-hr" element={<Home />} />
        <Route path="/navistars" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
