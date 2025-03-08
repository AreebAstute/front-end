import React from "react";

const FourthSection = () => {
  return (
    <>
      <div
        className=" py-20 md:py-40 flex bg-contain lg:bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(/Images/serviceDetails/technology-webp.webp",
        }}
      >
        {/* text section */}
        <div className="text-center text-blue-primary tracking-wider mb-0 lg:mb-12 w-full lg:w-4/6 mx-auto space-y-4">
          <p className="text-blue-primary font-medium text-lg lg:text-lg uppercase">
            A ONE-STOP-SHOP FOR FRONTEND, UX & UI DEVELOPMENT
          </p>
          <h2 className="text-2xl md:text-4xl 2xl:text-5xl leading-10 font-extrabold ">
            Choose battle-tested
            <span className="font-extrabold text-green-primary">
              {" "}
              frontend development{" "}
            </span>
            <br />
            services with community support over hype
          </h2>
          <p className="w-4/5 mx-auto text-base lg:text-lg text-blue-primary my-2 font-medium">
            Whatever digital you’re building, we got your back at every stage of
            development, including web design.We’ve built a core system for a
            bank, an MVP market place sold for millions, and other 5 custom
            projects for 140+ companies world wide. All in accordance with the
            client’s digital marketing strategy.
          </p>
        </div>
        {/* text section */}
      </div>
    </>
  );
};

export default FourthSection;
