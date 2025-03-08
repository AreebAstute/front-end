import React from 'react'

const Ovarlay = ({close}) => {
    return (
        <div onClick={() => close ? close(false) : null} style={{zIndex:99}} className="fixed h-screen w-screen bg-black bg-opacity-25 top-0 left-0 overflow-hidden" />
    )
}

export default Ovarlay