import React from "react";
import BenefitsCircle from "./BenefitsCircle";

const KandaIndustries = () => {
  const outerBoxStyle = "bg-contain bg-no-repeat py-5 lg:py-8 px-4";
  const innerBoxStyle =
    "bg-white w-20 h-20 lg:w-40 lg:h-40 shadow-2xl mx-1 lg:mx-2 rounded-full flex justify-center items-center transform -rotate-90 md:rotate-0";
  const circleText =
    "py-1 text-blue-primary uppercase text-xss lg:text-base font-normal flex justify-center  mx-auto text-center";
  return (
    <>
      <div
        className="bg-no-repeat bg-right-top py-10 lg:py-20 rightPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
        }}
      >
        {/* Text section */}
        <div className="flex flex-col items-center text-blue-primary  text-center mx-auto">
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-8 w-5/6 md:w-3/5 xl:w-2/5 leading-normal ">
            Benefits of DevOps Implementation
          </h2>
        </div>

        <div className="h-screen md:h-auto ">
          <div className=" flex justify-center p-10  mt-96 md:mt-12 transform rotate-90 md:rotate-0 mx-3 md:w-3/5 md:mx-auto ">
            <BenefitsCircle
              title="Faster Time To Market"
              bgImage="/Images/serviceDetails/devopBenifits/1-webp.webp"
              number="odd"
              innerImage="/Images/serviceDetails/devopBenifits/FASTER-TIME-webp.webp"
              marginLeft="lg:-ml-1"
            />
            <BenefitsCircle
              title="Greater Business Agility"
              bgImage="/Images/serviceDetails/devopBenifits/2-webp.webp"
              number="even"
              innerImage="/Images/serviceDetails/devopBenifits/GREATER-BUSINESS-webp.webp"
              marginLeft="-ml-3"
            />
            <BenefitsCircle
              title="Enhanced Security"
              bgImage="/Images/serviceDetails/devopBenifits/3-webp.webp"
              number="odd"
              innerImage="/Images/serviceDetails/devopBenifits/Security-webp.webp"
              marginLeft="-ml-5 lg:-ml-8"
            />
            <BenefitsCircle
              title="Faster Time To Market"
              bgImage="/Images/serviceDetails/devopBenifits/4-webp.webp"
              number="even"
              innerImage="/Images/serviceDetails/devopBenifits/INCREASED-Producitivity-webp.webp"
              marginLeft="-ml-4 lg:-ml-6"
            />
            <BenefitsCircle
              title="Optimized Costs Reliability"
              bgImage="/Images/serviceDetails/devopBenifits/5-webp.webp"
              number="odd"
              innerImage="/Images/serviceDetails/business--webp.webp"
              positionX="-18px"
              marginLeft="-ml-5 lg:-ml-8"
            />
            <BenefitsCircle
              title="Speed And Efficiency"
              bgImage="/Images/serviceDetails/devopBenifits/6-webp.webp"
              number="even"
              innerImage="/Images/serviceDetails/devopBenifits/EFFICIENCY-webp.webp"
              marginLeft="-ml-1 lg:-ml-3"
            />
            <BenefitsCircle
              title="Reliability"
              bgImage="/Images/serviceDetails/devopBenifits/1-webp.webp"
              number="odd"
              innerImage="/Images/serviceDetails/devopBenifits/RELIABILITY-webp.webp"
              marginLeft="-ml-3 lg:-ml-6"
            />
            <BenefitsCircle
              title="Shared Sense Of Ownership"
              bgImage="/Images/serviceDetails/devopBenifits/8-webp.webp"
              number="even"
              innerImage="/Images/serviceDetails/devopBenifits/SHARED-SENSE-webp.webp"
              marginLeft="-ml-3 lg:-ml-6"
            />
          </div>
          {/* <div className=" flex justify-center p-10  mx-auto my-10 transform rotate-90 md:rotate-0">
            
                
                <div className="">
                    <h2 className={`${circleText}`}> FASTER TIME TO MARKET</h2>
                    <div className={`${outerBoxStyle} bg-top`}
                    style={{backgroundImage:"url(/Images/serviceDetails/devopBenifits/1-webp.webp)"}}
                    >
                        <div className={`${innerBoxStyle}`}>
                            <h3>circle 1</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={`${outerBoxStyle} bg-bottom -ml-5 `}
                    style={{backgroundPositionX:"6px" ,backgroundImage:"url(/Images/serviceDetails/devopBenifits/2-webp.webp)"}}
                    >
                        <div className={`${innerBoxStyle}`}>
                            <h3>circle 2</h3>
                        </div>
                    </div>
                    <h2 className={`${circleText}`}> GREATER BUSINESS AGILITY</h2>

                </div>
                
                <div>
                    <h2 className={`${circleText}`}> ENHANCED SECURITY</h2>
                    <div className={`${outerBoxStyle} bg-top -ml-5 `}
                    style={{backgroundImage:"url(/Images/serviceDetails/devopBenifits/3-webp.webp)"}}
                    >
                        <div className={`${innerBoxStyle}`}>
                        <h3>circle 3</h3>
                        </div>
                    </div>

                </div>
                

                <div>
                    <div className={`${outerBoxStyle} bg-bottom -ml-5 `}
                    style={{backgroundImage:"url(/Images/serviceDetails/devopBenifits/4-webp.webp)"}}
                    >
                        <div className={`${innerBoxStyle}`}>
                            <h3>circle 4</h3>
                        
                        </div>
                    </div>
                    <h2 className={`${circleText}`}> ENHANCED SECURITY</h2>

                </div>
                

                <div>
                    <h2 className={`${circleText}`}> ENHANCED SECURITY</h2>
                    <div className={`${outerBoxStyle} bg-top -ml-5 `}
                    style={{backgroundPositionX:"-6px",backgroundImage:"url(/Images/serviceDetails/devopBenifits/5-webp.webp)"}}
                    >
                        <div className={`${innerBoxStyle}`}>
                            <h3>circle 5</h3>
                        
                        </div>
                    </div>
                </div>
                

                <div>
                    <div className={`${outerBoxStyle} bg-bottom -ml-5 `}
                    style={{backgroundImage:"url(/Images/serviceDetails/devopBenifits/6-webp.webp)"}}
                    >
                        <div className={`${innerBoxStyle}`}>
                            <h3>circle 6</h3>
                        
                        </div>
                    </div>
                    <h2 className={`${circleText}`}> ENHANCED SECURITY</h2>

                </div>
                

                <div>
                    <h2 className={`${circleText}`}> ENHANCED SECURITY</h2>
                    <div className={`${outerBoxStyle} bg-top -ml-5 `}
                    style={{backgroundImage:"url(/Images/serviceDetails/devopBenifits/7-webp.webp)"}}
                    >
                        <div className={`${innerBoxStyle}`}>
                        <h3>circle 7</h3>
                        
                        </div>
                    </div>

                </div>
                
                <div>
                    <div className={`${outerBoxStyle} bg-bottom -ml-5 `}
                    style={{backgroundImage:"url(/Images/serviceDetails/devopBenifits/8-webp.webp)"}}
                    >
                        <div className={`${innerBoxStyle}`}>
                            <h3>circle 8</h3>
                        
                        </div>
                    </div>
                    <h2 className={`${circleText}`}> ENHANCED SECURITY</h2>

                </div>
                
            
        </div> */}
        </div>
        {/* Text section */}
      </div>
    </>
  );
};

export default KandaIndustries;
