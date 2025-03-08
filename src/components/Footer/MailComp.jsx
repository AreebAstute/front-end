import React from 'react'

const MailComp = ({text,link}) => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row mb-2 ">
            <span>{text}</span>
            <a className="underline mx-0 md:mx-1 lg:mx-0 2xl:mx-1" href={`mailto:${link}`}>{link}</a>
        </div>
    )
}

export default MailComp
