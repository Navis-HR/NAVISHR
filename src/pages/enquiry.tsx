import React, { useCallback } from "react";
import MainNavbar from "../components/navbar/main-navbar";
import EnquiryForm, {
  type EnquiryFormValues,
} from "../components/enquiry/enquiry-form";
import Footer from "../components/footer/footer";

const ENQUIRY_FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycby9OX8hGoURpUdPHQZ45LmTXLGIxuzq7eg1Oi8LSFiTCsnZvPgRwMmeuUU0wVb5flad/exec";

const Enquiry: React.FC = () => {
  const handleEnquirySubmit = useCallback(async (values: EnquiryFormValues) => {
    const payload = new URLSearchParams({
      name: values.name.trim(),
      phone_no: values.phone_no.trim(),
      whatsapp_no: values.whatsapp_no.trim(),
      mail: values.mail.trim(),
      gender: values.gender.trim(),
      age: values.age.trim(),
      state: values.state.trim(),
      education: values.education.trim(),
      experience: values.experience.trim(),
      websitePage: "Enquiry Page",
    });

    try {
      const response = await fetch(ENQUIRY_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data?.status !== "success") {
        throw new Error(
          data?.message ?? "Unexpected response from the server."
        );
      }
    } catch (submissionError) {
      console.error("Enquiry form submission failed:", submissionError);

      if (typeof window !== "undefined") {
        window.alert(
          "We could not submit your enquiry right now. Please try again shortly."
        );
      }

      throw submissionError;
    }
  }, []);

  return (
    <div className="bg-linear-to-b from-red-50 via-white to-slate-50 poppins">
      <div className="mb-18">
        <MainNavbar />
      </div>
      <div className="">
        <EnquiryForm onSubmit={handleEnquirySubmit} />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Enquiry;
