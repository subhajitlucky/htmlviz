import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, BookOpen, Terminal, Trophy, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';

const NavLink = ({ to, icon: Icon, children }) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(to);

    return (
        <Link
            to={to}
            className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300",
                isActive
                    ? "bg-primary text-dark shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
            )}
        >
            <Icon size={16} strokeWidth={2.5} />
            <span className="font-display tracking-wide">{children}</span>
        </Link>
    );
};

export default function Navbar() {
    const [isDark, setIsDark] = React.useState(true);

    React.useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            setIsDark(false);
            document.documentElement.classList.add('light');
        } else {
            setIsDark(true);
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <nav className="h-24 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 bg-dark/80 backdrop-blur-xl border-b border-white/5">
            <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.2)] group-hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all duration-300">
                    <Code2 className="text-dark" size={24} strokeWidth={2.5} />
                </div>
                <span className="text-xl font-display font-bold text-white tracking-tighter group-hover:text-primary transition-colors">
                    HTMLViz
                </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 bg-surface/50 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
                <NavLink to="/learn" icon={BookOpen}>Concepts</NavLink>
                <NavLink to="/playground" icon={Terminal}>Playground</NavLink>
                <NavLink to="/problems" icon={Trophy}>Challenges</NavLink>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <Link to="/about" className="px-4 py-2 rounded-full bg-surface border border-white/10 flex items-center gap-2 text-slate-400 font-bold hover:border-primary hover:text-primary transition-all text-sm">
                    <span>About</span>
                </Link>
            </div>
        </nav>
    );
}
