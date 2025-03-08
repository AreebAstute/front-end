import React from "react";

import { IoStar } from "react-icons/io5";

function Review() {
  return (
    <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-16 lg:grid-cols-3">
      {[1, 2, 3].map((post, index) => (
        <div className="group">
          <article
            key={index}
            className="flex max-w-xl flex-col items-start justify-between rounded-2xl bg-gray-50 p-8 cursor-pointer group-hover:bg-green-primary"
          >
            <div className="relative flex items-center gap-x-4">
              <div className="text-md leading-6">
                <p className="font-semibold text-left text-blue-primary group-hover:text-white">
                  Eckart Burgwedel
                </p>
                <p className="text-blue-primary text-left group-hover:text-white">
                  Co-founder and CEO of Uberchord{" "}
                </p>
              </div>
            </div>
            {/* <img
              loading="lazy"
              src="/Images/landing-page-assets/Group 44.svg"
              alt="#FF3D2E #093953"
              className="h-10 w-10 bg-gray-50"
            /> */}
            <div className="flex mt-4">
              <IoStar className="text-2xl text-red-primary group-hover:text-blue-primary" />
              <IoStar className="text-2xl text-red-primary group-hover:text-blue-primary" />
              <IoStar className="text-2xl text-red-primary group-hover:text-blue-primary" />
              <IoStar className="text-2xl text-red-primary group-hover:text-blue-primary" />
              <IoStar className="text-2xl text-red-primary group-hover:text-blue-primary" />
            </div>
            <div className="group relative">
              <p className="mt-5 line-clamp-3 text-sm text-left leading-6 text-blue-primary group-hover:text-white">
                The project is running smoothly with relatively few bugs despite
                hosting thousands of users. They know what they are doing,they
                do their best (which is very good), and they are all super
                friendly, reliable, communicative people.
              </p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Review;
