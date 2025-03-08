import React from 'react'

function ResultSection() {

    return (
        <section
            id="about"
            className="pt-16 z-20 relative"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-center lg:flex-row lg:mb-0 px-0 pb-16">

                {/* <!-- Content --> */}
                {/* <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex flex-col justify-start gap-4 md:gap-3 px-6 lg:pl-20 lg:w-3/5 z-30"
                >
                    <h1 className="flex text-pat-dark text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left">
                        Results
                    </h1>

                    <div className='flex flex-col md:flex-row mt-16 gap-y-4 relative'>
                        <div
                            className="flex flex-col w-full flex-shrink text-left rounded-lg lg:w-w-96 bg-pat-primary_light p-6 md:mr-8"
                        >
                            <p className='text-center font-semibold text-2xl'>Patient Empowerment:</p>
                            <p className='text-center text-xl'>Improved convenience and control over health management.</p>
                        </div>

                        <div
                            className="flex flex-col w-full flex-shrink text-left rounded-lg lg:w-w-96 bg-pat-secondary_light p-6 md:ml-16 md:mr-8"
                        >
                            <p className='text-center font-semibold text-2xl'>Stronger Communication:</p>
                            <p className='text-center text-xl'> Closer collaboration between patients and healthcare providers.</p>
                        </div>

                        <div className="w-1/6 h-auto absolute z-10" style={{ top: "50%", left: "41%" }}>
                            <img src="/Images/pat-app/connect_2-webp.webp" alt="" className='invisible 2xl:visible' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:mt-16 gap-y-4 relative'>
                        <div
                            className="flex flex-col w-full flex-shrink text-left rounded-lg lg:w-w-96 bg-pat-primary_light p-6 md:ml-16 md:mr-8"
                        >
                            <p className='text-center font-semibold text-2xl'>Patient Empowerment:</p>
                            <p className='text-center text-xl'>Improved convenience and control over health management.</p>
                        </div>

                        <div
                            className="flex flex-col w-full flex-shrink text-left rounded-lg lg:w-w-96 bg-pat-secondary_light p-6 md:mt-8 md:ml-16 md:mr-8"
                        >
                            <p className='text-center font-semibold text-2xl'>Patient Empowerment:</p>
                            <p className='text-center text-xl'>Improved convenience and control over health management.</p>
                        </div>

                        <div className="w-1/3 h-auto absolute transform -translate-x-1/4 -translate-y-1/5 z-10" style={{ top: "45%", left: "50%" }}>
                            <img src="/Images/pat-app/connect_4-webp.webp" alt="" className='invisible 2xl:visible' />
                        </div>
                    </div>
                </div> */}

                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="relative lg:mx-0 lg:mb-0 w-11/12 lg:w-1/2 mx-auto"
                >
                    <h1 className="flex text-pat-dark text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left mb-16">
                        Results
                    </h1>

                    <img
                        loading="lazy"
                        src="/Images/pat-app/results-webp.webp"
                        alt="chats"
                        className="relative z-10 overflow-x-visible"
                    />
                </div>

                {/* <!-- Image --> */}
                <div
                    className="invisible relative lg:mx-0 lg:mb-0 w-7/12 lg:w-2/5 xlxl:w-1/2 mx-auto"
                >
                    <img
                        loading="lazy"
                        src="/Images/pat-app/section_3-webp.webp"
                        alt="chats"
                        className="relative z-10 overflow-x-visible"
                    />
                </div>
            </div>

            <div
                className="absolute bottom-0 md:top-0 right-0 w-7/12 lg:w-2/5 2xl:w-1/3 z-20"
            >
                <img
                    loading="lazy"
                    src="/Images/pat-app/section_5-webp.webp"
                    alt="chats"
                    className="overflow-x-visible w-full"
                />
            </div>
        </section>
    )
}

export default ResultSection