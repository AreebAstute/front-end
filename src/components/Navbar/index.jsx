import React from 'react'
import SocialContainer from "./SocialContainer";
import NavContainer from "./NavContainer";

const Navbar = ({sidebar, setSidebar}) => {
    return (
        <div className="bg-white fixed top-0 w-screen nav-z">
            <SocialContainer />
            <NavContainer sidebar={sidebar} setSidebar={setSidebar}/>
        </div>
    )
}

export default Navbar