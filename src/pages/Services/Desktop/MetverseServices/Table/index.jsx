import React from "react";

const Table = () => {
  return (
    <>
      <div
        className="relative pt-32 pb-32 lg:pb-64 xl:pb-72  bg-cover bg-no-repeat  px-8 md:px-32  text-center min-h-screen  "
        style={{
          backgroundImage:
            "url('Images/serviceAssets/metaverse/landing-page-background-webp.webp')",
        }}
      >
        <div className="w-full md:px-20 space-y-10">
          <div className="pb-8 text-left">
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold my-2 text-white">
              How we aid our customers
            </h2>
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 mx-auto rounded-3xl"
          style={{
            backgroundImage: "url(Images/serviceAssets/metaverse/2nd-webp.webp)",
            backgroundSize: "100px",
          }}
        >
          <div className="py-5 bg-cover border-b-1 lg:border-r-1 border-blue-primary ">
            <div className="w-8/12 mx-auto space-y-2">
              <div className="text-lg lg:text-xl text-white  font-extrabold">
                Education and Exploration
              </div>
              <div className="text-white  py-0 lg:py-2 lg:text-justify space-x-2 flex flex-grow-0 space-x-4 items-center ">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/iconBlue-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light text-white text-base ">
                  We asist customers in learning about the present condition of
                  the metaverse and related technologies. Together, we can
                  analyze the internal and external opportunities for
                  innovation.
                </div>
              </div>
              <div className="text-white  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/iconBlue-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light text-white text-base">
                  We explore the future of digital innovation through the lens
                  of esential use cases and fruitful dialogue.
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 bg-cover border-b-1 lg:border-r-1  border-blue-primary ">
            <div className="w-8/12 mx-auto space-y-2">
              <div className="text-lg lg:text-xl text-white  font-extrabold">
                Thoughts on Strategy and Innovation
              </div>
              <div className="text-white  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-2 items-center">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/iconBlue-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light text-white text-base">
                  Over two hundred programmers, designers, and strategists world
                  wide are always eager to provide a hand
                </div>
              </div>
              <div className="text-white  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-2 items-center">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/iconBlue-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light text-white text-base">
                  We work with clients to leverage metaverse experiences for
                  short or long-term busines transformation.
                </div>
              </div>
              <div className="text-white  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-2 items-center">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/iconBlue-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light text-white text-base">
                  With a focus on client demands and a drive for cooperation and
                  innovation, we provide cuting-edge digital solutions that help
                  our customers maintain their competitive edge while being
                  flexible and adaptable.
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 bg-cover  ">
            <div className="w-8/12 mx-auto space-y-2">
              <div className="text-lg lg:text-xl text-white pl-8 font-extrabold">
                Design and Execution
              </div>
              <div className="text-white  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/iconBlue-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light text-white text-base">
                  Regarding the metaverse, we area ful-service firm that
                  designs, develops, and deploys scalable, production-ready
                  experiences.
                </div>
              </div>
              <div className="text-white  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/iconBlue-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light text-white text-base">
                  We have specialists in world design and user interaction,
                  content management, market place creation, blockchain, Web3,
                  spatial design (Computer-Generated Imagery, three-dimensional
                  modeling, volumetric capture)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen  relative bg-gray-consultancy">
        <img
          loading="lazy"
          alt="consultancy_pattern"
          src="/Images/serviceAssets/metaverse/consultancy_pattern-webp.webp"
          className="w-full absolute -top-16 md:-top-32  lg:-top-64  "
        />
        <div
          className="relative flex flex-col justify-center h-full w-full items-center py-5 bg-gray-consultancy"
          style={{ zIndex: 100 }}
        >
          <div className="flex  justify-center px-3 ">
            <div className=" inline-block text-center  mt-20">
              <h2
                style={{ color: "#0a3953" }}
                className="my-5 font-extrabold text-3xl lg:text-5xl "
              >
                {" "}
                <span className="text-font-secondary font-extrabold text-3xl lg:text-5xl">
                  Yearning
                </span>{" "}
                For Consultancy?
              </h2>
              <div className=" flex justify-center">
                <h3
                  style={{ color: "#0a3953" }}
                  className="mt-1 font-normal text-base lg:text-xl md:px-24 wd-seventy"
                >
                  You've come to the right place. Enter your details to get
                  business inspiration, trending solutions and consulting tips
                  delivered to your inbox
                </h3>
              </div>

              <div className=" py-8 md:py-16 text-center space-y-3 md:space-y-0 consultency-flex">
                <input
                  className="w-full"
                  type="text"
                  id="ip2"
                  placeholder="Enter your Email"
                />
                <button
                  type="button"
                  className="btn-contact label-1 text-white items-center"
                  id="header-estimate-button"
                >
                  {" "}
                  Subscribe{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
