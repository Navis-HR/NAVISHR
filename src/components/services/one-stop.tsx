import React from "react";
import heroImage from "../../assets/img/main.png";
import experienceImage from "../../assets/img/09.jpg";

const OneStop: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Team collaborating in an office setting"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-linear-to-br from-[#0f2d61]/95 via-[#0f2d61]/70 to-[#f1653c]/70"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto flex min-h-[65vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-12">
          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            One-Stop Global Talent Solution
          </h1>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Recruitment • Training • Post-Departure Life Guidance
          </div>
          <p className="mt-6 max-w-3xl text-base text-white/85 sm:text-lg lg:text-xl">
            Empowering Indian candidates for Japan & global mobility via a
            proven ecosystem.
          </p>
        </div>

        <div
          className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-[#f1653c]/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-28 bottom-12 h-56 w-56 rounded-full bg-[#224c9a]/40 blur-3xl"
          aria-hidden="true"
        />
      </section>

      <section className="relative z-10 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-auto flex-col gap-16 px-6 sm:px-10 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-[#0f2d61] sm:text-4xl">
              Built On Two Decades Of Human Capital Excellence
            </h2>
            <p className="text-lg leading-8 text-gray-700 sm:text-xl">
              At <span className="font-semibold text-[#0f2d61]">NAVIS HR</span>,
              At NAVIS HR, with 23 years of experience in human-resources, we
              offer a full-service ecosystem from talent recruitment in India,
              Japanese language & cultural training, visa & deployment support,
              to post-departure life guidance for working abroad — particularly
              under the Government of India-accredited Sending Agency programmes
              such as the Technical Intern Training Program (TITP) Scheme and
              the Specified Skilled Worker (SSW) Scheme. We bring world-class
              language training, cultural readiness, rigorous selection, and
              life-career support — all under one roof.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-8">
            <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-gray-200">
              <img
                src={experienceImage}
                alt="NAVIS HR trainees receiving guidance"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneStop;
