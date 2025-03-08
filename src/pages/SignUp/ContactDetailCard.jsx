import React from 'react'

const ContactDetailCard = () => {
    return (
        <div className="rounded-3xl shadow-md bg-no-repeat bg-cover bg-center text-white px-10 py-5 w-full lg:w-2/3  text-base lg:text-lg" 
        style={{backgroundImage:"url(/Images/contact-usAssets/contact-information-pattern-webp.webp)"}}
        >
            <div className="">
                <p className="text-base lg:text-xl font-medium py-3">Contact Details</p>
                <h1 className="text-2xl lg:text-3xl font-bold pb-3">Our Contacts</h1>
                <p>
                    Give us a call or drop by any time,
                    we endeavour to answer al enquiries within 24 hours 
                    on business days. We will be happy to answer your questions.
                </p>
                <div className="my-5 flex">
                    <img loading="lazy" className="w-4 h-4" alt="phone" src="/Images/icons/phone-webp.webp" />
                    <div className="flex flex-col ml-5">
                        <p className="text-sm">Our Phone:</p>
                        <p className="text-base lg:text-lg mt-1">+0123-4567-8901</p>
                    </div>
                </div>

                <div className="my-5 flex">
                    <img loading="lazy" className="w-4 h-4" alt="mail" src="/Images/icons/mail-webp.webp" />
                    <div className="flex flex-col ml-5">
                        <p className="text-sm">Our Mail Box:</p>
                        <p className="text-base lg:text-lg mt-1">astutuesoftwares@.com</p>
                    </div>
                </div>

                <div className="my-5 flex">
                    <img loading="lazy" className="w-4 h-6" alt="location" src="/Images/icons/location-webp.webp" />
                    <div className="flex flex-col ml-5">
                        <p className="text-sm">Our Address:</p>
                        <p className="text-base lg:text-lg mt-1">Lahore,Paksitan</p>
                    </div>
                </div>

                <div className="flex mt-10">
                    <img loading="lazy" alt="insta_graybg" className="w-8 mr-5" src="Images/icons/insta_graybg-webp.webp" />
                    <img loading="lazy" alt="fb_graybg" className="w-8 mx-5" src="Images/icons/fb_graybg-webp.webp" />
                    <img loading="lazy" alt="linkedin_graybg" className="w-8 mx-5" src="Images/icons/linkedin_graybg-webp.webp" />
                    <img loading="lazy" alt="twitter_graybg" className="w-8 mx-5" src="Images/icons/twitter_graybg-webp.webp" />
                </div>
            </div>
            
        </div>
    )
}

export default ContactDetailCard
