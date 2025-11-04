import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import OnlineExamPacks from "../components/Home/OnlineExamPacks";
import StudyPlan from "../components/Home/StudyPlan";
import Teachers from "../components/Home/Teachers";
import CallToAction from "../components/Home/CallToAction";
import Steps from "../components/Home/Steps";
import Testimonials from "../components/Home/Testimonials";

function Home() {
    return (
        <div>
            <Hero />
            <Features />
            <OnlineExamPacks />
            <StudyPlan />
            <Teachers />
            <Testimonials />
            <Steps />
            <CallToAction />
        </div>
    );
}

export default Home;