import React, { useCallback, useState } from "react";
import ScrapBook from "../components/home/scrapbook";
import Hero from "../components/home/hero";
import Why from "../components/home/why";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Contact from "../components/contact/contact";
import type { ContactFormValues } from "../components/contact/contact";
import ThankYouModal from "../components/thankyou/thank-you";

const Home: React.FC = () => {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleContactSubmit = useCallback(
    async (values: ContactFormValues) => {
      const payload = new URLSearchParams({
        name: values.name.trim(),
        phone_no: values.phone.trim(),
        email: values.email.trim(),
        comments: values.message.trim(),
        websitePage: "Home Page",
      });

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbx4sRCebgf2oSvOtDMOykPIAySDuZDKbW694R3fK6mOR-oQJBGSxdwPetRR8aH376FW/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: payload.toString(),
          }
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data?.status !== "success") {
          throw new Error(data?.message ?? "Unexpected response from server.");
        }

        setIsThankYouOpen(true);
      } catch (error) {
        console.error("Contact form submission failed:", error);

        if (typeof window !== "undefined") {
          window.alert(
            "We could not submit your request right now. Please try again shortly."
          );
        }

        throw error;
      }
    },
    [setIsThankYouOpen]
  );

  const handleCloseThankYou = useCallback(() => {
    setIsThankYouOpen(false);
  }, []);

  return (
    <div className="">
      <Navbar
        heroContent={{
          backgroundImage:
            "https://navishr.s3.ap-south-1.amazonaws.com/NAVIS%20HR%20assets/main.png",
          title: "Which path will you choose for your career?",
          description:
            "NAVIS supports development of the 1.4 billion Indian workforce for India, Japan, Germany, Spain and other countries. We create and upskill people to master foreign languages, train and enhance their skills, and build career prospects.",
          buttonText: "Enquiry Now",
          buttonHref: "/enquiry",
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
        <Contact onSubmit={handleContactSubmit} />
      </div>
      <div className="">
        <Footer />
      </div>
      <ThankYouModal isOpen={isThankYouOpen} onClose={handleCloseThankYou} />
    </div>
  );
};

export default Home;
