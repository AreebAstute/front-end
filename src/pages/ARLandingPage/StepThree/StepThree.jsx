import React from 'react';
import StepsHeading from '../StepsHeading';
import Button from '../../../components/Button';
import SvgLineThree from './SvgLineThree';

const StepThree = () => {
    return (
        <div className="-mt-10 xl:-mt-16   2xl:mt-8 w-11/12 md:w-10/12 2xl:w-4/5 mx-auto">
            <div className="w-11/12 mx-auto hidden lg:block">
                <SvgLineThree />
            </div>
            <div className="-mt-32 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center   ">
                <div>
                    <StepsHeading 
                    content="03 Upload, Edit and Manage Content" />
                    <p className="text-gray-text py-5 text-lg text-center lg:text-left">
                        Assets needed for app creation are stored in our content cloud. ViewAR 
                        offers a web-based file manager to upload, edit and organize your data. 
                        Use our 3D editor to apply PBR materials to your uploaded 3D models. 
                        Conversion into Apple’s USDZ file format is free, if required.
                    </p>
                </div>
                <div>
                    <img loading="lazy" alt="Upload Edit and Manage" className="md:w-4/5 lg:w-full 2xl:w-4/5 mx-auto" src="/Images/AR-assets/Upload Edit and Manage-webp.webp" />
                </div>
            </div>
        </div>
    )
}

export default StepThree
