import React from 'react';
import QATestingServicesCard from './QATestingServicesCard';

const Services = () => {
    return (
        <div>
            <div className=" px-5 my-20 md:px-10 pt-10 bg-no-repeat bg-left-top leftPatternSize " style={{backgroundImage:"url(/Images/serviceAssets/section2/left_pattern-webp.webp)"}}>
                <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
                    
                    {/* Text section */} 
                   
                    <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center">
                        Software QA and Testing Services
                    </h2>
                    <div className="border-b-2 border-green-primary w-28 mx-auto" />
                    
                    {/* Text section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 xl:gap-28 mt-5">
                        <div className="px-3 md:py-8">
                            <ul className="space-y-5 md:space-y-10">
                                <QATestingServicesCard 
                                title="Discovery and Analysis"
                                desc="We work with you to assess your current Quality Assurance 
                                processes and help you define and build the best QA 
                                strategy with the right frameworks and tools."
                                />
                                <QATestingServicesCard 
                                title="Complete Lifecycle"
                                desc="The goal of an effective QA process is to quickly identify
                                 and correct defects. We will help you define your test 
                                 plan for both manual and automated testing across the 
                                 entire software development lifecycle: from requirements 
                                 through design, development, deployment and maintenance."
                                />
                                <QATestingServicesCard 
                                title="Custom Teams"
                                desc="Rapidly get a team that feels like an extension of your own. 
                                We work with you to quickly get the right team in place for your 
                                short- and long-term testing needs."
                                />
                                <QATestingServicesCard 
                                title="Web, Mobile, On-premises Applications"
                                desc="We are skilled in defining, executing and automating 
                                testing for Web, SaaS, Cloud online; Native, Hybrid and 
                                Responsive mobile; Stand-alone and Client/Server on-premises. 
                                We help you deliver impeccable quality, scalable performance 
                                and outstanding UI on any platform."
                                />
                                
                            </ul>
                        </div>
                        <div className="px-3 md:py-8 min-h-full">
                            <ul className="space-y-5 md:space-y-10">
                                <QATestingServicesCard 
                                title="Embedded Agile"
                                desc="The agile development methodology is an integral part 
                                of our approach. Our QA engineers, embedded as part of your 
                                teams, help you produce quality results on a rapid, regular 
                                basis. We work closely with Scrum Masters and the development 
                                team to deliver well-tested, functionally-complete products in 
                                every agile sprint or cycle."
                                />
                                <QATestingServicesCard 
                                title="Unit Testing Automation Platform"
                                desc="In the age of Agile Development and Continuous Integration 
                                it has become important for developers to write and integrate 
                                Unit Tests into their coding workflow. Astute Softwares works with your 
                                development team to create and integrate the Unit Test Execution 
                                Bench that minimizes the extra efforts for developers to use unit 
                                testing without decreasing the power of unit tests."
                                />
                                <QATestingServicesCard 
                                title="Test Automation"
                                desc="We help you identify the best areas for testing 
                                automation and develop the scripts to enable and automate 
                                a script execution platform. We work with you to choose the 
                                right frameworks and tools to enable your QA strategy and to 
                                embed it in your development lifecycle."
                                />
                                
                            </ul>
                        </div>

                    </div>

                </div>
             
            </div>
        </div>
    )
}

export default Services
