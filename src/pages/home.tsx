import React from "react";
import ScrapBook from "../components/home/scrapbook";
import Hero from "../components/home/hero";
import Why from "../components/home/why";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Contact from "../components/contact/contact";
import MainBackground from "../assets/img/main.png";

const Home: React.FC = () => {
  return (
    <div className="">
      <Navbar
        heroContent={{
          backgroundImage: MainBackground,
          title: "Which path will you choose for your career?",
          description:
            "NAVIS supports development of the 1.4 billion Indian workforce for India, Japan, Germany, Spain and other countries. We create and upskill people to master foreign languages, train and enhance their skills, and build career prospects.",
          buttonText: "Enquiry Now",
          buttonHref: "/contact-us",
        }}
      />
      <div className="hidden md:block">
        <ScrapBook />
      </div>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <Why />
      </div>
      <div>
        <Contact />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
