import React from "react";
import "./iterativeStyles.css";

const IterativeIncremental = () => {
  const listItemStyle = "font-bold my-5 ml-5";
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-5 px-5 md:px-10 pt-28 bg-no-repeat bg-left-top">
        {/* Text section */}
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 col-span-3">
          <div className="text-blue-primary font-normal text-base lg:text-lg uppercase">
            <div
              className="font-medium bg-no-repeat bg-contain block py-12 relative"
              style={{ backgroundImage: "url(/Images/how-we-deliver/05-webp.webp)" }}
            >
              <p className="absolute bottom-1 text-base font-normal">
                TO MAKE YOU FEEL LIKE WE WORKED AS YOUR IN-HOUSE TEAM.
              </p>
            </div>
          </div>

          <h2 className="devProcessHeading">Cooperative</h2>

          <div className="md:grid grid-cols-2 text-base lg:text-lg">
            <div>
              <div
                className="bg-cover bg-no-repeat py-10 px-5"
                style={{
                  backgroundImage:
                    "url(/Images/how-we-deliver/astute-approach-webp.webp)",
                }}
              >
                <p className="font-normal">
                  <span className="font-bold">
                    Astute Approach works perfectly when it comes to remote
                    colaboration.
                    <br />
                  </span>
                  No mater what, you can't create an amazing software product
                  without close cooperation between the Product Owner and the
                  development team.
                  <br />
                  <br />
                  <span className="font-bold">Therefore,</span> we see you as a
                  crucial member of our Agile Team.
                </p>
              </div>
              <div>{/* empty div */}</div>
            </div>

            <div className="">
              <div
                className=" py-8 px-5 bg-no-repeat bg-cover"
                style={{
                  backgroundImage:
                    "url(/Images/how-we-deliver/that-means-you-can-expect-webp.webp)",
                }}
              >
                <p className="font-normal">
                  That means you can expect full transparency in the project. As
                  a Product Owner, you are always updated about the status of
                  the development and have full control over the product.
                </p>
              </div>

              <div
                className="py-8 px-5 bg-no-repeat bg-cover"
                style={{
                  backgroundImage:
                    "url(/Images/how-we-deliver/We-invite-you-to-webp.webp)",
                }}
              >
                <p className="font-normal">
                  We invite you to use our tools & channels, development
                  environments and whatever we need to ship the product
                  succesfuly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text section */}

        {/* image section */}
        <div className="xl:col-span-2 flex items-center justify-center">
          <img
            loading="lazy"
            className="w-3/5 md:w-2/5 xl:w-4/5 globeImage"
            alt="globe"
            src="/Images/how-we-deliver/globe-webp.webp"
          />
        </div>
        {/* image section */}
      </div>
    </>
  );
};

export default IterativeIncremental;
