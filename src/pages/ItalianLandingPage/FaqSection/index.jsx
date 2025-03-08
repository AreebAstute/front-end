import { useState } from "react";

import SingleQuestion from "./components/SingleQuestion";

const questions = [
  {
    id: 1,
    question:
      "They asked The Software House to upgrade their digital product and set a direction",
    answer:
      "They asked The Software House to upgrade their digital product and set a directio They asked The Software House to upgrade their digital product and set a directionn",
  },
  {
    id: 2,
    question:
      "They asked The Software House to upgrade their digital product and set a direction",
    answer:
      "They asked The Software House to upgrade their digital product and set a directio They asked The Software House to upgrade their digital product and set a directionn",
  },
  {
    id: 3,
    question:
      "They asked The Software House to upgrade their digital product and set a direction",
    answer:
      "They asked The Software House to upgrade their digital product and set a directio They asked The Software House to upgrade their digital product and set a directionn",
  },
  {
    id: 4,
    question:
      "They asked The Software House to upgrade their digital product and set a direction",
    answer:
      "They asked The Software House to upgrade their digital product and set a directio They asked The Software House to upgrade their digital product and set a directionn",
  },
];

function FaqSection() {
  return (
    <section id="faq" className="mt-20 lg:mt-24">
      <div className="container mx-auto">
        <h2 className="text-blue-primary mb-6 mt-6 text-center font-extrabold text-2xl md:text-4xl leading-15">
          Frequently Asked Questions
        </h2>
        {/* <p className="text-blue-primary max-w-lg px-6 mx-auto text-center text-graishBlue">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p> */}
      </div>

      <div className="flex justify-center container mx-auto px-6 mb-32">
        <div className="w-11/12 md:m-8 mx-auto overflow-hidden">
          {questions.map((info, index) => {
            return <SingleQuestion info={info} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
