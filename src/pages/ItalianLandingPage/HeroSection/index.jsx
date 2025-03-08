import React from "react";

import StatsSection from "../StatsSection";
// const StatsSection = React.lazy(() => import("../StatsSection"));


function HeroSection() {
  return (
    <section id="hero" className="mt-10 lg:mt-40 pt-16">
      <div className="relative">
        <img
          loading="lazy"
          alt="pattern"
          className="absolute top-0 right-0 transform lg:translate-x-1/4 lg:-translate-y-24 w-full z-0 select-none hidden lg:inline"
          src="/Images/landing-page-assets/Group 53-webp.webp"
        />
      </div>

      <div className="w-11/12 mx-auto text-center px-10 text-4xl z-20">
        <div className="inline-block text-blue-primary text-center text-3xl font-extrabold lg:text-5xl leading-15 lg:leading-normal z-20">
          Astute Softwares: Dove Ogni Byte{" "}
          <br className="hidden lg:inline-block" /> Trasforma le Startup{" "}
          <span className="text-green-primary text-3xl font-extrabold lg:text-5xl">
            in Giganti
          </span>
        </div>

        <p className="inline-block w-11/12 lg:w-9/12 mx-auto text-center text-blue-primary mt-6 lg:mt-10 mb-0 text-base leading-2 lg:text-lg lg:leading-8 z-20">
          Nel 2024, il nostro obiettivo è chiaro: tagliare i costi per le
          startup, garantendo loro un servizio completo e accessibile per lo
          sviluppo e la manutenzione dei loro prodotti digitali. Con il nostro
          supporto, più di 10 startup hanno lanciato con successo i loro MVP nel
          2023.
        </p>

        <StatsSection />

        {/* <!-- Button Container --> */}
        <div className="flex flex-col justify-center w-full mt-8 lg:mt-16 space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4 z-20">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chatting.page/vqbvbxrxwtrumudyxhgcwknfjgp0ismf"
            className="px-8 py-2 rounded-full shadow-lg bg-green-primary duration-200 hover:opacity-80 z-20"
          >
            Parla con noi ora
          </a>
        </div>

        <div className="flex flex-col justify-center w-full mt-0 space-y-6 text-xl md:space-y-0 md:space-x-4 z-20">
          <p className="inline text-sm text-green-primary z-20">
            Tempo di attesa: 1 minuto
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
