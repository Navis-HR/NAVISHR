import React from "react";
import { motion, type Variants } from "framer-motion";

const highlights = [
  {
    title: "Life Career",
    description:
      "Build a long-term career path — not just a short overseas assignment.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Extract",
    description:
      "Extract maximum value from skills, opportunities and networks.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Navigate",
    description:
      "Navigate cross-cultural, cross-national working and living environments.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Resource Hub",
    description:
      "Be part of a broader hub for education, recruitment, training and life support.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const introVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1], delay: 0.1 },
  },
};

const OurPhilosophy: React.FC = () => {
  return (
    <motion.section
      className="relative isolate overflow-hidden pb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="relative mx-auto max-w-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-auto text-center"
          variants={introVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 via-red-600 to-rose-600 leading-tight sm:text-4xl lg:text-5xl sm:leading-tight lg:leading-[1.15]"
            variants={introVariants}
          >
            The MEGURU Ecosystem: Beyond Placement
          </motion.h2>
          <motion.div
            className="mt-8 h-1 w-28 mx-auto rounded-full bg-linear-to-r from-transparent via-red-500 to-transparent"
            variants={introVariants}
          />
          <motion.p
            className="mt-8 text-lg text-slate-600 sm:text-xl"
            variants={introVariants}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Our MEGURU framework is not just about sending someone abroad—it’s
            about creating a sustainable cycle of value, growth and mobility.
            The term “MEGURU” (巡る) implies circulation, returning value, and
            continuous movement. Through our ecosystem we help talent and
            organisations alike to
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
          variants={gridVariants}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                />
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-auto rounded-3xl bg-rose-50/60 p-6 text-center shadow-md ring-1 ring-rose-100"
          variants={ctaVariants}
        >
          <p className="text-base text-slate-600 sm:text-lg">
            This means the journey with us doesn’t stop at recruitment — it
            includes upskilling, mentoring, network-building and life-cycle
            support.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurPhilosophy;
