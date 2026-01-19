/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                portfolio: {
                    bg: "#050505",
                    card: "#0a0a0a",
                    border: "#1a1a1a",
                    highlight: "#1f1f1f", // slightly lighter for hover
                    cyan: "#00ffff",
                    violet: "#bf00ff",
                    green: "#39ff14",
                    dim: "#888888", // dimmed text
                }
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
