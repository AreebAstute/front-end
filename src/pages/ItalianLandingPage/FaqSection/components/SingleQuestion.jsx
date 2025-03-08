import { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function SingleQuestion({ info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={`py-1 my-4 border rounded outline-none group overflow-hidden ${
        showInfo ? "bg-gray-50" : "bg-white"
      }`}
      key={info.id}
    >
      {/* <!-- Tab Flex Container --> */}
      <div
        onClick={() => setShowInfo(!showInfo)}
        className="flex items-center justify-between p-8 text-blue-primary transition duration-500 cursor-pointer group ease"
      >
        {/* <!-- Tab Title --> */}
        <div
          className={`w-11/12 font-semibold transition duration-500 ease ${
            showInfo && "text-green-primary"
          } group-hover:text-green-primary focus:text-green-primary`}
        >
          {info.question}
        </div>

        {/* <!-- Icons --> */}
        <div>
          {/* <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-green-primary"> */}
          {showInfo ? (
            <AiOutlineMinus
              className={`text-xl font-bold transition duration-500 ease ${
                showInfo && "text-green-primary"
              } group-hover:text-green-primary focus:text-green-primary`}
            />
          ) : (
            <AiOutlinePlus
              className={`text-xl font-bold transition duration-500 ease ${
                showInfo && "text-green-primary"
              } group-hover:text-green-primary focus:text-green-primary`}
            />
          )}
        </div>
      </div>

      {/* <!-- Tab Inner Content --> */}
      {showInfo && (
        <div className="flex items-center justify-between px-8 pb-8 transition duration-500 focus:max-h-screen ease">
          {/* <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"> */}
          <p className="w-11/12 py-2 text-justify text-blue-primary">
            {info.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default SingleQuestion;
