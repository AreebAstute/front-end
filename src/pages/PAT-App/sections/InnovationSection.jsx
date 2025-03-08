import React from 'react'

function InnovationSection() {

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

                        <div className="outlined_edisu_text text-center w-full z-0 font-bold text-5xl md:text-7xl lg:text-9xl lg:font-black">Innovations</div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-3xl md:text-4xl lg:text-5xl font-bold text-center z-20">
                            Key Features and Technological Innovations
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
                            className="relative flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 mt-8"
                        >

                            {/* <!-- Point 1 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-pat-primary rounded-full w-8 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">V</span>irtual Doctor-
                                </h3>
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    Patient Connectivity:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-center text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Enables seamless communication and virtual consultations, reducing the need for physical visits
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Point 2 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-pat-primary rounded-full w-8 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">S</span>ymptom
                                </h3>
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    Recording:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-center text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Allows patients to record and track their symptoms, offering health care providers a comprehensive health status overview.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Point 3 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-pat-primary rounded-full w-8 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">M</span>edicine
                                </h3>
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    Reminders:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-center text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Features a built-in reminder system to promote medication adherence.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/6 h-auto absolute z-10" style={{ top: "0%", left: "25%" }}>
                                <img src="/Images/pat-app/connect_1-webp.webp" alt="" className='invisible 2xl:visible' />
                            </div>
                            <div className="w-1/6 h-auto absolute z-10" style={{ top: "0%", left: "58%" }}>
                                <img src="/Images/pat-app/connect_1-webp.webp" alt="" className='invisible 2xl:visible' />
                            </div>
                        </div>

                        <div
                            className="relative flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 mt-8"
                        >
                            {/* <!-- Point 4 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-pat-primary rounded-full w-8 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">M</span>edicine Refill
                                </h3>
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    Reminder:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-center text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Sends timely reminders for medicine refills, ensuring patients have continuous access to essential medications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Point 5 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-pat-primary rounded-full w-8 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">T</span>remor
                                </h3>
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    Assessments:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-center text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Allows patients to record and track their symptoms, offering health care providers a comprehensive health status overview.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Point 6 --> */}
                            <div
                                className="flex flex-col w-full text-left rounded-lg lg:w-11/12"
                            >
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    <span className="bg-pat-primary rounded-full w-8 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">R</span>emote Prescription
                                </h3>
                                <h3 className="flex justify-center text-xl md:text-2xl font-bold text-center lg:w-11/12 lg:text-left">
                                    Modification:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-center text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Features a built-in reminder system to promote medication adherence.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/6 h-auto absolute z-10" style={{ top: "0%", left: "25%" }}>
                                <img src="/Images/pat-app/connect_1-webp.webp" alt="" className='invisible 2xl:visible' />
                            </div>
                            <div className="w-1/6 h-auto absolute z-10" style={{ top: "0%", left: "58%" }}>
                                <img src="/Images/pat-app/connect_1-webp.webp" alt="" className='invisible 2xl:visible' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default InnovationSection