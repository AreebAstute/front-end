import "../../../index.css";
// import background from "../bg_2-webp.webp";
import ScrollButton from "../../../components/ScrollButton";

function ServiceLandingPage({ refOffset }) {
  return (
    <div className=" px-5 h-screen pt-8  flex flex-col justify-center items-center multiple-bg relative ">
      <p className="text-blue-primary font-medium text-base lg:text-xl">
        <span
          className="font-medium bg-no-repeat bg-contain inline-block py-2 px-1"
          style={{
            backgroundImage:
              "url(/Images/serviceDetails/a-non-stop-text-bg-webp.webp)",
          }}
        >
          Explore
        </span>
        top-notch services
      </p>
      {/* text section */}
      <div className="text-center space-y-6 text-blue-primary tracking-wider mb-12 md:w-5/6 lg:w-3/6 mx-auto ">
        {/* <p style={{ color: "#0a3953", }} className=" font-semibold text-sm w-full tracking-wide">BUILD DYNAMIC, ENGAGING, AND INSTRUCTIVE EXPERIENCES TO OFFER IN TELLIGENT SOLUTIONS</p> */}
        <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize">
          {" "}
          We Provide truly{" "}
          <span className="font-extrabold text-green-primary">
            {" "}
            IT Solutions
          </span>
        </h1>
        <div className=" text-lg lg:text-xl text-blue-primary my-2 font-medium text-center ">
          Do you need something truly astute? Look no further than our software
          development company, where we provide truly astute IT solutions in a
          wide range of fields!
        </div>
      </div>
      <ScrollButton refOffset={refOffset} />
    </div>
  );
}

export default ServiceLandingPage;
