import React from 'react'

function AboutSection() {

    return (
        <section
            id="about"
            className="pt-16 z-20 relative overflow-hidden"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col-reverse justify-center gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0">
                {/* <!-- Image --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="invisible relative lg:mx-0 lg:mb-0 w-7/12 lg:-w-1/2 xl:w-2/5 xlxl:w-1/2 mx-auto"
                >
                    <img
                        loading="lazy"
                        src="/Images/pat-app/section_2-webp.webp"
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
                    {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
                    <h1 className="flex text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left text-pat-dark">
                        <span className="bg-pat-primary rounded-full w-14 h-14 text-3xl md:text-4xl lg:text-5xl font-bold text-right">A</span>bout Project
                    </h1>
                    <p className="w-11/12 mx-auto text-xl lg:text-2xl font-normal text-left lg:mt-0 lg:mx-0 text-pat-dark">
                        The PAT APP is a patient-centric solution designed to streamline the treatment journey for individuals undergoing medical care. This innovative application facilitates direct communication between patients and their healthcare providers through a user-friendly mobile platform.
                    </p>
                </div>
            </div>

            <div
                className="absolute bottom-0 left-0 w-7/12 lg:w-2/5 2xl:w-1/3 z-20"
            >
                <img
                    loading="lazy"
                    src="/Images/pat-app/section_2-webp.webp"
                    alt="chats"
                    className="overflow-x-visible w-full"
                />
            </div>
        </section>
    )
}

export default AboutSection