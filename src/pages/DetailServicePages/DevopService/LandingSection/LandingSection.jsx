import React from 'react'

const LandingSection = () => {
    return (
        <div className=" bg-no-repeat bg-right-top" style={{backgroundPosition:"right top, left top",backgroundSize:"46%,20%",backgroundImage:"url(/Images/serviceDetails/bg-pattern-webp.webp),url(/Images/serviceDetails/top-center-webp.webp)"}}>
            <div className="grid grid-cols-1 lg:grid-cols-2  lg:w-11/12 mx-auto px-10 ">
                <div className=" flex flex-col items-center lg:items-start justify-center text-blue-primary space-y-4 pt-20">
                    <p className="font-bold text-lg text-center md:text-left">Achieve a greater business agility</p>
                    <h1 className="main-heading">
                        <span className="text-green-primary font-bold">DevOps </span>
                            Services and <br/> Solutions
                    </h1>
                    <p className="font-normal text-lg md:text-xl xl:text-2xl text-center lg:text-left">
                        Continuous Delivery makes staying ahead of the competition and 
                        impresing your customers with products they really want a breeze.

                    </p>
                </div>
                <div className=" bg-cover px-5 py-20 flex justify-center items-center" 
                >
                    <img loading="lazy" className="w-full md:w-4/5 lg:w-full" alt="Devops" src="/Images/serviceDetails/Devops-webp.webp" />
                </div>
            </div>
        </div>
    )
}

export default LandingSection
