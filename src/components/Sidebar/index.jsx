import React from 'react'
import {Link} from "react-router-dom"
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa";
import {ASTUTE_FACEBOOK, ASTUTE_INSTAGRAM, ASTUTE_LINKEDIN, ASTUTE_TWITTER , ASTUTE_CAREER} from "../../urls"
import {links} from "../../routes/Links";
import {AiOutlineWhatsApp} from 'react-icons/ai';



const Sidebar = ({sidebar, setSidebar}) => {
    return (
        <div className={`${sidebar ? 'translate-x-0' : 'translate-x-full'} top-0 bottom-0 right-0 transform transition bg-blue-primary fixed flex flex-col items-center text-center pt-36 px-4 sidebar z-1000  `}>
            
            {/* links */}
            <div className=" pb-10 border-b-2 border-white w-full">
                <div className="mb-2">
                    <Link id="service-nav-item"  onClick={() => setSidebar(!sidebar)} className={` uppercase text-base text-white font-medium block mb-6 focus:outline-none`}
                        to='/services'>
                        SERVICES
                    </Link>
                    {links.map((link, key) => (
                        <a onClick={() => setSidebar(!sidebar)} key={key} className="uppercase text-base text-white font-medium block mb-6 focus:outline-none" href={link.to}>
                            {link.title}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col">
                    <a className=" flex justify-center items-center my-5  text-green-primary bg-white px-3 py-1 rounded-md" href="whatsapp://send?text=Hi Astute Softwares!&phone=+923134399911">
                        <AiOutlineWhatsApp className="text-2xl mx-2 text-green-primary" />
                        Whatsapp
                    </a>
                    <a href="https://admin.astutesoftwares.com/login" target="_blank" rel="noopener noreferrer" className="bg-green-primary text-white px-3 py-1 rounded-md">Employee area</a>
                </div>
               
            </div>
            
            {/* <Link to="/careers" className="text-xs xl:text-sm 2xl:text-base text-white font-medium uppercase">
                CAREERS
            </Link> */}

            {/* links */}

            {/* social */}
            <div className='mt-8'>
                <p className='text-white text-xl'>Follow us on</p>
                <div className=" mt-4 flex">
                    
                    <a href={ASTUTE_TWITTER} target="_blank" rel="noopener noreferrer"
                        className="text-xl text-white mx-4 block" aria-label='Astute Twitter'>
                            <FaTwitter />
                    </a>
                    <a href={ASTUTE_INSTAGRAM} target="_blank" rel="noopener noreferrer"
                        className="text-xl text-white mx-4 block" aria-label='Astute Instagram'>
                            <FaInstagram />
                    </a>
                    <a href={ASTUTE_FACEBOOK} target="_blank" rel="noopener noreferrer "
                        className="text-xl text-white mx-4 block" aria-label='Astute Facebook'>
                            <FaFacebook />
                    </a>
                    <a href={ASTUTE_LINKEDIN} target="_blank" rel="noopener noreferrer"
                        className="text-xl text-white mx-4 block" aria-label='Astute Linkedin'>
                            <FaLinkedin />
                    </a>

                </div>
            </div>
            {/* social */}
        </div>
    )
}

export default Sidebar
