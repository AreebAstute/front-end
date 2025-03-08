import React from "react";
import HowCanWeHelpCard from "./HowCanWeHelpCard";
import { Link } from "react-router-dom";

const SecretSauce = () => {
  return (
    <div className="bg-gray-light py-5">
      <div className="relative py-10">
        <div className=" flex flex-col ">
          <h2 className="text-xl text-center md:text-3xl text-blue-primary 2xl:text-4xl font-extrabold mb-5 tracking-wide">
            How Can We Help?
          </h2>
          <div className="border-b-4 border-green-primary w-28 mx-auto" />
        </div>
      </div>
      <div className="w-11/12 lg:w-4/5 mx-auto">
        <HowCanWeHelpCard
          title="Improve Business
                Agility"
          image="/Images/serviceDetails/Improve_Business-webp.webp"
          blueText="Optimize business performance, reap the benefits of digital economy and speed up
                innovation by moving to the Cloud and implementing DevOps. Unlock better
                business and consumer insights with Advanced Analytics and Reporting."
          grayText="We work with you to make your technology backbone and business more agile, scalable, and
                efficient in addressing fast-changing business demands."
        />
        <HowCanWeHelpCard
          title="Transform Digital
                Experiences"
          image="/Images/serviceDetails/Transform_Digital-webp.webp"
          blueText="Delight your customers with hyper-personalized experiences and run successful
                customized omni-channel campaigns by utilizing latest technology advances like
                Machine Learning and AI, 360-degree consumer journey analytics, VR, and IoT."
          grayText="We help clients build and launch real-time consumer insights platforms to capture critical
                information, develop and deploy AI-driven recommendation and customization engines, predict
                consumer behavior, identify high-value customer segments, and drive product and services
                strategy that is highly relevant to company’s clients."
        />
        <HowCanWeHelpCard
          title="Increase Operational
                Efficiency"
          image="/Images/serviceDetails/Increase_Operational-webp.webp"
          blueText="Streamline business processes and workflows to improve business operations and
                profitability without compromising on product quality, security and customer
                experiences."
          grayText="We help clients to reduce total cost of ownership by moving to the cloud, translate internal data
                into meaningful business insights, implement process automation, and increase the speed and
                quality of the releases by implementing DevOps."
        />
        <HowCanWeHelpCard
          title="Monetize Your Data"
          image="/Images/serviceDetails/Monetize_Your_Data-webp.webp"
          blueText="Leverage your data to transform operations and business planning, develop new
                markets, increase revenue and create enhanced consumer experiences."
          grayText="From ETL and Data Integration to Cloud Data Warehousing and Business Intelligence platforms
                we have the skills and expertise in helping clients monetize their data to deliver value to clients,
                customize offerings, optimize internal operations, and unlock new revenue streams."
        />
      </div>
    </div>
  );
};

export default SecretSauce;
