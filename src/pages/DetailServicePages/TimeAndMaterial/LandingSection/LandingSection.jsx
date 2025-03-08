import React from 'react'

const LandingSection = () => {
    return (
        <div className=" bg-no-repeat bg-right-top" style={{backgroundPosition:"right top, left top",backgroundSize:"contain,20%",backgroundImage:"url(/Images/serviceDetails/bg-pattern-webp.webp),url(/Images/serviceDetails/bg-top-left-pattern-webp.webp)"}}>
            <div className="pt-20 grid grid-cols-1 lg:grid-cols-2  lg:w-11/12 mx-auto px-5 lg:px-10 ">
                <div className=" flex flex-col items-center lg:items-start justify-center text-blue-primary space-y-4 text-center lg:text-left">
                    <p className="font-bold text-lg">Achieve a greater business agility</p>
                    <h1 className="main-heading">
                        <span className="text-green-primary font-bold">Time and Material </span>
                        Services
                    </h1>
                    <p className="font-normal text-base md:text-lg xl:text-xl text-center lg:text-left">
                        Astute Softwares is a network of design,business
                        and technology experts unlike anyother. Our network
                        is home to people with expectional backgrounds:
                        authors,researchers,thought leaders and many more

                    </p>
                </div>
                <div className=" bg-cover px-5 flex justify-center items-center" 
                >
                    <img loading="lazy" 
                    className="w-full md:w-3/5 lg:w-4/5" 
                    alt="big-data-service" 
                    src="/Images/serviceDetails/TimeAndMaterial/time-and-material-high-dimensions-webp.webp" />
                </div>
            </div>
        </div>
    )
}

export default LandingSection
