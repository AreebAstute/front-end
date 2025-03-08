import React from 'react';

const LandingSection = () => {
    return (
        <div className=" bg-no-repeat bg-right-top" style={{backgroundPosition:"right top, left top",backgroundSize:"contain,20%",backgroundImage:"url(/Images/serviceDetails/bg-pattern-webp.webp),url(/Images/serviceDetails/bg-top-left-pattern-webp.webp)"}}>
            <div className="grid grid-cols-1 lg:grid-cols-2  lg:w-11/12 mx-auto px-10 ">
                <div className=" flex flex-col items-center lg:items-start justify-center text-blue-primary space-y-4 pt-20">
                    <p className="font-bold text-lg">Maximize your data investment</p>
                    <h1 className="main-heading">
                        <span className="text-green-primary font-bold">Big Data </span>
                        Consulting and  <br/> Analytics Services
                    </h1>
                    <p className="font-normal text-lg md:text-xl xl:text-2xl text-center lg:text-left">
                        Big Data Consulting and Analytics Services provide strategy,
                        engineering, and analytics to help our clients derive actionable 
                        insights to drive business.
                    </p>
                </div>
                <div className=" bg-cover px-5 py-20 flex justify-center items-center">
                    <img loading="lazy" alt="big-data-service" className="w-full md:w-4/5 lg:w-full" src="/Images/serviceDetails/big-data-service-webp.webp" />
                </div>
            </div>
        </div>
    )
}

export default LandingSection
