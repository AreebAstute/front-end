import React,{useEffect, useRef, useState} from 'react';

import ScrollButton from '../../../../components/ScrollButton';

const LandingSection = ({refOffset}) => {

    return (
        <>
            <div className=" px-5 h-screen pt-32  flex flex-col justify-center items-center multiple-bg relative"  >
            {/* text section */}
            <div className="text-center space-y-6 text-blue-primary tracking-wider mb-12 md:w-5/6 lg:w-3/6 mx-auto ">
                
                <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize">
                    <div className="font-medium bg-no-repeat bg-contain inline-block py-3 pl-3 pr-0" 
                    style={{backgroundImage:"url(/Images/serviceDetails/a-non-stop-text-bg-webp.webp)"}}>
                        Custom </div> 
                    <span className="font-extrabold text-green-primary"> Software Development</span>
                </h1>
                <p className="text-xl md:text-xl 2xl:text-2xl font-medium">SOFTWARE DEVELOPMENT IS A TEAM SPORT… <br/>YOUR NEED A REAL TEAM TO WIN</p>
                <p className="text-sm md:text-base lg:text-lg text-blue-primary my-2 font-medium text-center">
                    To every project, Astute Softwares brings a combination of domain expertise, 
                    exceptional engineering talent, rigorous Agile development processes, 
                    commitment to protection of client’s IP and accountability of a 
                    Multi-National company with over two decades of impeccable reputation.
                </p>
            </div>
            {/* text section */}
            <ScrollButton refOffset={refOffset} />
            
            </div>
        </>
    )
}

export default LandingSection
