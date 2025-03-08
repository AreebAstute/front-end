import React from 'react';

const Services = () => {
    return (
        <div>
            <div className=" px-5 md:px-10 pt-10 bg-no-repeat bg-left-top leftPatternSize " style={{backgroundImage:"url(/Images/serviceAssets/section2/left_pattern-webp.webp)"}}>
                <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
                    
                    {/* Text section */} 
                   
                    <p className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center lg:text-left">
                        Custom Software Development Services:
                    </p>
                    <div className="border-b-4 border-green-primary w-28 mx-auto lg:mx-0" />
                    
                    
                    {/* Text section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-28 mt-5">
                        {/* <div className="px-3 md:py-8"> */}
                        <div className="bg-cover bg-right-top bg-no-repeat px-3 py-8" style={{backgroundImage:"url(/Images/serviceDetails/point-bg-webp.webp)"}}>
                            <ul className="space-y-1 md:space-y-3">
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Discovery and Analysis</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Architecture and UX/UI design</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>POC and MVP development</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Custom Software Development</p>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="bg-cover bg-right-top bg-no-repeat px-3 py-8 min-h-full" style={{backgroundImage:"url(/Images/serviceDetails/point-bg-webp.webp)"}}>
                            <ul className="space-y-1 md:space-y-3">
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>QA Testing and Automation</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>DevOps Implementation</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Cloud Migration, Optimization and Maintenance</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Support and Maintenance</p>
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
