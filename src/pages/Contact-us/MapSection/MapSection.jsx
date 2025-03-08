import React from "react";

const MapSection = () => {
  const style = "rounded-2xl";

  return (
    <div
      className="bg-green-primary grid-col-reverse grid grid-cols-1 md:grid-cols-5 py-5 my-10 bg-cover bg-bottom bg-no-repeat h-96 md:h-85 px-10 md:px-0"
      style={{ backgroundImage: "url(/Images/contact-usAssets/map-bg-webp.webp)" }}
    >
      <div className="order-1 md:order-2 col-span-2 text-blue-primary md:ml-10 mt-10">
        <p className="">Get in Touch</p>
        <h2 className="text-2xl font-medium">Ready to Get Started ?</h2>
      </div>
      <div className="order-2 md:order-1 col-span-3">
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54450.52426078645!2d74.235951!3d31.464846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfaa0f658e0d0ab0!2sAstute%20Softwares!5e0!3m2!1sen!2s!4v1632382551858!5m2!1sen!2s"
            className="w-full h-full rounded-xl lg:rounded-tl-none lg:rounded-bl-none  lg:rounded-tr-xl lg:rounded-br-xl border-4 border-white"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps showing our location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
