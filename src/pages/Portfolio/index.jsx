import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import Header from "./Header";
import PlantSection from "./PlantSection";
import BagSection from "./BagSection";
import RobotModel from "./RobotModel";
import BottlesSection from "./BottlesSection";
import SideBar from "./SideBar";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

const Portfolio = ({ setShowHeaderFooter }) => {
  const [selectedModel, setSelectedModel] = useState(3);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    setShowHeaderFooter(false);

    return () => {
      setShowHeaderFooter(true);
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "astute.software.portfolio",
            defaultMessage: "Astute Softwares - portfolio",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "see.some.our.work",
            defaultMessage:
              "See some of our best work in 3D. With Astute software solutions, you can create everything from custom animations to beautiful presentations.",
          })}
        />
        <meta
          name="keywords"
          content="Software development portfolio, Project showcase, Client success stories, Technology solutions portfolio, Custom software projects"
        />
        <link rel="canonical" href="https://astutesoftwares.com/portfolio" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "astute.software.portfolio",
            defaultMessage: "Astute Softwares - portfolio",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "see.some.our.work",
            defaultMessage:
              "See some of our best work in 3D. With Astute software solutions, you can create everything from custom animations to beautiful presentations.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/portfolio"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="relative">
        <div
          className={`w-350 overflow-y-auto overflow-x-hidden  min-h-screen fixed left-0 top-0 bottom-0 bg-white transition  transform ${
            toggleSideBar
              ? " z-50 duration-900 ease-in-out translate-x-0 "
              : "hidden lg:block"
          } `}
        >
          <SideBar
            setSelectedModel={setSelectedModel}
            setToggleSideBar={setToggleSideBar}
            toggleSideBar={toggleSideBar}
          />
        </div>
        {typeof selectedModel === "number" ? (
          <>
            {/* <div id='modelPlace' className={`flex flex-col items-center justify-center h-screen`} style={{ marginLeft: toggleSideBar? "":"350px" }}></div> */}
            <div
              id="modelPlace"
              className={`flex flex-col items-center justify-center h-screen ${
                toggleSideBar ? "" : " ml-0 lg:ml-350  "
              }  `}
            >
              {selectedModel === 0 ||
              selectedModel === 1 ||
              selectedModel === 2 ? (
                <PlantSection selectedModel={selectedModel} />
              ) : selectedModel === 3 ||
                selectedModel === 4 ||
                selectedModel === 5 ? (
                <BagSection selectedModel={selectedModel} />
              ) : selectedModel === 6 ||
                selectedModel === 7 ||
                selectedModel === 8 ? (
                <RobotModel selectedModel={selectedModel} />
              ) : selectedModel === 9 ||
                selectedModel === 10 ||
                selectedModel === 11 ? (
                <BottlesSection selectedModel={selectedModel} />
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <div
            className={`h-screen flex items-center justify-center ${
              toggleSideBar ? "" : "ml-0 lg:ml-350"
            } `}
          >
            <p className="tracking-wider font-normal text-blue-primary">
              Select an Example from Sidebar
            </p>
          </div>
        )}

        <div className={`absolute top-2 left-0 z-1000 block lg:hidden   `}>
          {toggleSideBar ? (
            <MdCancel
              className=" ml-350  text-3xl text-white"
              onClick={() => setToggleSideBar(!toggleSideBar)}
            />
          ) : (
            <BiMenuAltLeft
              className="text-4xl text-white"
              onClick={() => setToggleSideBar(!toggleSideBar)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
