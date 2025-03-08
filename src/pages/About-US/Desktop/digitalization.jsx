import "./aboutUS.css";

function DigitalizationPage() {
  return (
    <div
      className="  bg-no-repeat bg-left-top"
      style={{
        backgroundSize: "10%",
        backgroundImage:
          "url('/Images/serviceAssets/section2/left_pattern-webp.webp')",
      }}
    >
      {/* <div className="flex flex-row justify-center ">
        <div className"card-about-us ">
            <div className=" digitalization-stats-banner background-tint " style={{ backgroundImage: "url('/Images/about-usAssets/project-cart-pattern-webp.webp')"}}>
                <div className=" inline-block digitalization-banner-block-padding">
                    <div className="flex flex-col justify-center items-center">
                    <h2 className=" font-extrabold text-lg text-font-primary">ACTIVE CLIENTS</h2> 
                    <p className=" font-extrabold  text-4xl text-white">330+</p>
                    </div> 
                </div>

                <div className=" inline-block digitalization-banner-block-padding">
                    <h2 className=" font-extrabold text-lg text-font-primary">PROJECT DONE</h2> 
                    <p className="font-extrabold text-4xl text-white">850+</p> 
                </div>

                <div className=" inline-block digitalization-banner-block-padding">
                    <h2 className=" font-extrabold text-lg text-font-primary">TEAM ADVISORS</h2> 
                    <p className="font-extrabold text-4xl text-white">25+</p> 
                </div>

                <div className=" inline-block ">
                    <h2 className=" font-extrabold text-lg text-font-primary">GLORIOUS YEARS</h2> 
                    <p className="font-extrabold text-4xl text-white">7+</p> 
                </div>
            </div>
        </div>
    </div>            */}

      <div className="  flex lg:flex-row flex-col justify-center items-center ">
        <div className="digitalization-imageSection">
          <img
            loading="lazy"
            src="/Images/about-usAssets/Digitalization-webp.webp"
            alt="Digitalization"
          />
        </div>
        <div className="digitalization-textSection ">
          <div className="digitalization-inner-textSection ">
            <h3 className="text-xl mb-5 text-font-primary font-normal">
              {" "}
              Digitalization
            </h3>
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-5 text-font-primary"
              style={{ letterSpacing: "2px" }}
            >
              {" "}
              Digital technologies to change <br /> a business mode
            </h2>
            <h3
              className="text-lg font-medium text-font-primary"
              style={{ letterSpacing: "1px" }}
            >
              Integration of digital technologies into everyday life by the
              digitization of everything that can be digitized. The adoption of
              digital technologies to modify a business model. The aim is to
              create a value from the use of new, advanced technologies by
              exploiting digital network dynamics and the giant digital flow of
              information. The useof digital technologies to upgrade processes.
              we believe that digitalization is the process by which companies
              reorganize their work methods and strategies to obtain greater
              benefits thanks to the implementation of new technologies
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalizationPage;
