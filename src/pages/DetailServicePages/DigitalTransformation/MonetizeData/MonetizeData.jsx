import React from "react";
import MonetizeDataCard from "./MonetizeDataCard";
import TextDiv from "./TextDiv";

const MonetizeData = () => {
  return (
    <div className="px-5 md:px-10 mb-20 lg:px-32">
      <div className="mb-10 lg:w-1/2">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl my-5 md:text-left text-center font-bold text-blue-primary">
          Monetize Your Data:
          <br />
          Business Intelligence and Analytics Services
        </h2>
        <div className="w-28 mx-auto md:mx-0 border-b-2 border-green-primary" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <TextDiv />
        <div className="grid grid-cols-1 gap-10">
          <MonetizeDataCard
            title="ENABLE DATA COLLECTION"
            desc="Big Data Warehousing. Data Extraction, Conversion and Normalization.
                    Make your data feeds clean, clear and actionable"
            img="/Images/serviceDetails/DATA_COLLECTION-webp.webp"
          />
          <MonetizeDataCard
            title="VISUALIZE DATA TO UNLOCK INSIGHTS"
            desc="Convert Disorganized consumer, business and operations data 
                    into Actionable Insights and Comprehensive reports"
            img="/Images/serviceDetails/VISUALIZE-DATA-webp.webp"
          />
          <MonetizeDataCard
            title="DATA-DRIVEN BEHAVIOR & ANALYTICS"
            desc="Forecasting, Predictive Analytics, Real-time Personalization"
            img="/Images/serviceDetails/DATA-DRIVEN-BEHAVIOR-webp.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default MonetizeData;
