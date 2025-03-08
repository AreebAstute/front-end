import React, {useRef,useEffect} from 'react';
import {Link} from "react-router-dom";
import Button from '../../../../components/Button';

const SecondSection = () => {

    return (
        <div>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2  px-5 md:px-20 pt-10 md:pt-16 lg:py-28 bg-no-repeat bg-right-top rightPatternSize text-center md:text-left" style={{backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}> */}
            <div className=" text-blue-primary tracking-wider mb-12 md:px-20 pt-20 text-center md:text-left">
                <p className="text-blue-primary font-normal  text-lg md:text-xl lg:text-2xl uppercase">
                    <div className="font-medium bg-no-repeat bg-contain inline-block pr-3 py-3" 
                    style={{backgroundImage:"url(/Images/serviceDetails/less-management-text-pattern-webp.webp)"}}>
                        Less 
                    </div>
                    MANAGEMENT, MORE RESULTS
                </p>
                <p className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold mb-10">
                    One scalable team for start-to-finish development
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  px-5 md:px-20 items-center   bg-no-repeat bg-right-top rightPatternSize text-center md:text-left" style={{backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}>
                {/* Text section */}

                <div className=" text-blue-primary tracking-wider mb-12  lg:mt-8  text-justify">
                    
                    <p className="font-normal">
                        What does it mean to be reliable? 
                        <span className="text-green-primary font-normal"> It means your outsourced team works as well as your 
                            web developers do. </span>
                        Acces web development services trusted by 98% of CTOs that 
                        you’ll find understanding with. They made APIs, custom web 
                        applications, hybrid mobile app development, updated stacks,
                        and build cloud-native systems.
                    </p>
                    <br/>
                    <Button text='Talk to an Expert' link='/contact-us'/>
                </div>
                {/* image section */}
                <div className="flex items-center justify-center">
                    <img loading="lazy" className="w-4/5" alt="MAintenance team" src="/Images/serviceDetails/MAintenance team-webp.webp" />
                </div>
                {/* image section */}


            </div>
        </div>
    )
}

export default SecondSection
