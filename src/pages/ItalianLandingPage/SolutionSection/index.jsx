import React from "react";

function SolutionSection() {
  return (
    <section
      id="solutions"
      className="bg-blue-primary py-16 mt-16 lg:mt-24 z-20"
    >
      {/* <!-- Container For Image & Content --> */}
      <div className="container mx-auto flex flex-col-reverse justify-between p-6 gap-8 lg:gap-0 lg:flex-row lg:mb-0">
        {/* <!-- Image --> */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2"
        >
          <img
            loading="lazy"
            src="/Images/landing-page-assets/chats-webp.webp"
            alt="chats"
            className="relative z-10"
          />
        </div>

        {/* <!-- Content --> */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-col justify-center gap-4 lg:pl-20 lg:w-1/2"
        >
          {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
          <h1 className="text-white text-3xl font-bold text-center lg:w-11/12 lg:text-left">
            Chatta con i Nostri Esperti Project Manager
          </h1>
          <p className="w-11/12 mx-auto text-center text-white font-normal lg:text-left lg:mt-0 lg:mx-0">
            Entra in contatto immediato con i nostri project manager,
            disponibili 24/7 per fornirti assistenza personalizzata. Ricevi
            risposte rapide e consigli esperti sul tuo progetto, in qualsiasi
            momento.
          </p>

          <div>
            {/* <!-- Button Container --> */}
            <div className="flex flex-col justify-start w-full mt-4 space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chatting.page/vqbvbxrxwtrumudyxhgcwknfjgp0ismf"
                className="px-8 py-2 text-center rounded-full shadow-lg bg-green-primary duration-200 cursor-pointer hover:opacity-80"
              >
                Inizia la Chat
              </a>
            </div>

            <div className="flex flex-col justify-start w-full mt-0 space-y-6 text-white md:flex-row md:space-y-0 md:space-x-4">
              <p className="inline px-8 text-sm text-white text-center z-20">
                Disponibile subito
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
