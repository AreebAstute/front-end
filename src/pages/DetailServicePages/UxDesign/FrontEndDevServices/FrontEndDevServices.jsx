import React from 'react';

const Services = () => {
    return (
        <div>
            <div className=" px-5 md:px-10 pt-10">
                <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                        <div className=" min-h-full h-52 bg-no-repeat bg-cover bg-center" style={{backgroundImage:"url(/Images/serviceDetails/Front-End-Development-Services-webp.webp)"}}>
                            
                        </div>
                        <div className="pl-10 py-10 min-h-full">
                            <div>
                                <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center lg:text-left">
                                Front-End Development Services:
                                </h2>
                                <div className="border-b-4 border-green-primary w-28 mx-auto lg:mx-0" />
                            </div>
                        
                            <ul className="space-y-1 md:space-y-3 mt-10">
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Front-End Architecture and Design</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Rapid Prototyping</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Front-end assessment and optimization services</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Front-end Migration</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Front-end Quality assurance services</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Maintenance and Support</p>
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
