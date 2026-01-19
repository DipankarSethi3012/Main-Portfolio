import { useEffect, useRef } from 'react';
import { useLogger } from '../context/LoggerContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Activity } from 'lucide-react';
import { useState } from 'react';

const LogStream = () => {
    const { logs } = useLogger();
    const bottomRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (isOpen) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [logs, isOpen]);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-0 pointer-events-none flex flex-col items-end sm:items-stretch sm:px-0">
            <div className="w-full sm:w-96 bg-[#0a0a0a]/90 backdrop-blur-md border md:border-b-0 border-x border-t border-portfolio-border rounded-t-lg shadow-2xl pointer-events-auto flex flex-col max-h-[300px] transition-all duration-300">

                {/* Header */}
                <div
                    className="flex items-center justify-between px-3 py-2 border-b border-portfolio-border bg-[#050505] cursor-pointer hover:bg-[#111]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center gap-2">
                        <Activity className="w-3 h-3 text-portfolio-green animate-pulse" />
                        <span className="font-mono text-xs text-gray-400">SYSTEM_LOGS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-gray-600">tail -f</span>
                        {isOpen ? <ChevronDown className="w-3 h-3 text-gray-500" /> : <ChevronUp className="w-3 h-3 text-gray-500" />}
                    </div>
                </div>

                {/* Logs */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-y-auto p-2 font-mono text-[10px] space-y-1 h-32 sm:h-48 scrollbar-thin scrollbar-thumb-portfolio-border scrollbar-track-transparent bg-black/80"
                        >
                            {logs.length === 0 && <div className="text-gray-700 italic">Waiting for system events...</div>}
                            {logs.map((log) => (
                                <div key={log.id} className="flex gap-2">
                                    <span className="text-gray-600">[{log.timestamp}]</span>
                                    <span className={`
                                ${log.level === 'INFO' ? 'text-blue-400' : ''}
                                ${log.level === 'WARN' ? 'text-yellow-400' : ''}
                                ${log.level === 'ERROR' ? 'text-red-400' : ''}
                                ${log.level === 'DEBUG' ? 'text-gray-500' : ''}
                            `}>
                                        {log.level}
                                    </span>
                                    <span className="text-gray-400 truncate">{log.message}</span>
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default LogStream;
