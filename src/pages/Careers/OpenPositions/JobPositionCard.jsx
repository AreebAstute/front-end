import React from 'react'

const JobPositionCard = (props) => {
    return (
        <div className="rounded-xl shadow-md bg-white px-5 xl:px-12 py-12">
            <div className="text-gray-text font-normal flex flex-col justify-center items-center text-center space-y-1">
                <h1 className="font-bold text-blue-primary text-lg lg:text-xl">{props.title}</h1>
                <span>{props.positions} position(s)</span>
                {
                    props.color === "blue"?
                    <img loading="lazy" alt="blue pattern" src="/Images/careers/pattern-blue-webp.webp" />
                    :
                    <img loading="lazy" alt="pattern" src="/Images/careers/pattern-webp.webp" />

                }
                <p>{props.discipline}</p>
                <span>{props.location}</span>
            </div>
            
        </div>
    )
}

export default JobPositionCard
