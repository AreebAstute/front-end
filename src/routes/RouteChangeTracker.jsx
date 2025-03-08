import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = () => {
  const location = useLocation();
  useEffect(
    function () {
      const path = location.pathname + location.search;

      // Send pageview with a custom path
      ReactGA.send({
        hitType: "pageview",
        page: path,
        // title: "Custom Title",
      });

      // ReactGA.set({ page: path });
      // ReactGA.pageview(path); // Record a pageview for the given page
    },
    [location]
  );
  return "";
};

export default RouteChangeTracker;
