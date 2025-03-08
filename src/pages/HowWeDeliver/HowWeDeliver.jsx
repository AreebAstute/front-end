import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";


// const LandingSection = React.lazy(() => import("./LandingSection/LandingSection"));
// const Predictable = React.lazy(() => import("./Predictable/Predictable"));
// const IterativeIncremental = React.lazy(() => import("./IterativeIncremental/IterativeIncremental"));
// const QualityDriven = React.lazy(() => import("./QualityDriven/QulaityDriven"));
// const Scaleable = React.lazy(() => import("./Scaleable/Scaleable"));
// const Cooperative = React.lazy(() => import("./Cooperative/Cooperative"));
// const ConsultancySection = React.lazy(() => import("../Services/Desktop/consultancy-section"));

import LandingSection from "./LandingSection/LandingSection";
import Predictable from "./Predictable/Predictable";
import IterativeIncremental from "./IterativeIncremental/IterativeIncremental";
import QualityDriven from "./QualityDriven/QulaityDriven";
import Scaleable from "./Scaleable/Scaleable";
import Cooperative from "./Cooperative/Cooperative";
import ConsultancySection from "../Services/Desktop/consultancy-section";

const HowWeDeliver = () => {
  const intl = useIntl();

  return (
    <>
      <HelmetComp/>

      <div className="h-full flex flex-col">
        <div className="flex-grow">
          <LandingSection />
          <Predictable />
          <IterativeIncremental />
          <QualityDriven />
          <Scaleable />
          <Cooperative />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default HowWeDeliver;





const HelmetComp = () => {
  const intl = useIntl();

  const defaultTitle = "Agile Software Development | Astute Softwares - Remote Collaboration Experts";
  const defaultDescription =
    "Boost your business with Agile Software Development by Astute Softwares. We ensure predictable results, cost control, scalability, and seamless collaboration for your IT projects.";
  const url = "https://astutesoftwares.com/how-we-deliver";
  
  // TODO: Replace with the official banner when available
  const imageUrl = "https://astutesoftwares.com/images/agile-placeholder-webp.webp";

  return(
    <Helmet>
      {/* General Meta Tags */}
      <title>
        {intl?.formatMessage({ id: "agile.development.title", defaultMessage: defaultTitle }) || defaultTitle}
      </title>
      <meta
        name="description"
        content={intl?.formatMessage({ id: "agile.development.description", defaultMessage: defaultDescription }) || defaultDescription}
      />
      <meta
        name="keywords"
        content="Agile software development, Remote collaboration, Project planning, DevOps, Scrum, CI/CD, Code quality, Software consulting"
      />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags (for Social Media) */}
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Agile Software Development - Astute Softwares" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* SEO & Indexing */}
      <meta name="robots" content="index, follow" />
      <meta name="referrer" content="origin-when-crossorigin" />
    </Helmet>
  )
}