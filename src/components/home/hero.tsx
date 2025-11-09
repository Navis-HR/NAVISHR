import React, { useEffect, useState } from "react";

import bgHero from "../../assets/img//05.jpg";
import workIndiaImage from "../../assets/img/01.jpg";
import workJapanImage from "../../assets/img/03.jpg";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const motionBaseClasses =
    "opacity-100 motion-safe:transform motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out";
  const motionHiddenClasses =
    "motion-safe:opacity-0 motion-safe:translate-y-10";
  const motionVisibleClasses =
    "motion-safe:opacity-100 motion-safe:translate-y-0";

  return (
    <section className="relative isolate mt-0 md:-mt-[320px]">
      <div className="absolute inset-0">
        <img
          src={bgHero}
          alt="Navis teammates working together"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 bg-[#faf2e8]/80 " aria-hidden="true" />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full max-w-6xl flex-row flex-wrap items-stretch justify-center gap-6 px-4 pt-16 text-center sm:gap-8 md:px-8 lg:gap-10 lg:pt-48 pb-16 sm:pb-20 ${motionBaseClasses} ${
          isVisible ? motionVisibleClasses : motionHiddenClasses
        }`}
      >
        <button
          type="button"
          className={`flex w-full max-w-[420px] flex-1 flex-col overflow-hidden rounded-md border border-white/30 bg-white text-left shadow-2xl shadow-slate-900/20 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-amber-100/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#800000] cursor-pointer ${motionBaseClasses} ${
            isVisible ? motionVisibleClasses : motionHiddenClasses
          }`}
          aria-label="Continue working in India"
          style={{ transitionDelay: "120ms" }}
        >
          <div className="relative h-34 w-full overflow-hidden bg-white sm:h-72 md:h-[350px]">
            <img
              src={workIndiaImage}
              alt="Navis team members continuing their work in India"
              loading="lazy"
              className="h-full w-full object-cover p-2 rounded-md"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center font-semibold text-[#800000] px-4 pb-3 text-center text-base sm:text-lg">
            Continue Working in India
          </div>
        </button>

        <button
          type="button"
          className={`flex w-full max-w-[420px] flex-1 flex-col overflow-hidden rounded-md border border-white/30 bg-white text-left shadow-2xl shadow-slate-900/20 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-amber-100/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#800000] cursor-pointer ${motionBaseClasses} ${
            isVisible ? motionVisibleClasses : motionHiddenClasses
          }`}
          aria-label="Start your new life in Japan"
          style={{ transitionDelay: "220ms" }}
        >
          <div className="relative h-34 w-full overflow-hidden bg-white sm:h-72 md:h-[350px]">
            <img
              src={workJapanImage}
              alt="Navis graduate starting a new life in Japan"
              loading="lazy"
              className="h-full w-full object-cover p-2 rounded-md"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center font-semibold text-[#800000] px-4 pb-3 text-center text-base sm:text-lg">
            Start Your New Life in Japan
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
