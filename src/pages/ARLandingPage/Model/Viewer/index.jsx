import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import LayerPicker from "../LayerPicker";
import QrCode from '../QrCode';
import { BiLoaderAlt, BiCube } from "react-icons/bi";

const Viewer = ({ data, setData }) => {
  const [activeLayer, setActiveLayer] = useState(null);
  const [tooltipOpen, setTooltipOpen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ColorPalleteComponent, setColorPalleteComponent] = useState(null);

  // my base model will go inside this variable
  const model = useRef(null);

  useEffect(() => {
    async function loadModules() {
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls");
      const {
        createCamera,
        createFloor,
        createLight,
        createModel,
        createRenderer,
        createScene,
        onWindowResize,
        animate,
      } = await import("./methods");
      const { default: ColorPallete } = await import("../ColorPallete");
      setColorPalleteComponent(() => ColorPallete); // store the imported component
      const { GLTFExporter } = await import("three/examples/jsm/exporters/GLTFExporter");

      const renderer = createRenderer();
      const scene = createScene();
      const camera = createCamera();
      createLight(scene);
      // createFloor(scene);

      // viewer controls setting
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.dampingFactor = 0.1;
      controls.autoRotate = false; // Toggle this if you'd like the model to automatically rotate
      controls.autoRotateSpeed = 0.2;

      // load model into scene
      createModel(model, scene, data.model, setLoading);

      window.addEventListener('resize', () => onWindowResize(camera, renderer), false);

      animate(() => {
        controls.update();
        renderer.render(scene, camera);
      });
    }
    loadModules();
  }, [data.model]);

  function saveString(text, filename) {
    const blob = new Blob([text], { type: 'text/plain' });
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      setTooltipOpen(base64data);
    };
  }

  function saveArrayBuffer(buffer, filename) {
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      setTooltipOpen(base64data);
    };
  }

  const convertModel = async () => {
    if (tooltipOpen) {
      console.log("Tooltip already open; returning");
      return;
    }
    console.log("Converting model");
    // Dynamically import GLTFExporter if needed, or use the one loaded in useEffect if in scope.
    // For this example, assume GLTFExporter is already loaded in useEffect.
    const { GLTFExporter } = await import("three/examples/jsm/exporters/GLTFExporter");
    const exporter = new GLTFExporter();
    exporter.parse(
      model.current,
      function (result) {
        if (result instanceof ArrayBuffer) {
          saveArrayBuffer(result, 'scene.gltf');
        } else {
          const output = JSON.stringify(result, null, 2);
          console.log(output);
          saveString(output, 'scene.gltf');
        }
      },
      function (error) {
        console.log('An error happened');
        console.log(error);
      },
      { binary: true }
    );
  };

  return (
    <>
      <div className="relative">
        {loading && (
          <div className="flex items-center justify-center">
            <BiLoaderAlt className="text-7xl text-green-500 animate-spin" />
          </div>
        )}

        {!loading && (
          <div className="flex justify-end w-full z-50">
            <div
              className="relative w-24 group cursor-pointer text-center"
              onClick={convertModel}
            >
              <div className="mx-auto rounded-full h-12 w-12 flex items-center justify-center bg-green-primary">
                <BiCube className="text-2xl text-white" />
              </div>
              <p className="text-sm group-hover:text-white capitalize text-gray-400">
                View In AR
              </p>
            </div>
            <div className="relative">
              <AnimatePresence>
                {tooltipOpen && (
                  <QrCode key="QR-CODE" tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen} />
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        <canvas id="model" className="-mt-12" style={{ height: "0%", width: "0%" }}></canvas>
        {!loading && (
          <>
            <AnimatePresence exitBeforeEnter>
              {!activeLayer ? (
                <LayerPicker
                  key="layer-picker"
                  setTooltipOpen={setTooltipOpen}
                  tooltipOpen={tooltipOpen}
                  data={data}
                  setState={setActiveLayer}
                />
              ) : activeLayer && ColorPalleteComponent ? (
                <ColorPalleteComponent
                  setTooltipOpen={setTooltipOpen}
                  data={data}
                  setData={setData}
                  activeLayer={activeLayer}
                  setActiveLayer={setActiveLayer}
                  model={model}
                />
              ) : null}
            </AnimatePresence>
          </>
        )}
      </div>
    </>
  );
};

export default Viewer;
