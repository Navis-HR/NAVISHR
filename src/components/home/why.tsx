import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations/animations";

type CardDetail = {
  title: string;
  image: string;
  alt: string;
};

const cardDetails: CardDetail[] = [
  {
    title: "News",
    image:
      "https://navishr.s3.ap-south-1.amazonaws.com/NAVIS%20HR%20assets/01.jpg",
    alt: "Team members reviewing the latest Navis HR news",
  },
  {
    title: "Navis HR",
    image:
      "https://navishr.s3.ap-south-1.amazonaws.com/NAVIS%20HR%20assets/02.jpg",
    alt: "Navis HR professionals collaborating in the office",
  },
  {
    title: "Jobs Abroad",
    image:
      "https://navishr.s3.ap-south-1.amazonaws.com/NAVIS%20HR%20assets/03.jpg",
    alt: "Navis HR trainees preparing for international careers",
  },
  {
    title: "Navista",
    image:
      "https://navishr.s3.ap-south-1.amazonaws.com/NAVIS%20HR%20assets/04.jpg",
    alt: "Navista training session in progress",
  },
];

const Why: React.FC = () => {
  const tiltClasses = [
    "md:-rotate-3",
    "md:rotate-2",
    "md:-rotate-2",
    "md:rotate-3",
  ];

  return (
    <section className="relative isolate overflow-hidden py-16">
      <div className="absolute inset-0">
        <img
          src="https://navishr.s3.ap-south-1.amazonaws.com/NAVIS%20HR%20assets/09.jpg"
          alt="Navis HR team celebrating together"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/80 " />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center lg:px-8">
        <motion.div
          className="max-w-6xl space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p
            className="text-3xl font-semibold tracking-wide text-[#9f2f2f] sm:text-[40px]"
            variants={itemVariants}
          >
            Why choose us?
          </motion.p>
          <motion.p
            className="text-base leading-relaxed text-[#3c3c3c] sm:text-lg"
            variants={itemVariants}
          >
            A company committed to the growth of its people and building a
            bridge between Japan and India. NAVIS supports the development of
            human resources for India&apos;s population of 1.35 billion, and
            produces talented people with language and skills who can go to
            Japan, India, and overseas.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
        >
          {cardDetails.map((card, index) => (
            <motion.div
              key={card.title}
              className={`group relative mx-auto flex w-full max-w-sm flex-col items-center rounded-xl bg-[#fff8ed] px-4 pb-8 pt-4 text-center shadow-2xl shadow-slate-900/10 transition duration-500 ease-out md:hover:-translate-y-3 md:hover:rotate-0 ${tiltClasses[index]}`}
              variants={itemVariants}
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold uppercase tracking-[0.14em] text-[#363d28]">
                {card.title}
              </h3>
              <hr className="w-full border-t-2 border-green-800" />
              <div className="mt-6 flex w-full flex-col gap-3">
                <button
                  type="button"
                  className="rounded-full border border-[#b2b49a] px-6 py-2 text-sm font-semibold uppercase tracking-wide text-[#394032] transition duration-300 hover:border-[#55603a] hover:text-[#55603a]"
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
