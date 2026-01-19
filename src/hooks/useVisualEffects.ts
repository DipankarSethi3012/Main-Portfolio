import { useState, useEffect, useCallback } from 'react';

// Glitch Effect Hook
export const useGlitch = (text: string) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    const triggerGlitch = useCallback(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((_, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }, [text]);

    return { displayText, triggerGlitch };
};

// Typewriter Effect Hook
export const useTypewriter = (text: string, speed = 30) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return displayText;
};
