import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Handshake,
  Plane,
  Rocket,
  Search,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import MeguruGraphic from "../../assets/img/Meguru.png";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  lightColor: string;
  borderColor: string;
  iconColor: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

const stepCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] },
  },
};

const circleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const svgVariants: Variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.3,
    },
  },
};

const Meguru: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Candidate Identification & Screening",
      description: "Sourcing, aptitude/language testing, selection.",
      icon: Search,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-500",
      iconColor: "text-green-500",
    },
    {
      number: "02",
      title: "Pre-Deployment Training",
      description:
        "Japanese language (fast-track), culture & manner training, English if needed.",
      icon: GraduationCap,
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      borderColor: "border-yellow-500",
      iconColor: "text-yellow-500",
    },
    {
      number: "03",
      title: "Visa & Deployment Support",
      description:
        "Documentation, partner company matching, travel & arrival orientation.",
      icon: Plane,
      color: "bg-pink-500",
      lightColor: "bg-pink-50",
      borderColor: "border-pink-500",
      iconColor: "text-pink-500",
    },
    {
      number: "04",
      title: "On-site Life Support",
      description:
        "Post-arrival adaptation, career counselling, ongoing mentoring.",
      icon: Handshake,
      color: "bg-gray-400",
      lightColor: "bg-gray-50",
      borderColor: "border-gray-400",
      iconColor: "text-gray-400",
    },
    {
      number: "05",
      title: "Future Pathways",
      description:
        "Return support, upskilling, new assignments, inclusion in MEGURU resource hub.",
      icon: Rocket,
      color: "bg-red-700",
      lightColor: "bg-red-50",
      borderColor: "border-red-700",
      iconColor: "text-red-700",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative min-h-screen py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-auto mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          className="mx-auto max-w-4xl text-center mb-8"
        >
          <motion.h2
            variants={containerVariants}
            className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 via-red-600 to-rose-600 leading-tight sm:text-4xl lg:text-5xl sm:leading-tight lg:leading-[1.15]"
          >
            Our Process
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="mt-6 h-1 w-28 mx-auto rounded-full bg-linear-to-r from-transparent via-red-500 to-transparent"
          />
          <motion.p
            variants={containerVariants}
            className="mt-6 text-lg text-slate-600 sm:text-xl"
          >
            From India to Placement and Beyond
          </motion.p>
        </motion.div>

        {/* Process Steps with Connection */}
        <div className="relative">
          {/* Connecting Path - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 px-20">
            <motion.svg
              variants={containerVariants}
              className="w-full h-40"
              preserveAspectRatio="none"
              viewBox="0 0 1200 160"
            >
              <defs>
                <linearGradient
                  id="pathGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#22c55e", stopOpacity: 1 }}
                  />
                  <stop
                    offset="25%"
                    style={{ stopColor: "#eab308", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#ec4899", stopOpacity: 1 }}
                  />
                  <stop
                    offset="75%"
                    style={{ stopColor: "#6b7280", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ef4444", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <motion.path
                variants={svgVariants}
                d="M 60 80 Q 240 20, 360 80 T 660 80 T 960 80 T 1140 80"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8 8"
              />
              {/* Connection dots */}
              <motion.circle
                variants={circleVariants}
                cx="60"
                cy="80"
                r="8"
                fill="#22c55e"
              />
              <motion.circle
                variants={circleVariants}
                cx="360"
                cy="80"
                r="8"
                fill="#eab308"
              />
              <motion.circle
                variants={circleVariants}
                cx="660"
                cy="80"
                r="8"
                fill="#ec4899"
              />
              <motion.circle
                variants={circleVariants}
                cx="960"
                cy="80"
                r="8"
                fill="#6b7280"
              />
              <motion.circle
                variants={circleVariants}
                cx="1140"
                cy="80"
                r="8"
                fill="#ef4444"
              />
            </motion.svg>
          </div>

          {/* Steps Grid */}
          <motion.div
            variants={staggerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepCardVariants}
                className="flex flex-col items-center relative"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-full w-1 h-8 -ml-0.5 bg-linear-to-b from-gray-300 to-transparent mt-8"></div>
                )}

                {/* Number Circle */}
                <motion.div
                  variants={circleVariants}
                  className={`relative z-20 w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-xl transform transition-all hover:scale-110 border-4 border-white`}
                  whileHover={{
                    scale: 1.12,
                    boxShadow: "0 25px 45px rgba(0,0,0,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 12 }}
                >
                  <span className="text-3xl font-black text-white">
                    {step.number}
                  </span>
                </motion.div>

                {/* Card */}
                <motion.div
                  variants={stepCardVariants}
                  className={`${step.lightColor} rounded-2xl p-6 w-full transform transition-all hover:shadow-2xl hover:-translate-y-2 border-2 ${step.borderColor} bg-opacity-50 backdrop-blur-sm`}
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ rotate: -8, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.2,
                    }}
                    className="flex justify-center mb-4"
                  >
                    <step.icon
                      className={`h-12 w-12 ${step.iconColor}`}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center min-h-14 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-700 text-center leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={containerVariants}
        className="mt-16 flex justify-center"
      >
        <motion.img
          variants={containerVariants}
          src={MeguruGraphic}
          alt="Meguru Resource Hub mission diagram"
          className="w-full max-w-4xl "
        />
      </motion.div>
    </motion.section>
  );
};

export default Meguru;
