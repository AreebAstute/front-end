import React from 'react';

const LandingSection = () => {
  return <div>
      <div className="flex space-y-10 lg:flex-row flex-col pt-16">
          <div className="lg:w-1/2 md:px-10 xl:pl-20 flex text-center lg:text-left flex-col justify-center">
              <img loading="lazy" alt="logo" className="w-2/5 mb-10 mx-auto xl:w-2/5" src="/Images/falling-gems/logo-webp.webp" />
              <h1 className="px-3 md:px-0 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-blue-dark font-bold leading-tight 2xl:tracking-wide my-2">
                Don't let these precious GEMS FALL!
              </h1>
              <p className="text-lg md:text-xl text-blue-light px-5 md:px-0 ">
                From exciting game levels to gold coins, everything is put up 
                to make you feel good and relax.
              </p>
          </div>
          <div className="lg:w-1/2 flex justify-end">
              <img className="w-4/5 md:w-3/5 lg:w-full mx-auto" loading="lazy" alt="game logo" src="/Images/falling-gems/picture-webp.webp" />
          </div>
      </div>
  </div>;
};

export default LandingSection;
