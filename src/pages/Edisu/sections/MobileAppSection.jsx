import React from 'react'

function MobileAppSection() {

    return (
        <section
            id="solutions"
            className="pt-16 z-20 relative"
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

                        <div className="outlined_edisu_text text-center w-full z-0 font-bold text-5xl md:text-7xl lg:text-9xl lg:font-black">Application</div>
                        {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-3xl md:text-4xl lg:text-5xl font-bold text-center z-20">
                            Mobile Application for Students
                        </div>
                    </div>

                    <p className="w-full lg:w-11/12 text-xl md:text-2xl font-normal text-center lg:mt-0 lg:mx-0">
                        The cornerstone of Astute Software's solution was the development of a user-friendly mobile application tailored for students. This app served multiple purposes:
                    </p>
                </div>
            </div>

            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-between gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0">
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
                                <h3 className="flex text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">B</span>ooking Management:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Students could view the availability of seats in real-time and book specific seats at preferred times. This ensured that study hall usage was spread evenly, avoiding overcrowding and facilitating effective sanitization between bookings.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Point 2 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">F</span>lexible Study Hall Selection:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            The app allowed students to choose from different study halls, providing flexibility and convenience in selecting a location that met their needs or preferences..
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div
                            className="relative flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 mt-8"
                        >
                            {/* <!-- Point 3 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">T</span>ime Slot Selection:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            By enabling students to book specific time slots, the app ensured that the flow of individuals in and out of study halls was controlled and predictable, which was crucial for maintaining social distancing guidelines and allowing sufficient time for seat sanitization.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Point 4 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">B</span>ook Loan Service:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            An innovative feature of the app was its integration with the study hall's book loan service. Students could request books through the app, and library operators would prepare these for pickup, minimizing physical browsing and contact.
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
                    className="invisible relative mx-auto lg:mx-0 lg:mb-0 w-9/12 lg:w-2/6"
                >
                    <img
                        loading="lazy"
                        src="/Images/edisu/section_5-webp.webp"
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
                    src="/Images/edisu/section_5-webp.webp"
                    alt="springs"
                    className="overflow-x-visible w-full"
                />
            </div>
        </section>
    )
}

export default MobileAppSection