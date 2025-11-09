import React from "react";
import Footer from "../components/footer/footer";
import OneStop from "../components/services/one-stop";
import MainNavbar from "../components/navbar/main-navbar";
import WhyNavis from "../components/services/why-navis";

const Services: React.FC = () => {
  return (
    <div>
      <div className="mb-18">
        <MainNavbar />
      </div>
      <div className="">
        <OneStop />
      </div>
      <div className="">
        <WhyNavis />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
