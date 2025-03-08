import React from "react";

const techInfo = [
  {
    id: 1,
    logo: "/Images/landing-page-assets/flutter-webp.webp",
  },
  {
    id: 2,
    logo: "/Images/landing-page-assets/nodeJs_logo-webp.webp",
  },
  {
    id: 3,
    logo: "/Images/landing-page-assets/angular_icon-webp.webp",
  },
  {
    id: 4,
    logo: "/Images/landing-page-assets/Django_Logo-webp.webp",
  },
  {
    id: 5,
    logo: "/Images/landing-page-assets/kotlin_logo-webp.webp",
  },
  {
    id: 6,
    logo: "/Images/landing-page-assets/AWS-webp.webp",
  },
  {
    id: 7,
    logo: "/Images/landing-page-assets/React_icon-webp.webp",
  },
  {
    id: 8,
    logo: "/Images/landing-page-assets/l-webp.webp",
  },
  {
    id: 9,
    logo: "/Images/landing-page-assets/Java_logo-webp.webp",
  },
  {
    id: 10,
    logo: "/Images/landing-page-assets/swift_logo-webp.webp",
  },
];

function TechCards() {
  return (
    <section id="tech-cards" className="mt-8 md:mt-12 z-50">
      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-row flex-wrap justify-center items-center lg:space-y-2">
          {/* <!-- Card --> */}
          {techInfo.map((data) => {
            return (
              <div
                key={data.id}
                className="flex items-center justify-center overflow-hidden cursor-pointer p-4 rounded-2xl bg-transparent hover:bg-green-primary h-32 w-1/2 md:w-1/5"
              >
                <img
                  loading="lazy"
                  src={data.logo}
                  alt="logo"
                  className="object-contain h-2/4 w-full hover:bg-green-primary"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechCards;
