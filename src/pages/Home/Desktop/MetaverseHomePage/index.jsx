import React from "react";
// import metaverseBackgroundImage from '/images/serviceAssets/Metaverse/metaverse-background-webp.webp'
const MetaverseSection = () => {
  return (
    <div className="py-32 ">
      {/* // <div className='h-full' style={{ backgroundImage:  `url(Images/serviceAssets/Metaverse/background-webp.webp)`  }} >
    // <div className=' py-32 px-10 bg-no-repeat bg-right-top relative metaverseSection h-screen' style={{backgroundImage:"url(/Images/serviceAssets/Metaverse/background-webp.webp)" }} >
        //  <img src="./images/serviceAssets/Metaverse/tech-elements-webp.webp" className=''/>
    // </div> */}
      <img
        loading="lazy"
        src="./images/serviceAssets/Metaverse/metaverse-webp.webp"
        alt="metaverse"
        className=""
      />
    </div>
  );
};

export default MetaverseSection;
