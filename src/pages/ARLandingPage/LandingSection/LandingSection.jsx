import React from 'react'
import LandingSectionCard from './LandingSectionCard'
import Model from "../Model";

const LandingSection = () => {
    return (
        <div className="mb-12 lg:mb-20" >
            <div className=" bg-green-50 flex items-center py-8 md:py-16 lg:py-16 bg-cover bg-no-repeat" style={{backgroundImage:"url(/Images/AR-assets/landing-page-bg-webp.webp)"}}>
                <div className="lglg:w-4/5 lg:mx-auto flex lg:flex-row flex-col">
                    <div className="lg:w-2/6 order-2 lg:order-1 px-5 md:px-10 lg:px-0 lg:pr-10 text-center lg:text-left flex flex-col items-center lg:items-start space-y-8">
                        <h1 className="text-white font-bold text-3xl md:text-4xl 2xl:text-5xl ">
                            The leading platform
                            for 3D & AR on the web
                        </h1>
                        <p className="text-white text-base 2xl:text-lg ">
                            Manage your 3D assets. Distribute 3D & AR experiences. 
                            Collaborate with others. Showcase your work. Buy & sell 3D models.
                            JOIN FOR FREE SEE PLANS
                        </p>
                        <div className="flex">
                            <button className=" px-5 py-2 text-base mr-2 rounded-md bg-white text-blue-primary">Join for Free</button>
                            <button className=" px-5 py-2 text-base ml-2 rounded-md bg-green-primary text-white">See Plans</button>
                        </div>
                    </div>
                    <div className=" order-1 lg:order-2 lg:w-4/6 md:pl-10 flex justify-center items-center min-h-200">
                        {/* <h2>This div is for model configurator!</h2> */}
                        <Model/>
                    </div>
                </div>
            </div>

            <div className="md:w-4/5 py-10 shadow-lg mt-10 lg:-mt-16 rounded-md bg-white mx-auto">
                
                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 gap-x-8 px-3 md:px-10">
                    <LandingSectionCard 
                    desc="Join millions of 3D creators and showcase your work"
                    img="/Images/AR-assets/showcase your work-webp.webp"
                    text="Join"
                    />
                    <LandingSectionCard 
                    desc="Buy & sell 3D models on the Sketchfab Store"
                    img="/Images/AR-assets/Store-webp.webp"
                    text="Buy 3D models"
                    />
                    <LandingSectionCard 
                    desc="Share & embed 3D models anywhere online"
                    img="/Images/AR-assets/Share & embed 3D models-webp.webp"
                    text="DISCOVER OUR BUSINESS SOLUTIONS"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default LandingSection
