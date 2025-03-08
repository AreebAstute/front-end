import React from 'react';
import ScrollButton from '../../../../components/ScrollButton';


const LandingSection = ({refOffset}) => {

    
    return (
        <>
            <div className=" px-5 h-screen flex flex-col justify-center items-center multiple-bg ">
            {/* text section */}
            <div className="text-center text-blue-primary tracking-wider mb-12 lg:w-3/6 mx-auto space-y-4 relative">
               
                <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize"> Interactive <span className="font-extrabold text-green-primary">UX/UI designs </span></h1>
                <p className="text-xl md:text-xl 2xl:text-2xl font-medium">Drive competitive advantage <br/>through data-driven UX and user-friendly UI</p>
                <p className="text-lg lg:text-lg text-blue-primary my-2 font-medium text-center">
                We blend skill and expertise to produce elegant, functional and user-focused interfaces. We let the purpose of the particular web or mobile application drive its design and user experience to deliver
                high user acceptance and engagement rates of your product.</p>
            </div>
            {/* text section */}
            <ScrollButton refOffset={refOffset} />
            </div>
        </>
    )
}

export default LandingSection
