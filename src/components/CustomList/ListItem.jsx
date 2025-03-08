import React from 'react'

const ListItem = ({content}) => {
    return (
        <>
            <li className="contentListItem">
                <img alt="List bullet icon" loading="lazy" src="/Images/serviceDetails/bullet-point-webp.webp" />
                <p className="text-left">{content}</p>
            </li>   
        </>
    )
}

export default ListItem
