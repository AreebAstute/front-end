import React from "react";

import ContactForm from "./ContactForm";

const ContactFormCard = () => {
  return (
    <div className="md:ml-10 w-full md:px-5 mt-10 lg:mt-0">
      <div>
        <p className="text-blue-primary font-medium text-base lg:text-xl capitalize">
          <div
            className="font-medium bg-no-repeat bg-cover inline-block p-2"
            style={{
              backgroundImage:
                "url(/Images/contact-usAssets/get-in-touch-text-bg-webp.webp)",
            }}
          >
            Get{" "}
          </div>
          in Touch
        </p>
        <h2 className="text-2xl lg:text-4xl font-semibold capitalize text-blue-primary">
          Ready to get started ?
        </h2>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormCard;
