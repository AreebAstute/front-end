import React from 'react';
import {getImageALt} from '../../../../utils';

const LanguageCard = (props) => {
    return (
        <div className="flex  py-10 px-10 justify-center items-center rounded-3xl shadow-xl hover:bg-green-primary cursor-pointer transition-all duration-500">
            <img loading="lazy" className="w-2/5" alt="" src={props.img} alt={getImageALt(props.img)}></img>
            <h1 className="text-2xl text-blue-primary font-bold px-5">{props.title}</h1>
            
        </div>
    )
}

export default LanguageCard
