import React from "react";

import bgHero from "../../assets/img//05.jpg";
import workIndiaImage from "../../assets/img/01.jpg";
import workJapanImage from "../../assets/img/03.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative isolate mt-[160px]">
      <div className="absolute inset-0">
        <img
          src={bgHero}
          alt="Navis teammates working together"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 bg-[#faf2e8]/80 " aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 pt-16 text-center lg:flex-row lg:items-stretch lg:gap-10 lg:px-8 lg:pt-60 pb-20">
        <button
          type="button"
          className="flex flex-1 flex-col overflow-hidden rounded-md border border-white/30 bg-white text-left shadow-2xl shadow-slate-900/20 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-amber-100/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#800000] cursor-pointer"
          aria-label="Continue working in India"
        >
          <div className="relative h-72 w-full overflow-hidden bg-white md:h-[350px]">
            <img
              src={workIndiaImage}
              alt="Navis team members continuing their work in India"
              loading="lazy"
              className="h-full w-full object-cover p-2 rounded-md"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center font-semibold text-[#800000] pb-1 text-center">
            Continue Working in India
          </div>
        </button>

        <button
          type="button"
          className="flex flex-1 flex-col overflow-hidden rounded-md border border-white/30 bg-white text-left shadow-2xl shadow-slate-900/20 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-amber-100/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#800000] cursor-pointer"
          aria-label="Start your new life in Japan"
        >
          <div className="relative h-72 w-full overflow-hidden bg-white md:h-[350px]">
            <img
              src={workJapanImage}
              alt="Navis graduate starting a new life in Japan"
              loading="lazy"
              className="h-full w-full object-cover p-2 rounded-md"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center font-semibold text-[#800000] pb-1 text-center">
            Start Your New Life in Japan
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
