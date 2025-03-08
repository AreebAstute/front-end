import React from 'react'

const HiringStepCard = ({heading,text}) => {
  return (
    <div className=" text-left mdmd:text-center text-blue-primary px-5 xl:px-10">
        <h3 className="font-semibold text-lg h-10">{heading}</h3>
        <p className="leading-loose mt-3 mdmd:mt-5">
           {text}
        </p>
    </div>
  )
}

export default HiringStepCard