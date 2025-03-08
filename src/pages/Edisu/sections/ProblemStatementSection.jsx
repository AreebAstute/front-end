import React from 'react'

function ProblemStatementSection() {

    return (
        <section
            id="problem-statement"
            className="pt-16 z-20 bg-edisu-light overflow-hidden relative"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="relative xl:container xl:mx-auto flex flex-col justify-between p-6 gap-0 lg:mb-0 lg:pl-20 z-20">
                {/* <div className="flex flex-col justify-between p-6 gap-8 lg:gap-0 lg:mb-0 lg:pl-20"> */}

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center gap-4 w-full"
                >
                    {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
                    <h1 className="flex text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left">
                        Problems Statement
                    </h1>
                </div>

                {/* <!-- Boxes Container --> */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="relative flex flex-col items-start space-y-2 lg:space-y-0 lg:space-x-7 lg:flex-row mt-6"
                >

                    {/* <!-- Box 1 --> */}
                    <div
                        className="flex w-full py-6 text-left rounded-lg lg:w-1/3"
                    >
                        <div className="bg-edisu-primary w-12 h-10 text-center text-white text-2xl lg:text-4xl font-semibold">#1</div>

                        <div className='relative w-10/12'>
                            <div className='px-6'>
                                <h5 className="flex text-xl md:text-2xl lg:text-3xl font-semibold">
                                    Safety and Health
                                </h5>
                                <div className="flex flex-col items-center justify-center mt-6">
                                    <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                        The Italian government faced a significant challenge in maintaining the safety and health of individuals using study halls amidst the COVID-19 pandemic.
                                    </p>
                                    <div className='pl-4'>
                                        <img
                                            loading="lazy"
                                            src="/Images/edisu/group_10-webp.webp"
                                            alt="card pattern"
                                            className="invisible lg:visible absolute bottom-0 left-0 z-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Box 2 --> */}
                    <div
                        className="flex w-full py-6 text-left rounded-lg lg:w-1/3 md:mt-8"
                    >
                        <div className="bg-edisu-primary w-12 h-10 text-center text-white text-2xl lg:text-4xl font-semibold">#2</div>

                        <div className='relative w-10/12'>
                            <div className='px-6'>
                                <h5 className="flex text-xl md:text-2xl lg:text-3xl font-semibold">
                                    Risk of Virus Transmission
                                </h5>
                                <div className="flex flex-col items-center justify-center mt-6">
                                    <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                        The primary concern was the risk of virus transmission through surface contact, particularly the seats that were used by multiple individuals throughout the day.
                                    </p>
                                    <div className='pl-4'>
                                        <img
                                            loading="lazy"
                                            src="/Images/edisu/group_10-webp.webp"
                                            alt="card pattern"
                                            className="invisible lg:visible absolute bottom-0 left-0 z-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Box 3 --> */}
                    <div
                        className="flex w-full py-6 text-left rounded-lg lg:w-1/3 md:mt-16"
                    >
                        <div className="bg-edisu-primary w-12 h-10 text-center text-white text-2xl lg:text-4xl font-semibold">#3</div>

                        <div className='relative w-10/12'>
                            <div className='px-6'>
                                <h5 className="flex text-xl md:text-2xl lg:text-3xl font-semibold">
                                    Disinfection and Sanitization
                                </h5>
                                <div className="flex flex-col items-center justify-center mt-6">
                                    <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                        Given the nature of the virus's spread, it was crucial to implement a rigorous disinfection and sanitization protocol to mitigate the risk of COVID-19 transmission.
                                    </p>
                                    <div className='pl-4'>
                                        <img
                                            loading="lazy"
                                            src="/Images/edisu/group_10-webp.webp"
                                            alt="card pattern"
                                            className="invisible lg:visible absolute bottom-0 left-0 z-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 absolute top-8 left-2/5 z-10">
                <img src="/Images/edisu/section_3_bg-webp.webp" alt="" className='invisible 2xl:visible' />
            </div>

        </section>
    )
}

export default ProblemStatementSection
