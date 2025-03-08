import React,{useState, useRef} from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
import MaintenanceSevicesCard from './MaintenanceServicesCard';
import "./maintenanceServices.css";

function QATypes() {

  return (
    <> 
        <div className=" my-18 relative" >
        <div className=" flex flex-col " >
            <h2 className="text-xl text-center md:text-3xl text-blue-primary 2xl:text-4xl font-extrabold mb-5 tracking-wide">
              Application Maintenance Services
            </h2>
            <div className="border-b-4 border-green-primary w-28 mx-auto" />      
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 md:mt-20 gap-8 w-11/12  mx-auto" style={{}} >

            <MaintenanceSevicesCard 
            title="CORRECTIVE_MAINTENANCE"
            desc={`We’ll identify and fix software design, logical and 
            coding errors, bugs and defects to increase system stability, consistency of software operation and satisfaction of your customers.`}
            img="/Images/serviceDetails/CORRECTIVE-webp.webp"
             
            />  

            <MaintenanceSevicesCard 
            title="ADAPTIVE_MAINTENANCE"
            desc={`We’ll help you deliver value to your stakeholders and better 
            compete on the market by developing and deploying new features, adapting 
            software to changing business and Customer needs.`}
            img="/Images/serviceDetails/ADAPTIVE-webp.webp"
            /> 

            <MaintenanceSevicesCard 
            title="PERFECTIVE_MAINTENANCE"
            desc={`We’ll re-engineer your application to adapt to changing user 
            requirements, perform system functional enhancements, and work on 
            increasing application performance and efficiency.`}
            img="/Images/serviceDetails/PERFECTIVE-webp.webp"
            /> 
                                    
            <MaintenanceSevicesCard 
            title="PREVENTIVE_MAINTENANCE"
            desc={`We’ll ensure your application is secure and stable, minimize 
            system downtime and increase software maintainability by restructuring 
            and optimizing the code, updating documentation and performing security audits.`}
            img="/Images/serviceDetails/PREVENTIVE-webp.webp"
            />                         
                           
        </div>
        </div>
    </>
      
  );
}

export default QATypes;
