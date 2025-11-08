import React from "react";
import ScrapBook from "../components/home/scrapbook";
import Hero from "../components/home/hero";
import Why from "../components/home/why";
import Navbar from "../components/navbar/navbar";

const Home: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <ScrapBook />
      </div>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <Why />
      </div>
    </div>
  );
};

export default Home;
