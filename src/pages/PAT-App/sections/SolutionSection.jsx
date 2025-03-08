import React from 'react'

function SolutionSection() {

    return (
        <section
            id="about"
            className="pt-16 z-20 relative bg-pat-secondary"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-center lg:flex-row lg:mb-0 px-0 pb-16">

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center gap-4 px-6 lg:pl-20 lg:w-1/2"
                >
                    {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
                    <h1 className="flex text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left">
                        Solution Proposed
                    </h1>
                    <p className="text-xl lg:text-2xl font-normal text-left lg:mt-0 lg:mx-0">
                        Astute Softwares designed the PAT APP to solve the above mentioned challenges. The app makes it easier for patients and doctors to connect through virtual appointments, saving time and reducing unnecessary in-person visits. Patients can easily track their symptoms, giving doctors important information about their health. The app also sends medication reminders, helping patients stay on track with their treatment. It even includes tools for assessing conditions remotely. This means doctors can quickly change prescriptions when needed, ensuring patients get the best possible care.
                    </p>
                </div>

                {/* <!-- Image --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="invisible relative lg:mx-0 lg:mb-0 w-7/12 lg:-w-1/2 xl:w-2/5 xlxl:w-1/2 mx-auto"
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
                className="absolute bottom-0 md:top-1/12 right-0 w-7/12 lg:w-2/5 2xl:w-1/3 z-20"
            >
                <img
                    loading="lazy"
                    src="/Images/pat-app/section_3-webp.webp"
                    alt="chats"
                    className="overflow-x-visible w-full"
                />
            </div>
        </section>
    )
}

export default SolutionSection