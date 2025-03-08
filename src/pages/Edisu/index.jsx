import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProblemStatementSection from "./sections/ProblemStatementSection";
import Challenges from "./sections/Challenges";
import SolutionSection from "./sections/SolutionSection";
import MobileAppSection from "./sections/MobileAppSection";
import WebPortalSection from "./sections/WebPortalSection";
import AlternativeSection from "./sections/AlternativeSection";
import SerivceSection from "./sections/SerivceSection";
import ResultSection from "./sections/ResultSection";

const EdisuMain = () => {
    return (
        <div className="App overflow-x-hidden">
            <HeroSection />
            <AboutSection />
            <ProblemStatementSection />
            <Challenges />
            <SolutionSection />
            <MobileAppSection />
            <WebPortalSection />
            <AlternativeSection />
            <SerivceSection />
            <ResultSection />
        </div>
    );
}

export default EdisuMain;
