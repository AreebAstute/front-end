import React from "react";
import TechCards from "../TechCards";
// const TechCards = React.lazy(() => import("../TechCards"));

import { Link } from "react-router-dom";

function TechSection() {
  return (
    <section id="techs" className="mt-16 lg:mt-24 z-20">
      <div className="w-11/12 mx-auto text-center px-10">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-blue-primary text-center text-3xl font-extrabold lg:text-5xl leading-15 lg:leading-normal"
        >
          Il Tech Stack dietro Prodotti Competitivi e,{" "}
          <br className="hidden lg:inline-block" /> Nativi del Cloud
        </div>

        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="lg:w-9/12 mx-auto text-center text-blue-primary mt-6 mb-10 text-base leading-2 lg:text-lg lg:leading-8"
        >
          Aiutiamo le aziende orientate alla tecnologia ad accelerare la
          consegna del valore, introducendo le migliori pratiche di sviluppo e
          competenze che sbloccano i team interni. Lavora con tecnologie a prova
          di futuro.
        </p>

        <div className="text-blue-primary text-center font-extrabold text-2xl lg:text-4xl mt-16 lg:mt-20 leading-15">
          Lavora con sviluppatori esperti nelle tecnologie più diffuse al mondo
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <TechCards />
        </div>

        <div className="relative z-10 mt-10">
          <img
            loading="lazy"
            alt="box_layers"
            className="absolute top-0 w-full z-0"
            src="/Images/landing-page-assets/box_layers-webp.webp"
          />
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-blue-primary text-center font-bold text-2xl md:text-3xl leading-15 z-10"
          >
            TypeScript
          </p>

          <p
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-11/12 lg:w-9/12 mx-auto text-center text-blue-primary mt-6 lg:mt-10 mb-0 text-base leading-2 lg:text-lg lg:leading-8 z-10"
          >
            Il typing statico aumenta la frequenza di successo dei deploy e
            semplifica il refactoring. Per coloro che hanno bisogno di un codice
            affidabile.
          </p>

          {/* <!-- Button Container --> */}
          <div className="flex flex-col justify-center w-full mt-6 lg:mt-10 mb-0 space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
            <Link
              to="/services"
              className="inline px-8 py-2 rounded-full shadow-lg bg-green-primary z-10 cursor-pointer duration-200 hover:opacity-80"
            >
              Scopri di più
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSection;
