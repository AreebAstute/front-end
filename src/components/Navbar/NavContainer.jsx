import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { links } from "../../routes/Links";
import Subitems from './SubItem';

// {sidebar, setSidebar, ...props}

const NavContainer = (props) => {


    const [showOurServices, setShowOurServices] = useState(false)
    const [servicePosition, setServicePosition] = useState({})

    const handleSidebar = () => {
        props.setSidebar(!props.sidebar)
    }

    useEffect(() => {
        if (showOurServices) {
            let serviceRect = document.getElementById('service-nav-item').getBoundingClientRect();
            setServicePosition({
                top: serviceRect.top,
                left: serviceRect.left,
                right: serviceRect.right,
            })
        }
    }, [showOurServices])

    return (
        <nav className="relative flex items-center justify-between  lg:justify-between px-4 py-2 lg:px-0 lg:py-0 mt-6">
            {/* branding */}
            <Link to="/" className="mobile-logo flex-shrink-0 lg:w-3/12 flex justify-left items-center ml-0 sm:ml-6 mr-6  h-12">
                <img loading="lazy" src="/Images/logo-webp.webp" alt="Astute logo" className="logo" />
            </Link>
            {/* links container */}
            <div className="hidden lg:flex flex-grow max-w-5xl">
                <div className="overflow-y-hidden flex-shrink-0 flex items-center justify-around flex-grow px-6 h-12 bg-blue-primary space-x-2">
                    <NavLink id="service-nav-item" className={` cursor-pointer relative  transition text-xs xl:text-sm 2xl:text-base uppercase text-gray-light font-medium hover:text-green-primary`}
                        to='/services' activeClassName="active_link text-green-primary"
                        onMouseEnter={() => setShowOurServices(true)}
                        onMouseLeave={() => setShowOurServices(false)}
                    >
                        SERVICES
                    </NavLink>

                    {links.map((link, key) => (
                        <NavLink key={key} className={`relative transition text-xs xl:text-sm 2xl:text-base uppercase text-gray-light font-medium hover:text-green-primary`}
                            to={link.to} activeClassName="active_link text-green-primary">
                            {link.title}

                        </NavLink>
                    ))}


                </div>

                {/* {searchOverlay ? 
                    <SearchOverlay />
                    :
                    ''
                } */}
                {
                    showOurServices &&
                    <div className='absolute ' style={{ position: "absolute", top: `${servicePosition.top - 40}px`, left: `${servicePosition.left-15}px`, right: `${servicePosition.right}px` }}>
                        <Subitems servicePosition={servicePosition} setShowOurServices={setShowOurServices} />
                    </div>
                }

            </div>



            {/* {hamburger button} */}
            <div className={`block w-8 h-6 lg:hidden relative cursor-pointer ${props.sidebar ? "menu-btn-active" : "menu-btn"}`} onClick={handleSidebar}>
                <div className="transition-all duration-300 h-1 w-6 bg-blue-primary absolute"></div>
                <div className="transition-all duration-300 h-1 w-6 bg-blue-primary absolute"></div>
                <div className="transition-all duration-300 h-1 w-6 bg-blue-primary absolute"></div>
            </div>
        </nav>
    )
}

export default NavContainer
