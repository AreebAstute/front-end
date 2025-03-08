import React from 'react';

import ContactDetails from './ContactDetailCard';
import ContactFormCard from './ContactFormCard';

const GetinTouch = () => {
    return (
        <div className="h-auto bg-no-repeat bg-32 bg-right-top mt-20" 
        style={{backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}
        >
            <div className="rounded-2xl md:w-4/5 shadow-2xl mx-auto flex flex-wrap p-5 lg:flex-nowrap "  >
                <ContactDetails />
                <ContactFormCard />
            </div>
           
        </div>
    )
}

export default GetinTouch
