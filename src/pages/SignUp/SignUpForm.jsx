import React,{useRef} from 'react'

// import { Formik, Form, Field, ErrorMessage } from 'formik';
import './contactFormStyles.css';

// import Axios from 'axios';
import { useState, useEffect } from 'react';

// import * as yup from 'yup';
// import Select from 'react-select';

// import { BASE_URL } from '../../constants';
import {FiArrowRight} from 'react-icons/fi';


const ContactForm = (props) => {


    const [alert, setAlert] = useState({value:false, message:"",color:""});

    const [name, setName] = useState("");

    // const url = BASE_URL+'contact/contact';

    

    useEffect(() => {
        setName("");
    }, [])

    // Initial values
   
    // Initial values
    // Handle submit
    const handleSubmit = async (formData, actions) =>{
       
        // const payloadObject = {
        
         
        // };
        // try{
        //     const response = await Axios.post(url,payloadObject);
        //     actions.setSubmitting(false);
        //     setAlert({
        //         value:true,
        //         message:"Form has been submitted successfully",
        //         color: "green-500"
        //     });
            
        // }
        // catch(error){
        //     actions.setSubmitting(false)
        //     if(error){
        //         setAlert({
        //             value:true,
        //             message:"Something went wrong, please try again",
        //             color:"red-primary"
        //         })
        //     }
        //     else
        //         setAlert({
        //             value:true,
        //             message:"Network error, Check your internet connection",
        //             color:"red-primary"
        //         })
        // }
       
        // actions.resetForm(initialValues);
    };
    // Handle submit
    // Validation schema
    // const validationSchema = yup.object({

    // })
    // Validation schema
    return (
        <div className="bg-white lg:bg-transparent py-2 px-5 md:px-0 bg-opacity-60 rounded-2xl">
            {/* <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {handleSubmit}
            > 

            {(formProps) => {
                return ( */}
                <form className="form">

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-evenly">
                     {/*---------------------Name--------------------------*/}
                     <div>
                        <div className = "">
                            {/* <Field className="inputTagStyle" type= "text" name="name" id="name" placeholder="Type text here..."/> */}
                            <input 
                                className="inputTagStyle" 
                                type= "text" 
                                name="name" 
                                id="name" 
                                placeholder="First name*"
                            />
                        </div>

                        {/* <div className = "error">
                            <ErrorMessage name = 'name'/>
                        </div> */}
                    </div>
                     {/*---------------------Name--------------------------*/}

                    {/*---------------------lastName--------------------------*/}
                    <div>
                        <div className = "">
                            {/* <Field className="inputTagStyle" type= "text" name="lastName" id="lastName" placeholder="Type text here..."/> */}
                            <input className="inputTagStyle text-blue-primary" type= "text" name="lastName" id="lastName" placeholder="Last name*"/>
                        </div>

                        {/* <div className = "error">
                            <ErrorMessage name = 'lastName'/>
                        </div> */}
                    </div>
                    {/*---------------------lastName--------------------------*/}

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10  justify-evenly md:mt-5">
                     {/*---------------------Email--------------------------*/}
                     <div>
                        <div className = "">
                           
                            {/* <Field className="inputTagStyle" type= "email" name="email" id="email" placeholder="Type text here..."/> */}
                            <input className="inputTagStyle" type= "email" name="email" id="email" placeholder="Email"/>
                        </div>

                        {/* <div className = "error">
                            <ErrorMessage name = 'email'/>
                        </div> */}
                    </div>
                    {/*---------------------Email--------------------------*/}

                    {/*---------------------Phone--------------------------*/}
                    <div>
                        <div className = "">
                           
                            {/* <Field className="inputTagStyle" type= "text" name="phone" id="phone" placeholder="Type text here..."/> */}
                            <input className="inputTagStyle" type= "text" name="phone" id="phone" placeholder="Phone"/>
                        </div>

                        {/* <div className = "error">
                            <ErrorMessage name = 'phone'/>
                        </div> */}
                    </div>
                    {/*---------------------Phone--------------------------*/}
                
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10  justify-evenly md:mt-5">       
                    {/*---------------------Password--------------------------*/}
                    <div className = "">
                        {/* <label className = "" htmlFor = "note">Note</label> */}
                        {/* <Field className="inputTagStyle"  as="textarea" name="note" id="note" placeholder="Add notes here..."/> */}
                        <input className="inputTagStyle" type="password"  name="pass" id="pass"  placeholder="Password*"></input>
                        <p className="text-xs px-5 pt-5 text-gray-text font-light">Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum</p>
                    </div>

                    {/* <div className = "error">
                        <ErrorMessage name = 'note'/>
                    </div> */}
                    <div></div>
                </div> 
                    <button className = "my-10 ml-3"
                        type="submit"
                        value="Submit"
                        // disabled={formProps.isSubmitting || !formProps.errors || !formProps.isValid ? true : false}
                        >
                        {/* {formProps.isSubmitting? "Sending...": "Send Request"} */}
                        <div className="rounded-full shadow-lg w-10 h-10 bg-green-primary hover:bg-white hover:text-green-primary flex justify-center items-center">
                            <FiArrowRight className="text-white hover:text-green-primary  text-xl" />
                        </div>
                        <p className="text-sm pt-5 text-gray-text font-light tracking-wide">Already have an account ? <a href="/" className="text-green-primary mx-1 hover:underline">Sign in</a></p>

                    </button>
                    {/* {
                        alert.value ?
                        <p className={`font-bold text-${alert.color} text-lg`}>{alert.message}</p>
                        :
                        null
                    } */}
                    
                </form> 

                
            {/* }}    
            </Formik> */}
        </div>
    )
}

export default ContactForm
