import { motion } from 'framer-motion';
import { CheckCircle, Trophy, Code2 } from 'lucide-react';

const practices = [
    "Clean Code Principles (SOLID, DRY)",
    "Observability First (Logs, Metrics, Tracing)",
    "CI/CD Automation (GitHub Actions)",
    "Thorough Code Reviews",
    "Architecture Decision Records (ADRs)"
];

const EngineeringPractices = () => {
    return (
        <section className="py-24 bg-[#080808] border-t border-portfolio-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Engineering Practices */}
                    <div>
                        <h2 className="text-2xl font-mono font-bold text-white mb-8 flex items-center gap-2">
                            <span className="text-portfolio-green">&gt;</span> Engineering Practices
                        </h2>
                        <div className="space-y-4">
                            {practices.map((practice, index) => (
                                <motion.div
                                    key={practice}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 p-4 bg-portfolio-card border border-portfolio-border rounded-lg hover:border-portfolio-green/30 transition-colors"
                                >
                                    <CheckCircle className="w-5 h-5 text-portfolio-green" />
                                    <span className="text-gray-300 font-mono text-sm">{practice}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* DSA Credibility */}
                    <div>
                        <h2 className="text-2xl font-mono font-bold text-white mb-8 flex items-center gap-2">
                            <span className="text-portfolio-cyan">&gt;</span> Competitive Programming
                        </h2>

                        <div className="bg-portfolio-card border border-portfolio-border rounded-xl p-8 relative overflow-hidden">
                            {/* Background shine effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl -mr-16 -mt-16" />

                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gray-800 rounded-lg">
                                        <Code2 className="w-8 h-8 text-yellow-500" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">Handle</div>
                                        <div className="text-white font-bold font-mono">dipankarsethi3012</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold rounded uppercase flex items-center gap-1">
                                    <Trophy className="w-3 h-3" /> Knight
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="p-4 bg-portfolio-bg rounded border border-portfolio-border">
                                    <div className="text-2xl font-bold text-white mb-1">1,877</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Contest Rating</div>
                                </div>
                                <div className="p-4 bg-portfolio-bg rounded border border-portfolio-border">
                                    <div className="text-2xl font-bold text-white mb-1">1,150+</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Problems Solved</div>
                                </div>
                                <div className="p-4 bg-portfolio-bg rounded border border-portfolio-border">
                                    <div className="text-2xl font-bold text-white mb-1">Top 5%</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Global Rank</div>
                                </div>
                            </div>

                            <div className="mt-8 text-xs text-center text-gray-500 font-mono">
                                Consistent participation in weekly contests. Strong foundation in Graphs, DP, and Tree algorithms.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EngineeringPractices;
