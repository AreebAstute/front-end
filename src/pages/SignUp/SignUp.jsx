import React from 'react';

import ContactFormCard from './ContactFormCard';

const SignUp = () => {
    return (
        <div className="h-auto bg-no-repeat bg-32 bg-right-top pt-28 my-20" 
        style={{backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}
        >
            <div className="bg-cover lg:bg-contain bg-no-repeat bg-right md:mx-10 lg:mx-20 rounded-3xl shadow-2xl px-5 md:px-20 py-20"
            style={{backgroundImage:"url(/Images/signup-webp.webp)"}}
            >
                <ContactFormCard />
            </div>
          
        </div>
    )
}

export default SignUp
