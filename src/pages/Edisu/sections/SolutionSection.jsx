import React from 'react'

function SolutionSection() {

    return (
        <section
            id="solutions"
            className="relative pt-16 z-20 overflow-hidden"
        >
            {/* <!-- Container Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col-reverse justify-between p-6 gap-8 lg:gap-0 lg:flex-row lg:mb-0 relative z-20">
                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-full mx-auto flex flex-col justify-center gap-4 px-6"
                >
                    <div className="w-full relative flex flex-col justify-center gap-4 mb-6">

                        <div className="outlined_edisu_text text-center w-full z-0 font-bold text-5xl md:text-7xl lg:text-9xl lg:font-black">Solution</div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-3xl md:text-4xl lg:text-5xl font-bold text-center z-20">
                            Solution Proposed by Astute Softwares
                        </div>
                    </div>

                    <p className="w-full lg:w-11/12 text-xl md:text-2xl font-normal text-center lg:mt-0 lg:mx-0">
                        To address the challenges associated with disinfecting and sanitizing seats in study halls during the COVID-19 pandemic, Astute Softwares devised a comprehensive digital solution aimed at minimizing physical contact, ensuring proper sanitization between uses, and enhancing the overall management of study hall bookings. This solution consisted of developing a mobile application for students and a web portal for study hall operators, alongside an innovative approach to handling book loans. Here’s how the solution was structured:
                    </p>
                </div>
            </div>

            <div className="w-1/3 h-auto absolute inset-y-0 right-0 z-10">
                <img src="/Images/edisu/section_4-webp.webp" alt="" className='invisible 2xl:visible xlxl:invisible' />
            </div>
        </section>
    )
}

export default SolutionSection