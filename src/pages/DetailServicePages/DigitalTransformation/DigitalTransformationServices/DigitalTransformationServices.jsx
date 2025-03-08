import React from 'react';

const Services = () => {
    return (
        <div>
            <div className=" px-5 md:px-10 pt-20 bg-no-repeat bg-left-top leftPatternSize " style={{backgroundImage:"url(/Images/serviceAssets/section2/left_pattern-webp.webp)"}}>
                <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
                    
                    {/* Text section */} 
                   
                    <p className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide">
                        Digital Transformation Services:
                    </p>
                    <div className="border-b-4 border-green-primary w-28 " />

                    <div className="text-green-primary text-xl space-x-3 flex items-center mt-10">
                        <span className="border-r-2 pr-2 border-green-primary">Innovate</span>
                        <span className="border-r-2 pr-2 border-green-primary">Optimize</span>
                        <span>Automate</span>
                    </div>
                    
                    
                    {/* Text section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-28 mt-5">
                        <div className="bg-cover bg-right-top bg-no-repeat px-3 py-8" style={{backgroundImage:"url(/Images/serviceDetails/point-bg-webp.webp)"}}>
                            <ul className="space-y-1 md:space-y-3">
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Legacy Application Modernization</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Cloud Migration and Enablement</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Greenfield Cloud Engineering</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Automation, DevOps Services</p>
                                </li>
                                
                            </ul>
                        </div>

                        <div className="bg-cover bg-right-top bg-no-repeat px-3 py-8 min-h-full" style={{backgroundImage:"url(/Images/serviceDetails/point-bg-webp.webp)"}}>
                            <ul className="space-y-1 md:space-y-3">
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Big Data Warehousing</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Business Intelligence Solutions</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Predictive Analytics</p>
                                </li>
                                
                            </ul>
                        </div>

                    </div>

                </div>
             
            </div>
        </div>
    )
}

export default Services
