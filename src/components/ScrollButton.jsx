import React,{useEffect} from 'react';
import { handleScroll } from '../utils';

const ScrollButton = ({refOffset}) => {

    useEffect(() => {
    
        window.scrollTo(0,0);
    }, [])
    return (
        <div className=" w-8 mt-10 flex flex-col items-center cursor-pointer" onClick={()=> handleScroll(refOffset)}>
            <div className="w-4/5 md:w-full">
                <img className="w-full animate-bounce" alt="scroll icon" loading="lazy" src="/Images/icons/scroll-icon-webp.webp" />
            </div>
            {/* <span className="mt-5 text-blue-primary text-sm">Scroll down </span> */}
        </div>
    )
}

export default ScrollButton
