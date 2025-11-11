import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Services from "../pages/services";
import Enquiry from "../pages/enquiry";

const AppRoutes: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="/news" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/navistars" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
