import React from 'react';
import {initGA} from "../../utils";
import { Link } from 'react-router-dom';


const Cookie = ({setCookie}) => {

    const handleChange = () => {
        setCookie(false)
        localStorage.setItem("cookies", true);
         // this piece of code below enables google analytics once the user presses the accept button on policy
         if (process.env.REACT_APP_GA_TRACKING_ID) {
            initGA(process.env.REACT_APP_GA_TRACKING_ID);
        }
    }

    return (
        <div style={{zIndex: "10000"}}className="space-x-4 md:w-1/2 py-4 px-6 fixed left-0 bottom-0 bg-black bg-opacity-80 text-white flex-col flex justify-center items-center">
            <p className="text-xs 2xl:text-sm w-full lg:w-auto mb-4 text-center lg:mb-0"> 
            This website uses cookies to offer you a better experience. 
            By continuing navigation you agree to the use of cookies. 
            For more information see our <Link className="underline" to="/cookie-policy">Cookie Policy.</Link></p>
            <div className="flex mt-5">
                <p
                className="cursor-pointer mx-3 text-sm bg-green-primary py-1 px-3 rounded-md flex-shrink-0"
                onClick={handleChange}>
                    Accept all of them
                </p>

                <p onClick={()=>{setCookie(false)}}
                className="mx-3 text-sm bg-blue-primary py-1 px-3 rounded-md flex-shrink-0 cursor-pointer">
                    Reject all of them
                </p>
            </div>
            
        </div>
    )
}

export default Cookie
