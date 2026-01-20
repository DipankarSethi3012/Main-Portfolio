import { motion } from 'framer-motion';
import { AlertTriangle, ChevronDown, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const failures = [
    {
        title: "The Redis Thundering Herd",
        symptom: "Cache expiration caused simultaneous DB spikes, leading to 503 errors.",
        fix: "Implemented Probabilistic Early Expiration (Jitter) and Semantic Locking.",
        lesson: "Always decouple cache TTLs and use exponential backoff for retries."
    },
    {
        title: "The N+1 Query Problem",
        symptom: "List endpoints caused database connection exhaustion due to fetching relations in loops.",
        fix: "Refactored to use eager loading for relations and BatchLoaders for nested data.",
        lesson: "Always monitor query counts; N+1 is the silent killer of API performance."
    },
    {
        title: "RBAC Limits vs Granular Permissions",
        symptom: "Simple roles were insufficient for multi-tenant data isolation requirements.",
        fix: "Moved from coarse RBAC to granular permissions (ABAC) defining explicit resource ownership.",
        lesson: "RBAC answers 'Who are you?'; Granular Permissions answer 'Can you touch this specific thing?'"
    }
];

const PostMortem = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#050505] border-t border-portfolio-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-12">
                    <AlertTriangle className="text-red-500 w-8 h-8" />
                    <div>
                        <h2 className="text-2xl font-mono font-bold text-white">Notable Failures & Learnings</h2>
                        <p className="text-gray-500 text-sm font-mono">Debugging is part of the process.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {failures.map((fail, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-portfolio-border rounded-lg bg-portfolio-bg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 bg-[#0a0a0a] hover:bg-[#111] transition-colors text-left"
                            >
                                <span className="font-mono text-red-400 font-bold text-sm">
                                    [INCIDENT-00{index + 1}] {fail.title}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>

                            {openIndex === index && (
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Impact</h4>
                                        <p className="text-gray-300 text-sm font-mono bg-red-500/10 p-2 rounded border border-red-500/20">
                                            {fail.symptom}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Resolution</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {fail.fix}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-portfolio-border/50">
                                        <h4 className="text-xs text-portfolio-green uppercase tracking-widest font-bold mb-1 flex items-center gap-2">
                                            <CheckCircle className="w-3 h-3" /> Key Takeaway
                                        </h4>
                                        <p className="text-gray-400 text-sm italic">
                                            "{fail.lesson}"
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PostMortem;
