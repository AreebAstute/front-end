import React from "react";
import {
  ASTUTE_FACEBOOK,
  ASTUTE_INSTAGRAM,
  ASTUTE_LINKEDIN,
  ASTUTE_TWITTER,
} from "../../../urls";

const ContactDetailCard = () => {
  return (
    <div
      className="rounded-3xl shadow-md bg-no-repeat bg-cover bg-center text-white px-5 md:px-10 py-5 w-full lg:w-2/3  text-base lg:text-lg"
      style={{
        backgroundImage:
          "url(/Images/contact-usAssets/contact-information-pattern-webp.webp)",
      }}
    >
      <div className="">
        <p className="text-base lg:text-xl font-medium py-3">Contact Details</p>
        <h2 className="text-2xl lg:text-3xl font-bold pb-3">Our Contacts</h2>
        <p>
          Give us a call or drop by any time, we endeavour to answer all
          enquiries within 24 hours on business days. We will be happy to answer
          your questions.
        </p>
        <div className="my-5 flex">
          <img
            loading="lazy"
            alt="phone"
            className="w-4 h-4"
            src="/Images/icons/phone-webp.webp"
          />
          <div className="flex flex-col ml-5">
            <p className="text-sm">Our Phone:</p>
            <p className="text-base lg:text-lg mt-1 underline">
              <a href="tel:+923134399911">+92 313-4399911</a>
            </p>
          </div>
        </div>

        <div className="my-5 flex">
          <img
            loading="lazy"
            alt="mail"
            className="w-4 h-4"
            src="/Images/icons/mail-webp.webp"
          />
          <div className="flex flex-col ml-5">
            <p className="text-sm">Our Mail Box:</p>
            <p className="text-base lg:text-lg mt-1 underline">
              <a href="mailto:affairs@astutuesoftwares.com">
                affairs@astutuesoftwares.com
              </a>
            </p>
          </div>
        </div>

        <div className="my-5 flex">
          <img
            loading="lazy"
            alt="location"
            className="w-4 h-6"
            src="/Images/icons/location-webp.webp"
          />
          <div className="flex flex-col ml-5">
            <p className="text-sm">Our Address:</p>
            <p className="text-base lg:text-lg mt-1">
              Third floor - Plaza #382, Block J DHA EME Sector, Lahore, 53710
            </p>
          </div>
        </div>
        <div className="my-5 flex">
          <img
            loading="lazy"
            alt="location"
            className="w-4 h-6"
            src="/Images/icons/location-webp.webp"
          />
          <div className="flex flex-col ml-5">
            {/* <p className="text-sm">USA:</p> */}

            <p className="text-base lg:text-base capitalize mt-1">
              Astute Softwares LLC <br />
              924 N MANGOLIA AVE SUITE 202, UNIT #5179 ORLANDO, FLORIDA. US
              32803
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 mt-10">
          <a target="_blank" rel="noopener noreferrer" href={ASTUTE_INSTAGRAM}>
            <img
              loading="lazy"
              alt="insta_graybg"
              className="w-8 "
              src="Images/icons/insta_graybg-webp.webp"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={ASTUTE_FACEBOOK}>
            <img
              loading="lazy"
              alt="fb_graybg"
              className="w-8 "
              src="Images/icons/fb_graybg-webp.webp"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={ASTUTE_LINKEDIN}>
            <img
              loading="lazy"
              alt="linkedin_graybg"
              className="w-8 "
              src="Images/icons/linkedin_graybg-webp.webp"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={ASTUTE_TWITTER}>
            <img
              loading="lazy"
              alt="twitter_graybg"
              className="w-8 "
              src="Images/icons/twitter_graybg-webp.webp"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailCard;
