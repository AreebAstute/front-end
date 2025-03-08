import React from "react";
import { getImageALt } from "../../../../utils";

const QATypeCard = ({ title, desc, img }) => {
  return (
    // <div className={`h-full relative engagement-model-card`}>
    //     <div className="bg-no-repeat bg-left-top bg-image-top" >
    //         <div className="bg-no-repeat bg-right-bottom bg-image-bottom h-full">
    //             <div className="container text-center items-center ">
    //                 <img loading="lazy" className="inline-block " src="/Images/LandingPageImage/Services2/devops-webp.webp" alt="React" width="150px" height="150px"></img>
    //                 <h3 className=" font-extrabold text-lg text-font-primary">{title}</h3>
    //                 <p className="mt-5 text-sm text-gray-text" style={{paddingBottom:"80px"}}>
    //                     {desc}
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="container text-center items-center qa-type-card card-multiple-bg">
      <img
        loading="lazy"
        className="inline-block mt-5 "
        src={img}
        alt={getImageALt(img)}
        width="80px"
        height="80px"
      ></img>
      <h3 className=" font-extrabold text-lg text-font-primary">{title}</h3>
      <p
        className="mt-5 text-sm text-gray-text"
        style={{ paddingBottom: "80px" }}
      >
        {desc}
      </p>
    </div>
  );
};

export default QATypeCard;
