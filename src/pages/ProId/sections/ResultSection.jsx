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
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex flex-col justify-start gap-x-4 gap-y-8 md:gap-3 px-6 lg:px-20 w-full z-30"
                >
                    <h1 className="flex text-blue-primary text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left">
                        Final Results
                    </h1>

                    <p className="text-xl lg:text-2xl font-normal text-left md:mt-8 lg:mx-0">Pro-ID offers a streamlined, sustainable, and data-driven approach to professional networking, delivering several impactful results:</p>

                    <div className='flex flex-col md:flex-row justify-center mt-16 gap-x-4 lg:gap-x-0 gap-y-8 relative'>
                        <div
                            className="flex flex-col w-full flex-shrink text-left rounded-lg md:w-96 bg-proid-primary_light p-6"
                        >
                            <p className='text-center font-semibold text-2xl'>Environmental Responsibility:</p>
                            <p className='text-center text-xl py-4 px-2'>Significantly reduces paper usage, mitigating deforestation and minimizing waste generation.</p>
                        </div>

                        <div
                            className="hidden lg:flex flex-col w-full flex-shrink text-left rounded-lg lg:w-16 relative"
                        >
                            <div className="w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10">
                                {/* width="111" height="15" */}
                                <svg className='w-full' viewBox="0 0 111 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="4.37114e-08" y1="8.5" x2="97" y2="8.50001" stroke="black" stroke-opacity="0.7" stroke-dasharray="6 6" />
                                    <circle cx="103.5" cy="7.5" r="7.5" fill="#083049" />
                                </svg>
                            </div>
                        </div>

                        <div
                            className="flex flex-col w-full flex-shrink text-left rounded-lg md:w-96 bg-proid-secondary_light p-6"
                        >
                            <p className='text-center font-semibold text-2xl'>Enhanced Efficiency:</p>
                            <p className='text-center text-xl py-4 px-2'> Real-time updates and easy sharing optimize networking processes, saving time and resources.</p>
                        </div>

                        <div
                            className="hidden lg:flex flex-col w-full flex-shrink text-left rounded-lg lg:w-16 relative"
                        >
                            <div className="w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10">
                                <svg className='w-full' viewBox="0 0 111 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="4.37114e-08" y1="8.5" x2="97" y2="8.50001" stroke="black" stroke-opacity="0.7" stroke-dasharray="6 6" />
                                    <circle cx="103.5" cy="7.5" r="7.5" fill="#083049" />
                                </svg>
                            </div>
                        </div>

                        <div
                            className="flex flex-col w-full flex-shrink text-left rounded-lg md:w-96 bg-proid-primary_light p-6"
                        >
                            <p className='text-center font-semibold text-2xl'>Improved Professionalism:</p>
                            <p className='text-center text-xl py-4 px-2'>  Customized digital cards project a modern, tech-savvy image.</p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center md:mt-16 gap-x-4 lg:gap-x-0 gap-y-8 relative'>
                        <div
                            className="flex flex-col w-full flex-shrink text-left rounded-lg md:w-96 bg-proid-secondary_light p-6"
                        >
                            <p className='text-center font-semibold text-2xl'>
                                Actionable Insights:
                            </p>
                            <p className='text-center text-xl py-4 px-2'>Analytics empower users with data to refine networking strategies and track conversion rates.</p>
                        </div>

                        <div
                            className="hidden lg:flex flex-col w-full flex-shrink text-left rounded-lg lg:w-16 relative"
                        >
                            <div className="w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10">
                                <svg className='w-full' viewBox="0 0 111 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="4.37114e-08" y1="8.5" x2="97" y2="8.50001" stroke="black" stroke-opacity="0.7" stroke-dasharray="6 6" />
                                    <circle cx="103.5" cy="7.5" r="7.5" fill="#083049" />
                                </svg>
                            </div>
                        </div>

                        <div
                            className="flex flex-col w-full flex-shrink text-left rounded-lg md:w-96 bg-proid-primary_light p-6"
                        >
                            <p className='text-center font-semibold text-2xl'>Brand Strengthening:</p>
                            <p className='text-center text-xl py-4 px-2'> Corporate packages promote consistent branding, improve lead generation, and boost marketing effectiveness.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResultSection