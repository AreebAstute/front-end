import React, { useEffect } from 'react'


const SAME_CLASS="block px-4 py-2  text-white text-xs xl:text-sm 2xl:text-base   hover:text-green-primary"

const Subitems = ({setShowOurServices}) => {



    return (
        <div className='flex min-w-640'onMouseEnter={()=>setShowOurServices(true)}  onMouseLeave={() => setShowOurServices(false)}>
              <div id="dropdownNavbar" className="transition text-xs xl:text-sm 2xl:text-base  font-normal bg-blue-primary divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/services/custom-software-development" className={SAME_CLASS} aria-label='Custom Software Development'>Custom Software Development</a>
                    </li>
                    <li>
                        <a href="/services/digital-transformation-services" className={SAME_CLASS} aria-label='Digital Transformation'>Digital Transformation</a>
                    </li>
                    <li>
                        <a href="/services/software-quality-assurance" className={SAME_CLASS} aria-label='QA and Testing Services'>QA and Testing Services</a>
                    </li>
                    <li>
                        <a href="/services/mobile-application-development" className={SAME_CLASS} aria-label='Mobile Application Development'>Mobile Application Development</a>
                    </li>
                    <li>
                        <a href="/services/ui-and-ux-design"className={SAME_CLASS} aria-label='UI and UX Design'>UI and UX Design</a>
                    </li>
                    <li>
                        <a href="/services/maintenance-and-support" className={SAME_CLASS} aria-label='Maintenance &  Support Services'>Maintenance &  Support Services </a>
                    </li>
                </ul>
                {/* <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div> */}
            </div>
            <div id="dropdownNavbar" className="font-normal bg-blue-primary divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/metaverse" className={SAME_CLASS} aria-label='Metaverse'>Metaverse</a>
                    </li>
                    <li>
                        <a href="/augmented-reality" className={SAME_CLASS} aria-label='Augmented Reality'>Augmented Reality</a>
                    </li>
                    <li>
                        <a href="/services/blockchain-solutions" className={SAME_CLASS} aria-label='Block Chain'>Block Chain</a>
                    </li>
                    <li>
                        <a href="/3d-modelling"  className={SAME_CLASS} aria-label='3d Modeling'>3d Modeling</a>
                    </li>
                    <li>
                        <a href="/services/devops-services" className={SAME_CLASS} aria-label='Big Data'>Devops</a>
                    </li>
                    <li>
                        <a href="/services/big-data-consulting-services" className={SAME_CLASS} aria-label='Big Data'>Big Data</a>
                    </li>
                </ul>
                {/* <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div> */}
            </div>
          
        </div>
    )
}

export default Subitems