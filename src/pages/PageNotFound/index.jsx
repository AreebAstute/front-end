import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="pt-32 pb-20 flex flex-col justify-center h-auto bg-no-repeat lg:h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(/Images/page-not-found/background-pattern-webp.webp)",
      }}
    >
      <h1 className="text-green-primary text-center text-5xl my-8">OOPS!</h1>
      <div className="flex justify-center">
        <img
          loading="lazy"
          alt="404"
          className="flex justify-center w-2/5"
          src="/Images/page-not-found/gif.gif"
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className="text-2xl md:text-3xl text-gray-text">
          We can't find the page :(
        </p>
        <Link
          to="/"
          className=" text-lg md:text-xl border-2 border-green-primary rounded-xl text-green-primary py-2 md:py-3 px-5 md:px-8 mt-10"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
