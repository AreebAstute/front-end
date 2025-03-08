import React, {useRef,useEffect} from 'react';
import Button from '../../../../components/Button';
import CustomList from '../../../../components/CustomList/CustomList';


const ModernCoreApplication = () => {

    return (
        <div >
            {/* <div className="grid grid-cols-1 lg:grid-cols-2  px-5 md:px-20 pt-10 md:pt-16 lg:py-28 bg-no-repeat bg-right-top rightPatternSize text-center md:text-left" style={{backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-10  px-5 md:px-20  lg:pt-20 bg-no-repeat bg-right-top rightPatternSize text-center md:text-left bg-gray-light" style={{backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}>
                {/* Text section */}
                <div className=" text-gray-text text-justify tracking-wider mb-12 xl:px-12">
                    <div className="mb-10">
                        <p className="text-2xl md:text-3xl 2xl:text-4xl text-center md:text-left my-3 font-extrabold text-blue-primary ">
                            Modernize Your Core Application
                        </p>
                        <div className="w-20 mx-auto md:mx-0 border-b-2 border-green-primary" />
                    </div>
                    
                    <p className="font-normal">
                        Legacy applications have become one of the biggest impediments to
                        business agility and ability to compete in today’s digital economy. Many
                        companies struggle with revenue losses and operational inefficiencies
                        due to limitations in workflow automation, deteriorating user
                        experiences, lack of real-time analytics and reporting, and inability to
                        integrate with emerging technologies. Modernizing and Moving legacy
                        applications to the cloud offers several business-critical benefits:
                    </p>
                    <br/>
                    <CustomList list={[
                        'Operational and technology cost reduction',
                        'Improved business agility',
                        'Enhanced team collaboration and increased performance',
                        'Improved software compliance',
                        'Better security'
                    ]} />
                    
                    <br/>
                    <p className="font-normal mb-10">
                        For over 10 years Astute Softwares has been modernizing and converting legacy
                        systems into modern, scalable and secure solutions. In the digital era
                        Cloud offers a superior opportunity to achieve faster time to market;
                        release stable, secure, and scalable products more often to adapt to
                        quickly changing customer demands; leverage data potential to create
                        personalized experiences and improve business performance metrics.
                        Moving existing legacy infrastructure or separate mission-critical
                        applications to the Cloud by leveraging existing open source tools.
                    </p>
                </div>
                {/* Text section */}
                
                {/* image section */}
                <div className="flex items-center justify-center">
                    <img loading="lazy" alt="Core-Application" className="Core_Application" src="/Images/serviceDetails/Core_Application-webp.webp" />
                </div>
                {/* image section */}


            </div>
        </div>
    )
}

export default ModernCoreApplication
