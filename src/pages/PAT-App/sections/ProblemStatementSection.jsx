import React from 'react'

function ProblemStatementSection() {

    return (
        <section
            id="problem-statement"
            className="pt-16 z-20 bg-pat-secondary overflow-hidden relative"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="relative xl:container xl:mx-auto flex flex-col justify-between px-6 lg:pt-6 gap-0 lg:mb-0 lg:pl-20 z-20">

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center gap-4 w-full"
                >
                    <h1 className="flex text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left">
                        Problems Statement
                    </h1>
                </div>

                {/* <!-- Boxes Container --> */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="relative flex flex-col flex-wrap justify-center space-y-2 lg:space-y-0 lg:space-x-0 lg:flex-row mt-8 lg:12"
                >

                    {/* <!-- Box 1 --> */}
                    <div
                        className="flex flex-col w-full lg:pt-24 pt-6 pb-6 text-left rounded-lg lg:w-1/3"
                    >
                        <div className='flex justify-start w-full'>
                            <div className="flex flex-shrink-0 justify-center items-center bg-pat-primary w-14 h-14 text-center text-white text-2xl lg:text-4xl font-semibold rounded-full">#1</div>

                            <div className='pl-6 pr-8'>
                                <h5 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                                    Inconvenience of In-Person Visits
                                </h5>
                            </div>
                        </div>

                        <div className='relative w-full px-2'>
                            <div className='px-6'>
                                <div className="flex flex-col items-start justify-center mt-6">
                                    <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20 px-4">
                                        Routine check-ups and follow-ups are time-consuming for both patients and doctors.
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
                        className="flex flex-col w-full py-6 text-left rounded-lg lg:w-1/3 md:mt-8"
                    >
                        <div className='flex justify-start w-full'>
                            <div className="flex flex-shrink-0 justify-center items-center bg-pat-primary w-14 h-14 text-center text-white text-2xl lg:text-4xl font-semibold rounded-full">#2</div>

                            <div className='px-6'>
                                <h5 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                                    Inaccurate Symptom Tracking:
                                </h5>
                            </div>
                        </div>

                        <div className='relative w-full px-2'>
                            <div className='px-6'>
                                <div className="flex flex-col items-start justify-center mt-6">
                                    <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20 px-4">
                                        Difficulty in recalling and communicating symptoms accurately can hinder diagnosis and treatment.
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
                        className="flex flex-col w-full lg:pt-24 pt-6 pb-6 text-left rounded-lg lg:w-1/3 md:mt-16"
                    >
                        <div className='flex justify-start w-full'>
                            <div className="flex flex-shrink-0 justify-center items-center bg-pat-primary w-14 h-14 text-center text-white text-2xl lg:text-4xl font-semibold rounded-full">#3</div>

                            <div className='px-6'>
                                <h5 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                                    Medication Non-Adherence:
                                </h5>
                            </div>
                        </div>

                        <div className='relative w-full px-2'>
                            <div className='px-6'>
                                <div className="flex flex-col items-start justify-center mt-6">
                                    <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20 px-4">
                                        Patients may forget to take medications or refill prescriptions, impacting treatment effectiveness.
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

                    {/* <!-- Box 4 --> */}
                    <div
                        className="flex flex-col flex-shrink-0 w-full py-6 text-left rounded-lg lg:w-1/3 md:mt-16"
                    >
                        <div className='flex justify-start w-full'>
                            <div className="flex flex-shrink-0 justify-center items-center bg-pat-primary w-14 h-14 text-center text-white text-2xl lg:text-4xl font-semibold rounded-full">#4</div>

                            <div className='px-6'>
                                <h5 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                                    Inconvenience of In-Person Visits
                                </h5>
                            </div>
                        </div>

                        <div className='relative w-full px-2'>
                            <div className='px-6'>
                                <div className="flex flex-col items-start justify-center mt-6">
                                    <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20 px-4">
                                        Routine check-ups and follow-ups are time-consuming for both patients and doctors.
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

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <img src="/Images/pat-app/section_3_bg-webp.webp" alt="" className='visible' />
            </div>

        </section>
    )
}

export default ProblemStatementSection
