import React from "react";

const statsData = [
  {
    id: 1,
    stats: "90%",
    desc: "Riduzione Costi Cloud",
  },
  {
    id: 2,
    stats: "10",
    desc: "Startup Lanciate",
  },
  {
    id: 3,
    stats: "200€",
    desc: "Tariffa Giornaliera",
  },
  {
    id: 4,
    stats: "100K+",
    desc: "Utenti/gg Serviti",
  },
];

function StatsSection() {
  return (
    <section id="stats" className="relative mt-6 lg:mt-10">
      <div className="md:container mx-auto">
        <div className="flex flex-col space-x-0 md:space-x-4 md:space-y-0 text-center md:flex-row space-y-4">
          {statsData.map((data) => {
            return (
              <div
                key={data.id}
                data-aos="zoom-in-up"
                data-aos-duration="500"
                className="flex flex-col rounded-3xl shadow-md z-50 bg-white md:w-1/4 overflow-hidden"
              >
                <div className="flex flex-col p-4">
                  <div className="flex justify-between">
                    <h3 className="text-4xl text-left text-blue-primary font-semibold">
                      {data.stats}
                    </h3>
                    <img
                      loading="lazy"
                      src="/Images/landing-page-assets/Layer_3.svg"
                      alt="layer-img"
                    />
                  </div>
                  <div className="flex items-end">
                    <p className="text-blue-primary text-base text-left mr-2 max-w-md">
                      {data.desc}
                    </p>
                    <img
                      loading="lazy"
                      src="/Images/landing-page-assets/Group17.svg"
                      alt="group-img"
                    />
                  </div>
                </div>
                <div className="relative flex items-center justify-center h-24 mt-6">
                  <img
                    loading="lazy"
                    src="/Images/landing-page-assets/cart pattern 2-webp.webp"
                    alt="card pattern"
                    className="absolute bottom-0 left-0 z-10"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:absolute lg:-bottom-14 lg:-right-12 h-full z-0">
          <img
            loading="lazy"
            src="/Images/landing-page-assets/bg_dots.svg"
            alt="bg_dots"
          />
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
