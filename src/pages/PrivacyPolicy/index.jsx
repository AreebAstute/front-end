import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  const intl = useIntl();
  const linkStyles = "underline text-blue-700";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "astute.software.privacy",
            defaultMessage: "Astute Softwares - Policy",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.software.privacy.desc",
            defaultMessage:
              "Personal data is processed in accordance with the GDPR. The Personal data collected by ASTUTE SOFTWARES will be processed in accordance with the law.",
          })}
        />
        <meta
          name="keywords"
          content="Online privacy policy, Data protection statement, User information privacy, Privacy practices, Personal data policy"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/privacy-policy"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "astute.software.privacy",
            defaultMessage: "Astute Softwares - Policy",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.software.privacy.desc",
            defaultMessage:
              "Personal data is processed in accordance with the GDPR. The Personal data collected by ASTUTE SOFTWARES will be processed in accordance with the law.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/privacy-policy"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="w-11/12 mx-auto pt-32 mb-20 text-lg text-blue-primary">
        <section className="mt-0 md:mt-12 align-baseline flex flex-wrap -mr-4 -ml-4">
          <div className="grow shrink basis-0 m-2.5 max-w-full p-4 box-border">
            <article className="post-208 page type-page status-publish hentry">
              <header className="entry-header">
                <h1 className="mb-4 font-bold text-blue-primary text-3xl md:text-4xl">
                  Privacy Policy
                </h1>
              </header>
              <div>
                {/* =====================>> Question <<===================== */}
                <h2 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  What terms do we use in Privacy Policy?
                </h2>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">Personal data</b>
                  <span className="font-normal">
                    &nbsp;– data of a person who can be identified by the use of
                    such data. This Privacy Policy explains how we use the
                    personal information you provide to us.
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">GDPR</b>
                  <span className="font-normal">
                    &nbsp;– Regulation (EU) 2016/679 of the European Parliament
                    and of the Council of 27 April 2016 on the protection of
                    natural persons with regard to the processing of personal
                    data and on the free movement of such data and repealing
                    Directive 95/46/EC (General Data Protection Regulation).
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">Website</b>
                  <span className="font-normal">
                    &nbsp;– our website and its subpages:{" "}
                    <a
                      className={`${linkStyles}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      www.astutesoftwares.com
                    </a>
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">Recipients</b>
                  <span className="font-normal">
                    &nbsp;– entities to whom we may transfer a part of your
                    personal data, in connection with the performance of certain
                    activities or services by them on our behalf. They may not
                    do anything about your personal data until we have
                    instructed them to do so, and only to the extent we have
                    indicated. They will store your personal data securely and
                    only for as long as we indicate or as required by applicable
                    law.
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">Cookies </b>
                  <span className="font-normal">
                    &nbsp;– the so-called Internet cookies, i.e. tiny
                    information recorded by the server on your computer disc in
                    the form of small text files. Cookies make it possible to
                    recognize the User’s device during the next visit, providing
                    access to certain functions and allow us to understand how
                    he navigated the site.
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">Privacy Policy</b>
                  <span className="font-normal">
                    &nbsp;– this policy sets forth the principles governing
                    cookies and processing and protection of personal data.
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  Whose data does the privacy policy apply to?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    Privacy Policy defines the method of collecting, processing
                    and storing personal data of:
                  </span>
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">job candidates</span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">employees</span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">contractors</span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">clients/suppliers</span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">
                      employees or persons representing clients
                    </span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">newsletter subscribers</span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">correspondents</span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">
                      participants of meetup events
                    </span>
                  </li>
                </ul>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  Who will be your data controller?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    The controller of your Personal data: Astute Softwares. This
                    means that we decide for what purpose the personal data you
                    have provided to us are processed. We want you to know that
                    we make every effort to keep your personal data safe. We do
                    not provide personal data entrusted to us for a fee. You can
                    contact us directly for information regarding the protection
                    of your personal data at:{" "}
                    <a
                      className={`${linkStyles}`}
                      href="mailto:company@astutesoftwares.com"
                    >
                      company@astutesoftwares.com
                    </a>
                    .
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  How do we process personal data?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    Personal data is processed in accordance with the GDPR. The
                    Personal data collected by ASTUTE SOFTWARES will be:
                  </span>
                </p>

                <ul className="list-disc list-inside">
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">
                      processed in accordance with the law
                    </span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">
                      collected for specified, lawful purposes and not subjected
                      to further processing incompatible with these purposes
                    </span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">
                      factually correct and adequate in relation to the purposes
                      for which they are processed
                    </span>
                  </li>
                  <li className="font-normal pl-4 md:pl-8 pb-4" aria-level="1">
                    <span className="font-normal">
                      stored no longer than it is necessary to achieve the
                      purpose of processing
                    </span>
                  </li>
                </ul>

                <p className="mb-4">
                  <span className="font-normal">
                    Detailed information on how we process your data in specific
                    processes can be found in the section: “For what purposes,
                    on what legal grounds and for how long do we process your
                    Personal data?”
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  What data are we talking about?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    We collect information about you when you provide it to us
                    yourself or when you use our services, including the
                    services and other functionalities provided by Astute
                    Softwares on the Website and stored in cookies that are
                    installed on our website, as well as the data we have
                    obtained from publicly available sources, such as social
                    media or through third parties that have suggested that we
                    contact you. If you then decide to cooperate with us,
                    additionally there will be all personal data you provide us
                    with.
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  To whom can we share the data?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    Your personal data may be transferred to processing entities
                    that provide services to the Controller on the basis of
                    entrustment agreements concluded with them (IT service
                    providers, including hosting and services supporting HR
                    processes, as well as operators of recruitment
                    portals).Subject to applicable law, we may also transfer
                    your data to other controllers entitled to obtain data under
                    applicable law, such as courts or law enforcement agencies,
                    only if they make a request on an appropriate legal basis,
                    of course.
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  Is providing personal data voluntary?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    Providing your data is mainly voluntary. We require you to
                    provide personal data only at the stage of entering into an
                    agreement with us (e.g. in the scope of sending a newsletter
                    or e-book), and then in connection with the need to settle
                    it (i.e. for accounting, tax or protection against claims).
                    Detailed information in this regard is indicated above in
                    the information for specific categories of persons.
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  What are your rights regarding your data?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    In connection with the processing of personal data, pursuant
                    to the principles set forth in the provisions on the
                    protection of personal data, including the GDPR, you are
                    entitled to certain rights, including:
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">the right to access your data,</b>
                  <span className="font-normal">
                    &nbsp;– i.e. the right to obtain confirmation from the
                    ASTUTE SOFTWARES as to whether or not your personal data is
                    being processed by us, or to obtain a copy of your personal
                    data. This is to ensure that you are aware of and able to
                    check how the ASTUTE SOFTWARES uses your personal data. We
                    may refuse to provide a copy of your personal information
                    where this could adversely affect the rights of another
                    person;
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">the right to rectification,</b>
                  <span className="font-normal">
                    &nbsp;– i.e. the right to request the ASTUTE SOFTWARES to
                    rectify any personal data that is inaccurate or incomplete
                    without delay (e.g. where the ASTUTE SOFTWARES processes
                    your incorrect name or address);
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">
                    the right to delete your data (also known as the “right to
                    be forgotten”)
                  </b>
                  <span className="font-normal">
                    &nbsp;– it enables you to request the deletion of your
                    personal data if, for example, your data was used illegally,
                    or your consent was withdrawn (if it was the only reason for
                    processing your data). However, the “right to be forgotten”
                    does not constitute an absolute right to erasure of personal
                    data as there are certain exceptions to this right, e.g.
                    where we still need to use the data to establish, pursue or
                    defend legal claims or to fulfill a legal obligation (e.g.
                    under accounting or tax law);
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">the right to restrict processing </b>
                  <span className="font-normal">
                    &nbsp;– you have the right to prevent us from further using
                    your personal data if, for example, the ASTUTE SOFTWARES is
                    in the process of evaluating a request for rectification of
                    your data. If the processing of personal data is restricted,
                    ASTUTE SOFTWARES may still store your personal data, but may
                    not further actively use it (e.g. for the purpose of
                    fulfilling a contract);
                  </span>
                </p>
                <p className="mb-8 font-normal text-xl">
                  <b className="font-bold">the right to data portability</b>
                  <span className="font-normal">
                    &nbsp;– you have the right to receive the personal data
                    concerning you, which you had provided to a us, in a
                    structured, commonly used and machine-readable format and
                    have the right to transmit those data to another controller
                    without hindrance from the us, provided: a) the processing
                    is based on consent or on a contract and b) the processing
                    is carried out by automated means.
                  </span>
                </p>

                <p className="mb-4">
                  <span className="font-normal">
                    To the extent that the processing of your personal data is
                    based on a legitimate interest, you have the right to object
                    to the processing of such data. However, the ASTUTE
                    SOFTWARES may continue to process personal data where it is
                    able to demonstrate valid and legitimate grounds for
                    processing overriding your interests, rights and freedoms or
                    where necessary to establish, pursue or defend a claim. To
                    the extent that the processing of your personal data is
                    based on consent, you have the right to withdraw your
                    consent at any time. The consent withdrawal shall not affect
                    the lawfulness of the processing that has been carried out
                    on the basis of the consent prior to the withdrawal.
                  </span>
                </p>

                <p className="mb-4">
                  <span className="font-normal">
                    If you would like to exercise any of these rights, simply
                    email us at:{" "}
                    <a
                      className={`${linkStyles}`}
                      href="mailto:company@astutesoftwares.com"
                    >
                      company@astutesoftwares.com
                    </a>
                    .
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  Do we transfer your data to countries outside the European
                  Economic Area?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    As a rule, your personal data will not be transferred
                    outside the EEA or made available to international
                    organizations. However, if the controller uses service
                    providers from outside the EEA area, which have not been
                    recognized by the European Commission as ensuring an
                    adequate level of personal data protection, the transfer of
                    personal data to the above-mentioned entities is carried out
                    ̨ on the basis of standard data protection clauses which
                    ensure appropriate safeguards in the field of protection of
                    privacy and rights and freedoms people whom applies to. A
                    copy of the Standard Contractual Clauses can be obtained
                    from the controller.
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  Do we process your data automatically?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    Please be advised that we do not make automated decisions,
                    including those based on profiling.
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  What about Cookies?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    We use Cookies on the end device of the User (e.g. computer,
                    tablet, smartphone). Cookies may be read by the ASTUTE
                    SOFTWARES IT system. We gain access to the information
                    contained in Cookies for statistical purposes and to ensure
                    the proper functioning of the website, in particular to
                    maintain the session after logging in.
                  </span>
                </p>

                <p className="mb-4">
                  <span className="font-normal">
                    Importantly, we want you to know that:
                  </span>
                </p>

                <div>
                  <ul className="list-disc list-inside">
                    <li className="font-normal pl-8 pb-8" aria-level="1">
                      <span className="font-normal">
                        The internet browser configuration is possible to
                        prevents storage of cookies on the User’s end device.
                      </span>
                    </li>
                    <li className="font-normal pl-8 pb-8" aria-level="1">
                      <span className="font-normal">
                        The User may delete Cookies after they are saved by the
                        ASTUTE SOFTWARES through: relevant features of the web
                        browser, software intended for that purpose or using
                        appropriate tools available under the operating system
                        of the User.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  <span className="font-normal">
                    Please be notified however that change to the web browser
                    configuration that prevents or limits the Cookies storage on
                    the User’s end device may impair the functionality of the
                    services provided. Similar effects may occur when deleting
                    the Cookies in the course of the service provision.
                  </span>
                </p>

                <p className="mb-4">
                  <span className="font-normal">
                    Information on how to delete Cookies in the most popular web
                    browsers are included in the following links:
                  </span>
                </p>

                <div>
                  <ul className="list-disc list-inside">
                    <li
                      className="font-normal pl-4 md:pl-8 pb-4"
                      aria-level="1"
                    >
                      <span className="font-normal">
                        <a
                          className={`${linkStyles}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                        >
                          Firefox
                        </a>
                      </span>
                    </li>
                    <li
                      className="font-normal pl-4 md:pl-8 pb-4"
                      aria-level="1"
                    >
                      <span className="font-normal">
                        <a
                          className={`${linkStyles}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/"
                        >
                          Opera
                        </a>
                      </span>
                    </li>
                    <li
                      className="font-normal pl-4 md:pl-8 pb-4"
                      aria-level="1"
                    >
                      <span className="font-normal">
                        <a
                          className={`${linkStyles}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                        >
                          Internet Explorer
                        </a>
                      </span>
                    </li>
                    <li
                      className="font-normal pl-4 md:pl-8 pb-4"
                      aria-level="1"
                    >
                      <span className="font-normal">
                        <a
                          className={`${linkStyles}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/chrome/answer/95647"
                        >
                          Chrome
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  <span className="font-normal">
                    Please be notified however that change to the web browser
                    configuration that prevents or limits the Cookies storage on
                    the User’s end device may impair the functionality of the
                    services provided. Similar effects may occur when deleting
                    the Cookies in the course of the service provision.
                  </span>
                </p>

                <p className="mb-4">
                  <span className="font-normal">
                    Information on how to delete Cookies in the most popular web
                    browsers are included in the following links:
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  Use of Google Analytics for website analysis
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    This website operator notifies that in order to collect and
                    analyze aggregated information on the portal use, it uses
                    the Google Analytics service. Please visit this location to
                    learn more about how this service collects and processes
                    data.
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  Use of Hubspot for form management, website analysis and users
                  tracking
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    This website operator notifies that they use the Hubspot
                    platform to collect and analyze aggregated information about
                    website users.
                  </span>
                </p>

                {/* =====================>> Question <<===================== */}
                <h3 className="mb-4 font-bold text-blue-primary text-2xl md:text-3xl">
                  Should I still know something?
                </h3>
                <p className="mb-4">
                  <span className="font-normal">
                    For matters not covered by these Policy, provisions of law
                    and particularly of the Act on provision of services by
                    electronic means, the Act on personal data protection, the
                    Civil Code and GDPR shall apply. ASTUTE SOFTWARES reserves
                    the right to modify the Policy due to significant reasons.
                    The following shall be deemed significant reasons:
                    introduction of new, amendments to the existing legislation,
                    adaptation to changes introduced by ASTUTE SOFTWARES. ASTUTE
                    SOFTWARES notifies of the content of the changes by
                    publishing a notice on the change of Policy at{" "}
                    <a
                      className={`${linkStyles}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      www.astutesoftwares.com
                    </a>
                    . The competent court for any disputes arising from the
                    application of this Policy shall be the competent court
                    under the applicable laws.
                  </span>
                </p>

                {/* ==================================================== */}
                <p className="mb-4 font-normal">
                  <strong>
                    The date of the last version of the policy is March 15th,
                    2023.
                  </strong>
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
