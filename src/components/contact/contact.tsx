import React from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiMapPin,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import ContactImage from "../../assets/img/06.jpg";
import {
  containerVariants,
  itemVariants,
  createSlideAnimation,
} from "../animations/animations";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface ContactProps {
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
}

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const formValues: ContactFormValues = {
      name: (formData.get("name") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      phone: (formData.get("phone") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
    };

    if (!onSubmit) {
      console.warn(
        "Contact form submitted without onSubmit handler.",
        formValues
      );
      formElement.reset();
      return;
    }

    try {
      await onSubmit(formValues);
      formElement.reset();
    } catch (submissionError) {
      console.error("Contact form submission failed:", submissionError);
    }
  };

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0">
        <img
          src={ContactImage}
          alt="Navis together"
          className="h-full w-full object-cover "
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/90" aria-hidden="true" />
      </div>

      <motion.div
        className="relative mx-auto flex w-full max-w-auto flex-col gap-12 px-5 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="grid gap-8 rounded-[32px] bg-white p-6 shadow-[0_20px_45px_-15px_rgba(217,66,66,0.25)] backdrop-blur-sm md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:p-10"
          variants={containerVariants}
        >
          <motion.div
            className="md:col-span-2 flex flex-col items-center gap-3 text-center"
            variants={itemVariants}
          >
            <motion.h2
              className="relative text-3xl font-bold tracking-tight text-[#d53d3d] sm:text-4xl"
              variants={itemVariants}
            >
              Contact Us
              <motion.span
                className="mt-3 block h-1 w-24 translate-x-1/2 rounded-full bg-[#ce0000]"
                variants={itemVariants}
              />
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            {...createSlideAnimation("left", 0.1)}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.h3
                className="text-2xl font-semibold text-slate-900"
                variants={itemVariants}
              >
                Get in Touch
              </motion.h3>
              <motion.span
                className="mt-2 block h-1 w-16 rounded-full bg-[#ce0000]"
                variants={itemVariants}
              />
            </motion.div>

            <motion.form
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              onSubmit={handleFormSubmit}
            >
              <motion.label
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 transition focus-within:border-[#ce0000]"
                variants={itemVariants}
              >
                <FiUser className="text-2xl text-[#ce0000]" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border-none bg-transparent text-base text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  aria-label="Your name"
                  required
                />
              </motion.label>

              <motion.label
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 transition focus-within:border-[#ce0000]"
                variants={itemVariants}
              >
                <FiMail className="text-2xl text-[#ce0000]" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border-none bg-transparent text-base text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  aria-label="Your email"
                  required
                />
              </motion.label>

              <motion.label
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 transition focus-within:border-[#ce0000]"
                variants={itemVariants}
              >
                <FiPhone className="text-2xl text-[#ce0000]" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone No"
                  className="w-full border-none bg-transparent text-base text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  aria-label="Your phone number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  title="Please enter a 10-digit phone number"
                  onInput={(event) => {
                    const input = event.currentTarget;
                    input.value = input.value.replace(/\D/g, "").slice(0, 10);
                  }}
                />
              </motion.label>

              <motion.label
                className="group flex gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 transition focus-within:border-[#ce0000]"
                variants={itemVariants}
              >
                <FiMessageSquare className="mt-1 text-2xl text-[#ce0000]" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full border-none bg-transparent text-base text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  aria-label="Your message"
                  required
                />
              </motion.label>

              <motion.button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ce0000] bg-[#d53d3d] cursor-pointer"
                variants={itemVariants}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            {...createSlideAnimation("right", 0.2)}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.h3
                className="text-2xl font-semibold text-slate-900"
                variants={itemVariants}
              >
                Contact Details
              </motion.h3>
              <motion.span
                className="mt-2 block h-1 w-16 rounded-full bg-[#ce0000]"
                variants={itemVariants}
              />
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div
                className="flex gap-4 rounded-3xl bg-white p-5 shadow-lg shadow-[#d53d3d]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff5f2] hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe1db] text-[#ce0000]">
                  <FiMapPin className="text-xl" />
                </div>
                <div className="w-[85%]">
                  <p className="text-sm font-semibold text-slate-900">
                    Address
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    First floor, JP Chambers, No. 22/1, 5th Block, 46th Cross
                    Road, Jayanagar, Bangalore - 560041, India
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 rounded-3xl bg-white p-5 shadow-lg shadow-[#d53d3d]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff5f2] hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe1db] text-[#ce0000]">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <a
                    href="tel:+916366119713"
                    className="mt-1 block text-sm text-slate-600 hover:text-[#ce0000]"
                  >
                    +91 6366119713
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 rounded-3xl bg-white p-5 shadow-lg shadow-[#d53d3d]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff5f2] hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe1db] text-[#ce0000]">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <a
                    href="mailto:info@navishr.com"
                    className="mt-1 block text-sm text-slate-600 hover:text-[#ce0000]"
                  >
                    info@navishr.com
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-4 flex flex-col items-center justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.p
                className="text-sm font-semibold uppercase tracking-wide text-slate-500"
                variants={itemVariants}
              >
                Follow Us
              </motion.p>
              <motion.div
                className="mt-3 flex items-center gap-4"
                variants={containerVariants}
              >
                <motion.a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ce0000] shadow-md shadow-[#d53d3d]/15 transition hover:-translate-y-0.5 hover:text-[#ff845f]"
                  aria-label="Facebook"
                  variants={itemVariants}
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ce0000] shadow-md shadow-[#d53d3d]/15 transition hover:-translate-y-0.5 hover:text-[#ff845f]"
                  aria-label="Instagram"
                  variants={itemVariants}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ce0000] shadow-md shadow-[#d53d3d]/15 transition hover:-translate-y-0.5 hover:text-[#ff845f]"
                  aria-label="YouTube"
                  variants={itemVariants}
                >
                  <FaYoutube />
                </motion.a>
                <motion.a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ce0000] shadow-md shadow-[#d53d3d]/15 transition hover:-translate-y-0.5 hover:text-[#ff845f]"
                  aria-label="LinkedIn"
                  variants={itemVariants}
                >
                  <FaLinkedinIn />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
