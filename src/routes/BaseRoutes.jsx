import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
import Footer from "../components/Footer/index";
import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//   component imports
import Loader from "../components/Loader";
import Overlay from "../components/Overlay";
import Cookie from "../components/Cookie";
// import TidioChat from "../components/TidioChat";
// import PageNotFound from "../pages/PageNotFound";
//   component imports

// Page imports
import Home from "../pages/Home/Desktop";
import AR from "../pages/ARLandingPage/ARLandingPage";
// import ArViewer from "../pages/ArViewer";
// import Language from "../pages/Home/Desktop/LanguagePage/language";
import Service from "../pages/Services/Desktop/index";
import AboutUS from "../pages/About-US/Desktop/index";
import ContactUS from "../pages/Contact-us";
// import SEOPage from "../pages/Home/Desktop/SEO Services/seoServices";
import HowWeDeliver from "../pages/HowWeDeliver/HowWeDeliver";
import Careers from "../pages/Careers/Careers";
// import DevService from "../pages/DetailServicePages/WebDevService/WebDevService";
import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";
import AuthPage from "../pages/SignUp/SignUp";

// Technology detail page imports
import AngularTechnology from "../pages/Technologies/Angular/Angular";
import LaravelTechnology from "../pages/Technologies/Laravel/Laravel";
import ReactTechnology from "../pages/Technologies/React/ReactTechnology";
import NodeTechnology from "../pages/Technologies/Node/Node";
import VueTechnology from "../pages/Technologies/VueJs/VueJs";
import KotlineTechnology from "../pages/Technologies/Kotline/Kotline";
import DjangoTechnology from "../pages/Technologies/Django/Django";

// Detail service Page imports
import WebDevService from "../pages/DetailServicePages/WebDevService/WebDevService";
import QAService from "../pages/DetailServicePages/QAServices/QAService";
import DTService from "../pages/DetailServicePages/DigitalTransformation/DigitalTransformation";
import MobileAppDevService from "../pages/DetailServicePages/MobileAppDev/MobileAppDev";
import UxDesignService from "../pages/DetailServicePages/UxDesign/UxDesign";
import MaintenanceSupport from "../pages/DetailServicePages/MaintenanceSupport/MaintenanceSupport";
import BigDataService from "../pages/DetailServicePages/BigDataService/BigDataService";
import BlockChainService from "../pages/DetailServicePages/BlockChainService/BlockChainService";
import DevopService from "../pages/DetailServicePages/DevopService/DevopService";
import TimeAndMaterial from "../pages/DetailServicePages/TimeAndMaterial/TimeAndMaterial";
import CouponPage from "../pages/CouponPage/CouponPage";
import ArServices from "../pages/Services/Desktop/ArServices";
import MetverseServices from "../pages/Services/Desktop/MetverseServices";
import ThreedModeling from "../pages/Services/Desktop/ThreedModeling";
// import ModelsPage from "../pages/Services/Desktop/ModelPage";
import Portfolio from "../pages/Portfolio";

// Game page import
import FallingGems from "../pages/FallingGems";

// Policy pages
import CookiePolicy from "../pages/CookiePolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";

// Landing pages
import LandingPage from "../pages/LandingPage";
import ItalianLandingPage from "../pages/ItalianLandingPage";

import EdisuMain from "../pages/Edisu";
import PATAppMain from "../pages/PAT-App";
import ProIDMain from "../pages/ProId";
import PageNotFound from "../pages/PageNotFound";
import DirectContactUs from "../pages/DirectContact";
import ItalianDirectContactUs from "../pages/DirectContact/ItalianContactUs";

const BaseRoutes = () => {
  const [sidebar, setSidebar] = useState(false);
  // const [overlay, setOverlay] = useState(false);
  const [gameDownload, setGameDownload] = useState(false);
  const [gamePage, setGamePage] = useState(false);
  // const [cookie, setCookie] = useState(
  //   localStorage.getItem("cookies") ? false : true
  // );
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  return (
    // <div className="flex flex-col h-full pt-28">
    <>
      {/* <Suspense fallback={<Loader />}> */}
        {/* Showing cookie bar */}
        {/* {cookie ? <Cookie setCookie={setCookie} /> : null} */}

        {sidebar ? <Overlay /> : null}
        {showHeaderFooter && (
          // !gamePage &&
          <>
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
          </>
        )}

        {/* Tidio Chat Bot */}
        {/* <TidioChat /> */}

        {/* <div className="flex-grow"> */}
        <Switch>
          <Route path="/edisu" exact>
            <EdisuMain />
          </Route>
          <Route path="/pat-app" exact>
            <PATAppMain />
          </Route>
          <Route path="/pro-id" exact>
            <ProIDMain />
          </Route>
          <Route path="/turin-startup-campaign" exact>
            <ItalianLandingPage />
          </Route>
          <Route path="/usa-startups" exact>
            <LandingPage />
          </Route>
          <Route path="/" exact>
            <Home gameDownload={gameDownload} setGameDownload={setGameDownload} />
          </Route>
          <Route path="/ar-solutions" exact>
            <AR />
          </Route>
          {/* <Route path="/ar-solutions/:id" exact>
            <ArViewer setShowHeaderFooter={setShowHeaderFooter} />
          </Route> */}
          <Route path="/about-us" exact>
            <AboutUS />
          </Route>
          <Route path="/services" exact>
            <Service />
          </Route>
          <Route path="/contact-us" exact>
            <ContactUS />
          </Route>
          <Route path="/request-contact" exact>
            <DirectContactUs setShowHeaderFooter={setShowHeaderFooter} />
          </Route>
          <Route path="/request-contact-it" exact>
            <ItalianDirectContactUs setShowHeaderFooter={setShowHeaderFooter} />
          </Route>
          <Route path="/blogs" exact>
            <UnderConstruction />
          </Route>
          <Route path="/how-we-deliver" exact>
            <HowWeDeliver />
          </Route>
          <Route path="/careers" exact>
            <Careers />
          </Route>
          <Route path="/coming-soon" exact>
            <UnderConstruction />
          </Route>

          <Route path="/coupons" exact>
            <CouponPage />
          </Route>

          <Route path="/auth" exact>
            <AuthPage />
          </Route>
  
          {/* Detail service page routes */}
          <Route path="/services/custom-software-development" exact>
            <WebDevService />
          </Route>
          <Route path="/services/software-quality-assurance" exact>
            <QAService />
          </Route>
          <Route path="/services/digital-transformation-services" exact>
            <DTService />
          </Route>
          <Route path="/services/mobile-application-development" exact>
            <MobileAppDevService />
          </Route>
          <Route path="/services/ui-and-ux-design" exact>
            <UxDesignService />
          </Route>
          <Route path="/services/maintenance-and-support" exact>
            <MaintenanceSupport />
          </Route>
          <Route path="/services/big-data-consulting-services" exact>
            <BigDataService />
          </Route>
          <Route path="/services/blockchain-solutions" exact>
            <BlockChainService />
          </Route>
          <Route path="/services/devops-services" exact>
            <DevopService />
          </Route>

          <Route path="/services/time-and-material-services" exact>
            <TimeAndMaterial />
          </Route>

          <Route path="/augmented-reality" exact>
            <ArServices />
          </Route>

          <Route path="/metaverse" exact>
            <MetverseServices />
          </Route>

          <Route path="/3d-modelling" exact>
            <ThreedModeling />
          </Route>

          <Route path="/portfolio" exact>
            <Portfolio setShowHeaderFooter={setShowHeaderFooter} />
          </Route>

          {/* Detail service page routes */}

          {/* Detail technology page routes  */}
          <Route path="/technologies/angular" exact>
            <AngularTechnology />
          </Route>
          <Route path="/technologies/laravel" exact>
            <LaravelTechnology />
          </Route>
          <Route path="/technologies/react" exact>
            <ReactTechnology />
          </Route>
          <Route path="/technologies/nodejs" exact>
            <NodeTechnology />
          </Route>
          <Route path="/technologies/vue" exact>
            <VueTechnology />
          </Route>
          <Route path="/technologies/kotlin" exact>
            <KotlineTechnology />
          </Route>
          <Route path="/technologies/django" exact>
            <DjangoTechnology />
          </Route>
          {/* Detail technology page routes  */}

          {/* Game page */}
          <Route path="/falling-gems" exact>
            <FallingGems setShowHeaderFooter={setGamePage} />
          </Route>
          {/* Game page */}

          {/* policy pages */}
          <Route path="/cookie-policy" exact>
            <CookiePolicy />
          </Route>
          {/* policy pages */}

          {/* privacy policy pages */}
          <Route path="/privacy-policy" exact>
            <PrivacyPolicy />
          </Route>
          {/* privacy policy pages */}

          {/* only make changes above */}
          <Route path="/404" exact>
            <PageNotFound />
          </Route>

          <Redirect from="*" to="/404" />
        </Switch>
        {/* </div> */}

        {/* <div className="flex-shrink-0"> */}
        {showHeaderFooter && <Footer />}
        {/* </div> */}
      {/* </Suspense> */}
    </>
    // </div>
  );
};

export default BaseRoutes;

          {/* <Route path="/animation" exact>
              <AnimationPage />
          </Route> */}
              
          {/* <Route path = '/3d-models-and-configurator' exact>
            <ModelsPage/>
          </Route> */}
          {/* <Route path="*" element={<Navigate to ="/404" />}>
            <PageNotFound />
          </Route> */}