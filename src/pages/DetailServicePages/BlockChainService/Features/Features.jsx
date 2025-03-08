import React from 'react';
import FeaturesCard from './FeaturesCard';

const Features = () => {
    return (
        <>
        <div className="bg-no-repeat bg-contain bg-bottom py-10 lg:py-20" style={{backgroundImage:"url(/Images/serviceDetails/Features-Of-Blockchain-WebTechnology-bg-webp.webp)"}} >
            
            <div className="flex flex-col items-center text-blue-primary  text-center mx-auto" >
                <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold mb-8 w-5/6  leading-normal ">
                    Features Of Blockchain Web Technology
                </h2> 
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10 lg:w-4/5 md:mx-auto md:px-5 md:mt-16">
                <FeaturesCard
                title="Immutability"
                desc={`There are some exciting blockchain features but among them “Immutability” is undoubtedly one of the key features of blockchain technology. But why is this technology uncorrupted? Let’s start with a connecting blockchain with immutability.
                `}
                center="false"
                />
                <FeaturesCard
                title="Decentralized"
                desc={`The network is decentralized meaning it doesn’t have any governing authority or a single person looking after the framework. Rather a group of nodes maintains the network making it decentralized.
                `}
                center="true"
                />
                <FeaturesCard
                title="Enhanced Security"
                desc={`As it gets rid of the need for a central authority, no one can just simply change any characteristics of the network for their benefit. Using encryption ensures another layer of security for the system.`}
                center="end"
                />
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-20 md:gap-40 lg:w-8/12 lg:mx-auto mx-5 mt-10 md:mt-20 lg:-mt-16 ">
                <FeaturesCard
                title="Consensus"
                desc={`Every blockchain thrives because of the consensus algorithms. The architecture is cleverly designed, and consensus algorithms are at the core of this architecture. Every blockchain has a consensus to help the network make decisions.
                `}
                center="true"

                />
                <FeaturesCard
                title="Distributed Ledgers"
                desc={`Usually, a public ledger will provide every information about a transaction and the participant. It’s all out in the open, nowhere to hide. Although the case for private or federated blockchain is a bit different. But still, in those cases, many people can see what really goes on in the ledger.
                `}
                center="true"

                />
            </div>
            
        </div>
    
        </>
    )
}

export default Features
