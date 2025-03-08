import React from 'react';

const Services = () => {
    return (
        <div>
            <div className=" px-5 md:px-10">
                <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                        
                        <div  className="order-2 md:order-1 pl-10 py-10 min-h-full">
                            <div>
                                <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center lg:text-left">
                                    UX/UI Development Services:
                                </h2>
                                <div className="border-b-4 border-green-primary w-28 mx-auto lg:mx-0" />
                            </div>
                        
                            <ul className="space-y-1 md:space-y-3 mt-10">
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>UX/UI Audit and Analysis</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>User Interface Wireframing</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Clickable Prototypes</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>User Journey mapping and design</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Cross-Device User Experience</p>
                                </li>
                                <li className="contentListItem">
                                    <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
                                    <p>Maintenance and Support</p>
                                </li>
                            </ul>
                        </div>

                        {/* img dev */}
                        <div className="order-1 md:order-2 min-h-full h-52 bg-no-repeat py-10 bg-cover bg-center" style={{backgroundImage:"url(/Images/serviceDetails/UX-UI-Design-webp.webp)"}}>
                            
                        </div>
                        {/* img dev */}

                    </div>

                </div>
             
            </div>
        </div>
    )
}

export default Services
