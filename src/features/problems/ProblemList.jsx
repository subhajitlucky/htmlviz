import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { problems } from '../../data/problems';
import { CheckCircle, Circle, Trophy, Filter } from 'lucide-react';
import clsx from 'clsx';

export default function ProblemList() {
    const [filter, setFilter] = useState('All');

    const filteredProblems = filter === 'All'
        ? problems
        : problems.filter(p => p.difficulty === filter);

    const getDifficultyColor = (diff) => {
        switch (diff) {
            case 'Easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'Medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
            case 'Hard': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-slate-400';
        }
    };

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">HTML Challenges</h1>
                    <p className="text-slate-400">Master HTML by solving {problems.length} hands-on problems.</p>
                </div>

                <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-slate-700">
                    {['All', 'Easy', 'Medium', 'Hard'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={clsx(
                                "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                                filter === f
                                    ? "bg-primary text-white shadow-lg"
                                    : "text-slate-400 hover:text-white"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-4">
                {filteredProblems.map((problem) => (
                    <Link
                        key={problem.id}
                        to={`/problems/${problem.id}`}
                        className="group block bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 hover:border-primary/50 rounded-xl p-5 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={clsx(
                                    "w-10 h-10 rounded-lg flex items-center justify-center border",
                                    getDifficultyColor(problem.difficulty)
                                )}>
                                    <Trophy size={18} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                                        {problem.id}. {problem.title}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className={clsx("text-xs px-2 py-0.5 rounded-full border", getDifficultyColor(problem.difficulty))}>
                                            {problem.difficulty}
                                        </span>
                                        <span className="text-xs text-slate-500">{problem.category}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                {/* Placeholder for solved status */}
                                <Circle className="text-slate-600" size={20} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
