import React from 'react'

function TechnologySection() {

    return (
        <section
            id="solutions"
            className="pt-16 z-20"
        >
            {/* <!-- Container For Heading --> */}
            <div className="xl:container xl:mx-auto flex flex-col-reverse justify-between p-6 gap-8 lg:gap-0 lg:flex-row lg:mb-0">
                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-full mx-auto flex flex-col justify-center gap-4 px-6"
                >
                    <div className="w-full relative flex flex-col justify-center gap-4 mb-6">

                        <div className="outlined_edisu_text text-center w-full z-0 font-bold text-5xl md:text-7xl lg:text-9xl lg:font-black">Technology</div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-3xl md:text-4xl lg:text-5xl font-bold text-center z-20">
                            Technology Specifications
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-between gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0">

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center lg:pl-20"
                >

                    {/* <!-- Boxes Container --> */}
                    <div className='w-11/12 mx-auto flex flex-col'>
                        <div
                            className="relative flex flex-col lg:flex-row items-start gap-y-10 lg:gap-y-0 mt-8"
                        >

                            {/* <!-- Point 1 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12 lg:mt-16"
                            >
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-pat-primary rounded-full w-8 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">C</span>ompatibility:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-center text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Available on iOS, Android, and tablets, making it accessible to a wide user base.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Point 2 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12 lg:mt-16"
                            >
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-pat-primary rounded-full w-8 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">D</span>evelopment:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-center text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Utilizes Swift for iOS and native development for Android to ensure high performance and a quality user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Image --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                {/* <!-- Image --> */}
                                <div
                                    className="relative lg:mx-0 lg:mb-0 w-1/2 lg:w-full mx-auto"
                                >
                                    <img
                                        loading="lazy"
                                        src="/Images/pat-app/section_4-webp.webp"
                                        alt="chats"
                                        className="relative z-10 overflow-x-visible"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologySection