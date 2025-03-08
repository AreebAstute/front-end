import React, {useState, useEffect} from 'react';
import "./styles.css"

const ModelViewer = ({model, setModel}) => {
    useEffect(() => {
        const viewer = document.querySelector("model-viewer#viewer");

        viewer.addEventListener("load", () => {
            const center = viewer.getCameraTarget();
            const size = viewer.getDimensions();
            const x2 = size.x / 2;
            const y2 = size.y / 2;
            const z2 = size.z / 2;

            viewer.updateHotspot({
            name: 'hotspot-dot+X-Y+Z',
            position: `${center.x + x2} ${center.y - y2} ${center.z + z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim+X-Y',
            position: `${center.x + x2} ${center.y - y2} ${center.z}`
            });
            viewer.querySelector('button[slot="hotspot-dim+X-Y"]').textContent =
                `${(size.z * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot+X-Y-Z',
            position: `${center.x + x2} ${center.y - y2} ${center.z - z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim+X-Z',
            position: `${center.x + x2} ${center.y} ${center.z - z2}`
            });
            viewer.querySelector('button[slot="hotspot-dim+X-Z"]').textContent =
                `${(size.y * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot+X+Y-Z',
            position: `${center.x + x2} ${center.y + y2} ${center.z - z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim+Y-Z',
            position: `${center.x} ${center.y + y2} ${center.z - z2}`
            });
            viewer.querySelector('button[slot="hotspot-dim+Y-Z"]').textContent =
                `${(size.x * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot-X+Y-Z',
            position: `${center.x - x2} ${center.y + y2} ${center.z - z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim-X-Z',
            position: `${center.x - x2} ${center.y} ${center.z - z2}`
            });
            viewer.querySelector('button[slot="hotspot-dim-X-Z"]').textContent =
                `${(size.y * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot-X-Y-Z',
            position: `${center.x - x2} ${center.y - y2} ${center.z - z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim-X-Y',
            position: `${center.x - x2} ${center.y - y2} ${center.z}`
            });
            viewer.querySelector('button[slot="hotspot-dim-X-Y"]').textContent =
                `${(size.z * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot-X-Y+Z',
            position: `${center.x - x2} ${center.y - y2} ${center.z + z2}`
            });

        })
        viewer.addEventListener("change", () => {
            const center = viewer.getCameraTarget();
            const size = viewer.getDimensions();
            const x2 = size.x / 2;
            const y2 = size.y / 2;
            const z2 = size.z / 2;

            viewer.updateHotspot({
            name: 'hotspot-dot+X-Y+Z',
            position: `${center.x + x2} ${center.y - y2} ${center.z + z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim+X-Y',
            position: `${center.x + x2} ${center.y - y2} ${center.z}`
            });
            viewer.querySelector('button[slot="hotspot-dim+X-Y"]').textContent =
                `${(size.z * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot+X-Y-Z',
            position: `${center.x + x2} ${center.y - y2} ${center.z - z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim+X-Z',
            position: `${center.x + x2} ${center.y} ${center.z - z2}`
            });
            viewer.querySelector('button[slot="hotspot-dim+X-Z"]').textContent =
                `${(size.y * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot+X+Y-Z',
            position: `${center.x + x2} ${center.y + y2} ${center.z - z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim+Y-Z',
            position: `${center.x} ${center.y + y2} ${center.z - z2}`
            });
            viewer.querySelector('button[slot="hotspot-dim+Y-Z"]').textContent =
                `${(size.x * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot-X+Y-Z',
            position: `${center.x - x2} ${center.y + y2} ${center.z - z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim-X-Z',
            position: `${center.x - x2} ${center.y} ${center.z - z2}`
            });
            viewer.querySelector('button[slot="hotspot-dim-X-Z"]').textContent =
                `${(size.y * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot-X-Y-Z',
            position: `${center.x - x2} ${center.y - y2} ${center.z - z2}`
            });

            viewer.updateHotspot({
            name: 'hotspot-dim-X-Y',
            position: `${center.x - x2} ${center.y - y2} ${center.z}`
            });
            viewer.querySelector('button[slot="hotspot-dim-X-Y"]').textContent =
                `${(size.z * 100).toFixed(0)} cm`;

            viewer.updateHotspot({
            name: 'hotspot-dot-X-Y+Z',
            position: `${center.x - x2} ${center.y - y2} ${center.z + z2}`
            });

        })

        // remove event listener
        return () => {
            viewer.removeEventListener("load", () => {
            })
            viewer.removeEventListener("change", () => {
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0">
                

                <div className="">
                    <button onClick={() => setModel(null)} className="absolute right-36 bottom-16 bg-gray-200 text-black py-2 px-4 rounded-md shadow-md" style={{zIndex: 10000}}>
                        Close
                    </button>
                    <model-viewer id="viewer" alt="" src={URL.createObjectURL(model)} ar ar-modes="webxr scene-viewer quick-look" placement="wall" environment-image="" poster="" seamless-poster shadow-intensity="1" camera-controls>
                        {/* DIMENSION CODE */}
                        {/* DIMENSION CODE */}
                        {/* DIMENSION CODE */}

                        <button slot="hotspot-dot+X-Y+Z" className="dot" data-position="1 -1 1" data-normal="1 0 0"></button>
                        <button slot="hotspot-dim+X-Y" className="dim" data-position="1 -1 0" data-normal="1 0 0"></button>
                        <button slot="hotspot-dot+X-Y-Z" className="dot" data-position="1 -1 -1" data-normal="1 0 0"></button>
                        <button slot="hotspot-dim+X-Z" className="dim" data-position="1 0 -1" data-normal="1 0 0"></button>
                        <button slot="hotspot-dot+X+Y-Z" className="dot show" data-position="1 1 -1" data-normal="0 1 0"></button>
                        <button slot="hotspot-dim+Y-Z" className="dim show" data-position="0 -1 -1" data-normal="0 1 0"></button>
                        <button slot="hotspot-dot-X+Y-Z" className="dot show" data-position="-1 1 -1" data-normal="0 1 0"></button>
                        <button slot="hotspot-dim-X-Z" className="dim" data-position="-1 0 -1" data-normal="-1 0 0"></button>
                        <button slot="hotspot-dot-X-Y-Z" className="dot" data-position="-1 -1 -1" data-normal="-1 0 0"></button>
                        <button slot="hotspot-dim-X-Y" className="dim" data-position="-1 -1 0" data-normal="-1 0 0"></button>
                        <button slot="hotspot-dot-X-Y+Z" className="dot" data-position="-1 -1 1" data-normal="-1 0 0"></button>

                        {/* DIMENSION CODE */}
                        {/* DIMENSION CODE */}
                        {/* DIMENSION CODE */}
                        
                        <button 
                        slot="ar-button"
                        className="flex items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md absolute right-4 bottom-16"
                        >
                            <p>Activate AR</p>
                        </button>

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