import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, FileText, Mail, ArrowRight, Code } from 'lucide-react';
import { useLogger } from '../context/LoggerContext';

const commands = [
    { id: 'home', title: 'Go to Home', icon: <Terminal className="w-4 h-4" />, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { id: 'projects', title: 'Go to Projects', icon: <Code className="w-4 h-4" />, action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'experience', title: 'Go to Experience', icon: <ArrowRight className="w-4 h-4" />, action: () => document.getElementById('experience-timeline')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'resume', title: 'Download Resume', icon: <FileText className="w-4 h-4" />, action: () => window.open('/resume.pdf', '_blank') },
    { id: 'email', title: 'Send Email', icon: <Mail className="w-4 h-4" />, action: () => window.location.href = 'mailto:hello@example.com' },
];

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { addLog } = useLogger();

    const filteredCommands = commands.filter(cmd =>
        cmd.title.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
                addLog('USER_INITIATED_COMMAND_PALETTE', 'INFO');
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [addLog]);

    const executeCommand = (cmd: typeof commands[0]) => {
        addLog(`EXECUTING_COMMAND: ${cmd.id}`, 'INFO');
        cmd.action();
        setIsOpen(false);
        setQuery('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-lg bg-[#0a0a0a] border border-portfolio-border shadow-2xl rounded-lg overflow-hidden"
                    >
                        <div className="flex items-center px-4 py-3 border-b border-portfolio-border">
                            <Search className="w-5 h-5 text-gray-500 mr-3" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command..."
                                className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none font-mono text-sm"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
                                        executeCommand(filteredCommands[selectedIndex]);
                                    }
                                    if (e.key === 'ArrowDown') {
                                        e.preventDefault();
                                        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
                                    }
                                    if (e.key === 'ArrowUp') {
                                        e.preventDefault();
                                        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
                                    }
                                }}
                            />
                            <div className="hidden sm:flex items-center gap-1 text-xs text-gray-600 font-mono border border-portfolio-border rounded px-1.5 py-0.5">
                                <span>ESC</span>
                            </div>
                        </div>

                        <div className="max-h-[300px] overflow-y-auto py-2">
                            {filteredCommands.length === 0 ? (
                                <div className="px-4 py-8 text-center text-gray-500 font-mono text-sm">
                                    No commands found.
                                </div>
                            ) : (
                                filteredCommands.map((cmd, index) => (
                                    <button
                                        key={cmd.id}
                                        onClick={() => executeCommand(cmd)}
                                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${index === selectedIndex ? 'bg-portfolio-highlight' : 'hover:bg-portfolio-highlight/50'
                                            }`}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-1 rounded ${index === selectedIndex ? 'text-white' : 'text-gray-400'}`}>
                                                {cmd.icon}
                                            </div>
                                            <span className={`font-mono text-sm ${index === selectedIndex ? 'text-white' : 'text-gray-400'}`}>
                                                {cmd.title}
                                            </span>
                                        </div>
                                        {index === selectedIndex && (
                                            <ArrowRight className="w-4 h-4 text-portfolio-cyan" />
                                        )}
                                    </button>
                                ))
                            )}
                        </div>

                        <div className="px-4 py-2 bg-[#050505] border-t border-portfolio-border flex justify-between items-center text-[10px] text-gray-600 font-mono">
                            <span>Navigate: ↑↓</span>
                            <span>Select: Enter</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
