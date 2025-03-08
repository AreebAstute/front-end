import React from 'react'

function AboutSection() {

    return (
        <section
            id="about"
            className="pt-16 z-20"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col-reverse justify-center gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0">
                {/* <!-- Image --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="relative lg:mx-0 lg:mb-0 w-10/12 lg:w-1/2 mx-auto"
                >
                    <img
                        loading="lazy"
                        src="/Images/proid/section_2-webp.webp"
                        alt="section_2"
                        className="relative z-10 overflow-x-visible"
                    />
                </div>

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center gap-4 px-6 pb-16 lg:pl-20 lg:w-1/2"
                >
                    <h1 className="flex text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left text-blue-primary">
                        <span className="bg-blue-primary text-white rounded-full w-14 h-14 text-3xl md:text-4xl lg:text-5xl font-bold text-right">A</span>bout Project
                    </h1>
                    <p className="w-11/12 mx-auto text-xl lg:text-2xl font-normal text-left lg:mt-0 lg:mx-0">
                        During the COVID-19 pandemic, public health and safety became big concerns for governments worldwide. In Italy, one of the countries hardest hit by the pandemic, ensuring the safety of public spaces, especially educational facilities, became a critical issue. Study halls, used by students and the public for studying and academic activities, posed a particular challenge. These spaces are characterized by high foot traffic and shared use of facilities, making them potential hotspots for virus transmission.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection