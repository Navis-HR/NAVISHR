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

  const layoutClasses = [
    "z-[4] top-0 left-[-4%] rotate-[-8deg]", // photo-1 (IMG1)
    "z-[8] top-30 left-[19%] rotate-[2deg]", // photo-2 (IMG2)
    "z-[4] top-20 left-[30%] rotate-[-8deg]", // photo-3 (IMG3)
    "z-[20] top-5 left-[45%] rotate-[-2deg]", // photo-4 (IMG4)
    "z-[4] top-0 right-[20%] rotate-[0deg]", // photo-5 (IMG5)
    "z-[3] top-0 right-[-5%] rotate-[4deg]", // photo-6 (IMG4)
  ];

  const widthClasses = [
    "w-[30%]", // photo-1 (IMG1)
    "w-[19%]", // photo-2 (IMG2)
    "w-[20%]", // photo-3 (IMG3)
    "w-[250px]", // photo-4 (IMG4)
    "w-[25%]", // photo-5 (IMG5)
    "w-[30%]", // photo-6 (IMG4)
  ];

  const heightClasses = [
    "h-[300px]",
    "h-[180px]",
    "h-[280px]",
    "h-[250px]",
    "h-[330px]",
    "h-[360px]",
  ];

  return (
    <section className="relative bg-transparent -mt-40">
      <div className="relative mx-auto max-w-auto items-center justify-center">
        <div className="relative h-full w-full max-w-auto">
          {photos.map((photo, index) => (
            <figure
              key={photo.id}
              className={`absolute flex flex-col items-center border border-white/40 bg-white/90 p-1 shadow-[0_20px_45px_rgba(24,21,47,0.18)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 ${layoutClasses[index]} ${widthClasses[index]} ${heightClasses[index]}`}
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
