import React from 'react';

// const ValueCard = React.lazy(() => import("./ValueCard"));
import ValueCard  from './ValueCard';

const CoreValues = () => {
    return (
        <div className="bg-no-repeat py-10 md:py-28 md:px-20 bg-right-top text-center lg:text-left" style={{backgroundSize:"20%",backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}>
        <p className="text-2xl lg:text-4xl text-blue-primary  font-normal border-b-4 border-green-primary inline-block text-center"> <span className="font-bold">Our Core</span> Values</p>
        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 gap-y-16 mt-20">

            <ValueCard
                title="TRUST OVER PROCESS"
                desc="Trust is our most fundamental core value.
                    We trust our people to do their best for the organization without strict
                    monitoring proceses. Similarly,we expect that you will trust the 
                    organization to help you become succesfull."
                img="/Images/careers/trust-over-webp.webp"
            />
            <ValueCard
                title="EFFORT OVER OUTCOME"
                desc="At times, great efort ends in failure, or conversely, ordinary 
                efort leads to succes. We recognize and reward efort and resist the 
                temptation to judge you based on outcomes."
                img="/Images/careers/effort-over-outcome-webp.webp"
            />
            <ValueCard
                title="VALUE OVER PROFIT"
                desc={`Always ask yourself the question "Is my work actually useful for 
                someone? ”as opposed to" Have I met the requirements given to me so we can 
                bil the client?"`}
                img="/Images/careers/value-over-webp.webp"
            />
            </div>
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-20 mt-20 justify-center lg:w-4/6 lg:mx-auto">
            <ValueCard
                title="COLLABORATION OVER COMPETITION"
                desc={`There is no individual glory (or failure) at AS To constantly enrich 
                eachother's work life is way more important than to be beter than your coleagues 
                and peers`}
                img="/Images/careers/COLLABORATION OVER COMPETITION-webp.webp"
            />
            <ValueCard
                title="EXCELLENCE OVER SUCCESS"
                desc={`Excelence is all about being the best at what you do and maximizing your 
                talents and abilities to perform atvyour highest potential. Success will automatically 
                follow.`}
                img="/Images/careers/EXCELLENCE-OVER-SUCCESS-webp.webp"
            />

        </div>
    </div>
    )
}

export default CoreValues
