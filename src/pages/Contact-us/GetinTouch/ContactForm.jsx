import React from "react";
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import "./contactFormStyles.css";

import Axios from "axios";
import { useState } from "react";

import * as Yup from "yup";

import { BASE_URL } from "../../../constants";
import { FiArrowRight } from "react-icons/fi";
import { BiLoaderAlt } from "react-icons/bi";

import Select from "react-select";

const ContactForm = (props) => {
  const services = [
    { label: "Select Service", value: "" },
    { label: "3D", value: "3d" },
    { label: "Metaverse", value: "metaverse" },
    { label: "Game Development", value: "game-development" },
    { label: "Web Development", value: "web-development" },
    {
      label: "Mobile Application Development",
      value: "mobile-application-development",
    },
    { label: "Digital Transformation", value: "digital-transformation" },
    { label: "UI/UX Design", value: "uiux-design" },
    { label: "App Maintenance Support", value: "app-maintenance-support" },
    { label: "Invoicing", value: "invoicing" },
    { label: "Legal Support", value: "legal-support" },
    { label: "HR Departement", value: "hr-department" },
    { label: "Marketing Department", value: "marketing-department" },
  ];
  const [alert, setAlert] = useState({ value: false, message: "", color: "" });
  // const [serviceError, setServiceError] = useState(false);
  // const [serviceValue, setServiceValue] = useState("")

  const url = BASE_URL + "api/main/contact-us";

  // Initial values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    terms: "",
  };
  // Initial values

  // Handle submit
  const handleSubmit = async (formData, actions) => {
    // if(!formData.service){
    //     setServiceError(true)
    // }
    const payloadObject = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      service: formData.service,
      phone_number: formData.phone,
      message: formData.message,
    };
    try {
      const response = await Axios.post(url, payloadObject);
      actions.setSubmitting(false);
      setAlert({
        value: true,
        message: "Form has been submitted successfully",
        color: "green-500",
      });
    } catch (error) {
      actions.setSubmitting(false);
      if (error) {
        setAlert({
          value: true,
          message: "Something went wrong, please try again",
          color: "red-500",
        });
      } else
        setAlert({
          value: true,
          message: "Network error, Check your internet connection",
          color: "red-500",
        });
    }
    actions.resetForm(initialValues);
  };
  // Handle submit
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // Validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    service: Yup.string().required("Required"),
    // phone:Yup.number("Enter a valid phone number"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: Yup.string().email("Invalid email format").required("Required"),
    terms: Yup.string().required("Required"),
  });
  // Validation schema
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formProps) => {
          return (
            <Form className="form">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-evenly">
                {/*---------------------firstName--------------------------*/}
                <div>
                  <div className="">
                    <Field
                      className="inputTagStyle"
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name*"
                      aria-label="First Name"
                    />

                    {/* <input 
                            className="inputTagStyle" 
                            type= "text" 
                            name="name" 
                            id="name" 
                            placeholder="First name*"
                            defaultValue={name !== "" ? name : ""}
                        /> */}
                  </div>

                  <div className="error">
                    <ErrorMessage name="firstName" />
                  </div>
                </div>
                {/*---------------------firstName--------------------------*/}

                {/*---------------------lastName--------------------------*/}
                <div>
                  <div className="">
                    <Field
                      className="inputTagStyle"
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name*"
                      aria-label="Your Name"
                    />
                    {/* <input className="inputTagStyle text-blue-primary" type= "text" name="lastName" id="lastName" placeholder="Last name*"/> */}
                  </div>

                  <div className="error">
                    <ErrorMessage name="lastName" />
                  </div>
                </div>
                {/*---------------------lastName--------------------------*/}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10  justify-evenly md:mt-5">
                {/*---------------------Email--------------------------*/}
                <div>
                  <div className="">
                    <Field
                      className="inputTagStyle"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email*"
                      aria-label='Your Email*'
                    />
                    {/* <input className="inputTagStyle" type= "email" name="email" id="email" placeholder="Your email*"/> */}
                  </div>

                  <div className="error">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                {/*---------------------Email--------------------------*/}

                {/*---------------------Phone--------------------------*/}
                <div>
                  <div className="">
                    <Field
                      className="inputTagStyle"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone"
                      aria-label='Your Phone'
                    />
                    {/* <input className="inputTagStyle" type= "text" name="phone" id="phone" placeholder="your phone"/> */}
                  </div>

                  <div className="error">
                    <ErrorMessage name="phone" />
                  </div>
                </div>
                {/*---------------------Phone--------------------------*/}
              </div>

              {/*---------------------Services--------------------------*/}
              <div>
                <div className="flex flex-col">
                  {/* field */}
                  <div className=" py-4  items-center">
                    <label className="label">
                      What kind of services do you need?
                    </label>
                    <div className="col-span-2">
                      <Select
                        name="service"
                        options={services}
                        className="mt-5 rounded-full outline-none"
                        classNamePrefix="multiple"
                        placeholder="Select your service*"
                        aria-label='What kind of services do you need?'
                        onChange={(e) => {
                          {
                            formProps.setFieldValue("service", e.value);
                          }
                        }}
                      />
                      {/* {serviceError ? 
                            <div className="mt-2 text-red-500 text-sm font-bold">
                                <p>Required</p>
                            </div>
                            :
                                null
                            } */}
                    </div>
                  </div>
                  {/* field */}

                  <div className="error">
                    <ErrorMessage name="service" />
                  </div>
                </div>
              </div>
              {/*---------------------Services--------------------------*/}

              {/*---------------------Message--------------------------*/}
              <div className="mt-5">
                <Field
                  //   className="inputTagStyle"
                  className="outline-none w-full rounded-2xl border-2 border-gray-border p-5 text-sm"
                  as="textarea"
                  name="message"
                  id="message"
                  placeholder="Message...&#10;Write your message"
                />
                {/* <textarea className="outline-none w-full rounded-2xl border-2 border-gray-border p-5 text-sm"  name="message" id="message"  placeholder="Message...&#10;Write your message"></textarea> */}
              </div>
              {/*---------------------Message--------------------------*/}

              {/*---------------------Checkbox--------------------------*/}
              <div className="flex flex-col">
                <div className="relative flex gap-x-3 mt-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      aria-label='terms and conditions'
                      checked={formProps.values.terms ? true : false}
                      onChange={(e) => {
                        if (formProps.values.terms) {
                          formProps.setFieldValue("terms", "");
                        } else {
                          formProps.setFieldValue("terms", "1");
                        }
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-blue-primary focus:ring-blue-primary cursor-pointer"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="text-gray-500">
                      Your personal data will be processed in order to handle
                      your question, and their administrator will be Astute
                      Softwares with its registered office in Lahore, Pakistan.
                      Other information regarding the processing of personal
                      data, including information on your rights, can be found
                      in our{" "}
                      <Link
                        to="/privacy-policy"
                        className="font-semibold text-blue-primary cursor-pointer"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="error">
                  <ErrorMessage name="terms" />
                </div>
              </div>
              {/*---------------------Checkbox--------------------------*/}

              <button
                className="flex items-center disabled:cursor-text disabled:bg-gray-light disabled:text-black text-white text-sm font-bold outline:white py-1 md:py-2 pl-5 md:pl-8 pr-2 bg-green-primary rounded-full my-4"
                type="submit"
                value="Submit"
                disabled={
                  formProps.isSubmitting || !formProps.isValid ? true : false
                }
              >
                {formProps.isSubmitting ? (
                  <BiLoaderAlt className="animate-spin text-xl text-green-primary" />
                ) : (
                  "Send Message"
                )}
                <div className="rounded-full w-8 h-8 bg-white ml-5 flex justify-center items-center">
                  <FiArrowRight className="text-green-primary text-xl" />
                </div>
              </button>
              {alert.value ? (
                <p className={`font-bold text-${alert.color} text-lg`}>
                  {alert.message}
                </p>
              ) : null}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
