import React from 'react'

function SerivceSection() {

    return (
        <section
            id="solutions"
            className="pt-16 z-20"
        >
            {/* <!-- Container For Heading --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-center gap-8 lg:gap-0 lg:flex-row lg:mb-0">
                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-full flex flex-col justify-center gap-4 px-6"
                >
                    <div className="w-full relative flex flex-col justify-center gap-4 mb-6">

                        <div className="outlined_edisu_text text-center w-full z-0 font-bold text-5xl md:text-7xl lg:text-9xl lg:font-black">Service</div>
                        {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-3xl md:text-4xl lg:text-5xl font-bold text-center z-20">
                            Book Booking Service Integration
                        </div>
                    </div>

                    <p className="w-full lg:w-11/12 text-xl md:text-2xl font-normal text-center lg:mt-0 lg:mx-0">
                        The integration of a book booking service within the mobile app represented a forward-thinking approach to reducing physical contact. This feature not only facilitated academic research by making library resources more accessible but also contributed to the overall safety strategy by minimizing the handling of books and reducing students' need to spend extended periods in shared spaces.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SerivceSection