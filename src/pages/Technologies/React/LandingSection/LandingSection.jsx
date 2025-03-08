import React from 'react';


const LandingSection = () => {
    return (
        <div className="bg-cover py-32 multiple-tech-bg">
            <div className="grid grid-cols-1 lg:grid-cols-2  lg:w-11/12 mx-auto md:px-10 ">
                <div className=" flex flex-col items-center lg:items-start justify-center text-blue-primary space-y-3 pb-10 ">
                    <p className="font-bold text-lg text-center lg:text-left">Designed for remote cooperations</p>
                    <h1 className="main-heading">
                        Get a world-class <br/>
                        <span className="text-green-primary font-bold">React </span>
                        development team
                    </h1>
                    <p className="font-normal text-lg md:text-xl xl:text-2xl text-center lg:text-left px-5 md:px-0">
                        Turn your ideas into high-performance and scalable apps with experienced 
                        development teams
                    </p>
                </div>
                <div className=" bg-cover px-5  flex justify-center items-center">
                    <img loading="lazy" className="w-full md:w-4/5 lg:w-full" alt="react-logo" src="/Images/technologies/React-logo-webp.webp" />
                </div>
            </div>
        </div>
    )
}

export default LandingSection
