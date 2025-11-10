import React from "react";
import Footer from "../components/footer/footer";
import OneStop from "../components/services/one-stop";
import MainNavbar from "../components/navbar/main-navbar";
import WhyNavis from "../components/services/why-navis";
import ServicesOffered from "../components/services/services-offered";
import OurPhilosophy from "../components/services/our-philosophy";
import Meguru from "../components/services/meguru";

const Services: React.FC = () => {
  return (
    <div className="bg-linear-to-b from-red-50 via-white to-slate-50">
      <div className="mb-18">
        <MainNavbar />
      </div>
      <div className="">
        <OneStop />
      </div>
      <div className="">
        <WhyNavis />
      </div>
      <div className="">
        <ServicesOffered />
      </div>
      <div className="">
        <OurPhilosophy />
      </div>
      <div className="">
        <Meguru />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
