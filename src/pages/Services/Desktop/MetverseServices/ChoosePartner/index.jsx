import React, { useState } from 'react'
import ThreeDModel from './Model'
import { BiLoaderAlt } from 'react-icons/bi';

const ChoosePartner = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({
        "id": "1",
        "name": "Bed Model",
        // "model": "/models/meettingRoom2.glb",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/meettingRoom2.glb",
    });
    return (

        <div className="py-16 flex relative flex-col space-y-4 lg:space-y-0  lg:flex-row items-center justify-center lg:justify-between bg-cover  bg-no-repeat space-x-4 pl-8 pr-8  md:pl-16 md:pr-32  h-full "
            style={{ backgroundImage: "url('/Images/serviceAssets/metaverse/landing-page-background-webp.webp')", }}>
            <div className="relative w-full lg:w-1/2 bg-cover flex justify-center items-center mx-auto  bg-no-repeat" style={{
                zIndex: 1,
                backgroundImage : "url('/Images/serviceAssets/metaverse/model-background-webp.webp')"  , backgroundSize:"450px" , backgroundPosition:"center center" 
            }} >
                {
                    loading ?
                        <div className=" absolute mx-auto text-center flex justify-center items-center ">
                            <BiLoaderAlt className="text-5xl  text-green-primary left-0 right-0 animate-spin" />
                        </div>
                    :""    
                }
                <ThreeDModel data={data} loading={loading} setLoading={setLoading} />
            </div>
            <div className="w-full  lg:w-1/2  space-y-1 text-center ">
                <div className="w-full flex flex-col sm:text-center justify-center lg:text-left   space-y-8">
                    <div className='space-y-4'>
                        <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold my-2 text-white">Choosing the right partner</h1>
                        <p className="text-white font-light text-lg lg:text-xl"> Modern business is at a crosroads in the age of digital innovation:</p>
                    </div>

                    <div className=''>
                        <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2">
                            <div className='font-light'>Customer-brand interactions are changing quickly.</div>
                        </div>
                        <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2">
                            <div className='font-light'>We're rushing toward a future where digital and physical encounters are closer than ever.</div>
                        </div>
                        <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2">
                            <div className='font-light'>To stay competitive and expand, we need to take bold, forward-thinking action as we scale and build in the next digital frontier.</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChoosePartner