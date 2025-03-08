import React from "react";
import { Link } from "react-router-dom";

const searchedData = [
  {
    id: 1,
    category: "Web and Mobile Development",
    link: "/services/custom-software-development",
    desc: "Bring your ideas to life with tailor-made web and mobile solutions, designed to capture attention and improve user engagement.",
  },
  {
    id: 2,
    category: "MVP Maintenance and Development",
    link: "/services/maintenance-and-support",
    desc: "Ensure your minimum viable product (MVP) performs at its best. We offer ongoing support for improvements and optimizations.",
  },
  {
    id: 3,
    category: "3D Modeling",
    link: "/3d-modelling",
    desc: "Turn your visions into reality with high-quality 3D models, ideal for architecture, product design, or creative visualizations.",
  },
  {
    id: 4,
    category: "Cloud and DevOps",
    link: "/services/devops-services",
    desc: "Optimize your IT infrastructure with advanced Cloud solutions and integrate DevOps practices for greater operational efficiency and agility.",
  },
  {
    id: 5,
    category: "AWS Consulting",
    link: "/contact-us",
    desc: "Experts in AWS services at your disposal to guide you through the implementation, management, and optimization of your cloud infrastructure.",
  },
];


function SearchItem() {
  return (
    <>
      {searchedData.map((data, index) => {
        const checkEven = index % 2 === 0;
        return (
          <Link key={data.id} to={data.link}>
            <div
              data-aos={checkEven ? "fade-right" : "fade-left"}
              data-aos-duration="1500"
              className="relative rounded-2xl outline-none mb-4 group overflow-hidden"
            >
              <img
                loading="lazy"
                alt="dots_dark"
                className="absolute right-2 w-full z-10 opacity-100 group-hover:opacity-0"
                src="/Images/landing-page-assets/dots_dark-webp.webp"
              />
              <img
                loading="lazy"
                alt="dots_light"
                className="absolute right-2 w-full z-10 opacity-0 group-hover:opacity-100"
                src="/Images/landing-page-assets/dots_light-webp.webp"
              />

              <div className="flex flex-wrap items-center justify-between p-8 text-blue-primary transition duration-500 cursor-pointer bg-gray-50 group-hover:bg-green-primary group-hover:text-white ease">
                <div className="transition duration-500 ease w-8/12 text-blue-primary text-xs md:text-base group-hover:text-white">
                  {data.desc}
                </div>

                <div className="flex items-center justify-end gap-1 w-4/12">
                  <p className="text-green-primary text-xs text-center md:text-right md:text-base underline w-9/12 group-hover:text-white">
                    {data.category}
                  </p>

                  {/* Arrow Icon */}
                  <div className="relative flex items-center justify-end w-3/12">
                    <img
                      loading="lazy"
                      alt="green_right_arrow"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 z-20 opacity-100 group-hover:opacity-0"
                      src="/Images/landing-page-assets/green_right_arrow.svg"
                    />
                    <img
                      loading="lazy"
                      alt="white_right_arrow"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 z-20 opacity-0 group-hover:opacity-100"
                      src="/Images/landing-page-assets/white_right_arrow.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default SearchItem;