import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-portfolio-card border-t border-portfolio-border py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-mono text-lg font-bold text-white mb-2">
                            &gt; Ready to scale?
                        </h3>
                        <p className="text-gray-400 max-w-md text-sm">
                            Let's build systems that don't break under pressure.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/DipankarSethi3012"
                            className="text-gray-400 hover:text-portfolio-cyan transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dipankar-sethi-a10a93244/"
                            className="text-gray-400 hover:text-portfolio-violet transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:dipankarsethi3012@gmail.com"
                            className="text-gray-400 hover:text-portfolio-green transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-portfolio-border/50 flex flex-col md:flex-row justify-between items-center text-xs text-portfolio-dim font-mono">
                    <p>&copy; {new Date().getFullYear()} System.Arch(). All systems operational.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span>UPTIME: 99.9%</span>
                        </span>
                        <span>MEM: {Math.floor(Math.random() * 20 + 10)}MB</span>
                        <span>LOC: US-EAST-1</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
