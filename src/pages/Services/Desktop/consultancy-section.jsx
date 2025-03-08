import "./services.css";

function ConsultancySection() {
  return (
    <>
      <div
        className=" h-screen flex flex-col justify-center bg-cover"
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section3/consultancy_pattern-webp.webp')",
        }}
      >
        <div className=" flex flex-col items-center py-5 " style={{}}>
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
}

export default ConsultancySection;
