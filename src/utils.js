import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import ReactGA from "react-ga4";
 
export const initGA = (id) => {
//   if (process.env.NODE_ENV === "production") {
    ReactGA.initialize(id);
//   }
};
 
 export const handleScroll = (offset) => {

    console.log("scrolling to:::",offset-40)
    window.scrollTo(0, offset-40);
}

export const getImageALt = (img) => {

    if(img){
        const splitArray = img.split('/');
        const length = splitArray.length;
        return splitArray[length-1]
    }
 
}





export const exportGltfModel=(model,setState,setClickImage)=>{
    // setModelConverting(true)
   
    const exporter = new GLTFExporter();
        // Parse the input and generate the glTF output
        exporter.parse(
            model,
            // called when the gltf has been generated
            function ( result ) {
                console.log( 'result array buffer', result );
                if(result instanceof ArrayBuffer ){
                    saveStringAsBuffer(result,setState)
                }else{
                    console.log( 'result string', result );
                    const output = JSON.stringify( result, null, 2 );
                    saveString(output,setState)   
                }

            },
            // called when there is an error in the generation
            function ( error ) {
                console.log( 'An error happened',error );
                setClickImage(false)
            },
            {binary: true}
        );
}


const saveStringAsBuffer=(file,setState,setModelConverting)=>{

    const blob = new Blob( [ file ], { type: 'application/octet-stream' } );
    var reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
        var base64data = reader.result; 
        console.log("base64",base64data)  
        setState(base64data)      
    }


}

const saveString = (file,setState,setModelConverting) =>{
    const blob = new Blob( [ file ], { type: 'text/plain' } );
    var reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
        var base64data = reader.result;  
        setState(base64data)     
    }
}