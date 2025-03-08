import React from "react";

import Review from "./components/Review";

function ReviewSection() {
  return (
    <section id="review" className="mb-20 mt-16 lg:mt-24">
      <div className="w-11/12 mx-auto text-center px-10">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="relative container mx-auto pt-8 lg:pt-16"
        >
          <div className="outlined_text absolute top-0 text-center w-full z-0 text-4xl font-bold lg:text-9xl lg:font-black">
            98% of SME
          </div>
          <div className="relative z-20 text-blue-primary text-center text-3xl font-extrabold lg:text-5xl leading-15">
            Recommended by{" "}
            <span className="text-green-primary text-center text-3xl font-extrabold lg:text-5xl leading-15">
              98%
            </span>{" "}
            of small and medium-sized enterprise startups and growing clients
          </div>
        </div>

        <p
          data-aos="fade-right"
          data-aos-duration="800"
          className="w-11/12 lg:w-9/12 mx-auto text-center text-blue-primary mt-6 lg:mt-10 mb-0 text-base leading-2 lg:text-lg lg:leading-8"
        >
          Asked Astute Softwares to upgrade their digital product and define a direction for resilient software development.
        </p>

        <p className="text-green-primary text-center font-bold md:font-extrabold text-xl mt-6 lg:mt-10 mb-0 leading-2 lg:text-2xl leading-15">
          Most stay with us for over 3 years. Our NPS is 71.
        </p>

        {/* <div className="mt-12 flex justify-center h-12">
          <img loading="lazy" alt="cluth logo" src="/Images/landing-page-assets/clutch-co-seeklogo-webp.webp" alt="" />
        </div> */}

        {/* <Review /> */}

        {/* <div className="rounded-3xl shadow-md w-full overflow-hidden mt-12">
          <div className="flex flex-wrap items-center justify-between p-4 md:p-12 z-50">
            <p className="text center text-blue-primary font-semibold text-2xl md:text-4xl leading-8 md:leading-15">
              Work with teams CTOs praise as <br className="inline-block" />{" "}
              “super-friendly” and “reliable”
            </p>

            <div className="flex flex-col justify-center w-full lg:w-1/5 mt-4 space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
              <a
                href="#"
                className="px-8 py-2 rounded-full shadow-lg bg-green-primary duration-200 hover:opacity-80"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-4/12 w-4/12 mt-6">
            <img
              loading="lazy"
              src="/Images/landing-page-assets/cart pattern 2-webp.webp"
              alt="card pattern"
              className="absolute bottom-0 left-0 z-0"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default ReviewSection;
