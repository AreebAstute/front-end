import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from "three";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

export const createRenderer = () => {
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("shoesModel"),
        antialias: true,
        alpha: true,
    });
    var container = document.querySelector('#parentNode');

    const windowWidth = document.body.clientWidth
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    if (windowWidth < 410) {
        renderer.setSize(300, 300);
    } else if (windowWidth < 700) {
        renderer.setSize(400, 300);
    } else if(windowWidth < 1280) {
        renderer.setSize(680, 500);
    }else {
        renderer.setSize(880, 850);
    }
    return renderer


}

export const createScene = () => {
    var scene = new THREE.Scene();
    return scene;
}

export const createCamera = () => {
    const windowWidth = document.body.clientWidth

    const camera = new THREE.PerspectiveCamera(6, 
        windowWidth <410? 300/300: windowWidth<700? 400/300:windowWidth<1280?680/500:800/850
        , 
        5, 8000);
    camera.position.z = 20;
    camera.position.x = 30
    camera.position.y = 10
    return camera;
}

export const createLight = (scene) => {
    const ambientlight = new THREE.AmbientLight(0xffffff, 2);
    
    // pointLight
    
    const pointlight = new THREE.PointLight(0xffffe0, 5, 1000);
    pointlight.position.set(-0.1, 1, 1);

    // const sphereSize = 1;
    // const pointLightHelper = new THREE.PointLightHelper( pointlight, sphereSize );

    // pointLight
    
    //directional Light 

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
    // const helper = new THREE.DirectionalLightHelper( directionalLight, 15 );
    // directionalLight.position.set(-2,8, 1);
    
    //directional Light 

    // const spotLightTop = new THREE.SpotLight( 0xffffff , 10 , 0 , 0.2     );
    // spotLightTop.position.set( -0.1, 2, 1);
    // spotLightTop.castShadow = true;

    // spotLightTop.shadow.mapSize.width = 1024;
    // spotLightTop.shadow.mapSize.height = 1024;

    // spotLightTop.shadow.camera.near = 10;
    // spotLightTop.shadow.camera.far = 20;
    // spotLightTop.shadow.camera.fov = 10;

    // const spotLightLeft = new THREE.SpotLight( 0xffffff , 10 , 0 , 0.2     );
    // // spotLightLeft.position.set(-, -2, 1);


    // const spotLightTopHelper = new THREE.SpotLightHelper( spotLightLeft );

    scene.add(ambientlight,pointlight);
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
    new RGBELoader().setPath('/textures/hdri/') .load('dancing_hall_4k.hdr', function (texture) {
    //   let envmap =generator.fromEquirectangular(texture)
    texture.mapping = THREE.EquirectangularReflectionMapping;

    // scene.background = texture;  
    scene.environment = texture;
    loadingEnvornment = false
    });


    loader.load(path, function (gltf) {
        model.current = gltf.scene;
        model.current.traverse(o => {
            if(o.isMesh){
                o.castShadow = true;
                o.receiveShadow = true;
            }
        })
        
        // const axesHelper = new THREE.AxesHelper( 5 ); this shows the axis of the model
        // scene.add( axesHelper );

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


    }else if (windowWidth<1280){
        camera.aspect = 680 / 500;
        camera.updateProjectionMatrix();
        renderer.setSize(680, 500);
    } 
    else {
        camera.aspect = 880 / 850;
        camera.updateProjectionMatrix();
        renderer.setSize(880, 850);
    }
}

