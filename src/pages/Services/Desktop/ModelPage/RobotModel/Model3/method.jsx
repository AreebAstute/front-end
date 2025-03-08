import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from "three";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';


let scene;
let camera;
let renderer;
let mixer;
let gun;




const clock = new THREE.Clock();


export const createScene = () => {
    const scene = new THREE.Scene();
    // scene.background = 0x000000
    return scene;
}

export const createCamera = () => {
    const windowWidth = document.body.clientWidth

    const camera = new THREE.PerspectiveCamera(2.7, 
        windowWidth<410?
        300/300
        
        :windowWidth<700?
        400/300
        
        :680 / 500
        
        , 0.9, 4000);
    camera.position.z = 190;
    camera.position.x = 0
    camera.position.y = 20
    return camera;
}

export const createLight = (scene) => {
    const ambientlight = new THREE.AmbientLight(0xffffff,0.2);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.8);
    hemiLight.position.set(10, 50, 0);
    // hemiLight.position.set(0, 0, 5);

    const pointLightExtra = new THREE.DirectionalLight(0xffffff, 0.9);
    pointLightExtra.position.set(0, 20, 0);
    pointLightExtra.castShadow = true;


    const pointLightRight = new THREE.DirectionalLight(0xffffff, 0.9);
    pointLightRight.position.set(10, 0, 0)

    const pointLightLeft = new THREE.DirectionalLight(0xffffff, 0.2);
    pointLightLeft.position.set(-5, 0, 0)

    const pointLightTop = new THREE.PointLight(0xffffff, 0.9);
    pointLightTop.position.set(0, 0, 5)

    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 5, 5, 20 );

    pointLightExtra.shadow.mapSize.width = 1025; // default
    pointLightExtra.shadow.camera.far = 0; // default


    const light = new THREE.AmbientLight( 0xffffff, 2 );

    // scene.add(hemiLight,pointLightExtra,pointLightRight,pointLightLeft,light);
    // scene.add(hemiLight,pointLightExtra,pointLightRight,pointLightLeft,pointLightTop);
    scene.add(ambientlight);
}


export const createRenderer = () => {
        var renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("Robotmodel3"),
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

export const createAnimatedModel = (model, path, setLoading) => { //model is a react ref, remember that
    
    setLoading(true)
    let loadingEnvornment = true
    renderer = createRenderer();
    scene = createScene();
    camera = createCamera();
    createLight(scene);

   // viewer controls setting
   const controls = new OrbitControls(camera, renderer.domElement)
   
   controls.update();
   controls.enableDamping = true;
   controls.enablePan = false;
   controls.enableZoom = false;
   controls.dampingFactor = 0.1;
   controls.autoRotate = true; // Toggle this if you'd like the chair to automatically rotate
   controls.autoRotateSpeed = 4 ; // 30

   const dracoLoader = new DRACOLoader();
   dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

   const loader = new GLTFLoader();
   loader.setDRACOLoader(dracoLoader);

   let generator = new THREE.PMREMGenerator(renderer);
   new RGBELoader().setPath('/textures/hdri/') .load('dancing_hall_4k.hdr', function (texture) {
   //   let envmap =generator.fromEquirectangular(texture)
   texture.mapping = THREE.EquirectangularReflectionMapping;

   // scene.background = texture;  
   scene.environment = texture;
   loadingEnvornment = false
   });

    loader.load(path, function(gltf) {

        model.current = gltf.scene; 
        // setting model shadow
        model.current.traverse( function( node ) {
            
            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }

        } );
      
        model.current.rotation.y =0.9

        model.current.position.x=0;
        model.current.position.y=-4.5;
        model.current.scale.set(5,5,5);

        if(!loadingEnvornment){
        // Add the model to the scene
        scene.add(model.current);

        // playing model animation //
         mixer = new THREE.AnimationMixer(model.current);
         console.log("mixer",mixer)

        let clips = gltf.animations;
        console.log("clips",clips)
        mixer.timeScale =0.5 ; // animation speed

        // Play all animations clips
        clips.forEach( function ( clip ) {
            mixer.clipAction( clip ).play();
        } );

        // Play Speicifc animation
       
        // const clip = THREE.AnimationClip.findByName( clips, 'ArmatureAction' );
        // const action = mixer.clipAction( clip );
        // action.play();

        animate2()
        // animate()
       
        setLoading(false);
        }
        
      
      }, undefined, function(error) {
        console.error("model err",error)
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

export const animate2 = () => {

    requestAnimationFrame(animate2);

    const delta = clock.getDelta();
    if(mixer){
        mixer.update(delta);
    }

    // gun.rotation.y += 0.005
    renderer.render(scene, camera);
}

// export const animate = (callback) => {
//     function loop(time) {
//         // callback(time);
//         requestAnimationFrame(loop);
//     }
//     requestAnimationFrame(loop);
// }



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

