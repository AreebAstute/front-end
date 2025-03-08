import React from 'react';
import {AiFillStar} from 'react-icons/ai'

const Profile = () => {
  return <div>
    <div className="flex space-y-10 lg:flex-row flex-col items-center justify-between py-28 md:px-20 bg-no-repeat bg-center bg-cover  xl:bg-contain" style={{backgroundImage:"url(/Images/falling-gems/background-profile-webp.webp)"}}>
        <div className="lg:w-1/2 text-center lg:text-left xl:text-left">
            <h2 className="text-3xl md:text-4xl py-3 tracking-wide text-blue-dark font-bold">BUILD YOUR PROFILE <br/> WITH HIGH RECORDS</h2>
            <p className="tet-xl md:text-xl xl:w-4/5 py-3 text-blue-dark">
            Try to score highest to beat your own records. Gold coins will 
            help you unlock more levels and get variety of buckets. 
            </p>
        </div>
        <div className="xl:w-1/2 flex justify-center ">
            <div className="rounded-3xl bg-no-repeat bg-cover bg-center" style={{backgroundImage:"url(/Images/falling-gems/cart-bg-webp.webp)", minWidth:"330px",maxWidth:"330px",minHeight:"400px"}}>
            <div className="flex justify-center pb-3 items-center">
                <img loading="lazy" alt="profile avatar" className="-mt-5 w-32" src="/Images/falling-gems/profile img-webp.webp" />
                <div className="px-10">
                    <span className="flex text-blue-dark"><AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar /></span>
                    {/* <p className="font-light text-blue-light">Level 3</p> */}
                </div>
            </div>
            <div className="px-8 pb-10">
                <h2 className=" text-blue-dark font-bold">ALDO BOUDREAU</h2>
                <p className="text-blue-light text-sm">UNITEDE STATE</p>
                <div className="h-1 shadow-2xl rounded-3xl bg-gray-table blur-3xl my-2"></div>
                <div className="mt-3 space-y-5">
                    <div className="flex items-center space-x-5">
                        <img loading="lazy" alt="trophy" className="w-10" src="/Images/falling-gems/trophy-webp.webp" />
                        <div className="flex justify-center"><div className="h-2 w-28 mx-auto bg-white rounded-xl" /></div>
                        <p className="text-left text-lg uppercase font-bold text-blue-light"> Raisins</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <img loading="lazy" alt="game mode" className="w-10" src="/Images/falling-gems/game mode-webp.webp" />
                        <div className="flex justify-center"><div className="h-2 w-28 mx-auto bg-white rounded-xl" /></div>
                        <p className="text-left text-lg uppercase font-bold text-blue-light"> 6000</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <img loading="lazy" alt="coins blue" className="w-10" src="/Images/falling-gems/coins-blue-webp.webp" />
                        <div className="flex justify-center"><div className="h-2 w-28 mx-auto bg-white rounded-xl" /></div>
                        <p className="text-left text-lg uppercase font-bold text-blue-light"> 3165</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>;
};

export default Profile;
