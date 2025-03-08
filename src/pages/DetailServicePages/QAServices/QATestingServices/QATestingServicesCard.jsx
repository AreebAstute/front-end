import React from 'react'

const QATestingServicesCard = ({title,desc}) => {
    return (
        <>
        <li className="contentListItem">
            <img loading="lazy" alt="bullet-point" src="/Images/serviceDetails/bullet-point-webp.webp" />
            <div>
                <p className="text-black">{title}</p>
                <p className="mt-3">
                    {desc}
                </p>
            </div>
        </li>
        </>
    )
}

export default QATestingServicesCard
