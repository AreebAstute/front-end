import React from 'react';
import TechnologyCard from './TechnologyCard';

const Technologies = () => {
    return (
        <div className="w-11/12 md:w-10/12 2xl:w-4/5 mx-auto mt-10">
            <div>
                <p className="text-3xl md:text-4xl 2xl:text-5xl text-center text-blue-primary font-bold py-3">
                    Supported Trackings and AR Technologies</p>
                <div className="border-green-primary border-b-2 w-40 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 mt-20">
                <TechnologyCard 
                img="/Images/technologies/Laravel-logo-webp.webp"
                content="Apple’s tracking system ARKit supports iOS-powered mobile 
                devices and phones only. It is mainly used for marker and markerless 
                object placement." />
                <TechnologyCard 
                img="/Images/technologies/React-logo-webp.webp"
                content="Apple’s tracking system ARKit supports iOS-powered mobile 
                devices and phones only. It is mainly used for marker and markerless 
                object placement." />
                <TechnologyCard 
                img="/Images/technologies/Node-logo-webp.webp"
                content="Apple’s tracking system ARKit supports iOS-powered mobile 
                devices and phones only. It is mainly used for marker and markerless 
                object placement." />
                <TechnologyCard 
                img="/Images/technologies/Laravel-logo-webp.webp"
                content="Apple’s tracking system ARKit supports iOS-powered mobile 
                devices and phones only. It is mainly used for marker and markerless 
                object placement." />
                
            </div>
        </div>
    )
}

export default Technologies
