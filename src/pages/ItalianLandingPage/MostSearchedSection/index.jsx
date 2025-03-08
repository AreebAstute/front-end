import React from "react";

// const SearchItem = React.lazy(() => import("./component/SearchItem"));
import SearchItem from "./component/SearchItem";


function MostSearchedSection() {
  return (
    <section id="most-searched" className="mt-16 lg:mt-24 z-20">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="relative flex flex-col items-center container mx-auto pt-16 lg:pt-16"
      >
        <div className="outlined_text absolute top-0 text-center w-full z-0 text-4xl font-bold lg:text-9xl lg:font-black">
          Most Searched
        </div>
        <div className="w-11/12 relative z-20">
          <h2 className="text-blue-primary text-center font-extrabold text-2xl md:text-4xl leading-15 lg:leading-normal z-20">
            Qual è il tuo prossimo obiettivo?
          </h2>
        </div>
      </div>

      <div className="flex justify-center container mx-auto px-6">
        <div className="w-11/12 lg:w-10/12 mt-6 lg:mt-10 mx-auto overflow-hidden">
          <SearchItem />
        </div>
      </div>
    </section>
  );
}

export default MostSearchedSection;
