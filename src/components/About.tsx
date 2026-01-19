import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-portfolio-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Terminal Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-lg bg-portfolio-card border border-portfolio-border shadow-2xl overflow-hidden font-mono text-sm"
                    >
                        <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-portfolio-border">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <span className="ml-2 text-xs text-gray-500">engineer@root:~/status</span>
                        </div>
                        <div className="p-6 space-y-4 text-gray-300">
                            <div className="flex gap-2">
                                <span className="text-portfolio-green">➜</span>
                                <span className="text-portfolio-cyan">~</span>
                                <span>system_check.sh --verbose</span>
                            </div>

                            <div className="space-y-1 text-xs sm:text-sm">
                                <p className="text-gray-400">[INFO] Initializing handshake...</p>
                                <p className="text-gray-400">[INFO] Verifying architectural integrity...</p>
                                <p className="text-green-400">SUCCESS: High concurrency handler active.</p>
                                <p className="text-green-400">SUCCESS: Distributed systems modules loaded.</p>
                                <p className="text-green-400">SUCCESS: Latency optimization protocols enabled.</p>
                                <p className="text-portfolio-violet mt-2">&gt; Ready for heavy loads.</p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-portfolio-border/50 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-gray-500 text-xs">UPTIME</div>
                                    <div className="text-white">99.999%</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs">PACKET LOSS</div>
                                    <div className="text-white">0.0%</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Terminal className="text-portfolio-violet w-6 h-6" />
                            <h2 className="text-2xl font-mono font-bold text-white">
                                About Me
                            </h2>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6 font-sans">
                            My focus is on building <span className="text-white font-semibold">resilient software systems</span>.
                            I work on problems involving high concurrency, data consistency across distributed components,
                            and latency optimization under heavy load.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed font-sans">
                            I prioritize clean architectural boundaries, asynchronous event-driven designs, and
                            <span className="text-portfolio-cyan border-b border-portfolio-cyan/20 ml-1 pb-1">production readiness</span> over rapid feature churn.
                            Code is a liability; well-designed systems are long-term assets.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
