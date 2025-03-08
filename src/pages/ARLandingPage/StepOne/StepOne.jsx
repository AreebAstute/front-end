import React from 'react';
import StepsHeading from '../StepsHeading';
import Button from '../../../components/Button';
import SvgLineOne from './SvgLineOne';

const StepOne = () => {
    return (
    <div className="mt-10 w-11/12 md:w-10/12 2xl:w-4/5 mx-auto ">
            
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 justify-center items-center">
            <div>
                <StepsHeading 
                content="01 Use Templates to Accelerate Your App Creation" />
                <p className="text-gray-text py-5 text-lg text-center lg:text-left">
                    Choose any of our ready-made templates that fit your business 
                    needs best. Our template library offers solutions for different 
                    scenarios, including indoor navigation, product visualization, 
                    remote assistance, IOT data, object tracking and many more. Augmented 
                    Reality templates available in the ViewAR System are thoroughly tested 
                    and have already been successfully market-proven by numerous international 
                    companies. Each template was created from a large number of customer projects, 
                    ensuring that all relevant functionality for your business domain is included.
                </p>
                <Button text="Solutions" link="/" />
            </div>
            <div className=" relative">
                <img loading="lazy" alt="Use Templates to Accelerate" className="md:w-4/5 lg:w-full 2xl:w-4/5 mx-auto relative z-20" src="/Images/AR-assets/Use Templates to Accelerate-webp.webp" />
            </div>
        </div>
        <div className="-mt-60 w-11/12 mx-auto hidden lg:block">
            <SvgLineOne />
        </div>
    </div>
    )
}

export default StepOne
