import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from "three";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

export const createRenderer = () => {
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("botttleModel3"),
        antialias: true,
        alpha: true
    });

    const windowWidth = document.getElementById("modelPlace").clientWidth
    const windowHeigth= document.getElementById("modelPlace").clientHeight
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setSize(windowWidth,windowHeigth)
    return renderer
}

export const createScene = () => {
    var scene = new THREE.Scene();
    return scene;
}

export const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(3.9, document.getElementById("modelPlace").clientWidth / document.getElementById("modelPlace").clientHeight, 0.9, 4000);
    camera.position.z = 190;
    camera.position.x = 0
    camera.position.y = 0
    return camera;
}

export const createLight = (scene) => {
    const ambientlight = new THREE.AmbientLight(0xffffff,0.2);
    // scene.add(light)
    const pointlight = new THREE.PointLight(0xffffff, 1, 100);
    pointlight.position.set(2, 2, 10);


    const pointlightBack = new THREE.PointLight(0xffffff, 1, 100);
    pointlightBack.position.set(2, 2, -10);


    scene.add(ambientlight);
}

export const createModel = (model, scene, path, setLoading,renderer) => { //model is a react ref, remember that
    setLoading(true)
    let loadingEnvornment=true
    const dracoLoader = new DRACOLoader();
    // // Specify path to a folder containing WASM/JS decoding libraries.
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');


    let loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);


    let generator = new THREE.PMREMGenerator(renderer);
    new RGBELoader().setPath('https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/') .load('dancing_hall_4k.hdr', function (texture) {
    //   let envmap =generator.fromEquirectangular(texture)
    texture.mapping = THREE.EquirectangularReflectionMapping;

    // scene.background = texture;  
    scene.environment = texture;
    loadingEnvornment = false
    });


    loader.load(path, function (gltf) {
        model.current = gltf.scene;
        model.current.position.x=0
        model.current.position.y=-3

        const BottleMesh=model.current.children.find((item)=>item.name==="cup_base")  
        BottleMesh.children.map((item)=>{
          if(item.isMesh && item.name=="Cylinder012" ){
            item.material.color=new THREE.Color("#96182d")
          }
        })


        if(!loadingEnvornment){
            scene.add(model.current);
            setLoading(false);
        }
    }, undefined, function (error) {
        console.error(error)
    });



}

export const createFloor = (scene) => {
    const floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
    const floorMaterial = new THREE.MeshPhongMaterial({
        color: 0xf9fafb,
        shininess: 0,
    })

    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -0.5 * Math.PI;
    floor.receiveShadow = true;
    floor.position.y = -1;
    scene.add(floor)
}

// Function - Add the textures to the models
export const applyTextureToModel = (parent, type, mtl) => {
    parent.traverse((o) => {
        if (o.isMesh) {
            if (o.name.includes(type)) {
                o.material = mtl;
                o.nameID = type; // Set a new property to identify this object
            }
        }
    });
}

export const animate = (callback) => {
    function loop(time) {
        callback(time);
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}



export const onWindowResize = (camera, renderer) => {
    const windowWidth = document.getElementById("modelPlace").clientWidth
    const windowHeigth= document.getElementById("modelPlace").clientHeight
    renderer.setSize(windowWidth,windowHeigth)
    return renderer
}

