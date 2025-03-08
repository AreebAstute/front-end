import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
// import ReactGA from "react-ga4";
import aos from "aos";
import 'aos/dist/aos.css'

import en from "./languages/en.json";
import BaseRoutes from "./routes/BaseRoutes";
// import { BrowserRouter } from "react-router-dom";
import RouteChangeTracker from "./routes/RouteChangeTracker";

function App() {

  useEffect(() => {
    // const cookieAccepted = localStorage.getItem("cookies");
    // const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;


    // COMENTING THIS BCZ NETLIFY REQUIRES .ENV and commented import
    // const TRACKING_ID = import.meta.env.VITE_APP_GA_TRACKING_ID; //changing for vite env process
    // ReactGA.initialize(TRACKING_ID);


    //moved from index.html to app.jsx
      aos.init();

    // this piece of code checks whether a user has previously agreed to cookie policy.
    // if they have, we simply initialize reactGA.
    //if they haven't well, it means that no "cookies" was found in localstorage. reactGA will not be initialized until they accept..... yad rkhin khuda da wasta bhulin na
  }, []);

  return (
    <IntlProvider messages={en} locale="en" defaultLocale="en">
      {/* <BrowserRouter> */}
        <RouteChangeTracker />
        <BaseRoutes />
      {/* </BrowserRouter> */}
    </IntlProvider>
  );
}

export default App;
