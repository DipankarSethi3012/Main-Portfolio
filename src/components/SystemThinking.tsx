import { motion } from 'framer-motion';
import { GitBranch, ShieldAlert, Database } from 'lucide-react';

const philosophies = [
    {
        icon: <GitBranch className="w-10 h-10 text-portfolio-cyan" />,
        title: "API Design",
        principle: "Contract Stability & Idempotency",
        desc: "APIs are forever. I design for backward compatibility, use strict schemas (OpenAPI), and ensure all state-mutating operations are idempotent to handle network retries safely."
    },
    {
        icon: <ShieldAlert className="w-10 h-10 text-portfolio-violet" />,
        title: "Resilience",
        principle: "Design for Failure",
        desc: "Systems will fail. I implement circuit breakers, bulkhead patterns, and graceful degradation strategies to prevent cascading failures in microservices."
    },
    {
        icon: <Database className="w-10 h-10 text-portfolio-green" />,
        title: "Data Strategy",
        principle: "Consistency vs. Availability",
        desc: "Understanding the CAP theorem is non-negotiable. I choose the right tool for the job—strong consistency for payments, eventual consistency for feeds."
    }
];

const SystemThinking = () => {
    return (
        <section className="py-24 bg-portfolio-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-mono font-bold text-white mb-4">How I Think in Systems</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-portfolio-cyan to-portfolio-violet mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative p-8 bg-portfolio-card border border-portfolio-border rounded-xl hover:bg-portfolio-highlight/5 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                {item.icon}
                            </div>

                            <div className="mb-6">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-xs font-mono text-portfolio-dim mb-4 uppercase tracking-wider">{item.principle}</p>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SystemThinking;
