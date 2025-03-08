import React from 'react';

import CustomList from '../../../../components/CustomList/CustomList';

const Monitoring = () => {
    return (
        <div>
            <div className=" px-5 py-10">
                <div className=" text-blue-primary tracking-wider mb-12 w-11/12 lg:w-4/5 mx-auto">
                    <div>
                        <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center md:text-left">
                            24x7 System Monitoring
                        </h2>
                        <div className="border-b-4 border-green-primary w-28 mx-auto md:mx-0" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 mt-5">
                        <div className=" md:py-8 text-base md:text-lg text-center md:text-left ">
                            <p>
                                Astute offers 24/7 maintenance, support and monitoring of 
                                your core applications, hardware and overall system performance 
                                to ensure system uptime. The support team is immediately 
                                alerted when your system crosses the defined thresholds to 
                                avoid your server going down, memory reaching capacity, or a 
                                workstation consistently being overloaded.
                            </p>
                            
                        </div>
                        <div className="bg-cover bg-right-top bg-no-repeat px-3 py-8 min-h-full" style={{backgroundImage:"url(/Images/serviceDetails/point-bg-webp.webp)"}}>
                            <CustomList
                            list={[
                                "Application monitoring",
                                "Server monitoring",
                                "Network and remote connectivity management",
                                "Event log management",
                                "Backup & recovery",
                                
                            ]}
                            />
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default Monitoring
