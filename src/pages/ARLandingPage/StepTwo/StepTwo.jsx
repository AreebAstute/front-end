import React from 'react';
import StepsHeading from '../StepsHeading';
import Button from '../../../components/Button';
import SvgLineTwo from './SvgLineTwo';

const StepTwo = () => {
    return (
        <div className=" w-11/12 md:w-10/12 2xl:w-4/5 mx-auto relative">
         {/* <div className="absolute w-10/12 mx-auto h-full -mt-32 z-10">
            <SvgLineTwo />
         </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 items-center relative z-20">
           
            <div className="order-2 lg:order-1 mt-5 lg:mt-0">
                <img loading="lazy" alt="customize" className="md:w-4/5 mx-auto" src="/Images/AR-assets/customize-webp.webp" />
            </div>
            <div className="order-1 lg:order-2">
                <p className="font-light text-2xl md:text-3xl text-gray-text text-center lg:text-left">For Non-Developers</p>
                <StepsHeading 
                content="02 Customize With Our Editor …" />
                <p className="text-gray-text py-5 text-lg text-center lg:text-left">
                    For creators without JavaScript development experience, we offer 
                    an intuitive editor. It lets users modify existing template 
                    features and easily manipulate UI styles to achieve your corporate 
                    design and branding requirements.
                </p>
            </div>
        </div>
        <div className="absolute w-11/12  mx-auto h-full mt-10 xl:-mt-28 2xl:-mt-28 z-10 hidden lg:block">
            <SvgLineTwo />
         </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center relative z-20">
            <div className="order-2 lg:order-1 mt-5 lg:mt-0">
                <img loading="lazy" alt="with source code" className="md:w-4/5 mx-auto" src="/Images/AR-assets/with Source Code-webp.webp" />
            </div>
            <div className="order-1 lg:order-2">
                <p className="font-light text-2xl md:text-3xl text-gray-text text-center lg:text-left">For Developers</p>
                <StepsHeading 
                content="… or with Source Code (via our SDK)" />
                <p className="text-gray-text py-5 text-lg text-center lg:text-left">
                    JavaScript Developers with experience in Angular.js, Vue.js or 
                    React.js retain full control over the app creation process. They 
                    can use the ViewAR command line interface to develop their own 
                    custom application logics, functionalities, app flows, user 
                    interfaces and APIs to achieve their business requirements. 
                    In addition to adopting existing templates, developers can also 
                    create new templates to offer via our platform.
                </p>
                <Button text="Documentation" />
            </div>
        </div>
            
        </div>
    )
}

export default StepTwo
