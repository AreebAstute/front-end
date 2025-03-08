import React from 'react';
import {BiLinkExternal} from 'react-icons/bi';

const ClosedPositionPosts = () => {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 w-11/12">
            
            <div className="shadow-xl postCard">
                <a target="_blank" rel="noopener noreferrer" href="https://www.bit.ly/AstuteADI">
                    <img loading="lazy" alt="hiring AD" className="" src="/Images/careers/open positions/hiring AD-100-webp.webp" />
                    <div className="applyBtn cursor-pointer hidden absolute top-0 bottom-0 w-full h-full justify-center items-center bg-black bg-opacity-40">
                        <button className="flex items-center text-white bg-green-primary py-2 px-8 rounded-full">
                            Apply Now <BiLinkExternal className="mx-3" /> 
                        </button>
                    </div>
                </a>
            </div>
            <div className="shadow-xl postCard">
                <a target="_blank" rel="noopener noreferrer" href="https://www.bit.ly/AstuteBDI">
                    <img loading="lazy" alt="hiring developer" className="" src="/Images/careers/open positions/hiring developer-100-webp.webp" />
                    <div className="applyBtn cursor-pointer hidden absolute top-0 bottom-0 w-full h-full justify-center items-center bg-black bg-opacity-40">
                        <button className="flex items-center text-white bg-green-primary py-2 px-8 rounded-full">
                            Apply Now <BiLinkExternal className="mx-3" /> 
                        </button>
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}

export default ClosedPositionPosts
