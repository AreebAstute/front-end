import React,{useEffect} from 'react';
import ScrollButton from '../../../../components/ScrollButton';

const LandingSection = ({refOffset}) => {

    return (
        <>
        <div className=" px-5 h-screen pt-32  flex flex-col justify-center items-center multiple-bg relative ">
        {/* text section */}
        <div className="text-center space-y-6 text-blue-primary tracking-wider mb-12 md:w-5/6 lg:w-3/6 mx-auto ">
            
            <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize"> 
            <span className="font-extrabold text-green-primary">Software Quality Assurance and Testing Services</span></h1>
            <p className="text-xl md:text-xl 2xl:text-2xl font-medium">Achieve full cycle QA and testing excellence. Don't just detect issues. Prevent them.</p>
            <p className="text-lg lg:text-xl text-blue-primary my-2 font-medium">
            We have perfected QA and Testing strategy and methodology that blend seamlessly into the development lifecycle without crossing 
            the important boundary between the development and software quality assurance processes.</p>
        </div>
        {/* text section */}
        <ScrollButton refOffset={refOffset} />
        </div>
    </>
    )
}

export default LandingSection
