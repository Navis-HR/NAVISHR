import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Layers,
  Navigation,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Card = {
  title: string;
  description: string;
  image: string;
  badge: string;
};

const cards: Card[] = [
  {
    title: "23 Years' Experience",
    description:
      "23 years’ experience in the Indian-Japanese talent corridor. We’ve been active since the early 2000s and by now have the institutional maturity to deliver reliable outcomes.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    badge: "Legacy & Trust",
  },
  {
    title: "End-to-End Service Model",
    description:
      "The complete (“one-stop”) journey: recruitment → Japanese language & culture training → visa & deployment → host-country placement → post-departure support.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    badge: "Integrated Journey",
  },
  {
    title: "Accredited Sending Agency",
    description:
      "Operating under the TITP and SSW schemes, fully aligned with the India-Japan bilateral human-resource exchange frameworks.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    badge: "Global Compliance",
  },
  {
    title: "Own Strict Recruitment Process",
    description:
      "Leveraging our 23-year database and network, we recruit personnel through rigorous selection across aptitude, language capacity, and cultural fit.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    badge: "Quality First",
  },
  {
    title: "High-Quality Japanese Training",
    description:
      "Native Japanese instructors deliver immersive, fast-track learning—achieving JLPT N3 in five months versus the typical 1.5–2 years.This aligns with our systems built over decades: e.g., according to one article, NAVIS hires native Japanese trainers brought over to India to teach the language in immersive mode.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    badge: "Immersive Learning",
  },
];

const meguruEcosystemItems = [
  {
    title: "LIFE CAREER",
    description: "Creating a platform for continuous career evolution.",
    icon: Briefcase,
  },
  {
    title: "EXTRACT",
    description: "Extracting value from talent & opportunities.",
    icon: Layers,
  },
  {
    title: "NAVIGATE",
    description: "Developing skills and readiness for global work & life.",
    icon: Navigation,
  },
  {
    title: "RESOURCE HUB",
    description:
      "Serving as a hub for education, recruitment & after-departure life support",
    icon: BookOpen,
  },
];

const WhyNavis: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const showCard = React.useCallback((index: number) => {
    const count = cards.length;
    setActiveIndex(((index % count) + count) % count);
  }, []);

  React.useEffect(() => {
    if (cards.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      showCard(activeIndex + 1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, showCard]);

  const easing = [0.24, 0.8, 0.25, 1];
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-6 text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 via-red-600 to-rose-600 leading-tight sm:text-4xl lg:text-5xl sm:leading-tight lg:leading-[1.15]">
            Why Choose NAVIS HR? Our Unique Strengths & Ecosystem
          </h2>
          <div className="mt-8 h-1 w-28 mx-auto rounded-full bg-linear-to-r from-transparent via-red-500 to-transparent" />
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Designed for talent ready to explore Japan. Discover how our
            integrated model blends experience, compliance, and immersive
            learning for lasting impact.
          </p>
        </div>

        <div className="relative my-16">
          <div className="rounded-[52px] p-1 ">
            <div className="relative overflow-hidden rounded-[48px] border border-white/80 bg-white/80 backdrop-blur-xl">
              <motion.div
                key={`${cards[activeIndex].title}-glow`}
                className="pointer-events-none absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="group relative h-[260px] sm:h-[360px] lg:h-[460px] w-full overflow-hidden rounded-[42px]">
                  <motion.div
                    key={`${cards[activeIndex].title}`}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: easing }}
                    className="absolute inset-0 bg-linear-to-br from-rose-500/30 via-rose-400/20 to-transparent opacity-70 mix-blend-multiply"
                  />
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={cards[activeIndex].title}
                      src={cards[activeIndex].image}
                      alt={cards[activeIndex].title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.1, ease: easing }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-x-6 bottom-6">
                    <motion.div
                      key={`${cards[activeIndex].title}-overlay`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.6, ease: easing }}
                      className="rounded-3xl border border-white/40 bg-white/60 p-5 shadow-xl"
                    >
                      <div className="flex flex-col gap-2 text-rose-900 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500/80">
                          {cards[activeIndex].badge}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="relative flex flex-col gap-6 px-6 py-10 sm:px-12 sm:py-12">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={cards[activeIndex].title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.7, ease: easing }}
                      className="space-y-5"
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-rose-500 shadow-sm backdrop-blur">
                        {cards[activeIndex].badge}
                      </div>
                      <h3 className="text-2xl font-bold leading-tight text-gray-900 sm:text-4xl">
                        {cards[activeIndex].title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                        {cards[activeIndex].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex flex-col gap-6 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center justify-center gap-3 sm:hidden">
                      <button
                        type="button"
                        onClick={() => showCard(activeIndex - 1)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm transition hover:scale-105 hover:border-rose-300 hover:text-rose-600"
                        aria-label="Previous feature"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => showCard(activeIndex + 1)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm transition hover:scale-105 hover:border-rose-300 hover:text-rose-600"
                        aria-label="Next feature"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="hidden items-center gap-3 sm:flex">
                      <div className="flex gap-3 rounded-full bg-white/70 px-4 py-2 shadow-inner">
                        <button
                          type="button"
                          onClick={() => showCard(activeIndex - 1)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm transition hover:scale-105 hover:border-rose-300 hover:text-rose-600"
                          aria-label="Previous feature"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => showCard(activeIndex + 1)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm transition hover:scale-105 hover:border-rose-300 hover:text-rose-600"
                          aria-label="Next feature"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center gap-2 sm:justify-end">
                      {cards.map((card, index) => {
                        const isActive = activeIndex === index;
                        return (
                          <button
                            key={card.title}
                            type="button"
                            onClick={() => showCard(index)}
                            className={`relative h-2.5 rounded-full transition-all duration-400 ease-out ${
                              isActive
                                ? "w-12 bg-rose-500"
                                : "w-4 bg-rose-200 hover:w-6 hover:bg-rose-300/90"
                            }`}
                            aria-label={`Go to feature ${index + 1}`}
                          >
                            {isActive && (
                              <motion.span
                                key={`${card.title}-progress`}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                  duration: 4.8,
                                  ease: "easeInOut",
                                }}
                                className="absolute inset-0 rounded-full bg-linear-to-r from-rose-400 via-rose-500 to-red-500"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl bg-rose-50 py-12 px-6 text-slate-900 ">
            <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/50 blur-3xl" />

            <div className="relative">
              <h3 className="text-3xl font-bold mb-4 text-slate-900 text-center md:text-left lg:text-5xl">
                Global "MEGURU" Ecosystem
              </h3>
              <p className="text-base text-slate-600 leading-relaxed max-w-3xl mb-12 text-center md:text-left mx-auto md:mx-0 sm:text-xl">
                We build not just placements, but life-career platforms
              </p>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {meguruEcosystemItems.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="group relative overflow-hidden rounded-2xl bg-white p-6 transition-all duration-300 border border-rose-100 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-linear-to-br from-rose-500/8 via-transparent to-transparent" />
                      </div>
                      <Icon className="relative h-9 w-9 text-rose-500 mb-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
                      <p className="relative font-bold text-lg mb-2 text-slate-900">
                        {title}
                      </p>
                      <p className="relative text-sm text-slate-600 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNavis;
