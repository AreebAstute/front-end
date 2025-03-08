import React from 'react';

import './iterativeStyles.css';

const LineSvg = (props) => {

    return (
        <>
        {/* <div className=""> */}

        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 1200 800"  >
       
        <g>
            <path className="st5" d="M986.66,460.91v-82.63v-63.41c0-12.41-10.06-22.47-22.47-22.47h-50.94h-16.98h-40.02h-191.3
                c-12.41,0-22.47,10.06-22.47,22.47V667.2c0,12.41,10.06,22.47,22.47,22.47h24.51"/>
            {/* circle 1 */}
            <g className="cursor-pointer" onClick={ ()=> props.setActiveCard(1)}>
                <circle className="st1 " cx="986.66" cy="467.03" r="18.27" />
                <text transform="matrix(1 0 0 1 981.2556 474.7849)" className="st2 st3 st4" >1</text>
            </g>
            {/* circle 1 */}

            {/* circle 2 */}
            <g className="cursor-pointer" onClick={ ()=> props.setActiveCard(2)}>
                <circle className="st1" cx="884.76" cy="292.4" r="18.27"/>
                <text transform="matrix(1 0 0 1 877.9152 299.9126)" className="st2 st3 st4">2</text>
            </g>
            {/* circle 2 */}

            {/* circle 3 */}
            <g className="cursor-pointer" onClick={ ()=> props.setActiveCard(3)}>
                <circle className="st1" cx="742.57" cy="292.4" r="18.27"/>
                <text transform="matrix(1 0 0 1 736.979 299.9126)" className="st2 st3 st4">3</text>
            </g>
            {/* circle 3 */}

            <g className="cursor-pointer" onClick={ ()=> props.setActiveCard(4)}>
                <circle className="st1" cx="642.49" cy="491.03" r="18.27"/>
                <text transform="matrix(1 0 0 1 635.5891 378.2743)" className="st2 st3 st4">4</text>
            </g>
            <g className="cursor-pointer" onClick={ ()=> props.setActiveCard(5)}>
                <circle className="st1" cx="642.49" cy="616.21" r="18.27"/>
                <text transform="matrix(1 0 0 1 635.5895 497.7636)" className="st2 st3 st4">5</text>
            </g>
            <g className="cursor-pointer" onClick={ ()=> props.setActiveCard(6)}>
                <circle className="st1" cx="642.49" cy="371.4" r="18.27"/>
                <text transform="matrix(1 0 0 1 635.5894 623.3807)" className="st2 st3 st4">6</text>
            </g>
            
        </g>
         {/* <g>
            <path className="st0" d="M896.28,292.4h-40.02h-191.3c-12.41,0-22.47,10.06-22.47,22.47V667.2c0,12.41,10.06,22.47,22.47,22.47h24.51"/>
            <circle className="st1" cx="986.66" cy="467.03" r="18.27"/>
            <circle className="st1" cx="884.76" cy="292.4" r="18.27"/>
            <circle className="st1" cx="742.57" cy="292.4" r="18.27"/>
            <circle className="st1" cx="642.49" cy="491.03" r="18.27"/>
            <circle className="st1" cx="642.49" cy="616.21" r="18.27"/>
            <circle className="st1" cx="642.49" cy="371.4" r="18.27"/>
            <text transform="matrix(1 0 0 1 981.2556 474.7849)" className="st2 st3 st4">1</text>
            <text transform="matrix(1 0 0 1 877.9152 299.9126)" className="st2 st3 st4">2</text>
            <text transform="matrix(1 0 0 1 736.979 299.9126)" className="st2 st3 st4">3</text>
            <text transform="matrix(1 0 0 1 635.5891 378.2743)" className="st2 st3 st4">4</text>
            <text transform="matrix(1 0 0 1 635.5895 497.7636)" className="st2 st3 st4">5</text>
            <text transform="matrix(1 0 0 1 635.5894 623.3807)" className="st2 st3 st4">6</text>
        </g> */}
        <polygon className="st2" points="983.86,517.83 997.99,541.34 983.86,536.1 967.25,541.34 "/>
        <path className="st6" d="M79.46,725.01h488h394.45c12.13,0,21.96-9.83,21.96-21.96V541.34"/>
        <circle className="st1" cx="90.96" cy="725.01" r="13.75"/>
        {/* <path className="st7" d="M983.86,703.06"/> */}
        {/* <path className="st7" d="M961.91,725.01"/> */}
        <polyline className="st7" points="79.46,725.01 567.46,725.01 887.86,725.01 "/>

        </svg>


            

        {/* </div> */}
        
        </>
    )
}


export default LineSvg
