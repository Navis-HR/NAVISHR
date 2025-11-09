import React from "react";
import IMG1 from "../../assets/img/01.jpg";
import IMG2 from "../../assets/img/02.jpg";
import IMG3 from "../../assets/img/03.jpg";
import IMG4 from "../../assets/img/04.jpg";
import IMG5 from "../../assets/img/05.jpg";
import IMG6 from "../../assets/img/06.jpg";

const ScrapBook: React.FC = () => {
  const photos = [
    {
      id: "photo-1",
      src: IMG1,
      alt: "Team celebrating together",
    },
    {
      id: "photo-2",
      src: IMG2,
      alt: "Smiling teammates at the airport",
    },
    {
      id: "photo-3",
      src: IMG3,
      alt: "Colleagues with luggage",
    },
    {
      id: "photo-4",
      src: IMG4,
      alt: "Team posing",
    },
    {
      id: "photo-5",
      src: IMG5,
      alt: "Team huddle",
    },
    {
      id: "photo-6",
      src: IMG6,
      alt: "Team waving goodbye",
    },
  ];

  const collageLayouts = [
    "md:z-[4] md:top-0 md:left-[-6%] md:-rotate-6 md:w-[34%] md:h-[240px] lg:left-[-3%] lg:h-[300px] lg:w-[28%]",
    "md:z-[8] md:top-24 md:left-[18%] md:rotate-2 md:w-[22%] md:h-[200px] lg:top-32 lg:w-[20%] lg:h-[230px]",
    "md:z-[4] md:top-36 md:left-[32%] md:-rotate-6 md:w-[24%] md:h-[240px] lg:top-35 lg:w-[22%] lg:h-[280px]",
    "md:z-[20] md:top-12 md:left-[48%] md:-rotate-2 md:w-[260px] md:h-[240px] lg:left-[46%] lg:h-[260px]",
    "md:z-[4] md:top-2 md:right-[18%] md:rotate-0 md:w-[26%] md:h-[280px] lg:right-[16%] lg:h-[320px]",
    "md:z-[3] md:top-6 md:right-[-4%] md:rotate-3 md:w-[30%] md:h-[320px] lg:right-[-2%] lg:h-[360px]",
  ];

  return (
    <section className="relative bg-transparent -mt-16 md:-mt-32 lg:-mt-40">
      <div className="relative mx-auto max-w-auto px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden">
          {photos.map((photo) => (
            <figure
              key={`${photo.id}-mobile`}
              className="flex flex-col items-center overflow-hidden rounded-xl border border-white/40 bg-white/90 shadow-[0_20px_45px_rgba(24,21,47,0.18)]"
            >
              <div className="relative  w-full overflow-hidden border border-slate-200 bg-slate-50">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>
          ))}
        </div>

        <div className="relative hidden md:block md:h-[520px] lg:h-[600px]">
          {photos.map((photo, index) => (
            <figure
              key={photo.id}
              className={`absolute flex flex-col items-center border border-white/40 bg-white/90 p-1 shadow-[0_20px_45px_rgba(24,21,47,0.18)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 ${collageLayouts[index]}`}
            >
              <div className="relative h-full w-full overflow-hidden border border-slate-200 bg-slate-50">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrapBook;
