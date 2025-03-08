import React from 'react'

function HeroSection() {
    return (
        <section
            id="hero"
            className="pt-16 lg:pt-24 z-20"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col lg:items-center lg:justify-center lg:flex-row-reverse justify-between lg:pb-6 gap-0 mt-8 lg:mb-0">
                {/* <!-- Image --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="relative mx-auto lg:mx-0 lg:mb-0 w-10/12 md:w-7/12 lg:w-1/2"
                >
                    <img
                        loading="lazy"
                        src="/Images/proid/section_1-webp.webp"
                        alt="chats"
                        className="relative z-10 overflow-x-visible w-full"
                    />
                </div>

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex flex-col items-center lg:items-start lg:mt-12 mb-12 lg:my-0 justify-center gap-4 lg:pl-20 w-full lg:w-1/2"
                >
                    <h5 className='font-bold text-4xl lg:text-6xl my-6 text-blue-primary'>PRO-ID <br className='hidden md:block' />Case Study</h5>
                    <div className='flex justify-center lg:justify-start items-center w-full'>
                        <img src="/Images/proid/proid_logo-webp.webp" alt="app-logo" className='w-40 mb-2' />
                    </div>
                    <p className="max-w-md font-normal text-xl mb-4">
                        Design and Develop by
                    </p>
                    <div className='flex justify-center lg:justify-start items-center w-full'>
                        <img src="/Images/edisu/astute_logo-webp.webp" alt="app-logo" className='w-52 mb-2' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection