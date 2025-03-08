import React from 'react'

function WebPortalSection() {

    return (
        <section
            id="solutions"
            className="pt-16 z-20 bg-edisu-light relative"
        >
            {/* <!-- Container For Heading --> */}
            <div className="xl:container xl:mx-auto flex flex-col-reverse justify-between p-6 gap-8 lg:gap-0 lg:flex-row lg:mb-0">
                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-full mx-auto flex flex-col justify-center gap-4 px-6"
                >
                    <div className="w-full lg:w-11/12  relative flex flex-col justify-center gap-4">

                        <div className="outlined_edisu_text text-center w-full z-0 font-bold text-5xl md:text-7xl lg:text-9xl lg:font-black">Web Portal</div>
                        {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-3xl md:text-4xl lg:text-5xl font-bold text-center z-20">
                            Web Portal for Study Hall Operators
                        </div>
                    </div>

                    <p className="w-full lg:w-11/12 text-xl md:text-2xl font-normal text-center lg:mt-0 lg:mx-0">
                        Parallel to the mobile application, Astute Softwares developed a web portal for study hall operators. This platform facilitated:
                    </p>
                </div>
            </div>

            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-center gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0">
                {/* <div className="flex flex-col-reverse justify-between gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0"> */}

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center lg:pl-20 lg:w-4/6"
                >

                    {/* <!-- Boxes Container --> */}
                    <div className='w-11/12 mx-auto flex flex-col'>
                        <div
                            className="relative flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 mt-8"
                        >

                            {/* <!-- Point 1 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex text-xl md:text-2xl font-bold lg:w-11/12 lg:text-left">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">B</span>ooking Verification and Management:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Operators could easily verify bookings, monitor occupancy levels, and ensure that the sanitization schedule was aligned with booking slots, thus maintaining a safe environment for all users.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Point 2 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">S</span>anitization Tracking:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            The portal provided a feature to track and verify the sanitization of seats between uses, ensuring compliance with health guidelines and building trust among the users.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- Image --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="invisible relative mx-auto lg:mx-0 lg:mb-0 lg:w-2/6"
                >
                    <img
                        loading="lazy"
                        src="/Images/edisu/section_6-webp.webp"
                        alt="chats"
                        className="relative z-10 overflow-x-visible"
                    />
                </div>
            </div>

            <div
                className="absolute bottom-0 md:top-1/12 right-0 w-9/12 lg:w-2/6 xlxl:w-1/4 z-10"
            >
                <img
                    loading="lazy"
                    src="/Images/edisu/section_6-webp.webp"
                    alt="springs"
                    className="overflow-x-visible w-full"
                />
            </div>
        </section>
    )
}

export default WebPortalSection