import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from "three";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

export const createRenderer = () => {
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("bottleModel1"),
        antialias: true,
        alpha: true
    });

    const windowWidth = document.body.clientWidth
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    if (windowWidth < 410) {
        renderer.setSize(300, 300);
    } else if (windowWidth < 700) {
        renderer.setSize(400, 300);
    } else {
        renderer.setSize(680, 500);
    }
    return renderer


}

export const createScene = () => {
    var scene = new THREE.Scene();
    return scene;
}

export const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(3, 680 / 500, 20, 4000);
    camera.position.z = 100;
    camera.position.x = 0
    camera.position.y = 0
    return camera;
}

export const createLight = (scene) => {
    const ambientlight = new THREE.AmbientLight(0xffffff,1);
    const pointlight = new THREE.PointLight(0xffffff, 1, 100);
    pointlight.position.set(0, 2, 10);

    const pointlightBack = new THREE.PointLight(0xffffff, 1, 100);
    pointlightBack.position.set(2, 2, -10);


    scene.add(pointlight,pointlightBack);
}

export const createModel = (model, scene, path, setLoading,renderer) => { //model is a react ref, remember that
    setLoading(true);
    let loadingEnvornment=true
    const dracoLoader = new DRACOLoader();
    // // Specify path to a folder containing WASM/JS decoding libraries.
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');


    let loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);


    let generator = new THREE.PMREMGenerator(renderer);
    new RGBELoader().setPath('/textures/hdri/') .load('dancing_hall_4k.hdr', function (texture) {
    //   let envmap =generator.fromEquirectangular(texture)
    texture.mapping = THREE.EquirectangularReflectionMapping;

    // scene.background = texture;  
    scene.environment = texture;
    loadingEnvornment = false
    });

    loader.load(path, function (gltf) {
        model.current = gltf.scene;
        model.current.position.y=-2.6
        model.current.position.x=0.5

        const BottleMesh=model.current.children.filter((item)=>item.name==="base" || item.name==="handle")
        BottleMesh.map((item)=>{
            item.material.color=new THREE.Color('#292523')
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
    const windowWidth = document.body.clientWidth
    if (windowWidth < 410) {
        camera.aspect = 300 / 300;
        camera.updateProjectionMatrix();
        camera.position.z = 1.6
        renderer.setSize(300, 300);

    } else if (windowWidth < 700) {
        renderer.setSize(400, 300);
        camera.aspect = 400 / 300;
        camera.updateProjectionMatrix();


    } else {
        camera.aspect = 680 / 500;
        camera.updateProjectionMatrix();
        renderer.setSize(680, 500);
    }
}

