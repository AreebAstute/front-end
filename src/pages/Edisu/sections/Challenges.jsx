import React from 'react'

function Challenges() {

    return (
        <section
            id="solutions"
            className="pt-16 z-20 bg-edisu-light relative"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="relative xl:container xl:mx-auto flex flex-col justify-between gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0 lg:pl-20 z-30">
                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center w-11/12 mx-auto"
                >
                    <h1 className="flex text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left">
                        Challenges
                    </h1>

                    {/* <!-- Boxes Container --> */}
                    <div className='flex flex-col lg:flex-row w-11/12 mx-auto'>
                        <div
                            className="relative flex flex-col items-start space-y-10 lg:space-y-0 mt-8"
                        >

                            {/* <!-- Challenge 1 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">H</span>igh Foot Traffic:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Study halls are typically utilized by a large number of students and members of the public. This high foot traffic increases the risk of virus transmission and complicates efforts to maintain sanitized conditions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Challenge 2 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">C</span>ontinuous Use:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Study halls often operate for extended hours, with individuals coming and going throughout the day. This continuous use necessitates a rapid yet effective sanitization process between bookings or uses, which can be logistically challenging and resource-intensive.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative flex items-start justify-end lg:flex-row mt-8"
                        >
                            {/* <!-- Challenge 3 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">M</span>onitoring and Enforcement:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Establishing a system for monitoring the effectiveness of the sanitization measures and enforcing compliance with safety protocols was essential for preventing virus transmission. This required additional administrative effort and potentially the development of new policies and procedures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 h-auto absolute top-20 left-1/4 z-10">
                        <img src="/Images/edisu/group_1-webp.webp" alt="" className='invisible 2xl:visible' />
                    </div>

                    <div className="w-1/3 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/5 z-10">
                        <img src="/Images/edisu/group_2-webp.webp" alt="" className='invisible 2xl:visible' />
                    </div>
                </div>

                {/* <!-- Image --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="invisible relative lg:mx-0 lg:mb-0 w-7/12 lg:-w-1/2 xl:w-2/5 xlxl:w-1/2 mx-auto"
                // className="relative lg:mx-0 my-auto lg:mb-0 w-9/12 ml-auto lg:w-2/6"
                >
                    <img
                        loading="lazy"
                        src="/Images/edisu/springs-webp.webp"
                        alt="springs"
                        className="w-full relative z-10 overflow-x-visible"
                    />
                </div>
            </div>

            <div
                className="absolute bottom-0 md:top-1/12 right-0 w-7/12 lg:w-2/5 2xl:w-1/4 z-10"
            >
                <img
                    loading="lazy"
                    src="/Images/edisu/springs-webp.webp"
                    alt="springs"
                    className="overflow-x-visible w-full"
                />
            </div>
        </section>
    )
}

export default Challenges
