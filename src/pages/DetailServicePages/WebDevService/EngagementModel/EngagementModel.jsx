import React,{useState, useRef} from 'react';
import "./engagementModel.css";
import { FaArrowCircleRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
import EngagementModelCard from './EngagementModelCard';

function EngagementModels() {

  return (
    <> 
        <div className=" my-12 md:my-28 relative" >
        <div className=" flex flex-col " >
            <h2 className="text-xl text-center md:text-3xl text-blue-primary 2xl:text-4xl font-extrabold mb-5 tracking-wide">
                Flexible Engagement Models
            </h2>
            <div className="border-b-4 border-green-primary w-28 mx-auto" />      
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-20 gap-10 w-4/5 lg:w-11/12 mx-auto" style={{}} >

            <EngagementModelCard 
            title="TIME & MATERIALS"
            desc={`Ideal for flexible engagements, such as discovery, rapid 
            prototyping and maintenance, our T&M model allows you to quickly 
            scale up and down your commitment.`}
            img="/Images/serviceDetails/time_m-webp.webp"
            />  

            <EngagementModelCard 
            title="FIXED PRICE"
            desc={`Our Fixed Price model is ideal for projects with 
            clearly defined objectives and milestones. We provide 
            detailed proposals, schedules and deliverables.`}
            img="/Images/serviceDetails/fixed price-webp.webp"

            />                         
            <EngagementModelCard 
            title="RETAINER AGREEMENT"
            desc={`Astute Softwares works with a number of clients on monthly and annual 
            retainer agreements. This structured engagement is ideal for 
            project kickoffs and ongoing work.`}
            img="/Images/serviceDetails/retainer-webp.webp"
            />                         
            <EngagementModelCard 
            title="HYBRID"
            desc={`Because all projects are different, we offer different pricing 
            and engagement models. A hybrid models offers the perfect blend of 
            structure and flexibility.`}
            img="/Images/serviceDetails/hybrid-webp.webp"
            />             
        </div>
        </div>
    </>
      
  );
}

export default EngagementModels;
