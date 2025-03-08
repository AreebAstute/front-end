import React from 'react'

const StepsHeading = ({content}) => {
    return (
        <div>
            <p className="text-3xl md:text-4xl 2xl:text-5xl leading-tight text-center lg:text-left font-extrabold text-blue-primary py-5">{content}</p>
            <div className="w-32 mx-auto lg:mx-0  border-b-2 border-green-primary" />
        </div>
    )
}

export default StepsHeading
