import React from 'react';
import { getImageALt } from '../../../../utils';

const LanguageCard = ({img,text}) => {

    const textStyles = "text-green-primary text-lg my-5"
    return (
        <>
        <div className="flex items-center my-2 md:my-0 lg:mx-10 flex-col">
            <img loading="lazy" alt={getImageALt(img)} src={img} />
            <p className={textStyles}>{text}</p>
        </div>
        </>
    )
}

export default LanguageCard
