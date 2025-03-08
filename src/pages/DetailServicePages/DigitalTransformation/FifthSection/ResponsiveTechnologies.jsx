import React,{useState} from 'react';
// import AdvantageCard from './AdvantageCard';
import {motion, AnimatePresence} from 'framer-motion';

import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";


const ResponsiveAdvantages = () => {

    const [arrowDown, setArrowDown] = useState(false);

    const advantageStyling = `text-blue-primary border-2 border-gray-light tracking-wide text-lg md:text-xl 2xl:text-xl font-normal  py-5 px-8 rounded-3xl shadow-md w-full md:w-5/6 xl:w-4/6 cursor-pointer hover:bg-green-primary transition-all duration-200 mx-auto lg:mx-0 overflow-hidden `
    const hiddenBlockStyles = "mt-5 w-full md:w-5/6 text-gray-text text-base overflow-hidden"
    const [number, setNumber] = useState(1);
    const [content, setContent] = useState({
        desc:`Django is a framework, not a language. Python is the language in
        which Django is written. Django is a collection of Python libs
        allowing you to quickly and efficiently create a quality Web
        application, and is suitable for both frontend and backend.
        However, Django is pretty famous for its "Django admin", an auto
        generated backend that allows you to manage your website in a
        blink for a lot of simple use cases without having to code much.`
    });
    
    const variants = {
        hidden: {height:0},
        visible: {
            height:'auto',
            transition: { duration: 1 }
        }
    }
    const clickHandling = (n,d) => {

        setArrowDown(!arrowDown);
        setNumber(n);
        setContent({
            desc:d
        })

    }
    return (
        <div className="">
        <div className="bg-no-repeat bg-right-top lg:w-11/12 lg:mx-auto mx-5 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 ">
                    <div className="space-y-3 ">
                        
                        {/* django */}
                        <div onClick = {() => {
                            clickHandling(
                                1,
                                `Django is a framework, not a language. Python is the language in
                                which Django is written. Django is a collection of Python libs
                                allowing you to quickly and efficiently create a quality Web
                                application, and is suitable for both frontend and backend.
                                However, Django is pretty famous for its "Django admin", an auto
                                generated backend that allows you to manage your website in a
                                blink for a lot of simple use cases without having to code much.`
                                )
                        }}
                        className={`${advantageStyling}`}>
                            <div className="flex justify-between items-center ">
                                <img loading="lazy" className="w-20" alt="Django" src="/Images/languageAssets/Django-webp.webp" />
                                <p className="flex  items-center justify-between font-bold ">
                                    Django
                                </p>
                                {
                                    number === 1 && arrowDown ?
                                    <FaArrowCircleDown className="visible lg:hidden" />
                                    :
                                    <FaArrowCircleUp className="visible lg:hidden" />
                                }
                            </div>
                            <AnimatePresence >
                                <motion.div 
                                variants={variants}
                                initial={'hidden'}
                                animate={number === 1 && arrowDown  ? 'visible' : 'hidden'}
                                exit={'hidden'}
                                className={hiddenBlockStyles}>
                                    {content.desc}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                       
                        {/* Kotlin */}
                        <div onClick = {() => {
                            clickHandling(
                                2,
                                `Kotline is a framework, not a language. Python is the language in
                                which Kotline is written. Kotline is a collection of Python libs
                                allowing you to quickly and efficiently create a quality Web
                                application, and is suitable for both frontend and backend.
                                However, Kotline is pretty famous for its "Kotline admin", an auto
                                generated backend that allows you to manage your website in a
                                blink for a lot of simple use cases without having to code much.`
                            )
                        }}
                        className={`${advantageStyling}`}>
                            <div className="flex justify-between items-center">
                                <img loading="lazy" className="w-20" alt="kotlin" src="/Images/languageAssets/kotlin-webp.webp" />
                                <p className="flex  items-center justify-between font-bold ">
                                    Kotlin
                                </p>
                                {
                                    number === 2 && arrowDown ?
                                    <FaArrowCircleDown className="visible lg:hidden" />
                                    :
                                    <FaArrowCircleUp className="visible lg:hidden" />
                                }
                            </div>
                            <AnimatePresence >
                                <motion.div 
                                variants={variants}
                                initial={'hidden'}
                                animate={number === 2 && arrowDown  ? 'visible' : 'hidden'}
                                exit={'hidden'}
                                className={hiddenBlockStyles}>
                                    {content.desc}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        
                        {/* Angular */}
                        <div onClick = {() => {
                            clickHandling(
                                3,
                                `Angular is a framework, not a language. Python is the language in
                                which Angular is written. Angular is a collection of Python libs
                                allowing you to quickly and efficiently create a quality Web
                                application, and is suitable for both frontend and backend.
                                However, Angular is pretty famous for its "Angular admin", an auto
                                generated backend that allows you to manage your website in a
                                blink for a lot of simple use cases without having to code much.`
                            )
                        }}
                        className={`${advantageStyling}`}>
                            <div className="flex justify-between items-center">
                                <img loading="lazy" className="w-20" alt="angular" src="/Images/languageAssets/angular-webp.webp" />
                                <p className="flex  items-center justify-between font-bold ">
                                    Angular
                                </p>
                                {
                                    number === 3 && arrowDown ?
                                    <FaArrowCircleDown className="visible lg:hidden" />
                                    :
                                    <FaArrowCircleUp className="visible lg:hidden" />
                                }
                            </div>
                            <AnimatePresence >
                                <motion.div 
                                variants={variants}
                                initial={'hidden'}
                                animate={number === 3 && arrowDown  ? 'visible' : 'hidden'}
                                exit={'hidden'}
                                className={hiddenBlockStyles}>
                                    {content.desc}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        
                        {/* Node */}
                        <div onClick = {() => {
                            clickHandling(
                                4,
                                `Node is a framework, not a language. Python is the language in
                                which Node is written. Node is a collection of Python libs
                                allowing you to quickly and efficiently create a quality Web
                                application, and is suitable for both frontend and backend.
                                However, Node is pretty famous for its "Node admin", an auto
                                generated backend that allows you to manage your website in a
                                blink for a lot of simple use cases without having to code much.`
                            )
                        }}
                        className={`${advantageStyling}`}>
                            <div className="flex justify-between items-center">
                                <img loading="lazy" className="w-20" alt="node" src="/Images/languageAssets/node-webp.webp" />
                                <p className="flex  items-center justify-between font-bold ">
                                    Node
                                </p>
                                {
                                    number === 4 && arrowDown ?
                                    <FaArrowCircleDown className="visible lg:hidden" />
                                    :
                                    <FaArrowCircleUp className="visible lg:hidden" />
                                }
                            </div>
                            <AnimatePresence >
                                <motion.div 
                                variants={variants}
                                initial={'hidden'}
                                animate={number === 4 && arrowDown  ? 'visible' : 'hidden'}
                                exit={'hidden'}
                                className={hiddenBlockStyles}>
                                    {content.desc}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        
                        {/* Laravel */}
                        <div onClick = {() => {
                            clickHandling(
                                5,
                                `Laravel is a framework, not a language. Python is the language in
                                which Laravel is written. Laravel is a collection of Python libs
                                allowing you to quickly and efficiently create a quality Web
                                application, and is suitable for both frontend and backend.
                                However, Laravel is pretty famous for its "Laravel admin", an auto
                                generated backend that allows you to manage your website in a
                                blink for a lot of simple use cases without having to code much.`
                            )
                        }}
                        className={`${advantageStyling}`}>
                            <div className="flex justify-between items-center">
                                <img loading="lazy" className="w-20" alt="laravel" src="/Images/languageAssets/laravel-webp.webp" />
                                <p className="flex  items-center justify-between font-bold ">
                                    Laravel
                                </p>
                                {
                                    number === 5 && arrowDown ?
                                    <FaArrowCircleDown className="visible lg:hidden" />
                                    :
                                    <FaArrowCircleUp className="visible lg:hidden" />
                                }
                            </div>
                            <AnimatePresence >
                                <motion.div 
                                variants={variants}
                                initial={'hidden'}
                                animate={number === 5 && arrowDown  ? 'visible' : 'hidden'}
                                exit={'hidden'}
                                className={hiddenBlockStyles}>
                                    {content.desc}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        
                        {/* React */}
                        <div onClick = {() => {
                            clickHandling(
                                6,
                                `React is a framework, not a language. Python is the language in
                                which React is written. React is a collection of Python libs
                                allowing you to quickly and efficiently create a quality Web
                                application, and is suitable for both frontend and backend.
                                However, React is pretty famous for its "React admin", an auto
                                generated backend that allows you to manage your website in a
                                blink for a lot of simple use cases without having to code much.`
                            )
                        }}
                        className={`${advantageStyling}`}>
                            <div className="flex justify-between items-center">
                                <img loading="lazy" className="w-20" alt="react" src="/Images/languageAssets/react-webp.webp" />
                                <p className="flex  items-center justify-between font-bold ">
                                    React
                                </p>
                                {
                                    number === 6 && arrowDown ?
                                    <FaArrowCircleDown className="visible lg:hidden" />
                                    :
                                    <FaArrowCircleUp className="visible lg:hidden" />
                                }
                            </div>
                            <AnimatePresence >
                                <motion.div 
                                variants={variants}
                                initial={'hidden'}
                                animate={number === 6 && arrowDown  ? 'visible' : 'hidden'}
                                exit={'hidden'}
                                className={hiddenBlockStyles}>
                                    {content.desc}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        
                    </div>
                   
                </div>
                
            </div>
            
        </div>
    )
}

export default ResponsiveAdvantages
