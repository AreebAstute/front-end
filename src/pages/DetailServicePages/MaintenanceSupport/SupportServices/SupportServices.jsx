import React,{useState, useRef} from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
import SupportServicesCard from './SupportServicesCard';

function QATypes() {

  return (
    <> 
      <div className=" my-12 md:my-28 relative bg-gray-light py-16" >
        <div className="w-11/12 lg:w-4/5 mx-auto">
          <div className="mx-5 w-full md:w-11/12 flex flex-col " >
              <h2 className="text-xl md:text-3xl text-blue-primary 2xl:text-4xl font-extrabold mb-5 tracking-wide">
                Software Support Services
              </h2>
              <div className="border-b-4 border-green-primary w-28" />      
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 2xl:gap-20 ">

              <SupportServicesCard 
              title="LEVEL 1(L1)"
              desc={`Filters Help Desk calls, emails and provides basic support, 
              real-time troubleshooting (e.g. password resets, break/fix instructions), 
              ticket routing and escalation to Level 2 and Level 3 support. L1 will get 
              outside vendor assistance and maintenance when needed. Level 1 personnel 
              gather and analyze information about the users’ issues determining the best 
              way to resolve the problem. Level 1 also provides support for configuration 
              solutions that were resolved and documented previously by Level 2 and Level 
              3 engineers.`}
              />  

              <SupportServicesCard 
              title="LEVEL 2(L2)"
              desc={`Experienced and knowledgeable technical specialists that assist 
              Level 1 personnel with resolution of technical problems. They investigate 
              the raised issues and check for known solutions to complex issues. These 
              engineers are especially knowledgeable in resolution and prevention of 
              general IT infrastructure issues (troubleshooting, configuration, database 
              administration). They also work with Level 3 engineers providing support 
              in complex cases. L2 engineers handle issues escalated from L1. Level 2 
              will escalate to Level 3, when necessary.`}
              /> 

              <SupportServicesCard 
              title="LEVEL 3(L3)"
              hidden={true}
              desc={`These are our expert Operations and CPEspecialists handling the 
              most complicated problems. L3 engineers are assisting both L1 and L2 
              engineers with complex, multifaceted problems as well as high severity 
              critical issues requiring immediate resolution. They also research and 
              develop solutions for new issues.`}
              /> 
                                     
          </div>

          <div className="md:w-1/2 mx-auto lg:hidden">
            <SupportServicesCard 
              title="LEVEL 3(L3)"
              desc={`These are our expert Operations and CPEspecialists handling the 
              most complicated problems. L3 engineers are assisting both L1 and L2 
              engineers with complex, multifaceted problems as well as high severity 
              critical issues requiring immediate resolution. They also research and 
              develop solutions for new issues.`}
              /> 
          </div>
          
        </div>
      </div>
    </>
      
  );
}

export default QATypes;
