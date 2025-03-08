import React,{useState} from 'react';
import './iterativeStyles.css';
import {motion} from 'framer-motion';


const SvgShape = (props) => {

    const [line, setLine] = useState(0)
  
    const lineVariant = (number) => (
        {
            hidden:{
                opacity:0,
                pathLength:0
            },
            visible:{
                opacity:number,
                pathLength:number,
                transition:{
                    duration:2,
                    ease:"easeInOut"
                }
            },
        }
    )
    
    return (
        <>
        <svg className="relative " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            // viewBox="0 450 1200 600"  >
            viewBox="-50 450 1200 600"  >
        {/* <path className="st0" d="M723.21,992.83"/> */}
        <path className="st1" d="M116,1028.17h488h394.45c12.13,0,21.96-9.83,21.96-21.96V844.5"/>
        <circle className="st2" cx="127.5" cy="1028.17" r="13.75"/>
        {/* <text transform="matrix(1 0 0 1 120.5 1000.17)" className="st4 st5 st11">Start of Project</text> */}


        {/* <path className="st3" d="M1020.4,1006.21"/> */}
        {/* <path className="st3" d="M998.45,1028.17"/> */}
        <polyline className="st3" points="116,1028.17 604,1028.17 924.4,1028.17 "/>
        <g>
            {/* <path className="st7" d="M676.23,970.36"/> */}

            <line className="st7" x1="676.23" y1="825.34" x2="676.23" y2="926.49"/>
            <line className="st7" x1="676.23" y1="703.34" x2="676.23" y2="792.94"/>
            <path className="st7" d="M761,595.55h-62.3c-12.41,0-22.47,10.06-22.47,22.47v53.36"/>
            <polyline className="st7" points="902.96,595.55 890,595.55 789.26,595.55 "/>
            
        </g>
        <g>
            
            <path className="st7" d="M1020.4,764.06v-82.63v-63.41c0-12.41-10.06-22.47-22.47-22.47h-70.72"/>
            
            {/* second step line */}
            <motion.path 
            
            animate={{
                pathLength:line >= 1 ? 1 : 0,
                transition:{
                    duration:1,
                    ease:"easeInOut"
                }
            }} 
            className="st0" 
            d="M1020.4,764.06 v-82.63 v-63.41 c0-12.41-10.06-22.47-22.47-22.47h-70.72"/>
            {/* second step line */}

             {/* third step line */}
             <motion.path
            
             animate={{
                 pathLength:line >= 2 ? 1 : 0,
                 transition:{
                     duration:1,
                     ease:"easeInOut"
                 }
             }} 
              
            // className="st0" points="902.96,595.55 890,595.55 789.26,595.55 "/>
            className="st0" d="M902.96,595.55 890,595.55 789.26,595.55 "/>
            {/* third step line */}

            {/* fourth step line */}
            <motion.path 
            
             animate={{
                 pathLength:line >= 3 ? 1 : 0,
                 transition:{
                     duration:1,
                     ease:"easeInOut"
                 }
             }} 
             
            className="st0" d="M761,595.55 h-62.3c-12.41,0-22.47,10.06-22.47,22.47v53.36"/>
            {/* fourth step line */}

             {/* fifth step line */}
             <motion.path 
            
             animate={{
                 pathLength:line >= 4 ? 1 : 0,
                 transition:{
                     duration:1,
                     ease:"easeInOut"
                 }
             }}
            className="st0" d="M 676.23,703.34 L 676.23,790.94" />
            {/* fifth step line */}

            {/* six step line */}
            <motion.path
            
             animate={{
                 pathLength:line >= 5 ? 1 : 0,
                 transition:{
                     duration:1,
                     ease:"easeInOut"
                 }
             }}
            className="st0" d="M 676.23,825.34 L 676.23,926.49" />
            {/* six step line */}

            {/* ///////////////////////////////// */}

            {/* 1st circle */}
            <g className="cursor-pointer" onClick={ ()=> {
                
                props.setActiveCard(1)
                setLine(0)
                }} >
                <circle className="st10" cx="1020.4" cy="770.19" r="18.27"/>

                <text transform="matrix(1 0 0 1 1015 777.9418)" className="st4 st5 st6">1</text>
            </g>
            {/* <g className="cursor-pointer" onClick={ ()=> props.setActiveCard(1)} >
                <circle className="st10" cx="1020.4" cy="770.19" r="18.27"/>
                <text transform="matrix(1 0 0 1 1015 777.9418)" className="st4 st5 st6">1</text>
            </g> */}

            {/* 2nd circle */}
            <g className="cursor-pointer" onClick={ ()=> {
                props.setActiveCard(2)
                setLine(1)
                }}>
                <circle className="st2" cx="918.5" cy="595.55" r="18.27"/>
                <text transform="matrix(1 0 0 1 911.6595 603.0695)" className="st4 st5 st6">2</text>
            </g>
            <g className="cursor-pointer" onClick={ ()=> {
                
                props.setActiveCard(2)
                setLine(1)
                }}>
                <motion.circle 
                // initial={{opacity:0}}
                animate={{
                    opacity:line >= 1 ? 1 : 0,
                    transition:{
                    duration:1,
                    ease:"easeInOut"
                }}}
                className="st10" cx="918.5" cy="595.55" r="18.27"/>
                <text transform="matrix(1 0 0 1 911.6595 603.0695)" className="st4 st5 st6">2</text>
            </g>
            {/* 2nd circle */}

            

            {/* 3rd circle */}
            <g className="cursor-pointer" onClick={ ()=> {
                setLine(2)
                props.setActiveCard(3)
            }}>
                <circle className="st2" cx="776.32" cy="595.55" r="18.27"/>
                <text transform="matrix(1 0 0 1 770.7234 603.0695)" className="st4 st5 st6">3</text>
            </g>
            <g className="cursor-pointer" onClick={ ()=> {
                
                props.setActiveCard(3)
                setLine(2)
                }}>
                <motion.circle 
                animate={{
                    opacity:line >= 2 ? 1 : 0,
                    transition:{
                    duration:1,
                    ease:"easeInOut"
                }}}
                className="st10" cx="776.32" cy="595.55" r="18.27"/>
                <text transform="matrix(1 0 0 1 770.7234 603.0695)" className="st4 st5 st6">3</text>
            </g>
            {/* 3rd circle */}



            {/* 4th circle */}
            <g className="cursor-pointer" onClick={ ()=> {
                
                props.setActiveCard(4)
                setLine(3)
                }}>
            <circle className="st2" cx="676.23" cy="686.56" r="18.27"/>
            <text transform="matrix(1 0 0 1 669.3334 693.4312)" className="st4 st5 st6">4</text>
            </g>
            <g className="cursor-pointer" onClick={ ()=> {
                
                props.setActiveCard(4)
                setLine(3)
                }}>
            <motion.circle 
            animate={{
                opacity:line >= 3 ? 1 : 0,
                transition:{
                duration:1,
                ease:"easeInOut"
            }}}
            className="st10" cx="676.23" cy="686.56" r="18.27"/>
            <text transform="matrix(1 0 0 1 669.3334 693.4312)" className="st4 st5 st6">4</text>
            </g>
            {/* 4th circle */}


            {/* 5th circle */}
            <g className="cursor-pointer" onClick={ ()=> {
                props.setActiveCard(5)
                setLine(4)
                }}>
                <circle className="st2" cx="676.01" cy="808.52" r="18.27"/>
                <text transform="matrix(1 0 0 1 669.5559 816.0183)" className="st4 st5 st6">5</text>
            </g>
            <g className="cursor-pointer" onClick={ ()=> {
                props.setActiveCard(5)
                setLine(4)
                }}>
                <motion.circle 
                animate={{
                    opacity:line >= 4 ? 1 : 0,
                    transition:{
                    duration:1,
                    ease:"easeInOut"
                }}}
                className="st10" cx="676.01" cy="808.52" r="18.27"/>
                <text transform="matrix(1 0 0 1 669.5559 816.0183)" className="st4 st5 st6">5</text>
            </g>

            {/* 6th circle */}
            <g className="cursor-pointer" onClick={ ()=> {
                
                props.setActiveCard(6)
                setLine(5)
                }}>
                <circle className="st2" cx="676.23" cy="944.81" r="18.27"/>
                <text transform="matrix(1 0 0 1 669.3338 951.9802)" className="st4 st5 st6">6</text>
            </g>
            <g className="cursor-pointer" onClick={ ()=> {
                
                props.setActiveCard(6)
                setLine(5)
                }}>
                <motion.circle 
                animate={{
                    opacity:line >= 5 ? 1 : 0,
                    transition:{
                    duration:1,
                    ease:"easeInOut"
                }}}
                className="st10" cx="676.23" cy="944.81" r="18.27"/>
                <text transform="matrix(1 0 0 1 669.3338 951.9802)" className="st4 st5 st6">6</text>
            </g>
            {/* 6th circle */}


            {/* ///////////////////////////////// */}
            

            
            


            <polygon className="st4" points="1020.4,820.98 1034.53,844.5 1020.4,839.26 1003.79,844.5 	"/>
            
            <g className="st8">
                <polygon className="st4" points="986.47,670.29 962.66,670.29 962.66,648.4 		"/>
            </g>
        </g>
        </svg>

        </>
    )
}

export default SvgShape
