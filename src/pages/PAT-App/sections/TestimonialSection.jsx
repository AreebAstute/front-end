import React from 'react'

function TestimonialSection() {

    return (
        <section
            id="testimonials"
            className="pt-16 pb-16 z-20 relative bg-pat-secondary"
        >
            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-center lg:flex-row lg:mb-0 px-0 pb-16">

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center gap-4 px-6 w-full lg:px-20"
                >
                    {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
                    <h1 className="flex text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left">
                        Doctor Testimonials
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12 lg:gap-0 mt-8">
                        {/* Testimonial - 1 */}
                        <div className='flex flex-col lg:flex-row items-center space-x-3'>
                            <img src="/Images/pat-app/user-webp.webp" alt="user" className='w-24 h-24' />
                            <div>
                                <p className='font-light text-xl'><span className='font-extrabold text-7xl'>“</span>For patients with chronic conditions, the PAT APP's tremor assessment is invaluable. It lets us track progression conveniently, making treatment adjustments more precise and timely.</p>
                                <p className='font-semibold text-base mt-4'>- Dr. Michael Patel, Neurologist</p>
                            </div>
                        </div>

                        {/* Testimonial - 2 */}
                        <div className='flex flex-col lg:flex-row items-center space-x-3 mt-0 lg:mt-32'>
                            <img src="/Images/pat-app/user-webp.webp" alt="user" className='w-24 h-24' />
                            <div>
                                <p className='font-light text-xl'><span className='font-extrabold text-7xl'>“</span>The increased communication facilitated by the PAT APP has strengthened my relationships with patients. Their improved medication adherence is also a significant benefit.</p>
                                <p className='font-semibold text-base mt-4'>- Dr. Michael Patel, Neurologist</p>
                            </div>
                        </div>

                        {/* Testimonial - 3 */}
                        <div className='flex flex-col lg:flex-row items-center space-x-3'>
                            <img src="/Images/pat-app/user-webp.webp" alt="user" className='w-24 h-24' />
                            <div>
                                <p className='font-light text-xl'><span className='font-extrabold text-7xl'>“</span>The PAT APP has streamlined my practice. I can monitor patient symptoms remotely and make necessary prescription changes without requiring frequent office visits. It's a fantastic tool for improving patient outcomes.</p>
                                <p className='font-semibold text-base mt-4'>- Dr. Michael Patel, Neurologist</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- Container For Image & Content --> */}
            <div className="xl:container xl:mx-auto flex flex-col justify-center lg:flex-row lg:mb-0 px-0 pb-16">

                {/* <!-- Content --> */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="flex flex-col justify-center gap-4 px-6 w-full lg:px-20"
                >
                    {/* <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/3"> */}
                    <h1 className="flex text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:w-11/12 lg:text-left">
                        Patient Testimonials
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12 lg:gap-0 mt-8">
                        {/* Testimonial - 1 */}
                        <div className='flex flex-col lg:flex-row items-center space-x-3'>
                            <img src="/Images/pat-app/user-webp.webp" alt="user" className='w-24 h-24' />
                            <div>
                                <p className='font-light text-xl'><span className='font-extrabold text-7xl'>“</span>For patients with chronic conditions, the PAT APP's tremor assessment is invaluable. It lets us track progression conveniently, making treatment adjustments more precise and timely.</p>
                                <p className='font-semibold text-base mt-4'>- Dr. Michael Patel, Neurologist</p>
                            </div>
                        </div>

                        {/* Testimonial - 2 */}
                        <div className='flex flex-col lg:flex-row items-center space-x-3 mt-0 lg:mt-32'>
                            <img src="/Images/pat-app/user-webp.webp" alt="user" className='w-24 h-24' />
                            <div>
                                <p className='font-light text-xl'><span className='font-extrabold text-7xl'>“</span>The increased communication facilitated by the PAT APP has strengthened my relationships with patients. Their improved medication adherence is also a significant benefit.</p>
                                <p className='font-semibold text-base mt-4'>- Dr. Michael Patel, Neurologist</p>
                            </div>
                        </div>

                        {/* Testimonial - 3 */}
                        <div className='flex flex-col lg:flex-row items-center space-x-3'>
                            <img src="/Images/pat-app/user-webp.webp" alt="user" className='w-24 h-24' />
                            <div>
                                <p className='font-light text-xl'><span className='font-extrabold text-7xl'>“</span>The PAT APP has streamlined my practice. I can monitor patient symptoms remotely and make necessary prescription changes without requiring frequent office visits. It's a fantastic tool for improving patient outcomes.</p>
                                <p className='font-semibold text-base mt-4'>- Dr. Michael Patel, Neurologist</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection