import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

const CookiePolicy = () => {
  const intl = useIntl();
  const questionStyle = "font-bold my-2 text-black";
  const linkStyles = "underline text-blue-700";

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "astute.software.cookie",
            defaultMessage: "Astute Softwares - Cookie Policy",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.software.cookie.desc",
            defaultMessage:
              "Astute Softwares website only uses technical cookies, including analytics cookies, in order to ensure its user-friendliness and improve its functionality.",
          })}
        />
        <meta
          name="keywords"
          content="Website cookie policy, Cookie consent guide, Managing cookies, Online privacy cookies, Cookie usage policy"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/cookie-policy"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "astute.software.cookie",
            defaultMessage: "Astute Softwares - Cookie Policy",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.software.cookie.desc",
            defaultMessage:
              "Astute Softwares website only uses technical cookies, including analytics cookies, in order to ensure its user-friendliness and improve its functionality.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/cookie-policy"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="pt-32 mb-20 mx-10 text-lg text-gray-text">
        <h1 className="my-8 text-xl">
          COOKIE POLICY (WWW.ASTUTESOFTWARES.COM)
        </h1>

        <p className={questionStyle}>What does this Cookie Policy apply to?</p>
        <p>
          This Cookie Policy is understood as information notice pursuant to
          Art. 13 of Regulation (EU) 2016/679
          <span className="font-bold"> (“GDPR”) </span> and applies to the
          personal data relating to you (hereinafter the
          <span className="font-bold">“Personal Data” </span>) collected through
          the cookies installed on the website www.astutesoftwares.com
          (hereinafter the <span className="font-bold">“Website” </span>) by
          Astute softwares, with registered office in DHA EME Sector, Lahore,
          Punjab, Pakistan – in its quality of data controller – (hereinafter{" "}
          <span className="font-bold">“Astute Softwares” </span>, the
          <span className="font-bold"> “Controller” </span>,
          <span className="font-bold"> “we” </span>,
          <span className="font-bold"> “us” </span> or
          <span className="font-bold"> “our” </span> , as appropriate). These
          terms of use (hereinafter the
          <span className="font-bold"> “Terms of Use” </span>) set out rules for
          visitors (hereinafter the
          <span className="font-bold"> “Users” </span>) to the website
          www.astutesoftwares.com (hereinafter the
          <span className="font-bold"> “Website” </span>). The Website is owned
          and managed by Astute Softwares. The term “Astute Softwares’’ refers
          to the entirety of our business, including Astute Softwares and any
          affiliated companies. Astute Softwares reserves the right to amend
          these Terms of Use at any time. Users are therefore invited to revisit
          these Terms of Use each time they visit the Website. The use of this
          Website implies acceptance of these Terms of Use in their entirety. If
          Users do not agree to follow and be bound to these Terms of Use, they
          may not access, use or download materials from this Website.
        </p>
        <p>
          For any further information about how we process your Personal Data,
          please see our Privacy Policy.
        </p>

        <p className={questionStyle}>What are cookies?</p>
        <p>
          Cookies are small text files that the sites visited send to the user’s
          terminal, where they are stored, and are then sent back to the same
          sites on the next visit.
        </p>
        <p className={questionStyle}>What cookies does this Website use?</p>

        <p>This Website uses both its own and third-party technical cookies.</p>
        <p className={questionStyle}>
          In particular, the technical cookies used on this Website fall into
          the following subcategories:
        </p>
        <ul className="list-disc ml-8">
          <li>
            <p>
              navigation or session cookies, which ensure normal navigation and
              use of the Website. As they are not stored on the user’s computer,
              they disappear when the browser is closed;
            </p>
          </li>
          <li>
            <p>
              analytical cookies, which are used to collect and analyse
              statistical information about how visitors use this Website; such
              cookies collect information in a way that does not directly
              identify anyone.
            </p>
          </li>
        </ul>
        <p>
          These cookies do not require the user’s prior consent in order to be
          installed and used, as the processing of Personal Data collected
          through them is necessary to pursue the legitimate interest of the
          data controller, pursuant to Art. 6 (1), letter f) of GDPR
        </p>
        <p className={questionStyle}>
          What third-party cookies does this Website use?
        </p>
        <p>
          The third-party cookies installed on this Website are listed below.
          For each of these, there is a link to the relevant information notice
          on the processing of Personal Data which explains also how to
          deactivate the cookies used. With regard to third-party cookies, the
          controller is only required to include the link to the third-party
          website in this policy. On the other hand, it is the responsibility of
          the third party to provide information and instructions on how to
          enable and/or disable the cookies.
        </p>
        <p>
          Google Analytics:{" "}
          <a href="https://policies.google.com/privacy" className={linkStyles}>
            Information
          </a>
        </p>
        <p className={questionStyle}>
          How can the cookie configuration be changed?
        </p>
        <p>
          Cookies can be disabled by the user by changing the settings of the
          browser according to the instructions made available by the relevant
          providers at the links listed below.
        </p>
        <ul>
          <li>
            <a
              href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
              className={linkStyles}
            >
              Internet Explorer
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop?redirectslug=Attivare+e+disattivare+i+cookie&redirectlocale=it"
              className={linkStyles}
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647?hl=it"
              className={linkStyles}
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/it-it/HT201265"
              className={linkStyles}
            >
              Apple Safari
            </a>
          </li>
          <li>
            <a
              href="http://www.opera.com/help/tutorials/security/cookies/"
              className={linkStyles}
            >
              Opera
            </a>
          </li>
        </ul>

        <p>
          Disabling certain technical cookies may affect the operation of this
          Website. To opt out of being tracked by Google Analytics across all
          websites, visit <br />
          <a
            href="http://tools.google.com/dlpage/gaoptout"
            className={linkStyles}
          >
            {" "}
            http://tools.google.com/dlpage/gaoptout.
          </a>
        </p>

        <p className={questionStyle}>Changes to the Cookie Policy</p>
        <p>
          This Cookie Policy may be subject to updates. Make sure to check the
          latest version available on the Website regularly.
        </p>
        <p className={questionStyle}>INFORMATION ON COOKIES</p>
        <p>
          This website only uses technical cookies, including analytics cookies,
          in order to ensure its user-friendliness and improve its
          functionality. For more information about the cookies we use and how
          to disable them, please see our{" "}
          <span className="font-bold">Cookie Policy.</span>
        </p>
      </div>
    </>
  );
};

export default CookiePolicy;
