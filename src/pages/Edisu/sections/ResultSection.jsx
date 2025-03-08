import React from 'react'

function ResultSection() {

    return (
        <>
            <section
                id="result"
                className="pt-16 z-20 overflow-hidden"
            >
                {/* <!-- Container For Image & Content --> */}
                <div className="xl:container xl:mx-auto flex flex-col justify-center gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0">
                    {/* <!-- Image --> */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2"
                    >
                        <img
                            loading="lazy"
                            src="/Images/edisu/section_7-webp.webp"
                            alt="chats"
                            className="relative z-10 overflow-x-visible"
                        />
                    </div>

                    {/* <!-- Content --> */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="flex flex-col justify-center gap-4 px-6 pb-16 lg:pl-20 lg:w-1/2"
                    >
                        <h1 className="flex text-3xl md:text-4xl lg:text-5xl font-bold text-left lg:w-11/12 lg:text-left">
                            <span className="bg-edisu-primary w-11 h-12 lg:w-16 text-3xl md:text-4xl lg:text-5xl font-bold text-right">R</span>esults and Impact of<br className='invisible lg:visible' /> Astute's Digital Solution
                        </h1>
                        <p className="w-11/12 mx-auto text-xl lg:text-2xl font-normal text-left lg:mt-0 lg:mx-0">
                            During the COVID-19 pandemic, public health and safety became big concerns for governments worldwide. In Italy, one of the countries hardest hit by the pandemic, ensuring the safety of public spaces, especially educational facilities, became a critical issue. Study halls, used by students and the public for studying and academic activities, posed a particular challenge. These spaces are characterized by high foot traffic and shared use of facilities, making them potential hotspots for virus transmission.
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="result"
                className="relative pt-16 z-20 bg-edisu-light overflow-hidden"
            >
                {/* <!-- Container Content --> */}
                <div className="relative xl:container xl:mx-auto flex flex-col justify-between p-6 gap-0 lg:mb-0 lg:pl-20 z-30">

                    {/* <!-- Boxes Container --> */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="relative flex flex-col items-start lg:justify-around space-y-10 lg:space-y-0 lg:space-x-12 lg:flex-row mt-8 z-20"
                    >

                        {/* <!-- Box 1 --> */}
                        <div
                            className="flex w-full py-6 text-left rounded-lg lg:w-2/5"
                        >
                            <div className="bg-edisu-primary w-12 h-10 text-center text-white text-2xl lg:text-4xl font-semibold">#1</div>

                            <div className='relative w-10/12'>
                                <div className='px-6'>
                                    <h5 className="flex text-xl md:text-2xl lg:text-3xl font-semibold">
                                        Adoption by the Italian Ministry of Education
                                    </h5>
                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Astute Softwares's solution gained significant recognition for its effectiveness and utility, leading to its adoption by the Italian Ministry of Education as the official method for booking study halls across Italy. This endorsement underscores the system's reliability, user-friendliness, and alignment with public health guidelines, making it a pivotal tool in the nationwide effort to maintain educational continuity and safety during the pandemic
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
                            className="flex w-full py-6 text-left rounded-lg lg:w-2/5 md:mt-8"
                        >
                            <div className="bg-edisu-primary w-12 h-10 text-center text-white text-2xl lg:text-4xl font-semibold">#2</div>

                            <div className='relative w-10/12'>
                                <div className='px-6'>
                                    <h5 className="flex text-xl md:text-2xl lg:text-3xl font-semibold">
                                        User Engagement and Popularity
                                    </h5>
                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            The mobile application saw a rapid uptake among students, reaching an impressive milestone of more than 100,000 unique users. This wide adoption speaks volumes about the app's usability, relevance, and effectiveness in meeting the needs of its target audience. Moreover, the platform maintained a high level of user engagement, with over 50,000 active
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

                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="relative flex flex-col items-center justify-center space-y-10 lg:space-y-0 lg:space-x-7 lg:flex-row lg:mt-8"
                    >
                        {/* <!-- Box 3 --> */}
                        <div
                            className="flex w-full py-6 text-left rounded-lg lg:w-2/5 md:mt-16"
                        >
                            <div className="bg-edisu-primary w-12 h-10 text-center text-white text-2xl lg:text-4xl font-semibold">#3</div>

                            <div className='relative w-10/12'>
                                <div className='px-6'>
                                    <h5 className="flex text-xl md:text-2xl lg:text-3xl font-semibold">
                                        Sustained Use Beyond the Pandemic
                                    </h5>
                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 lg:pb-20">
                                            Perhaps one of the most telling indicators of the solution's success is its sustained use beyond the COVID-19 pandemic. The continued reliance on this digital booking system by students and study hall operators alike points to its enduring value, not just as a response to a public health crisis but as a transformative tool for educational infrastructure.
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
                            className="flex w-full py-6 text-left rounded-lg lg:w-1/3 md:mt-16"
                        >
                            <div className='relative w-full'>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 h-auto absolute top-1/4 left-1/2 transform -translate-x-1/4 -translate-y-1/5 z-10">
                        <img src="/Images/edisu/group_3-webp.webp" alt="" className='invisible 2xl:visible' />
                    </div>
                </div>

                <div className="w-1/3 h-auto absolute bottom-0 right-0 z-10">
                    <img src="/Images/edisu/section_8-webp.webp" alt="" className='invisible 2xl:visible xlxl:invisible' />
                </div>

            </section>
        </>
    )
}

export default ResultSection