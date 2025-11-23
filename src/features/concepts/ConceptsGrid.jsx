import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { htmlTags } from '../../data/html-tags';
import { Search, Filter } from 'lucide-react';
import clsx from 'clsx';

export default function ConceptsGrid() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(htmlTags.map(tag => tag.category))];

    const filteredTags = htmlTags.filter(tag => {
        const matchesSearch = tag.tag.toLowerCase().includes(search.toLowerCase()) ||
            tag.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = activeCategory === 'All' || tag.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto pb-20">
            {/* Header */}
            <div className="text-center mb-16 pt-10">
                <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    The HTML Universe
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Explore every HTML element. Click on a card to master the concept through interactive visualization.
                </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sticky top-24 z-40 bg-dark/80 backdrop-blur-xl p-4 rounded-2xl border border-white/5 shadow-2xl">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search tags (e.g., <div>, table)..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                    />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={clsx(
                                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                                activeCategory === cat
                                    ? "bg-white text-dark shadow-lg shadow-white/10"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTags.map((item) => (
                    <Link
                        key={item.id}
                        to={`/learn/${item.id}`}
                        className="group relative bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:bg-slate-800/60 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="text-primary" size={24} />
                            </div>
                            <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded-md border border-slate-800">
                                {item.category}
                            </span>
                        </div>

                        <h3 className="text-2xl font-mono font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {item.tag}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
