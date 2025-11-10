import React from "react";
import { motion, type Variants } from "framer-motion";
import heroImage from "../../assets/img/main.png";
import experienceImage from "../../assets/img/09.jpg";

const heroContainerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1], delay: 0.05 },
  },
};

const secondarySectionVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.12,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
  },
};

const OneStop: React.FC = () => {
  return (
    <div className=" text-gray-900">
      <motion.section
        className="relative isolate overflow-hidden"
        variants={heroContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="absolute inset-0">
          <motion.img
            src={heroImage}
            alt="Team collaborating in an office setting"
            className="h-full w-full object-cover"
            loading="lazy"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <div
            className="absolute inset-0 bg-linear-to-br from-[#0f2d61]/95 via-[#0f2d61]/70 to-[#f1653c]/70"
            aria-hidden="true"
          />
        </div>

        <motion.div
          className="relative mx-auto flex min-h-[65vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-12"
          variants={heroContainerVariants}
        >
          <motion.h1
            className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
            variants={heroItemVariants}
          >
            One-Stop Global Talent Solution
          </motion.h1>
          <motion.div
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium uppercase tracking-widest text-white/90 backdrop-blur-sm"
            variants={badgeVariants}
          >
            Recruitment • Training • Post-Departure Life Guidance
          </motion.div>
          <motion.p
            className="mt-6 max-w-3xl text-base text-white/85 sm:text-lg lg:text-xl"
            variants={heroItemVariants}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          >
            Empowering Indian candidates for Japan & global mobility via a
            proven ecosystem.
          </motion.p>
        </motion.div>

        <div
          className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-[#f1653c]/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-28 bottom-12 h-56 w-56 rounded-full bg-[#224c9a]/40 blur-3xl"
          aria-hidden="true"
        />
      </motion.section>

      <motion.section
        className="relative isolate overflow-hidden py-16"
        variants={secondarySectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 " />
          <div
            className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#0f2d61]/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#f1653c]/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-8 h-48 w-[720px] -translate-x-1/2 rounded-full bg-white/60 blur-2xl"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 via-red-600 to-rose-600 leading-tight sm:leading-tight lg:leading-[1.2] mb-4"
            variants={heroItemVariants}
          >
            Built On Two Decades Of Human Capital Excellence
          </motion.h2>

          <motion.div
            className="h-1 w-24 mx-auto bg-linear-to-r from-transparent via-red-500 to-transparent rounded-full"
            variants={badgeVariants}
          />
        </div>

        <div className="relative mx-auto mt-10 grid w-full max-w-auto items-center gap-12 px-5 sm:px-10 lg:mt-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="order-2 flex flex-col gap-6 text-center sm:gap-8 lg:order-1 lg:text-left"
            variants={secondarySectionVariants}
          >
            <motion.p
              className="mx-auto max-w-2xl text-justify text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-none"
              variants={paragraphVariants}
            >
              At <span className="font-semibold text-[#0f2d61]">NAVIS HR</span>,
              with 23 years of experience in human resources, we offer a
              full-service ecosystem from talent recruitment in India, Japanese
              language and cultural training, visa and deployment support, to
              post-departure life guidance for working abroad — particularly
              under the Government of India-accredited Sending Agency programmes
              such as the Technical Intern Training Program (TITP) Scheme and
              the Specified Skilled Worker (SSW) Scheme. We bring world-class
              language training, cultural readiness, rigorous selection, and
              life-career support — all under one roof.
            </motion.p>
          </motion.div>

          <motion.div
            className="order-1 relative flex flex-1 flex-col gap-8 lg:order-2 lg:items-end"
            variants={secondarySectionVariants}
          >
            <motion.div
              className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl shadow-xl shadow-gray-200 sm:max-w-2xl lg:mx-0"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
            >
              <motion.img
                src={experienceImage}
                alt="NAVIS HR trainees receiving guidance"
                className="w-full object-cover"
                loading="lazy"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default OneStop;
