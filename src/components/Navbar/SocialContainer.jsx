import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {  FaLinkedin, FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa";
import {ASTUTE_FACEBOOK, ASTUTE_INSTAGRAM, ASTUTE_LINKEDIN, ASTUTE_TWITTER , ASTUTE_CAREER} from "../../urls"

const SocialContainer = () => {
    return (
        <div className="hidden  lg:flex justify-end items-center pb-4 -mb-8 relative z-50">
            {/* social icons */}
            <div className=" flex items-center space-x-24 pt-6 ">
                <div className="flex items-center space-x-4">
                <p className='text-xl text-green-primary'>Follow us on</p>
                <a href={ASTUTE_TWITTER} target="_blank" rel="noopener noreferrer"
                    className="transition text-lg xl:text-xl 2xl:text-2xl text-gray-dark hover:text-blue-primary" aria-label='Astute Twitter'>
                        <FaTwitter />
                </a>
                <a href={ASTUTE_INSTAGRAM} target="_blank" rel="noopener noreferrer"
                    className="transition text-lg xl:text-xl 2xl:text-2xl text-gray-dark hover:text-blue-primary" aria-label='Astute Instagram'>
                        <FaInstagram />
                </a>
                <a href={ASTUTE_FACEBOOK} target="_blank" rel="noopener noreferrer"
                    className="transition text-lg xl:text-xl 2xl:text-2xl text-gray-dark hover:text-blue-primary" aria-label='Astute Facebook'>
                        <FaFacebook />
                </a>
                <a href={ASTUTE_LINKEDIN} target="_blank" rel="noopener noreferrer"
                    className="transition text-lg xl:text-xl 2xl:text-2xl text-gray-dark hover:text-blue-primary" aria-label='Astute Twitter'>
                        <FaLinkedin />
                </a>
                </div>
                <a className="flex items-center text-green-primary" href="whatsapp://send?text=Hi Astute Softwares!&phone=+923134399911" aria-label='Astute WhatsApp'>
                    <AiOutlineWhatsApp className="text-2xl mx-2 text-green-primary" />
                    Whatsapp
                </a>

                <a href="https://admin.astutesoftwares.com/login" target="_blank" rel="noopener noreferrer" className="bg-green-primary flex-shrink-0 text-white px-3 py-1 rounded-md" aria-label='Employee area'>Employee area</a>
            </div>
            

            {/* Career button */}
            <div className="ml-6 mt-6 border-l-2 border-gray-medium flex items-end relative">
                {/* <a href={ASTUTE_CAREER} className="text-xs xl:text-sm 2xl:text-base text-blue-primary font-medium uppercase">
                    CAREERS
                </a> */}
                {/* <Link to="/careers" className="text-xs xl:text-sm 2xl:text-base text-blue-primary font-medium uppercase">
                    CAREERS
                </Link> */}
            </div>

        </div>
    )
}

export default SocialContainer
