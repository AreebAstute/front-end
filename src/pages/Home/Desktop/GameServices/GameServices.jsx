import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const GameServices = ({ gameDownload, setGameDownload }) => {
  return (
    <div>
      <div className=" game-services">
        {gameDownload ? (
          <div
            className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex justify-center items-center "
            style={{ zIndex: 1000 }}
          >
            <div className="h-56 px-10 relative flex justify-center items-center bg-white rounded-md shadow-xl">
              <div
                className="absolute top-4 right-4"
                onClick={() => setGameDownload(false)}
              >
                <FaTimes className="text-2xl text-green-primary" />
              </div>
              <p className=" text-center ">The game will be available soon</p>
            </div>
          </div>
        ) : null}
        <div className=" flex flex-col lg:py-10">
          <div className="flex  justify-center">
            <div className="px-5 md:px-20 lg:px-0 inline-block text-center">
              <h1 className=" smallHeading"> Our Games</h1>
              <h2 className="heding1">
                {" "}
                Are you ready for our next challenge?{" "}
              </h2>
              {/* <p className="text-gray-text text-lg">Astute Softwares has been creating innivative games since 2003. 
              We offer our clients professional development services.</p> */}
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-start justify-center py-8">
            <div className="w-full lg:w-1/2 flex justify-center items-center  relative">
              <img
                loading="lazy"
                alt="game-cart"
                className="w-4/5 lg:w-full xl:w-4/5"
                src="/Images/GamingServices/game-cart-webp.webp"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-25 md:bottom-50">
                <Link
                  to="/falling-gems"
                  className="text-base lg:text-lg font-medium px-5 md:px-8 py-2 border-2 border-green-primary hover:bg-white bg-green-primary text-white rounded-full hover:text-green-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2  py-12 flex items-center justify-center">
              <div className="mx-auto max-w-small-game-card md:max-w-game-card ">
                {/* <p className="text-blue-primary text-xl mb-5 ">Our Games</p> */}
                <div className="flex relative  bg-green-primary items-center justify-between h-16 rounded-lg">
                  <p className="text-white text-xl px-10">Falling Gems</p>
                  <img
                    loading="lazy"
                    alt="game-title-icon"
                    className="w-28 absolute bottom-0 right-0"
                    src="/Images/GamingServices/game-title-icon-webp.webp"
                  />
                </div>
                <div className="relative bg-white rounded-xl shadow-2xl pt-8 px-8 space-y-5 mt-3">
                  {/* <p className="text-blue-primary text-lg md:text-xl">WELCOME TO DANGERZONE!</p> */}
                  <p className="text-gray-text text-base md:text-lg">
                    Don't let these precious GEMS FALL! From exciting game
                    levels to gold coins, everything is put up to make you feel
                    good and relax. Catch these gems to score more.
                  </p>
                  <div className="flex justify-between text-gray-text text-lg">
                    <p>Launch: March 2022</p>
                    <p>Price: free</p>
                  </div>
                  {/* <div className="flex justify-between text-gray-text text-lg">
                    <p>Rating: 4.5</p>
                    <p><span className="flex text-lg tracking-wider text-green-primary">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    </span></p>
                  </div> */}
                  <div className="flex w-full cursor-pointer">
                    <div
                      onClick={() => {
                        return setGameDownload(true);
                      }}
                      className="cursor-pointer my-3 mr-3"
                    >
                      <img
                        loading="lazy"
                        alt="apple-store"
                        className="w-full"
                        src="/Images/GamingServices/apple-store-webp.webp"
                      />
                    </div>
                    <button
                      onClick={() => {
                        return setGameDownload(true);
                      }}
                      className="cursor-pointer my-3 ml-3"
                    >
                      <img
                        loading="lazy"
                        alt="google-play-store"
                        className="w-full"
                        src="/Images/GamingServices/google-play-store-webp.webp"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameServices;
