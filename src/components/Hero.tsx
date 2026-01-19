import { motion } from 'framer-motion';
import { useGlitch } from '../hooks/useVisualEffects';

const Hero = () => {
    const { displayText, triggerGlitch } = useGlitch("Dipankar Sethi");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-portfolio-bg pt-16">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            {/* Animated Nodes (Abstract Distributed System) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Central Node */}
                <motion.div
                    className="absolute top-1/3 left-1/2 w-32 h-32 -ml-16 rounded-full border border-portfolio-cyan/20 bg-portfolio-cyan/5 blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating Data Packets */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-portfolio-violet/40 blur-sm"
                        style={{
                            width: Math.random() * 4 + 2 + 'px',
                            height: Math.random() * 4 + 2 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50 - 25, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-6 border border-portfolio-green/30 rounded-full bg-portfolio-green/5">
                        <span className="font-mono text-xs text-portfolio-green tracking-wide">
                            ● SYSTEM ONLINE
                        </span>
                    </div>

                    <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Hi, I'm <span
                            className="text-portfolio-cyan cursor-crosshair"
                            onMouseEnter={triggerGlitch}
                        >
                            {displayText}
                        </span>.<br />
                        I design systems that <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-cyan to-portfolio-violet">
                            scale, fail gracefully,
                        </span>
                        <br />
                        and perform.
                    </h1>

                    <p className="font-sans text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Software Developer | System Design | Distributed Systems
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                        {['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL'].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-portfolio-card border border-portfolio-border rounded-md text-sm font-mono text-gray-300 hover:border-portfolio-cyan/50 hover:text-portfolio-cyan transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold font-mono rounded hover:bg-gray-200 transition-colors"
                    >
                        &gt; View Architecture
                    </motion.a>
                </motion.div>
            </div>

            {/* Decorative blurred gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-portfolio-bg to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
