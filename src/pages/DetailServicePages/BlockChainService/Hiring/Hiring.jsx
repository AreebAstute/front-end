import React from 'react';

const Hiring = () => {
    return (
        <>
        <div className="bg-no-repeat bg-left-top pb-10 lg:pb-20 leftPatternSize" style={{backgroundImage:"url(/Images/serviceAssets/section2/left_pattern-webp.webp)"}}>
            {/* Text section */} 
            <div className="flex flex-col items-center text-blue-primary w-5/6 lg:w-3/5 text-center mx-auto">
                <p className=" font-normal text-xl lg:text-2xl">
                    Technology
                </p>
                <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold mb-8 capitalize">
                    Hire Blockchain Web Developer
                </h2>
                <p className="font-normal text-base lg:text-lg ">
                    Block is an open ledger technology that enables a more secure, 
                    transparent, and peer-to-peer communication between the parties. 
                    The traditional internet protocols are based on many loopholes, 
                    such as the centralized servers have all acces to the user pieces of 
                    information and can use it for their benefits.
                </p>
            </div>

            <div className=" grid lg:grid-cols-2 gap-10 mt-20 items-center  text-blue-primary tracking-wider mb-12 lg:px-20 ">
                    
                    <div className="order-2 lg:order-1 space-y-5 px-5 md:px-10 text-center lg:text-left">
                        <p className="font-normal text-base lg:text-lg">
                            In traditional internet, when the server is down, the whole 
                            network is down until the server is repaired. This single point
                            of error, which causes the entire system to collapse, 
                            can be prevented if the information is stored on the network 
                            of computer scaled nodes. This overcomes the problem faced by 
                            a single point of eror in the system. In a blockchain operated 
                            web, blockchain protocols and algorithms make it safe and 
                            secure for the users. Thus provide an environment to keep 
                            the data safe online and prevent data breaches.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 bg-no-repeat bg-contain bg-center flex justify-center items-center relative" style={{backgroundImage:"url(/Images/serviceDetails/Hire-Blockchain-Web-Developer-bg-webp.webp)"}}>
                        
                        <img loading="lazy" className=" absolute w-2/4 md:w-1/3 " alt="Blockchain-Web-Developer" src="/Images/serviceDetails/Blockchain-Web-Developer-webp.webp" />
                        <div className="relative circularDiv w-72 h-72 md:w-96 md:h-96 flex justify-center items-center rounded-full">  
                        </div>
                        <div className="w-60 h-60 md:w-80 md:h-80 absolute innerCircle flex justify-center rounded-full">
                        </div>
                    </div>
                    {/* <div className="circleAnimation" style={{backgroundImage:"url(/Images/serviceDetails/Hire-Blockchain-Web-Developer-bg-webp.webp)"}}>

                    </div> */}
                </div>
            
        </div>

        </>
    )
}

export default Hiring
