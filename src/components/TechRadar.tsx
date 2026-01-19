import { motion } from 'framer-motion';
import { useState } from 'react';

const radarData = [
    { name: "Java 21", ring: "Adopt", quadrant: "Languages" },
    { name: "Spring Boot 3", ring: "Adopt", quadrant: "Frameworks" },
    { name: "Kafka", ring: "Adopt", quadrant: "Infrastructure" },
    { name: "PostgreSQL", ring: "Adopt", quadrant: "Datastore" },
    { name: "Go", ring: "Trial", quadrant: "Languages" },
    { name: "Rust", ring: "Assess", quadrant: "Languages" },
    { name: "GraphQL", ring: "Assess", quadrant: "Protocols" },
    { name: "PHP", ring: "Hold", quadrant: "Languages" },
    { name: "Mongo", ring: "Trial", quadrant: "Datastore" },
    { name: "Kubernetes", ring: "Adopt", quadrant: "Infrastructure" },
];

const rings = [
    { name: "Adopt", radius: 100, color: "border-green-500/50" },
    { name: "Trial", radius: 200, color: "border-blue-500/50" },
    { name: "Assess", radius: 300, color: "border-yellow-500/50" },
    { name: "Hold", radius: 400, color: "border-red-500/50" },
];

const TechRadar = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <section className="py-24 bg-portfolio-bg overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-mono font-bold text-white mb-4">
                        &lt;Technology_Radar /&gt;
                    </h2>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
                        Strategic Technology Evaluation
                    </p>
                </div>

                <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
                    {/* Radar Rings */}
                    {rings.map((ring, index) => (
                        <div
                            key={ring.name}
                            className={`absolute rounded-full border ${ring.color} flex items-start justify-center pt-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest`}
                            style={{
                                width: `${ring.radius * 2}px`,
                                height: `${ring.radius * 2}px`,
                                zIndex: 10 - index
                            }}
                        >
                            <span className="bg-portfolio-bg px-2">{ring.name}</span>
                        </div>
                    ))}

                    {/* Crosshairs */}
                    <div className="absolute w-full h-px bg-gray-800" />
                    <div className="absolute h-full w-px bg-gray-800" />

                    {/* Items */}
                    {radarData.map((item, index) => {
                        // Simple deterministic positioning based on hash of string
                        const hash = item.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                        const angle = (hash % 360) * (Math.PI / 180);

                        // Distance based on ring
                        const ringDef = rings.find(r => r.name === item.ring) || rings[0];
                        // Add some randomness within the ring width (assuming 100px steps)
                        const distance = ringDef.radius - 20 - (hash % 60);

                        const x = Math.cos(angle) * distance;
                        const y = Math.sin(angle) * distance;

                        return (
                            <motion.div
                                key={item.name}
                                className="absolute cursor-pointer group"
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                onMouseEnter={() => setHoveredItem(item.name)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className={`w-3 h-3 rounded-full ${item.ring === 'Adopt' ? 'bg-green-500' :
                                        item.ring === 'Trial' ? 'bg-blue-500' :
                                            item.ring === 'Assess' ? 'bg-yellow-500' : 'bg-red-500'
                                    } shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-150 transition-transform`} />

                                <div className={`absolute left-4 top-1/2 -translate-y-1/2 bg-[#050505] border border-gray-700 px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none transition-opacity ${hoveredItem === item.name ? 'opacity-100' : 'opacity-0'}`}>
                                    <span className="text-white font-mono text-xs font-bold">{item.name}</span>
                                    <span className="text-gray-500 text-[9px] block uppercase">{item.quadrant}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechRadar;
