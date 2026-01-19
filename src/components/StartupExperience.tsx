import { motion } from 'framer-motion';
import { Server, Database, Bot, Trophy, ArrowRight, Award } from 'lucide-react';

const StartupExperience = () => {
    return (
        <section id="experience" className="py-24 bg-[#080808] border-y border-portfolio-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 border-l-4 border-portfolio-violet pl-6"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <h2 className="text-3xl font-mono font-bold text-white">Startup Initiative: Stealth AI Agents</h2>
                        <span className="px-3 py-1 bg-portfolio-violet/20 border border-portfolio-violet/40 rounded text-xs text-portfolio-violet font-mono uppercase">
                            Prototype Phase
                        </span>
                    </div>
                    <p className="text-gray-400 font-mono text-sm max-w-2xl">
                        Building autonomous agents on top of LLMs to automate complex workflows.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Architecture Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-portfolio-card p-8 rounded-xl border border-portfolio-border relative"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(191,0,255,0.05),transparent_70%)]" />

                        {/* Simple Diagram */}
                        <div className="relative z-10 flex flex-col items-center gap-8 py-8">
                            {/* User Input */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                                    <Bot className="text-blue-400 w-8 h-8" />
                                </div>
                                <span className="text-xs font-mono text-gray-400">LLM Agent Core</span>
                            </div>

                            <ArrowRight className="rotate-90 text-gray-600" />

                            {/* Engine Level */}
                            <div className="flex w-full justify-center gap-8">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="p-4 bg-portfolio-bg border border-portfolio-violet rounded-lg shadow-[0_0_15px_rgba(191,0,255,0.2)]">
                                        <Server className="text-portfolio-violet w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-mono text-portfolio-violet">Vector DB (Pinecone)</span>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <div className="p-4 bg-portfolio-bg border border-portfolio-cyan rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                                        <Award className="text-portfolio-cyan w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-mono text-portfolio-cyan">Action Engine</span>
                                </div>
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2" />
                            <ArrowRight className="rotate-90 text-gray-600" />

                            {/* Data Level */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                                    <Database className="text-green-500 w-8 h-8" />
                                </div>
                                <span className="text-xs font-mono text-gray-400">Knowledge Graph</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Details */}
                    <div className="space-y-8">
                        <div className="p-6 bg-portfolio-highlight/10 border border-portfolio-green/20 rounded-lg">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Trophy className="text-portfolio-green w-5 h-5" />
                                <span className="text-portfolio-green">Achievements</span>
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-portfolio-cyan mt-1">➜</span>
                                    <div>
                                        <span className="text-white font-bold block">Winner IdeaHub 2.0</span>
                                        <span className="text-sm text-gray-400">Secured First Position All India</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-portfolio-cyan mt-1">➜</span>
                                    <div>
                                        <span className="text-white font-bold block">Smart India Hackathon</span>
                                        <span className="text-sm text-gray-400">Finalist (Top 1% of entries)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-portfolio-cyan">01.</span> Technical Focus
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Designed a multi-agent system where autonomous agents collaborate to break down high-level user goals into executable sub-tasks, utilizing LangChain and custom prompt engineering strategies.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-portfolio-cyan">02.</span> Implementation
                            </h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                                <li>Developed core logic using <span className="text-white">Spring AI</span> and Python.</li>
                                <li>Implemented RAG (Retrieval-Augmented Generation) pipelines for domain-specific context.</li>
                                <li>Orchestrated agent communication using asynchronous event loops.</li>
                            </ul>
                        </div>

                        <div className="p-4 bg-portfolio-card border border-portfolio-violet/30 rounded">
                            <p className="text-sm font-mono text-gray-300">
                                <span className="text-portfolio-violet font-bold">STATUS:</span> Active Development / Research Phase.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StartupExperience;
