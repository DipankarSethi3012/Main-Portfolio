import { motion } from 'framer-motion';
import { Network, Briefcase, Server, Cloud } from 'lucide-react';

const experiences = [
    {
        company: "MyFamily",
        role: "Software Developer Intern",
        period: "Recent",
        icon: <Server className="w-5 h-5 text-portfolio-cyan" />,
        description: "Core software developer designing scalable microservices architecture.",
        tech: ["Microservices", "AWS", "Redis", "OpenTelemetry", "PostgreSQL", "Spring AOP"],
        points: [
            "Designed 4 microservices enabling async communication.",
            "Integrated Redis for caching store refresh tokens.",
            "Implemented materialized views and DB functions (PostgreSQL).",
            "Enabled distributed tracing using Micrometer OpenTelemetry.",
            "Deployed on AWS (Elastic Beanstalk, S3, Route 53, CloudFront).",
            "Implemented Granular Authorities RBAC and Audit Logging with Spring AOP."
        ]
    },
    {
        company: "Microsoft",
        role: "Cloud and AI Engineering Intern",
        period: "Past",
        icon: <Cloud className="w-5 h-5 text-blue-400" />,
        description: "Working on cutting-edge AI integration and authentications.",
        tech: ["Python", "FastAPI", "Semantic Kernel", "Azure", "MySQL"],
        points: [
            "Worked on Code Agents using Semantic Kernel.",
            "Implemented Role-Based and MSAL Authentication.",
            "Handled request throttling and managed Azure ARM Templates.",
            "Optimized database interactions with MySQL."
        ]
    },
    {
        company: "University Readiness Academy",
        role: "Technical Lead Intern",
        period: "Past",
        icon: <Briefcase className="w-5 h-5 text-portfolio-violet" />,
        description: "Led technical development for campus connectivity solutions.",
        tech: ["Spring Boot", "Spring Security", "RBAC"],
        points: [
            "Developed 'Campus Connect' platform.",
            "Implemented robust Spring Security with RBAC.",
            "Ensured strict input validation and secure data handling."
        ]
    },
    {
        company: "Smarten (Chitkara University)",
        role: "Backend Developer Intern",
        period: "Past",
        icon: <Network className="w-5 h-5 text-portfolio-green" />,
        description: "Early stage startup experience focusing on rapid delivery.",
        tech: ["Spring Boot", "REST APIs", "Spring Security"],
        points: [
            "Delivered 10+ projects within strict deadlines.",
            "Focused on mastering Spring Boot ecosystem and RESTful API design.",
            "Implemented core security modules."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience-timeline" className="py-24 bg-portfolio-bg relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-mono font-bold text-white mb-4">
                        <span className="text-portfolio-cyan">&gt;</span> Experience_Log
                    </h2>
                    <p className="text-gray-400 max-w-2xl font-mono text-sm">
                        /var/log/career_history.log --tail
                    </p>
                </div>

                <div className="relative border-l border-portfolio-border ml-3 lg:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 lg:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 bg-portfolio-bg border border-portfolio-cyan rounded-full group-hover:bg-portfolio-cyan transition-colors" />

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <span className="hidden sm:inline text-gray-600">@</span>
                                <span className="text-portfolio-violet font-mono">{exp.company}</span>
                            </div>

                            <div className="mb-4 text-xs font-mono text-gray-500 flex items-center gap-2">
                                {exp.icon}
                                <span>{exp.period}</span>
                            </div>

                            <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-6 hover:border-portfolio-cyan/30 transition-all duration-300">
                                <p className="text-gray-300 mb-4 font-sans text-sm">
                                    {exp.description}
                                </p>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {exp.tech.map(t => (
                                        <span key={t} className="px-2 py-0.5 bg-portfolio-bg rounded border border-portfolio-border text-[10px] text-gray-400 font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-2">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                            <span className="text-portfolio-cyan mt-1.5 text-[8px]">▶</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
