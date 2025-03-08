import React from 'react';
import ScrollButton from '../../../../components/ScrollButton';
import { handleScroll } from '../../../../utils';

const LandingSection = ({refOffset}) => {

    return (
         <>
         <div className=" px-5 h-screen pt-32  flex flex-col justify-center items-center multiple-bg relative ">
         {/* text section */}
         <div className="text-center space-y-6 text-blue-primary tracking-wider mb-12 md:w-5/6 lg:w-3/6 mx-auto ">
             
             <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize"> <span className="font-extrabold text-green-primary">Maintenance & support services</span></h1>
             <p className="text-xl md:text-xl 2xl:text-2xl font-medium">…Because project completion is only the beginning…</p>
             <p className="text-lg lg:text-xl text-blue-primary my-2 font-medium">
                Outsourcing your application maintenance and support frees up your team to focus on business—critical initiatives. Astute Softwares maintenance and support teams seamlessly blend with clients development and support practices ensuring smooth software operation and scalability.</p>
         </div>
         {/* text section */}
         <ScrollButton refOffset={refOffset} />
         </div>
     </>
    )
}

export default LandingSection
