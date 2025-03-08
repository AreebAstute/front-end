import React from "react";
import "./footerStyles.css";
import { Link } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import MailComp from "./MailComp";

const Index = () => {
  return (
    // <div className=" flex-shrink-0">
    <div className=" footer footer-styles">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-10 lg:grid-cols-4 lg:gap-3 px-10 lg:pb-8 pt-16">
        {/* First col */}
        <div className="text-white col-span-1">
          <img
            loading="lazy"
            alt="white logo"
            className="-mt-8"
            src="/Images/footerAssets/White color logo-webp.webp"
          ></img>

          <div className="flex w-full mt-5">
            <div className="flex flex-col justify-start">
              <img
                loading="lazy"
                alt="location icon"
                className="w-6"
                src="/Images/icons/location-1-webp.webp"
              />
            </div>
            <div className="ml-5">
              <p className="font-bold">
                Headquarters
                <br />
              </p>
              <p>
                Third floor - Plaza #382,
                <br />
                Block J DHA EME Sector,
                <br />
                Lahore, 53710
              </p>
              {/* <br/>
                        <p>Astute Softwares LLC,<br/>924 N MANGOLIA AVE,<br/>SUITE 202, UNIT #5179,<br/>ORLANDO, FLORIDA. US 32803</p> */}
            </div>
          </div>
          <div className="flex w-full mt-5">
            <div className="flex flex-col justify-start">
              <img
                loading="lazy"
                alt="location icon"
                className="w-6"
                src="/Images/icons/location-1-webp.webp"
              />
            </div>
            <div className="ml-5">
              <p className="font-bold">
                USA
                <br />
              </p>
              {/* <p>Third floor - Plaza #382,<br/>Block J DHA EME Sector,<br/>Lahore, 53710</p>
                        <br/> */}
              <p>
                Astute Softwares LLC,
                <br />
                924 N MANGOLIA AVE,
                <br />
                SUITE 202, UNIT #5179,
                <br />
                ORLANDO, FLORIDA. US 32803
              </p>
            </div>
          </div>
          <div className="flex w-full mt-5">
            <div className="flex flex-col justify-start w-6"></div>
            <Link to="/privacy-policy">
              <div className="ml-5">
                <p className="font-bold">Privacy Policy</p>
              </div>
            </Link>
          </div>
        </div>
        {/* First col */}

        {/* Second col }
            <div className=" text-white px-5 col-span-1 md:ml-28 pt-5">
                <h3 className="font-bold text-lg lg:text-xl">About us</h3>
                <ul className="mt-3 xl:mt-10 space-y-1">
                    <li><a>Company</a></li>
                    <li><a>Leadership</a></li>
                    <li><a>Diversity</a></li>
                    <li><a>Wavelength</a></li>
                    <li><a>Jobs</a></li>
                </ul>
            </div>
           {/* Second col */}

        {/* Third col */}
        <div className=" text-white lg:px-8  col-span-1">
          <p className="font-bold text-lg lg:text-xl">Services</p>
          <ul className="mt-3 xl:mt-10 space-y-1 footerServicesLink ">
            <li>
              <Link to="/services/custom-software-development">
                Softwares development
              </Link>
            </li>
            <li>
              <Link to="/services/digital-transformation-services">
                Digital transformation services
              </Link>
            </li>
            <li>
              <Link to="/services/mobile-application-development">
                Mobile app development
              </Link>
            </li>
            <li>
              <Link to="/services/software-quality-assurance">
                QA testing services
              </Link>
            </li>
            <li>
              <Link to="/services/ui-and-ux-design">UX/UI design</Link>
            </li>
            <li>
              <Link to="/services/big-data-consulting-services">
                Big data services
              </Link>
            </li>
            {/*<li><Link to="/services/blockchain-solutions">Blockchain services</Link></li>
                    <li><Link to="/services/devops-services">Devops services</Link></li>*/}
            <li>
              <Link to="/services/maintenance-and-support">
                App maintenance {"& "}support
              </Link>
            </li>
          </ul>
        </div>
        {/* Third col */}

        {/* Fourth col */}
        <div className=" text-white lg:px-5">
          <p className="font-bold text-lg lg:text-xl">Contact Us</p>
          <div className="mt-3 xl:mt-10 xl:space-y-1">
            <MailComp text="CEO:" link="ceo@astutesoftwares.com" />
            <MailComp text="General:" link="affairs@astutesoftwares.com" />
            {/* <MailComp text="Sales:" link="sales@astutesoftwares.com" /> */}
            {/* <MailComp text="Accounts:" link="accounts@astutesoftwares.com" /> */}
            {/* <MailComp text="Complaints:" link="complaints@astutesoftwares.com" /> */}
            {/* <MailComp text="HR:" link="hr@astutesoftwares.com" /> */}
            <MailComp text="Marketing:" link="marketing@astutesoftwares.com" />
          </div>
          <div className="flex mt-10">
            <a href="https://www.instagram.com/astutesoftwares/">
              <img
                loading="lazy"
                alt="insta icon"
                className="w-7 mr-5"
                src="/Images/icons/insta-1-webp.webp"
              />
            </a>
            <a href="https://www.facebook.com/astutesoftwares/">
              <img
                loading="lazy"
                alt="fb icon"
                className="w-7 mx-5"
                src="/Images/icons/fb_-webp.webp"
              />
            </a>
            <a href="https://linkedin.com/company/astutesoftwares">
              <img
                loading="lazy"
                alt="in icon"
                className="w-7 mx-5"
                src="/Images/icons/in-1-webp.webp"
              />
            </a>
            <a href="https://twitter.com/astutesoftwares?s=11">
              <img
                loading="lazy"
                alt="twitter icon"
                className="w-7 mx-5"
                src="/Images/icons/twitter-webp.webp"
              />
            </a>
          </div>
        </div>
        {/* Fourth col */}

        {/* fifth col */}
        <div className="text-white col-span-1 flex flex-col lg:justify-center lg:items-center">
          <a href="https://www.pseb.org.pk/" target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              alt="pseb logo"
              className="w-28 "
              src="/Images/pseb-logo-webp.webp"
            ></img>
          </a>
          <a href="https://clutch.co/profile/astute-softwares" target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              alt="q-logo"
              className="w-28 mt-5"
              src="/Images/q-logo-webp.webp"
            ></img>
          </a>
        </div>
        {/* fifth col */}
      </div>
      <div className="text-white font-bold text-base px-5 pt-8 pb-3 text-center">
        <p className="text-md">
          All rights reserved - Astute Softwares, NTN No. A097675 - Third floor
          - Plaza #382, Block J DHA EME Sector, 53710, Lahore, Pakistan
        </p>
      </div>
    </div>
    // </div>
  );
};

export default Index;
