import React from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";



// const LandingSection = React.lazy(() => import("./LandingSection/LandingSection"));
// const GetinTouch = React.lazy(() => import("./GetinTouch/GetinTouch"));
// const MapSection = React.lazy(() => import("./MapSection/MapSection"));

import LandingSection from './LandingSection/LandingSection';
import GetinTouch from './GetinTouch/GetinTouch';
import MapSection from './MapSection/MapSection';


// components
// import LandingSection from "./LandingSection/LandingSection";
// import GetinTouch from "./GetinTouch/GetinTouch";
// import MapSection from "./MapSection/MapSection";
// components

const Index = () => {
  const intl = useIntl();
  const defaultTitle = "Get in Touch | Astute Softwares - Contact Us Today";
  const defaultDescription =
    "Looking for expert IT consulting and software development? Contact Astute Softwares today. Call, email, or visit us—we're here to help grow your business.";
  const url = "https://astutesoftwares.com/contact-us";
  
  // TODO: Replace this with the actual banner image URL when available
  const imageUrl = "https://astutesoftwares.com/images/contact-banner-placeholder-webp.webp";

  return (
    <>
      <Helmet>
        <title>Contact Us - Your Company</title>
        <meta name="description" content="Get in touch with us for any queries or support." />
        <meta name="keywords" content="contact, support, customer service" />
        <meta property="og:title" content="Contact Us - Your Company" />
        <meta property="og:description" content="Get in touch with us for any queries or support." />
      </Helmet>

      <LandingSection />
      <GetinTouch />
      <MapSection />
    </>
  );
};

export default Index;
