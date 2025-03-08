import React, {useState} from 'react'
import Viewer from "./Viewer";
import {BiLoaderAlt} from "react-icons/bi";

const ModelCustomizer = () => {
    const [data, setData] = useState({
        "id": "1",
        "name": "Bed Model",
        // "model": "/models/bed.gltf",
        // "model": "/models/bed.gltf",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/bed.gltf",
        "meshes":[
            {
                "display_name": "Bed",
                "name": "bed",
                "image": "/Images/AR-assets/bed-webp.webp"

            },
            {
                "display_name": "Pillows",
                "name": "pillow",
                "image": "/Images/AR-assets/pillow-webp.webp"

            },
            {
                "display_name": "Blanket",
                "name": "blanket",
                "image": "/Images/AR-assets/blanket-webp.webp"

            },
            {
                "display_name": "Matteress",
                "name": "_Mattress",
                "image": "/Images/AR-assets/mattress-webp.webp"

            },
        ],
        "frame": {
            "name": "Plane",
            "image": "/assets/images/temp-webp.webp",
            "texture": null
        }

    });

    return (
        <Viewer data={data} setData={setData}/>
    )
}

export default ModelCustomizer
