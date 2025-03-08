import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { BASE_URL } from "../../constants";
import { BiLoaderAlt } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

const ItalianDirectContactUs = ({ setShowHeaderFooter }) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const history = useHistory();

  const [screen, setScreen] = useState(0);
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
    phone_number: "",
    message:
      "Ciao Astute Softwares! Sono interessato a uno dei vostri servizi. Chiedo di essere contattato al più presto. Per favore mettetemi in contatto con un vostro referente. Grazie! ",
    services: [],
  };
  const validationSchema = Yup.object({
    // services: Yup.array().required('Metaverse Service is Mandatory'),
    email: Yup.string()
      .email("Inserire un'e-mail valida.")
      .required("Richiesto"),
  });

  useEffect(() => {
    setShowHeaderFooter(false);

    return () => {
      setShowHeaderFooter(true);
    };
  }, []);

  useEffect(() => {
    if (screen == 1) {
      setTimeout(() => {
        history.push("/");
      }, 10000);
    }
  }, [screen]);

  // Handle submit
  const handleSubmit = async (formData, actions) => {
    // const url = BASE_URL + '/api/contact';
    const url = BASE_URL + "api/main/contact-us";

    const payloadObject = {
      first_name: "xyz",
      last_name: "xyz",
      email: formData.email,
      service:
        formData.services.length > 0 ? formData.services.toString() : " , ",
      phone_number: formData.phone_number,
      message: formData.message,
    };
    try {
      const response = await Axios.post(url, payloadObject);
      actions.setSubmitting(false);
      setScreen(1);
      // setAlert({
      //     value:true,
      //     message:"Form has been submitted successfully",
      //     color: "green-500"
      // });
    } catch (e) {
      actions.setSubmitting(false);
      if (e.response) {
        setError("Qualcosa è andato storto, riprovare");

        // setAlert({
        //     value:true,
        //     message:"Something went wrong, please try again",
        //     color:"red-500"
        // })
      } else {
        setError("Errore di rete, controllare la connessione Internet");
        // setAlert({
        //     value:true,
        //     message:"Network error, Check your internet connection",
        //     color:"red-500"
        // })
      }
    }
    actions.resetForm(initialValues);
  };
  // Handle submit

  return (
    <>
      <HelmetComp/>
      <div className="bg-blue-primary min-h-screen w-screen ">
        <div className="-z-10">
          <img
            loading="lazy"
            src="/Images/DirectContact/header3-webp.webp"
            alt="header3"
            className=" relative"
          />
          <img
            loading="lazy"
            src="/Images/DirectContact/circle-logo-modified-webp.webp"
            alt="circle-logo-modified"
            className="pl-4 block sm:hidden absolute z-10 w-16  sm:w-32 -mt-6 sm:-mt-24  "
          />
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="w-full sm:w-1/2  lg:mt-14 xl:mt-8 z-10 ">
            <img
              loading="lazy"
              src="/Images/DirectContact/circle-logo-modified-webp.webp"
              alt="circle-logo-modified"
              className="hidden sm:block w-16 lg:w-32  -mt-6 lg:-mt-24  "
            />
            {screen === 0 ? (
              <>
                <h1 className=" text-white font-extrabold text-4xl 2xl:text-5xl mt-12 px-4 sm:px-0">
                  Richiedi di essere contattato!
                </h1>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {(formProps) => {
                    return (
                      <Form>
                        <div className=" mt-5 xl:mt-12 2xl:mt-16 grid grid-cols-2 gap-3  px-4 sm:px-0 sm:gap-6">
                          <div className="flex col-span-2 lg:col-span-1 flex-col space-y-2">
                            <label className=" text-sm  font-bold text-white ">
                              Email
                            </label>
                            <div className="w-full   relative ">
                              <Field
                                className="py-2 w-full rounded-md  bg-blue-second_light focus:outline-none px-4 text-white font-normal hover:shadow-xl  border-blue-third_light border-1 "
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                aria-label="Email"
                              />
                              <span className="text-white font-bold absolute -right-1 -top-2 text-xl cursor-pointer ">
                                *
                              </span>
                            </div>
                            <div className="text-red-400 text-sm ">
                              <ErrorMessage name="email" />
                            </div>
                          </div>
                          <div className="flex col-span-2 lg:col-span-1 flex-col space-y-2">
                            <label className=" text-sm  font-bold text-white ">
                              Telefono
                            </label>
                            <div className="w-full relative ">
                              <Field
                                className="py-2 w-full rounded-md  bg-blue-second_light focus:outline-none px-4 text-white font-normal hover:shadow-xl  border-blue-third_light border-1 "
                                type="text"
                                name="phone_number"
                                id="phone_number"
                                placeholder="Phone Number"
                                aria-label="Phone Number"
                              />
                            </div>
                            <div className="text-red-400 text-sm ">
                              <ErrorMessage name="phone_number" />
                            </div>
                          </div>
                          <div className="flex  flex-col space-y-2 col-span-2 ">
                            <label className=" text-sm  font-bold text-white ">
                              Messaggio
                            </label>
                            <div className="w-full relative ">
                              <Field
                                // className="inputTagStyle"
                                className="outline-none w-full rounded-md  p-5 text-sm  bg-blue-second_light focus:outline-none px-4 text-white font-normal hover:shadow-xl  border-blue-third_light border-1 "
                                as="textarea"
                                name="message"
                                id="message"
                                aria-label="Message"
                                // placeholder="Message...&#10;Write your message"
                              />
                              <div className="text-white">
                                <ErrorMessage name="message" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <h2 className=" text-white font-extrabold text-lg mt-12 px-4 sm:px-0">
                            Quale servizio vi interessa di più?
                          </h2>
                          <div className="pt-4 grid grid-cols-2 ">
                            <div>
                              <div className="flex space-x-2 py-1 ">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="metaverse"
                                  className="rounded-full cursor-pointer  "
                                  aria-label="metaverse"
                                />
                                <span className="text-gray-300 text-lg">
                                  Metaverso
                                </span>
                              </div>
                              <div className="flex space-x-2 py-1 ">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="ar-vr"
                                  className="rounded-full cursor-pointer  "
                                  aria-label="ar/vr"
                                />
                                <span className="text-gray-300 text-lg">
                                  AR / VR{" "}
                                </span>
                              </div>
                              <div className="flex space-x-2 py-1 ">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="software-development"
                                  className="rounded-full cursor-pointer  "
                                  aria-label="Custom Software Development"

                                />
                                <span className="text-gray-300 text-lg">
                                  Custom Software Development
                                </span>
                              </div>
                              <div className="flex space-x-2 py-1 ">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="digital-transformation"
                                  className="rounded-full cursor-pointer  "
                                  aria-label="Trasformazione Digitale"
                                />
                                <span className="text-gray-300 text-lg">
                                  Trasformazione Digitale
                                </span>
                              </div>
                            </div>

                            <div>
                              <div className="flex space-x-2 py-1 ">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="mobile-application-development"
                                  className="rounded-full cursor-pointer  "
                                  aria-label="Sviluppo di Applicazioni Mobile"
                                />
                                <span className="text-gray-300 text-lg">
                                  Sviluppo di Applicazioni Mobile
                                </span>
                              </div>
                              <div className="flex space-x-2 py-1 ">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="qa-and-testing"
                                  className="rounded-full cursor-pointer  "
                                  aria-label="Servizio di QA e Testing"
                                />
                                <span className="text-gray-300 text-lg">
                                  Servizio di QA e Testing
                                </span>
                              </div>
                              <div className="flex space-x-2 py-1 ">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="uiux-design"
                                  className="rounded-full cursor-pointer  "
                                  aria-label="UX e UI"
                                />
                                <span className="text-gray-300 text-lg">
                                  UX e UI
                                </span>
                              </div>
                              <div className="flex space-x-2 py-1 ">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="app-maintenance-support"
                                  className="rounded-full cursor-pointer  "
                                  aria-label="Manutenzione e supporto"
                                />
                                <span className="text-gray-300 text-lg">
                                  Manutenzione e supporto
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-white">
                            {/* {
                              formProps.touched['services']&&!formProps.values.services.includes('metaverse')?
                              <div className='text-red-400 text-sm pt-2 '>
                                    <p>Metaverse Service is Mandatory</p>
                              </div>
                            :""
                            } */}
                            <ErrorMessage name="services" />
                          </div>
                        </div>
                        <div className="pt-6  flex flex-col justify-start items-start pb-4  ">
                          <button
                            className="flex justify-center items-center flex-shrink-0 disabled:cursor-not-allowed  text-white text-sm font-bold outline:white px-6 space-x-2 py-1 md:py-3  bg-green-primary rounded-lg my-4"
                            type="submit"
                            value="Submit"
                            disabled={
                              formProps.isSubmitting || !formProps.isValid
                                ? true
                                : false
                            }
                          >
                            <span>
                              {" "}
                              {formProps.isSubmitting ? (
                                <BiLoaderAlt className="animate-spin text-xl text-white" />
                              ) : (
                                "Richiedi contatto"
                              )}
                            </span>
                            <span>
                              <FiArrowRight className="text-white text-lg" />
                            </span>
                          </button>
                          {error && (
                            <div className="pl-2 text-red-200 text-sm py-2">
                              {error}
                            </div>
                          )}
                          <div className="inline-flex space-x-2 items-center">
                            <span className="text-white hidden xl:block">(</span>
                            <AiFillLock className="text-white text-xl xl:text-sm" />
                            <p className="text-white text-xs">
                              Le vostre informazioni sono protette. Non
                              condividiamo il vostro indirizzo e-mail con terze
                              parti e non invieremo e-mail spam.
                            </p>
                            <span className="text-white hidden xl:block">)</span>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </>
            ) : (
              <div className=" text-white text-center text-xl 2xl:text-2xl mt-12 px-4 sm:px-0  space-y-4 ">
                <p className="font-bold text-4xl  ">
                  Grazie per aver richiesto di essere contattato da Astute
                  Softwares.
                </p>
                <p className="text-xl font-normal">
                  Un nostro referente vi contatterà presto.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItalianDirectContactUs;







const HelmetComp = () => {
  const intl = useIntl()

  const defaultTitle = "Request Contact | Astute Softwares - Get in Touch Today";
  const defaultDescription =
    "Interested in our services? Request a callback from Astute Softwares today. We’ll connect you with our experts to discuss your project needs.";
  const url = "https://astutesoftwares.com/request-contact-it";
  
  // TODO: Replace with actual contact form banner when available
  const imageUrl = "https://astutesoftwares.com/images/request-contact-placeholder-webp.webp";

  return(
    <Helmet>
    {/* General Meta Tags */}
    <title>
      {intl?.formatMessage({ id: "request.contact.title", defaultMessage: defaultTitle }) || defaultTitle}
    </title>
    <meta
      name="description"
      content={intl?.formatMessage({ id: "request.contact.description", defaultMessage: defaultDescription }) || defaultDescription}
    />
    <meta
      name="keywords"
      content="Request contact, Astute Softwares, IT consulting, Software development, Digital transformation, Mobile app development, Metaverse, AR VR"
    />
    <link rel="canonical" href={url} />

    {/* Open Graph Meta Tags (for Social Media) */}
    <meta property="og:title" content={defaultTitle} />
    <meta property="og:description" content={defaultDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content="Request Contact - Astute Softwares" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={defaultTitle} />
    <meta name="twitter:description" content={defaultDescription} />
    <meta name="twitter:image" content={imageUrl} />

    {/* Robots Meta Tag (for SEO) */}
    <meta name="robots" content="index, follow" />

    {/* Referrer Policy */}
    <meta name="referrer" content="origin-when-crossorigin" />
  </Helmet>
  )
}