import {
  BriefcaseBusiness,
  Languages,
  PlaneTakeoff,
  LifeBuoy,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const SERVICES = [
  {
    title: "Talent Recruitment (India)",
    highlights: [
      "Sourcing and screening Indian candidates for placements in Japan and other global destinations",
      "Local recruitment logistics, interviews, aptitude & language pre-screening",
      "Selecting candidates for host-country requirements (TITP/SSW) as well as local personnel roles",
      "Compliance with India-Japan bilateral frameworks",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Japanese Language & Culture Training",
    highlights: [
      "Intensive language training delivered by native Japanese instructors, focusing on business & work-life in Japan",
      "Fast-track to JLPT N3 level in approx. five months, plus cultural, manner & life-skills training needed for working/living in Japan",
      "Modules on Japanese work culture, etiquette, communication, living abroad preparedness",
      "Training centres with dedicated courses since 2002+ (e.g., Navis Nihongo Training Center) in India.",
    ],
    icon: Languages,
  },
  {
    title: "Visa Procedures & Host Country Deployment",
    highlights: [
      "Managing documentation, visa formalities under TITP/SSW schemes",
      "Coordinating with host companies in Japan, placement logistics",
      "Pre-departure orientation (accommodation, travel, arrival support)",
      "Life support network in Japan (or host country) for after arrival",
    ],
    icon: PlaneTakeoff,
  },
  {
    title: "Post-Departure Life & Career Guidance",
    highlights: [
      "Ongoing support once candidates are deployed: adapting to life abroad, career progression, compliance with host country regulations",
      "Return placement support (for those who complete their tenure and wish to transition back or move to new opportunities)",
      "Lifelong career-ecosystem access via the MEGURU platform: training, upskilling, re-deployment options",
    ],
    icon: LifeBuoy,
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

const ServicesOffered = () => {
  return (
    <motion.section
      className="relative isolate overflow-hidden pb-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative mx-auto flex max-w-auto flex-col gap-16 px-6 sm:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={headerVariants}
        >
          <motion.h2
            className="mt-6 text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 via-red-600 to-rose-600 leading-tight sm:text-4xl lg:text-5xl sm:leading-tight lg:leading-[1.15]"
            variants={headerVariants}
          >
            Our Core Services
          </motion.h2>
          <motion.div
            className="mt-8 h-1 w-28 mx-auto rounded-full bg-linear-to-r from-transparent via-red-500 to-transparent"
            variants={headerVariants}
          />
        </motion.div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 xl:gap-12"
          variants={gridVariants}
        >
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-rose-100/70 bg-white/80 p-8 shadow-lg shadow-rose-200/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-300/80 hover:shadow-rose-300/70"
              variants={cardVariants}
            >
              <span className="pointer-events-none absolute right-8 top-8 text-5xl font-bold text-rose-200/70 transition-colors duration-300 group-hover:text-rose-300/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-200 transition-all duration-300 group-hover:bg-rose-500 group-hover:text-white group-hover:ring-rose-400">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900 sm:text-2xl">
                  {service.title}
                </h3>
                <motion.ul
                  className="mt-6 space-y-3 text-sm text-slate-600 sm:text-base"
                  variants={gridVariants}
                >
                  {service.highlights.map((highlight) => (
                    <motion.li
                      key={highlight}
                      className="flex items-start gap-3 rounded-2xl bg-rose-50/80 px-4 py-3 ring-1 ring-rose-100 transition duration-300 group-hover:bg-rose-100 group-hover:ring-rose-200"
                      variants={listItemVariants}
                    >
                      <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-rose-400" />
                      <span className="flex-1">{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesOffered;
