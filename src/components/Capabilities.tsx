import { motion } from 'framer-motion';
import { Server, Database, Network, Cpu, Code, Lock } from 'lucide-react';
import ApiPlayground from './ApiPlayground';

const capabilities = [
    {
        category: "Backend Engineering",
        icon: <Server className="w-8 h-8 text-portfolio-cyan" />,
        skills: ["Java", "Spring Boot", "Node.js"],
        description: "Building robust REST and gRPC codebases. Focusing on dependency injection, aspect-oriented programming, and clean modular structures."
    },
    {
        category: "Distributed Systems",
        icon: <Network className="w-8 h-8 text-portfolio-violet" />,
        skills: ["Microservices", "Event-Driven", "CAP Theorem"],
        description: "Designing loosely coupled services. Handling partial failures, circuit breakers, and distributed tracing implementation."
    },
    {
        category: "Messaging & Streaming",
        icon: <Cpu className="w-8 h-8 text-portfolio-green" />,
        skills: ["Kafka", "RabbitMQ", "SQS"],
        description: "High-throughput event ingestion. Implementing producers/consumers with careful partition strategies and retry mechanisms for eventual consistency."
    },
    {
        category: "Databases",
        icon: <Database className="w-8 h-8 text-blue-400" />,
        skills: ["PostgreSQL", "MongoDB", "Redis"],
        description: "Schema design for varying workloads. Query optimization, indexing strategies, and caching patterns (Write-through vs Look-aside)."
    },
    {
        category: "System Quality",
        icon: <Code className="w-8 h-8 text-yellow-500" />,
        skills: ["Testing", "CI/CD", "Observability"],
        description: "Writing comprehensive unit/integration tests with JUnit/Mockito. Setting up Grafana/Prometheus dashboards for real-time metrics."
    },
    {
        category: "Security",
        icon: <Lock className="w-8 h-8 text-red-500" />,
        skills: ["OAuth2", "JWT", "HTTPS"],
        description: "Implementing secure authentication flows. Rate limiting, input validation, and secure header configurations."
    }
];

const Capabilities = () => {
    return (
        <section id="skills" className="py-24 bg-portfolio-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-mono font-bold text-white mb-4">
                        &lt;Engineering_Capabilities /&gt;
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tools are interchangeable. Concepts and depth of understanding are permanent.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={cap.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 255, 255, 0.1)" }}
                            className="bg-portfolio-card p-6 border border-portfolio-border rounded-lg group hover:border-portfolio-cyan/30 transition-all duration-300"
                        >
                            <div className="mb-4 p-3 bg-portfolio-bg rounded-lg inline-block border border-portfolio-border group-hover:border-portfolio-cyan/50 transition-colors">
                                {cap.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{cap.category}</h3>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {cap.skills.map((skill) => (
                                    <span key={skill} className="text-xs font-mono px-2 py-1 bg-portfolio-highlight rounded text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed border-t border-portfolio-border/50 pt-4">
                                {cap.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive API Section */}
                <div className="mt-16">
                    <h3 className="text-xl font-mono font-bold text-white mb-6 flex items-center gap-2">
                        <span className="text-portfolio-cyan">&gt;</span> Live API Demo
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                I verify every API contract with rigorous testing.
                                Try this live interactive console to simulate a request to my backend services.
                                It demonstrates proper header handling, response formatting, and low-latency execution.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500 font-mono">
                                <li className="flex items-center gap-2">
                                    <span className="text-portfolio-green">✓</span> CORS Configured
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-portfolio-green">✓</span> Rate Limiting Active
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-portfolio-green">✓</span> JWT Validation
                                </li>
                            </ul>
                        </div>
                        <ApiPlayground />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
