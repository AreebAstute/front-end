import React from 'react';
import GreenCard from './GreenCard';
import WhiteCard from './WhiteCard';

const WhyLaravel = () => {
    return (
        <div className="bg-no-repeat bg-left-bottom bg-transparent" style={{backgroundSize:"10%" ,backgroundImage:"url(/Images/serviceAssets/section2/left_pattern-webp.webp)"}}>
            <div className="w-11/12 mx-auto py-28">
            <h2 className="sub-heading">Why Tech Managers build their Laravel teams with us:</h2>
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 bg-contain bg-center  bg-no-repeat" style={{backgroundPositionY:"65%",backgroundImage:"url(/Images/technologies/top_to_bottom_dotte-webp.webp), url(/Images/technologies/bottom_dotte-webp.webp)"}}  >
                <GreenCard
                img="/Images/technologies/High-seniority-level-and-technical-skills-webp.webp"
                title="High seniority level and technical skils development"
                desc="Build your technology as sets from the very beginning"
                />
                <WhiteCard
                img="/Images/technologies/Ability-to-scale-a-team-in-days-webp.webp"
                title="Ability to scale a team in days"
                desc={`At times, great efort ends in failure, or conversely, ordinary 
                efort leads to succes. We recognize and reward efort and resist 
                the temptation to judge you based on outcomes.`}
                />
                 <GreenCard
                img="/Images/technologies/API-first-approach-webp.webp"
                title="API-first approach"
                desc="Build your technology as sets from the very beginning"
                />
                 <WhiteCard
                img="/Images/technologies/Ability-to-scale-a-team-in-days-webp.webp"
                title="SEO-friendly code"
                desc={`Search engines will love your app. We'll make your Javascript 
                indexable and visible for Google`}
                />
                 <GreenCard
                img="/Images/technologies/Newest-trends-in-practice-webp.webp"
                title="Newest trends in practice"
                desc="Build your technology as sets from the very beginning"
                />
                <WhiteCard
                img="/Images/technologies/Battle-tested-process-webp.webp"
                title="Battle-tested process"
                desc={`BSo you can easily adapt to change and stay on the track at the 
                same time`}
                />
            </div>


            </div>
        </div>
    )
}

export default WhyLaravel
