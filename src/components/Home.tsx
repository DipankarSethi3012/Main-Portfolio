import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import StartupExperience from './StartupExperience';
import Capabilities from './Capabilities';
import TechRadar from './TechRadar';
import Projects from './Projects';
import SystemThinking from './SystemThinking';
import EngineeringPractices from './EngineeringPractices';
import PostMortem from './PostMortem';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <StartupExperience />
            <Capabilities />
            <TechRadar />
            <Projects />
            <SystemThinking />
            <EngineeringPractices />
            <PostMortem />
        </>
    );
};

export default Home;
