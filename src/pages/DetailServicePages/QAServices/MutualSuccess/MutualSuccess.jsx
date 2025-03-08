import React from 'react'

const MutualSuccess = () => {
    return (
        <div className="lg:py-32 mutualSuccess" >
            <div className="px-10 md:pl-20 w-full lg:w-1/2">
                <div className="mb-8 md:mb-12">
                    <p className="text-2xl md:text-3xl 2xl:text-4xl my-5 font-extrabold text-blue-primary text-center md:text-left">
                        Your Succes is Our Success
                    </p>
                    <div className="w-20 mx-auto md:mx-0 border-b-2 border-green-primary" />
                </div>
                <p className=" text-gray-text text-lg text-center md:text-left">
                    For over 10 years Astute Softwares utilized an 
                    Integrated Quality Assurance practice to ensure 
                    the highest quality of our deliverables. We have 
                    perfected QA strategy and methodology that blend 
                    seamlessly into the development lifecycle without 
                    crossing the important boundary between the development 
                    and software quality assurance processes.
                </p>
            </div>
            {/* <div className="hidden md:block min-h-full bg-cover bg-right bg-no-repeat" style={{backgroundImage:"url(/Images/serviceDetails/Succes-is-Our-Success-100-webp.webp)"}}>
            </div> */}
        </div>
    )
}

export default MutualSuccess
