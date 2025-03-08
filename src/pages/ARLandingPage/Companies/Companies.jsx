import React from "react";
import Button from "../../../components/Button";
import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className=" py-10 lg:py-20">
      <div className="lg:w-10/12 mx-auto lg:flex">
        <div className="lg:w-9/12 md:mr-5">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl text-center text-blue-primary lg:text-left font-bold py-3 lg:text-right">
            Join the Ranks of <br />
            these Amazing Companies
          </h2>
          <div className="flex justify-center lg:justify-end">
            <div className="w-28  mt-3 border-green-primary border-b-2" />
          </div>
          <p className="text-gray-text text-center px-5 lg:px-0 lg:text-right mt-8">
            Trusted by some of the largest companies in the world, ViewAR™
            solutions provide ways to enhance your internal processes. From
            driving sales in Retail and Real Estate to optimization of internal
            processes for Industry 4.0, our customers needs always come first.
            More than 50 published applications have helped us build the system
            that our clients count on and steadily invest in.
          </p>
          <div className="flex justify-center lg:justify-end my-10">
            <Link
              to="/"
              className="text-base lg:text-lg font-medium px-8 md:px-10 py-1 border-2 border-green-primary hover:bg-green-primary hover:text-white rounded-full text-green-primary"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="lg:w-2/3  mx-5 md:mx-0 gap-y-8 grid grid-cols-2 md:grid-cols-4 mt-16 lg:mt-0 lg:ml-5">
          <CompanyCard alt="fb" img="/Images/icons/fb_-webp.webp" />
          <CompanyCard alt="linkedin" img="/Images/icons/in-1-webp.webp" />
          <CompanyCard alt="insta" img="/Images/icons/insta-1-webp.webp" />
          <CompanyCard alt="twitter" img="/Images/icons/twitter-webp.webp" />
          <CompanyCard alt="fb" img="/Images/icons/fb_-webp.webp" />
          <CompanyCard alt="fb" img="/Images/icons/fb_-webp.webp" />
          <CompanyCard alt="fb" img="/Images/icons/fb_-webp.webp" />
          <CompanyCard alt="fb" img="/Images/icons/fb_-webp.webp" />
        </div>
      </div>
    </div>
  );
};

export default Features;
