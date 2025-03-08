import React from 'react'

function AlternativeSection() {

    return (
        <section
            id="solutions"
            className="pt-16 z-20 bg-edisu-light"
        >
            {/* <!-- Container For Heading --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-center gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0">
                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-full flex flex-col justify-center gap-4 px-6"
                >
                    <div className="w-full relative flex flex-col justify-center gap-4 mb-6">

                        <div className="outlined_edisu_text text-center w-full z-0 font-bold text-5xl md:text-7xl lg:text-9xl lg:font-black">Alternative</div>
                        {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-3xl md:text-4xl lg:text-5xl font-bold text-center z-20">
                            Alternative to Digital Booking
                        </div>
                    </div>


                    <p className="w-full lg:w-11/12 text-xl md:text-2xl font-normal text-center lg:mt-0 lg:mx-0">
                        Recognizing that not all students might have access to the mobile app or prefer using it, Astute Softwares also proposed a manual alternative:
                    </p>
                </div>
            </div>

            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-center gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0">
                {/* <div className="flex flex-col-reverse justify-between gap-8 lg:gap-0 lg:flex-row lg:mb-0 px-0"> */}

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center w-11/12"
                >

                    {/* <!-- Boxes Container --> */}
                    <div className='w-11/12 mx-auto flex flex-col'>
                        <div
                            className="relative flex flex-col items-start space-y-10 lg:space-y-0 mt-8"
                        >

                            {/* <!-- Point 1 --> */}
                            <div
                                className="flex flex-col justify-center items-center w-full rounded-lg"
                            >
                                <h3 className="flex justify-center items-center text-xl md:text-2xl font-bold lg:w-11/12">
                                    <span className="bg-edisu-primary_light w-6 lg:w-8 h-8 text-xl md:text-2xl font-bold text-right">I</span>n-Person Inquiry:
                                </h3>

                                <div className='px-6'>

                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <p className="text-black text-lg md:text-xl font-normal z-20 pb-20 text-center">
                                            Students had the option to approach study hall administrators directly to inquire about available slots. This ensured inclusivity, allowing those without access to the app or those preferring personal interaction to still make use of study halls safely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AlternativeSection