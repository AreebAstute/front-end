import React from 'react';
import StepsHeading from '../StepsHeading';
import Button from '../../../components/Button';
import SvgLineFive from './SvgLineFive';

const StepFive = () => {
    return (
    <div className="-mt-10 w-11/12 md:w-10/12 2xl:w-4/5 mx-auto" >
        <div className="w-11/12 mx-auto hidden lg:block">
            <SvgLineFive />
        </div>
        <div className="mt-10 lg:-mt-96 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
                <StepsHeading 
                content="05 Publish" />
                <p className="text-gray-text py-5 text-lg text-center lg:text-left">
                    After successful tests and previews, your AR experience is ready to 
                    go live and be shared with your customers. Download the Xcode 
                    Project for iOS and/or the Studio Project for Android and publish 
                    without any additional coding or adjustments.
                </p>
            </div>
            <div className="">
                <img loading="lazy" className="md:w-4/5  mx-auto" alt="howitworks_publish" src="/Images/AR-assets/howitworks_publish-webp.webp" />
            </div>
        </div>
    </div>
    )
}

export default StepFive
