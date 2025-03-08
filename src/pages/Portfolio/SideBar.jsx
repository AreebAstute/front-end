import React from "react";
import { SIDE_BAR_MODELS_IMAGES } from "../../constants";
import Header from "./Header";
import "./style.css";

const SideBar = ({ setSelectedModel, setToggleSideBar }) => {
  const ModelClickHandler = (innerItems) => {
    setSelectedModel(innerItems.index);
    setToggleSideBar(false);
  };

  return (
    <div className="space-y-2 h-full ">
      <Header />
      {SIDE_BAR_MODELS_IMAGES.map((item) => (
        <div>
          <div className="px-4 w-full tracking-widest bg-green-primary  uppercase text-white rounded-tl-md  font-medium py-3">
            {item.heading}
          </div>
          {item.nestedItems.map((innerItems, index) => (
            // <div className={`${index === item.nestedItems.length-1?"":"border-b-2" } space-y-3 text-blue-primary shadow-lg  hover:text-green-600 cursor-pointer`} onClick={()=>ModelClickHandler(innerItems)} >
            <div
              className={`shadow-lg text-blue-primary hover:text-green-primary cursor-pointer`}
              onClick={() => ModelClickHandler(innerItems)}
            >
              <div className=" rounded-md  text-center p-4">
                <div className="rounded-md">
                  <img
                    loading="lazy"
                    alt="img"
                    src={innerItems.src}
                    className="rounded-md  mx-auto"
                  />
                </div>
              </div>
              <div className="px-4 py-2 tracking-wider text-base capitalize  ">
                {innerItems.Name}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
