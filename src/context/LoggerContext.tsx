import React, { createContext, useContext, useState, useCallback } from 'react';

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

export interface LogEntry {
    id: string;
    timestamp: string;
    level: LogLevel;
    message: string;
}

interface LoggerContextType {
    logs: LogEntry[];
    addLog: (message: string, level?: LogLevel) => void;
}

const LoggerContext = createContext<LoggerContextType | undefined>(undefined);

export const LoggerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [logs, setLogs] = useState<LogEntry[]>([]);

    const addLog = useCallback((message: string, level: LogLevel = 'INFO') => {
        const newLog: LogEntry = {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: new Date().toISOString().split('T')[1].split('.')[0],
            level,
            message,
        };
        setLogs(prev => [...prev.slice(-49), newLog]); // Keep last 50 logs
    }, []);

    return (
        <LoggerContext.Provider value={{ logs, addLog }}>
            {children}
        </LoggerContext.Provider>
    );
};

export const useLogger = () => {
    const context = useContext(LoggerContext);
    if (!context) {
        throw new Error('useLogger must be used within a LoggerProvider');
    }
    return context;
};
