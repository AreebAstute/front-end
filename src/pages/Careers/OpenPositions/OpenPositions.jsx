import React from 'react';


// const ClosedPositionPosts = React.lazy(() => import("./ClosedPositionPosts"));
// const OpenPositionPosts = React.lazy(() => import("./OpenPositionPosts"));

import ClosedPositionPosts from './ClosedPositionPosts';
import OpenPositionPosts from './OpenPositionPosts';


// import JobPositionCard from './JobPositionCard';
// import NoOpening from './NoOpening';

const OpenPositions = () => {
    return (
        <div className="md:py-10 bg-no-repeat flex flex-col items-center lg:items-start md:pb-32 md:px-20 bg-right-top rightPatternSize" style={{backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}>
            <p className="text-2xl lg:text-4xl text-blue-primary font-normal border-b-4 border-green-primary inline-block"> <span className="font-bold">Open</span> Positions</p>
            {/* <NoOpening /> */}

            <OpenPositionPosts />
            <p className="text-2xl lg:text-4xl text-blue-primary font-normal border-b-4 border-green-primary inline-block"> <span className="font-bold">Closed</span> Positions</p>

            <ClosedPositionPosts />

        </div>
    )
}

export default OpenPositions
