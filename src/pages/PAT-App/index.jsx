import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProblemStatementSection from "./sections/ProblemStatementSection";
import SolutionSection from "./sections/SolutionSection";
import InnovationSection from "./sections/InnovationSection";
import TechnologySection from "./sections/TechnologySection";
import ResultSection from "./sections/ResultSection";
import TestimonialSection from "./sections/TestimonialSection";

const PATApp = () => {
    return (
        <div className="App overflow-x-hidden">
            <HeroSection />
            <AboutSection />
            <ProblemStatementSection />
            <SolutionSection />
            <InnovationSection />
            <TechnologySection />
            <ResultSection />
            <TestimonialSection />
        </div>
    );
}

export default PATApp;
