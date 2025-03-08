import React from 'react';
import StepsHeading from '../StepsHeading';
import Button from '../../../components/Button';
import SvgLineFour from './SvgLineFour';

const StepFour = () => {
    return (
        <div className=" w-11/12 md:w-10/12 2xl:w-4/5 mx-auto">
            <div className="w-11/12 mx-auto hidden lg:block ">
                <SvgLineFour />
            </div>
        <div className="-mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0">
                <img loading="lazy" className=" md:w-4/5 mx-auto" alt="test on mobile devices" src="/Images/AR-assets/Test on Mobile Devices-webp.webp" />
            </div>
            <div className="order-1 lg:order-2">
                <StepsHeading 
                content="04 Test on Mobile Devices" />
                <p className="text-gray-text py-5 text-lg text-center lg:text-left">
                    All apps created with our system can be previewed live at any time 
                    during the creation process. Simply download the ViewAR app from 
                    the Apple App Store or Google Play Store. Scan either a provided 
                    QR-Code or use an app ID to preview the current state of your project 
                    on any AR compatible mobile device.
                </p>
                <div className="flex justify-center lg:justify-start items-center mt-5">
                    <button className="py-3 border-2 border-green-primary px-2 md:px-5 rounded-lg shadow-sm mx-1 text-sm md:text-base">Get it on Play Store</button>
                    <button className="py-3 border-2 border-green-primary px-2 md:px-5 rounded-lg shadow-sm mx-1 text-sm md:text-base">Get it on Apple Store</button>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default StepFour
