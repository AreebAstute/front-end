import React,{useState, useRef} from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
import QATypeCard from './QATypeCard';
import "./qaTypes.css";

function QATypes() {

  return (
    <> 
        <div className=" my-12 md:my-28 relative" >
        <div className=" flex flex-col " >
            <h2 className="text-xl text-center md:text-3xl text-blue-primary 2xl:text-4xl font-extrabold mb-5 tracking-wide">
              Types of Software Testing We Offer
            </h2>
            <div className="border-b-4 border-green-primary w-28 mx-auto" />      
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 md:mt-20 gap-10 w-4/5  mx-auto" style={{}} >

            <QATypeCard 
            title="FUNCTIONAL"
            desc={`We excel in understanding your product quickly and with minimal 
            amount documentation and hand-holding. We work closely 
            with you to ensure that all functional requirements, 
            including User Experience and Business Logic, are met.`}
            img="/Images/serviceDetails/FUNCTIONAL-webp.webp"
            
            />  

            <QATypeCard 
            title="PERFORMANCE"
            desc={`We have the skills and methodology to plan, conduct, 
            and chart the results of in-depth testing of scalability and 
            resource usage of your software solution. We conduct Load, 
            Stability, Stress, Volume and Configuration testing and 
            create detailed charts and graphs to illustrate the results 
            for your stakeholders.`}
            img="/Images/serviceDetails/PERFORMANCE-webp.webp"
            
            />                         
            <QATypeCard 
            title="SECURITY"
            desc={`Identify and eliminate application and network vulnerabilities 
            to comply with regulatory requirements and mitigate risk.`}
            img="/Images/serviceDetails/security-webp.webp"
            
            />                         
            <QATypeCard 
            title="COMPATIBILITY"
            desc={`Ensure data integrity, flawless functionality and compatibility 
            across a variety of platforms, devices, hardware, OSs. Particularly 
            common is testing compatibility between multiple browsers running 
            on a variety of desktop and mobile environments.`}
            img="/Images/serviceDetails/COMPATIBILITY-webp.webp"
            
            />             
            <QATypeCard 
            title="USABILITY"
            desc={`Create solutions that customers love. We help bring the 
            best in your systems by testing UI flow, consistency, appearance, 
            congruence, and more.`}
            img="/Images/serviceDetails/USABILITY-webp.webp"
            
            />             
            <QATypeCard 
            title="LOCALIZATION"
            desc={`We test language, characters, idioms, language-based layout 
            and information flow to ensure that your localized software works 
            perfectly in all of its multi-national incarnations. We are well 
            versed in cultural peculiarities of the local audience to help you 
            customize the software, apps and websites for customers in a particular 
            location.`}
            img="/Images/serviceDetails/LOCALIZATION-webp.webp"
           
            />             
        </div>
        </div>
    </>
      
  );
}

export default QATypes;
