import React,{useState, useEffect,useRef} from 'react';
import {motion} from 'framer-motion';
import  './animationStyles.css';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";


const UnderConstruction = () => {

    const [animate, setAnimate] = useState(false);
    const [message, setMessage] = useState("");

    gsap.registerPlugin(CSSRulePlugin);


    // const letterref = useRef();
    const flapAnimation = useRef();
    const shadowAnimation = useRef();
    const beeAnimation = useRef();
    const containerRef = useRef();
    const e = gsap.utils.selector(containerRef);
    let flap;

    useEffect(() => {

        console.log("hhjhjj:::",e('#thread'));

        flapAnimation.current = gsap.timeline({ paused: true }); 
        flap = CSSRulePlugin.getRule(".envelope:before"); 
    
        flapAnimation.current.to(flap, { 
            duration: 0.5, 
            cssRule: {
                rotateX: 180
            }
        })
        .set(flap, {
            cssRule: {
                zIndex: 10
            }
        })
        .to(e('.letter'), {
            translateY: -200,
            duration: 0.9, 
            ease: "back.inOut(1.5)"
        })
        .set(e('.letter'), {
            zIndex: 40
        })
        .to(e('.letter'), {
            duration: .7,  
            ease: "back.out(.4)",
            translateY: -5,
            translateZ: 250
        });
    
        shadowAnimation.current = gsap.timeline({ paused: true }); 
        shadowAnimation.current.to(e('.shadow'), {
        delay: 1.4,
        width: 450,
        boxShadow: "-75px 150px 10px 5px #eeeef3",
        ease: "back.out(.2)",
        duration: .7
        });

        beeAnimation.current = gsap.timeline({paused:true});
        beeAnimation.current
        // .to(e('.bee'),{
        //     top:0,
        //     duration:5,
        // },)
        .to(e('.bee'),{
            left:"40%",
            duration:7,
        },'<')
        .fromTo(e('.threadSvg'),{
            opacity:0,
        },{
            opacity: 1,
        })
        .fromTo(e('#thread'),{
            opacity:0,
            strokeDashoffset:250,
        },{
            opacity: 1,
            strokeDashoffset:0,
            duration:2
        })
        
        .fromTo(e('.bee__eye--right'),
            {height:"13px"},
            {height:"2px",duration:0.3,}, '>')
        .to(e('.bee__eye--right'),{
            height:"13px",
            duration:0.5,
        }, '>')
        .to(e('.content-wrapper'),{
            duration: 7,
            x:"100%",
            left: "100%",
            delay:0.2
        },)
        .to(e('.bee'),{
            left:'100%',
            top: -10,
            duration:5,
        },'<')
        
        openCard();

        // return(
           
        //     beeAnimation.current.kill()
        // )
        
    }, [])

    

    const openCard = (e) => {
        
        flapAnimation.current.play();
        shadowAnimation.current.play();
    }

    const closeCard = (e) => {
        // e.stopPropagation();
        flapAnimation.current.reverse();
        shadowAnimation.current.reverse();
    }

    const moveBox = (e) => {

        closeCard();
        beeAnimation.current.play();
    }

    return (
        <div className="pt-40 overflow-hidden">
            {/**********  Box animation ****************/}
            {/* <div className="flex-grow my-10 relative">
                <motion.div 
                variants={animationVariants}
                animate={"animate"}
                className="bg-green-100 w-20 h-20 absolute bottom-0">
                </motion.div>

                <button 
                onClick={()=>{setAnimate(!animate)}}
                className="absolute bg-red-50 p-5 rounded-xl hover:bg-blue-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"> 
                    Click me to move the box 
                </button>
            </div> */}
            {/**********  Box animation end ****************/}
            <div className=" mb-20 w-full flex justify-center">
                <div>
                    <input 
                    onChange = {(e)=>{
                        setMessage(e.target.value);
                    }}
                    className="px-2 w-72 py-2 shadow-md border-1" type="text" name="text" />
                    <button 
                    onClick={moveBox}
                    className="px-8 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xl border-gray-100 mx-3">
                        Send
                    </button>
                </div>
                
            </div>
            {/**********  Envelop animation ****************/}

            <div ref={containerRef} className="mycontainer ">
            {/* <div className="bg-green-100"> */}
                {/**********  Bee animation ****************/}
                <div className="bee  h-full ">
                    <div className="bee__body">
                        <div className="bee__circle bee__circle--black"></div>
                        <div className="bee__circle bee__circle--yellow helper__shift--right-1"></div>
                        <div className="bee__circle bee__circle--black helper__shift--right-2"></div>
                        <div className="bee__circle bee__circle--yellow helper__shift--right-3"></div>
                        <div className="bee__circle bee__circle--black helper__shift--right-4 bee__face">
                            <div className="bee__eyes">
                                <span className="bee__eye bee__eye--left"></span>
                                <span className="bee__eye bee__eye--right"></span>
                            </div>
                            <div className="bee__mouth"></div>
                            <div className="bee__antennas">
                                <span className="bee__antenna bee__antenna--left"></span>
                                <span className="bee__antenna bee__antenna--right"></span>
                            </div>
                        </div>
                        <div className="bee__wings">
                            <span className="bee__wing bee__wing--left"></span>
                            <span className="bee__wing bee__wing--right"></span>
                        </div>
                    </div>
                    {/**********  Wave pattern ****************/}

                    <div className=" absolute left-0 w-full" style={{height: "350px", overflow: "hidden" }} >
                        <svg className="threadSvg" viewBox="148 2 800 250" 
                        preserveAspectRatio="none" 
                        >
                        <path 
                        id="thread"
                        d="M180.00,0.00 C280.43,20.03 138.15,145.69 200.80,250.00  " 
                        style={{
                            stroke: "#ec3838", 
                            strokeWidth:2,
                            fill: "none",
                            strokeDasharray:300,
                            
                            }}>
                        </path>
                        <path 
                        id="thread"
                        d="M180.00,0.00 C280.43,20.03 138.15,145.69 200.80,250.00  " 
                        style={{
                            stroke: "black", 
                            strokeWidth:2,
                            fill: "none",
                            strokeDasharray:10,
                            }}>
                        </path>
                        
                        </svg>
                    </div>
                    {/**********  Wave pattern ****************/}
                </div>
                {/**********  Bee animation ****************/}


                
                {/* </div> */}


                {/**********  Envelop animation ****************/}
                <div className="content-wrapper">
                    <div  className="content">
                        <div className="envelope" onClick={openCard}></div>
                        <div className="letter">
                            <span className="close" onClick={closeCard}>x</span>
                            <div className="body">
                                <div className="message">                                
                                    {message}
                                </div>
                            </div>
                        </div>
                        <div className="shadow"></div>
                    </div>
                </div>

            </div> 

            {/**********  Envelop animation ****************/}

        </div>
    )
}

export default UnderConstruction
