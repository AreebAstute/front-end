import React from 'react';
import {Link} from 'react-router-dom';


const Button = ({text,link}) => {
    return (
        <div className="w-full flex justify-center lg:justify-start my-5">
            <Link to={link} className="text-base lg:text-lg font-medium px-5 md:px-8 py-2 border-2 border-green-primary hover:bg-green-primary hover:text-white rounded-full text-green-primary">
                {text}
            </Link>
        </div>
    )
}

export default Button
