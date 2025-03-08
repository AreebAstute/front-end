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
                    className="visible lg:invisible relative mx-auto lg:mx-0 lg:mb-0 w-full lg:w-1/2"
                >
                    <img
                        loading="lazy"
                        src="/Images/edisu/section_1-webp.webp"
                        alt="chats"
                        className="relative z-10 overflow-x-visible w-full"
                    />
                </div>

                {/* <!-- Content --> */}
                <div
                    className="flex flex-col items-center lg:items-start my-12 lg:my-0 justify-center gap-4 lg:pl-20 w-full lg:w-1/2"
                >
                    <h5 className='font-bold text-4xl lg:text-6xl my-6'>Edisu Case <br className='hidden md:block' />Study</h5>
                    <div className='flex justify-center lg:justify-start items-center w-full'>
                        <img src="/Images/edisu/edisu_logo-webp.webp" alt="app-logo" className='w-40 mb-2' />
                    </div>
                    <p className="max-w-md font-normal text-xl mb-4">
                        Design and Develop by
                    </p>
                    <div className='flex justify-center lg:justify-start items-center w-full'>
                        <img src="/Images/edisu/astute_logo-webp.webp" alt="app-logo" className='w-40 mb-2' />
                    </div>
                </div>
            </div>

            <div
                className="invisible md:visible absolute top-0 right-0 w-1/2 xl:w-2/5 z-20"
            >
                <img
                    loading="lazy"
                    src="/Images/edisu/section_1-webp.webp"
                    alt="chats"
                    className="overflow-x-visible w-full"
                />
            </div>
        </section>
    )
}

export default HeroSection