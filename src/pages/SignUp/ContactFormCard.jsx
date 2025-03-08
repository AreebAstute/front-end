import React from 'react';

import SignUpForm from './SignUpForm';

const ContactFormCard = () => {
    return (
        <div className="">
            <div className="text-center md:text-left">
                <p className="text-blue-primary font-medium text-base lg:text-xl capitalize"><div className="font-medium bg-no-repeat bg-cover inline-block p-2" style={{backgroundImage:"url(/Images/contact-usAssets/get-in-touch-text-bg-webp.webp)"}}>Get </div>in Touch</p>
                <h1 className="text-2xl lg:text-4xl font-semibold  text-blue-primary">Create an Account</h1>
                <p className="text-blue-primary tracking-wider mt-2 text-base">Share your thoughts with the world from today</p>
            </div>

            <div className="w-full xl:w-3/6">
                <SignUpForm />
            </div>
        </div>
    )
}

export default ContactFormCard
