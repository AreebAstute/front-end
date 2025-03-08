import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from "three";


export const createRenderer = () => {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("model"),
        antialias: true,
        alpha: true
    });
    const windowWidth = document.body.clientWidth
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    if(windowWidth < 410){
        renderer.setSize(300, 300);
    }else if(windowWidth < 700){
        renderer.setSize(400, 300);
    } else{
        renderer.setSize(680, 500);
    }
    return renderer
}

export const createScene = () => {
    const scene = new THREE.Scene();
    // scene.background = 0xffffff
    return scene;
}

export const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(
        75,
        680 / 500,
        0.1,
        4000
    );
    camera.position.z = 1;
    camera.position.x = 3
    camera.position.y = 1.8
    return camera;
}

export const createLight = (scene) => {
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
    hemiLight.position.set(0, 50, 0);

    const pointLightRight = new THREE.DirectionalLight(0xffffff, 0.6);
    pointLightRight.position.set(10, 0, 0)
    pointLightRight.castShadow = true;
    const pointLightLeft = new THREE.DirectionalLight(0xffffff, 0.6);
    pointLightLeft.position.set(-6, 0, 0)
    pointLightLeft.castShadow = true;
    const pointLightTop = new THREE.DirectionalLight(0xffffff, 0.6);
    pointLightTop.position.set(0, 6, 0)
    pointLightTop.castShadow = true;

    pointLightRight.shadow.mapSize.width = 1024; // default
    pointLightRight.shadow.mapSize.width = 1024; // default
    pointLightRight.shadow.mapSize.height = 1024; // default
    pointLightRight.shadow.mapSize.height = 1024; // default
    pointLightLeft.shadow.camera.near = 0.5; // default
    pointLightLeft.shadow.camera.near = 0.5; // default
    pointLightLeft.shadow.camera.near = 0.5; // default
    pointLightLeft.shadow.camera.near = 0.5; // default
    pointLightTop.shadow.camera.far = 0; 
    pointLightTop.shadow.camera.far = 0; 
    pointLightTop.shadow.camera.far = 0; 
    pointLightTop.shadow.camera.far = 0; 

    const light = new THREE.AmbientLight( 0xdddddd );

    // const pointLightTop = new THREE.PointLight(0xfffcf5, 0.3);
    // pointLightTop.position.set(0, 400, 0)
    // pointLightTop.castShadow = true;
    scene.add(hemiLight, pointLightTop,);
}

export const createModel = (model, scene, path, setLoading) => { //model is a react ref, remember that
    const loader = new GLTFLoader();

    loader.load(path, function(gltf) {
        model.current = gltf.scene;
        model.current.traverse(o => {
            if(o.isMesh){
                o.castShadow = true;
                o.receiveShadow = true;
                console.log(o)
            }
        })
      
      // Set the models initial scale   
        model.current.scale.set(2,2,2);
        // model.current.rotation.y = Math.PI;

      
        // Offset the y position a bit
        model.current.position.y = 0.8;
        const txt = new THREE.TextureLoader().load("/textures/1-webp.webp")
        model.current.traverse((o) => {
            if(o.isMesh){
                o.material = new THREE.MeshPhongMaterial( { map: txt,  shininess: 40} );
                console.log(o)
            }
        })

        //color the ids of the model we set in blender
        // Set initial textures
        // for (let object of INITIAL_MAP) {
        //     initColor(model.current, object.childID, object.mtl);
        // }
      
        // Add the model to the scene
        scene.add(model.current);

        setLoading(false);
      
      }, undefined, function(error) {
        console.error(error)
      });
      
}

export const createFloor = (scene) => {
    const floorGeometry = new THREE.PlaneGeometry(5000,5000,1,1);
    const floorMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
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
    if(windowWidth < 410){
        camera.aspect = 300 / 300;
        camera.updateProjectionMatrix();
        camera.position.z = 1.6
        renderer.setSize( 300, 300 );

    } else if(windowWidth < 700){
        renderer.setSize(400, 300);
        camera.aspect = 400 / 300;
        camera.updateProjectionMatrix();


    } else{
        camera.aspect = 680 / 500;
        camera.updateProjectionMatrix();
        renderer.setSize( 680, 500 );
    }
}