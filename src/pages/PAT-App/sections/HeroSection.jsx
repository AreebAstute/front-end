import React from 'react'

function HeroSection() {
    return (
        <section
            id="hero"
            className="mt-16 lg:mt-24 z-20 relative"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col lg:items-start xlxl:items-center lg:justify-center lg:flex-row-reverse justify-between pb-6 gap-0 lg:mb-0 pt-4">
                {/* <!-- Image --> */}
                <div
                    className="invisible relative mx-auto lg:mx-0 lg:mb-0 w-1/2 lg:w-2/5 xlxl:w-1/2 z-20"
                >
                    <img
                        loading="lazy"
                        src="/Images/pat-app/section_1-webp.webp"
                        alt="chats"
                        className="overflow-x-visible w-full"
                    />
                </div>

                {/* <!-- Content --> */}
                <div
                    className="flex flex-col items-center lg:items-start mt-24 md:mt-0 lg:mt-12 pb-12 lg:my-0 justify-center gap-6 lg:pl-20 w-full lg:w-1/2 relative z-30"
                >
                    <h5 className='text-black lg:text-white font-extrabold lg:font-bold text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-28'>Pat App <br className='hidden lg:block' />Case Study</h5>
                    <div className='flex justify-center lg:justify-start items-center w-full'>
                        <img src="/Images/pat-app/pat_logo-webp.webp" alt="app-logo" className='w-40 mb-2' />
                    </div>
                    <p className="max-w-md font-normal text-xl mb-4">
                        Design and Develop by
                    </p>
                    <div className='flex justify-center lg:justify-start items-center w-full'>
                        <img src="/Images/pat-app/astute_logo-webp.webp" alt="app-logo" className='w-40 mb-2' />
                    </div>
                </div>
            </div>

            <div
                className="invisible md:visible absolute top-0 right-0 w-1/2 z-20"
            >
                <img
                    loading="lazy"
                    src="/Images/pat-app/section_1-webp.webp"
                    alt="chats"
                    className="overflow-x-visible w-full"
                />
            </div>

            <div className='absolute top-0 z-10 w-full'>
                <img src="/Images/pat-app/hero_bg-webp.webp" alt="hero_bg" className='w-full 2xl:h-3/5' />
            </div>
        </section>
    )
}

export default HeroSection