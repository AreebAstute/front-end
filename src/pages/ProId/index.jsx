import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProblemStatementSection from "./sections/ProblemStatementSection";
import SolutionSection from "./sections/SolutionSection";
import ResultSection from "./sections/ResultSection";

const ProIDMain = () => {
    return (
        <div className="App overflow-x-hidden">
            <HeroSection />
            <AboutSection />
            <ProblemStatementSection />
            <SolutionSection />
            <ResultSection />
        </div>
    );
}

export default ProIDMain;
