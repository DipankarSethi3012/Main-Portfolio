import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw } from 'lucide-react';
import { useLogger } from '../context/LoggerContext';

const ApiPlayground = () => {
    const [method, setMethod] = useState('GET');
    const [endpoint, setEndpoint] = useState('/api/v1/users/current');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState<any>(null);
    const { addLog } = useLogger();

    const handleRequest = () => {
        setIsLoading(true);
        setResponse(null);
        addLog(`API_REQUEST: ${method} ${endpoint}`, 'INFO');

        // Simulate network delay
        setTimeout(() => {
            setIsLoading(false);
            setResponse({
                status: 200,
                ok: true,
                data: {
                    id: "usr_8723",
                    name: "Dipankar Sethi",
                    role: "Admin",
                    permissions: ["read:users", "write:system"],
                    last_login: new Date().toISOString()
                },
                headers: {
                    "content-type": "application/json",
                    "x-cache": "MISS",
                    "x-powered-by": "Spring Boot"
                }
            });
            addLog(`API_RESPONSE: 200 OK`, 'INFO');
        }, 1200);
    };

    return (
        <div className="mt-8 border border-portfolio-border rounded-lg bg-[#0a0a0a] overflow-hidden font-mono text-sm max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-portfolio-border bg-[#111]">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-gray-500 text-xs">API Interactive Console</span>
            </div>

            {/* Request Bar */}
            <div className="p-4 flex flex-col sm:flex-row gap-4 bg-[#0a0a0a]">
                <div className="flex-1 flex bg-[#050505] border border-portfolio-border rounded overflow-hidden">
                    <select
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className="bg-[#111] text-portfolio-cyan font-bold px-3 py-2 outline-none border-r border-portfolio-border"
                    >
                        <option>GET</option>
                        <option>POST</option>
                    </select>
                    <input
                        type="text"
                        value={endpoint}
                        onChange={(e) => setEndpoint(e.target.value)}
                        className="flex-1 bg-transparent text-gray-300 px-3 outline-none"
                    />
                </div>
                <button
                    onClick={handleRequest}
                    disabled={isLoading}
                    className={`
                    flex items-center gap-2 px-6 py-2 rounded font-bold transition-all
                    ${isLoading ? 'bg-gray-800 text-gray-500' : 'bg-portfolio-cyan/10 text-portfolio-cyan hover:bg-portfolio-cyan/20 border border-portfolio-cyan/50'}
                `}
                >
                    {isLoading ? <RotateCcw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                    <span>SEND</span>
                </button>
            </div>

            {/* Response Area */}
            <AnimatePresence>
                {response && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 pb-4 overflow-hidden"
                    >
                        <div className="mb-2 flex items-center gap-2 text-xs">
                            <span className="text-green-500 font-bold">200 OK</span>
                            <span className="text-gray-500">1.2s</span>
                            <span className="text-gray-500">842B</span>
                        </div>
                        <div className="bg-[#050505] p-4 rounded border border-portfolio-border relative group">
                            <pre className="text-xs text-gray-300 overflow-x-auto custom-scrollbar">
                                {JSON.stringify(response, null, 2)}
                            </pre>

                            {/* Syntax Highlight overlay (fake) */}
                            <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay bg-gradient-to-tr from-portfolio-violet/5 to-transparent" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ApiPlayground;
