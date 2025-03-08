import React from 'react';

const BucketCart = ({img,heading,text}) => {
  return <div>
      <div className="bg-white mx-auto rounded-3xl  pt-36" style={{maxWidth:"300px"}}>
        <div className="text-center space-y-3 flex flex-col items-center justify-center bg-golden-text rounded-3xl px-10 pb-20">
            <img loading="lazy" alt={img.split('/').pop()} className="w-40 mb-5 -mt-20" src={img} />
            <div className="flex items-center bg-white rounded-lg shadow-md px-5">
              <h3 className="text-blue-dark text-xl font-bold ">
                {heading}
              </h3>
              <img loading="lazy" alt="coins" className="w-10 mx-1" src="/Images/falling-gems/coins-webp.webp" />
            </div>
        </div>
    </div>
  </div>;
};

export default BucketCart;
