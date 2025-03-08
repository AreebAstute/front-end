import React from 'react'

const ProgressBar = ({width}) => {
    return (
        <div className="w3-light-grey w3-round-xlarge bar-width mb-6">
            <div className="w3-container w3-blue w3-round-xlarge w3-round-inner " style={{width:width}}></div>
        </div>
    )
}

export default ProgressBar
