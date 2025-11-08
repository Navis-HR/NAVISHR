import React from "react";
import News from "../../assets/img/09.jpg";
const cardDetails = [
  {
    title: "News",
  },
  {
    title: "Navis HR",
  },
  {
    title: "Jobs Abroad",
  },
  {
    title: "Navista",
  },
] as const;

const Why: React.FC = () => {
  const tiltClasses = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];

  return (
    <section className="relative isolate overflow-hidden py-16">
      <div className="absolute inset-0">
        <img
          src={News}
          alt="Navis HR team celebrating together"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/80 " />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center lg:px-8">
        <div className="max-w-3xl space-y-5">
          <p className="text-3xl font-semibold tracking-wide text-[#9f2f2f] sm:text-[40px]">
            Why choose us?
          </p>
          <p className="text-base leading-relaxed text-[#3c3c3c] sm:text-lg">
            A company committed to the growth of its people and building a
            bridge between Japan and India. NAVIS supports the development of
            human resources for India&apos;s population of 1.35 billion, and
            produces talented people with language and skills who can go to
            Japan, India, and overseas.
          </p>
        </div>

        <div className="mt-14 grid w-full gap-10 md:grid-cols-2 xl:grid-cols-4">
          {cardDetails.map((card, index) => (
            <div
              key={card.title}
              className={`group relative mx-auto flex w-full max-w-[260px] flex-col items-center rounded-xl bg-[#fff8ed] px-4 pb-8 pt-4 text-center shadow-2xl shadow-slate-900/10 transition duration-500 ease-out hover:-translate-y-3 hover:rotate-0 md:max-w-[280px] ${tiltClasses[index]}`}
            >
              <div
                className="pointer-events-none absolute -left-6 top-[70%] hidden h-16 w-16 -translate-y-1/2 rounded-full bg-transparent shadow-inner md:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-6 top-[68%] hidden h-16 w-16 -translate-y-1/2 rounded-full bg-transparent shadow-inner md:block"
                aria-hidden="true"
              />
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-[#121212]/90">
                <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-slate-900 to-black opacity-90" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
