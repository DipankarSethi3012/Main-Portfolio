import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Smartphone, ToggleLeft, ToggleRight, Terminal } from 'lucide-react';
import { useLogger } from '../context/LoggerContext';

const projects = [
    {
        id: "campus-connect",
        title: "Campus Connect",
        badge: "Social Networking",
        stack: ["React Native", "Spring Boot", "MongoDB", "WebSocket"],
        problem: "University students lacked a real-time, unified platform for campus news, events, and peer-to-peer collaboration.",
        tradeoff: "Chose MongoDB (NoSQL) over PostgreSQL for flexible schema evolution during rapid prototyping phase.",
        challenges: [
            { title: "Real-time Chat", desc: "Implemented WebSocket with STOMP & Redis Pub/Sub." },
            { title: "Data Sync", desc: "Eventual consistency model with optimistic UI updates." }
        ],
        json: {
            service: "campus-connect-core",
            status: "active",
            uptime: "99.98%",
            dependencies: ["mongodb", "redis-cluster", "kafka"],
            websocket_connections: 4500
        },
        diagram: (
            <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Nodes */}
                <g transform="translate(50, 100)">
                    <rect x="-30" y="-30" width="60" height="60" rx="4" fill="#1a1a1a" stroke="#3b82f6" strokeWidth="2" />
                    <text x="0" y="45" textAnchor="middle" fill="#9ca3af" fontSize="10">Clients</text>
                    <Smartphone x="-12" y="-12" className="text-blue-500" width="24" height="24" />
                </g>

                <g transform="translate(200, 100)">
                    <rect x="-40" y="-30" width="80" height="60" rx="4" fill="#1a1a1a" stroke="#bf00ff" strokeWidth="2" />
                    <text x="0" y="45" textAnchor="middle" fill="#9ca3af" fontSize="10">API Gateway</text>
                    <Server x="-12" y="-12" className="text-portfolio-violet" width="24" height="24" />
                </g>

                <g transform="translate(350, 100)">
                    <rect x="-30" y="-30" width="60" height="60" rx="4" fill="#1a1a1a" stroke="#22c55e" strokeWidth="2" />
                    <text x="0" y="45" textAnchor="middle" fill="#9ca3af" fontSize="10">DB / Cache</text>
                    <Database x="-12" y="-12" className="text-portfolio-green" width="24" height="24" />
                </g>

                {/* Connections */}
                <path d="M 80 100 L 160 100" stroke="#333" strokeWidth="2" />
                <path d="M 240 100 L 320 100" stroke="#333" strokeWidth="2" />

                {/* Animated Packets */}
                <circle r="4" fill="#3b82f6">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 80 100 L 160 100" />
                </circle>
                <circle r="4" fill="#bf00ff">
                    <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M 240 100 L 320 100" />
                </circle>
            </svg>
        )
    },
    {
        id: "algosched",
        title: "AlgoSched",
        badge: "Scheduling Tool",
        stack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
        problem: "Manual scheduling for university labs was error-prone and time-consuming due to multiple constraints.",
        tradeoff: "Chose Spring Boot over Python to leverage strong typing and robust concurrency for the scheduling engine.",
        challenges: [
            { title: "Optimization", desc: "Genetic algorithm in Java using OptaPlanner." },
            { title: "Consistency", desc: "Fully containerized environment for dev/prod parity." }
        ],
        json: {
            service: "scheduler-engine",
            version: "v2.1.0",
            algorithm: "genetic",
            population_size: 1000,
            mutation_rate: 0.05,
            db_connections: "pooled"
        },
        diagram: (
            <svg viewBox="0 0 400 200" className="w-full h-full">
                <g transform="translate(50, 100)">
                    <circle r="30" fill="#1a1a1a" stroke="#3b82f6" strokeWidth="2" />
                    <text x="0" y="45" textAnchor="middle" fill="#9ca3af" fontSize="10">Admin</text>
                </g>
                <g transform="translate(200, 100)">
                    <path d="M -30 -30 L 30 -30 L 30 30 L -30 30 Z" fill="#1a1a1a" stroke="#22c55e" strokeWidth="2" />
                    <text x="0" y="45" textAnchor="middle" fill="#9ca3af" fontSize="10">Solver</text>
                </g>
                <g transform="translate(350, 100)">
                    <rect x="-25" y="-35" width="50" height="70" rx="4" fill="#1a1a1a" stroke="#3b82f6" strokeWidth="2" />
                    <text x="0" y="50" textAnchor="middle" fill="#9ca3af" fontSize="10">Postgres</text>
                </g>

                <path d="M 80 100 L 170 100" stroke="#333" strokeDasharray="4" />
                <path d="M 230 100 L 325 100" stroke="#333" />

                <circle r="3" fill="#22c55e">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 80 100 L 170 100" />
                </circle>
            </svg>
        )
    },
    {
        id: "manage-mate",
        title: "Manage Mate",
        badge: "Project Management",
        stack: ["Vue.js", "Firebase", "Node.js"],
        problem: "Small teams needed a lightweight project management tool without Jira's bloat.",
        tradeoff: "Accepted vendor lock-in (Firebase) for rapid feature delivery speed.",
        challenges: [
            { title: "Sync", desc: "Real-time updates via Firestore listeners." },
            { title: "Security", desc: "Custom claims in Auth for RBAC." }
        ],
        json: {
            app_id: "manage-mate-prod",
            active_users: 12500,
            cloud_provider: "gcp-firebase",
            regions: ["us-central1", "europe-west1"],
            storage_tier: "blaze"
        },
        diagram: (
            <svg viewBox="0 0 400 200" className="w-full h-full">
                <g transform="translate(100, 50)">
                    <rect x="-20" y="-20" width="40" height="40" rx="20" fill="#1a1a1a" stroke="#f97316" />
                    <text x="0" y="30" textAnchor="middle" fill="#9ca3af" fontSize="10">User A</text>
                </g>
                <g transform="translate(100, 150)">
                    <rect x="-20" y="-20" width="40" height="40" rx="20" fill="#1a1a1a" stroke="#f97316" />
                    <text x="0" y="30" textAnchor="middle" fill="#9ca3af" fontSize="10">User B</text>
                </g>
                <g transform="translate(300, 100)">
                    <circle r="40" fill="#1a1a1a" stroke="#eab308" strokeWidth="2" strokeDasharray="4" />
                    <text x="0" y="55" textAnchor="middle" fill="#9ca3af" fontSize="10">Firebase</text>
                </g>

                <path d="M 120 50 L 260 100" stroke="#333" />
                <path d="M 120 150 L 260 100" stroke="#333" />

                <circle r="3" fill="#eab308">
                    <animateMotion dur="1.5s" repeatCount="indefinite" path="M 120 50 L 260 100" />
                </circle>
                <circle r="3" fill="#eab308">
                    <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.75s" path="M 260 100 L 120 150" />
                </circle>
            </svg>
        )
    }
];

const Projects = () => {
    const [xRayMode, setXRayMode] = useState(false);
    const { addLog } = useLogger();

    const toggleXRay = () => {
        setXRayMode(!xRayMode);
        addLog(xRayMode ? 'X_RAY_MODE_DISABLED' : 'X_RAY_MODE_ENABLED', 'WARN');
    };

    return (
        <section id="projects" className="py-24 bg-portfolio-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-portfolio-border pb-4">
                    <div>
                        <h2 className="text-3xl font-mono font-bold text-white mb-2">
                            Featured System Architectures
                        </h2>
                        <p className="text-gray-400 text-sm">Case studies in distributed design.</p>
                    </div>

                    <button
                        onClick={toggleXRay}
                        className="flex items-center gap-2 px-4 py-2 bg-portfolio-card border border-portfolio-border rounded hover:border-portfolio-cyan/50 transition-all mt-4 md:mt-0 group"
                    >
                        <span className="font-mono text-xs text-portfolio-cyan group-hover:text-white">X-RAY MODE</span>
                        {xRayMode ? <ToggleRight className="text-portfolio-cyan" /> : <ToggleLeft className="text-gray-600" />}
                    </button>
                </div>

                <div className="space-y-32">
                    {projects.map((project) => (
                        <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left Column: Details */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <AnimatePresence mode="wait">
                                    {xRayMode ? (
                                        <motion.div
                                            key="raw"
                                            initial={{ opacity: 0, filter: "blur(10px)" }}
                                            animate={{ opacity: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, filter: "blur(10px)" }}
                                            className="bg-[#050505] p-6 rounded border border-portfolio-cyan/20 font-mono text-xs text-portfolio-cyan overflow-hidden relative"
                                        >
                                            <Terminal className="w-4 h-4 text-gray-600 mb-2" />
                                            <pre>{JSON.stringify(project.json, null, 2)}</pre>
                                            <div className="absolute top-0 left-0 w-full h-1 bg-portfolio-cyan/20 animate-pulse" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="ui"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                                                <span className="px-3 py-1 bg-portfolio-violet/10 text-portfolio-violet text-xs font-mono border border-portfolio-violet/20 rounded-full">
                                                    {project.badge}
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.stack.map(tech => (
                                                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-portfolio-card border border-portfolio-border text-gray-400 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mb-8">
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Problem Statement</h4>
                                                <p className="text-gray-400 leading-relaxed">
                                                    {project.problem}
                                                </p>
                                            </div>

                                            <div className="space-y-6 mb-8">
                                                {project.challenges.map((challenge, i) => (
                                                    <div key={i} className="pl-4 border-l-2 border-portfolio-cyan/30">
                                                        <h5 className="text-white font-bold text-sm mb-1">{challenge.title}</h5>
                                                        <p className="text-sm text-gray-400">
                                                            {challenge.desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="p-4 bg-portfolio-card border-t border-portfolio-border">
                                                <h4 className="text-sm font-bold text-portfolio-dim uppercase tracking-wider mb-2">Trade-offs Considered</h4>
                                                <p className="text-sm text-gray-400 italic">
                                                    "{project.tradeoff}"
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Right Column: Visual */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-[#0a0a0a] rounded-xl border border-portfolio-border p-8 h-[400px] relative overflow-hidden group hover:border-portfolio-cyan/30 transition-colors"
                                onMouseEnter={() => addLog(`HOVER_PROJECT_DIAGRAM: ${project.id}`, 'DEBUG')}
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />

                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="absolute top-0 right-0 font-mono text-xs text-portfolio-dim">
                                        LIVE_DATA_FLOW
                                    </div>
                                    <div className="flex-1 rounded-lg flex items-center justify-center">
                                        {project.diagram}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
