import React, {useEffect, useState} from 'react';
import "@google/model-viewer"
import "./styles.css";
const ModelViewer = ({data}) => {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        // const viewer = document.querySelector("model-viewer#viewer");
            // if(viewer.canActivateAR){
            //     setSupported(true);
            //     console.log(viewer.canActivateAR)
            // } else{
            //     console.log(viewer.canActivateAR)
            //     setSupported(false)
            // }
            
        //     viewer.addEventListener("load", () => {
        //     const center = viewer.getCameraTarget();
        //     const size = viewer.getDimensions();
        //     const x2 = size.x / 2;
        //     const y2 = size.y / 2;
        //     const z2 = size.z / 2;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot+X-Y+Z',
        //     position: `${center.x + x2} ${center.y - y2} ${center.z + z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim+X-Y',
        //     position: `${center.x + x2} ${center.y - y2} ${center.z}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim+X-Y"]').textContent =
        //         `${(size.z * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot+X-Y-Z',
        //     position: `${center.x + x2} ${center.y - y2} ${center.z - z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim+X-Z',
        //     position: `${center.x + x2} ${center.y} ${center.z - z2}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim+X-Z"]').textContent =
        //         `${(size.y * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot+X+Y-Z',
        //     position: `${center.x + x2} ${center.y + y2} ${center.z - z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim+Y-Z',
        //     position: `${center.x} ${center.y + y2} ${center.z - z2}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim+Y-Z"]').textContent =
        //         `${(size.x * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot-X+Y-Z',
        //     position: `${center.x - x2} ${center.y + y2} ${center.z - z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim-X-Z',
        //     position: `${center.x - x2} ${center.y} ${center.z - z2}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim-X-Z"]').textContent =
        //         `${(size.y * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot-X-Y-Z',
        //     position: `${center.x - x2} ${center.y - y2} ${center.z - z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim-X-Y',
        //     position: `${center.x - x2} ${center.y - y2} ${center.z}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim-X-Y"]').textContent =
        //         `${(size.z * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot-X-Y+Z',
        //     position: `${center.x - x2} ${center.y - y2} ${center.z + z2}`
        //     });

        //     document.querySelector("#ar-button").click();

        // })
        // viewer.addEventListener("change", () => {
        //     const center = viewer.getCameraTarget();
        //     const size = viewer.getDimensions();
        //     const x2 = size.x / 2;
        //     const y2 = size.y / 2;
        //     const z2 = size.z / 2;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot+X-Y+Z',
        //     position: `${center.x + x2} ${center.y - y2} ${center.z + z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim+X-Y',
        //     position: `${center.x + x2} ${center.y - y2} ${center.z}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim+X-Y"]').textContent =
        //         `${(size.z * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot+X-Y-Z',
        //     position: `${center.x + x2} ${center.y - y2} ${center.z - z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim+X-Z',
        //     position: `${center.x + x2} ${center.y} ${center.z - z2}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim+X-Z"]').textContent =
        //         `${(size.y * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot+X+Y-Z',
        //     position: `${center.x + x2} ${center.y + y2} ${center.z - z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim+Y-Z',
        //     position: `${center.x} ${center.y + y2} ${center.z - z2}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim+Y-Z"]').textContent =
        //         `${(size.x * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot-X+Y-Z',
        //     position: `${center.x - x2} ${center.y + y2} ${center.z - z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim-X-Z',
        //     position: `${center.x - x2} ${center.y} ${center.z - z2}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim-X-Z"]').textContent =
        //         `${(size.y * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot-X-Y-Z',
        //     position: `${center.x - x2} ${center.y - y2} ${center.z - z2}`
        //     });

        //     viewer.updateHotspot({
        //     name: 'hotspot-dim-X-Y',
        //     position: `${center.x - x2} ${center.y - y2} ${center.z}`
        //     });
        //     viewer.querySelector('button[slot="hotspot-dim-X-Y"]').textContent =
        //         `${(size.z * 100).toFixed(0)} cm`;

        //     viewer.updateHotspot({
        //     name: 'hotspot-dot-X-Y+Z',
        //     position: `${center.x - x2} ${center.y - y2} ${center.z + z2}`
        //     });

        // })

        // viewer.addEventListener("progress", (e) => {
        //     console.log(e.detail.totalProgress);
        // })

        // remove event listener
        // return () => {
        //     viewer.removeEventListener("load", () => {
        //     })
        //     viewer.removeEventListener("change", () => {
        //     })
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className=" fixed top-0 bottom-0 left-0 right-0" style={{zIndex: 10000}}>
           

            {/* {
                !supported &&
                <div 
                    className="text-sm absolute top-24 text-center w-full"
                >
                    <p className=''>
                        Your Device doesn't support AR.
                    </p>
                </div>
            } */}

                <div className="h-full w-full">
                    <model-viewer id="viewer" 
                    // exposure="1" 
                    // environment-image="https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/dancing_hall_4k.hdr" 
                    // skybox-image="https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/dancing_hall_4k.hdr" 
                    // alt="" 
                    src={data} 
                    // ar ar-modes="scene-viewer quick-look"
                    ar 
                    ar-modes="webxr scene-viewer quick-look"
                    poster="poster.webp" 
                    progress={(event)=>event.detail.totalProgress}
                    // seamless-poster 
                    shadow-intensity="1" 
                    camera-controls>
                        {/* DIMENSION CODE */}
                        {/* DIMENSION CODE */}
                        {/* DIMENSION CODE */}

                        {/* <button slot="hotspot-dot+X-Y+Z" className="dot" data-position="1 -1 1" data-normal="1 0 0"></button>
                        <button slot="hotspot-dim+X-Y" className="dim" data-position="1 -1 0" data-normal="1 0 0"></button>
                        <button slot="hotspot-dot+X-Y-Z" className="dot" data-position="1 -1 -1" data-normal="1 0 0"></button>
                        <button slot="hotspot-dim+X-Z" className="dim" data-position="1 0 -1" data-normal="1 0 0"></button>
                        <button slot="hotspot-dot+X+Y-Z" className="dot show" data-position="1 1 -1" data-normal="0 1 0"></button>
                        <button slot="hotspot-dim+Y-Z" className="dim show" data-position="0 -1 -1" data-normal="0 1 0"></button>
                        <button slot="hotspot-dot-X+Y-Z" className="dot show" data-position="-1 1 -1" data-normal="0 1 0"></button>
                        <button slot="hotspot-dim-X-Z" className="dim" data-position="-1 0 -1" data-normal="-1 0 0"></button>
                        <button slot="hotspot-dot-X-Y-Z" className="dot" data-position="-1 -1 -1" data-normal="-1 0 0"></button>
                        <button slot="hotspot-dim-X-Y" className="dim" data-position="-1 -1 0" data-normal="-1 0 0"></button>
                        <button slot="hotspot-dot-X-Y+Z" className="dot" data-position="-1 -1 1" data-normal="-1 0 0"></button> */}

                        {/* DIMENSION CODE */}
                        {/* DIMENSION CODE */}
                        {/* DIMENSION CODE */}
                        
                        {/* {supported && */}
                        
                            <button 
                            slot="ar-button"
                            id="ar-button"
                            className="flex items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md absolute right-4 top-16"
                            >
                                <p>Activate AR</p>
                            </button>
                        {/* } */}

                        <div id="ar-failure" className="hidden flex items-center justify-center absolute bottom-12 left-12">
                            Please move your camera around and point to a wall until the model shows.
                        </div>
                    </model-viewer>
                </div>
            </div>
        </>
    )
}

export default ModelViewer