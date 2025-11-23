import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { htmlTags } from '../../data/html-tags';
import { Search, Grid, List as ListIcon, Map } from 'lucide-react';
import clsx from 'clsx';

export default function ConceptsGrid() {
    const [search, setSearch] = useState('');
    const [viewMode, setViewMode] = useState('path'); // 'grid' or 'path'

    const filteredTags = htmlTags.filter(tag =>
        tag.tag.toLowerCase().includes(search.toLowerCase()) ||
        tag.description.toLowerCase().includes(search.toLowerCase())
    );

    // Group by Levels for Path View
    const levels = {
        'Core Concept': [],
        '1. Foundation': [],
        '2. Content': [],
        '3. Layout': [],
        '4. Lists & Tables': [],
        '5. Media': [],
        '6. Forms': [],
        '6. Interactive': []
    };

    filteredTags.forEach(tag => {
        const level = tag.level || 'Other';
        if (!levels[level]) levels[level] = [];
        levels[level].push(tag);
    });

    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header Controls */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-display font-bold text-white mb-2">Concept Galaxy</h1>
                        <p className="text-slate-400">Master the building blocks of the web.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* View Toggle */}
                        <div className="bg-surface border border-white/10 rounded-lg p-1 flex items-center">
                            <button
                                onClick={() => setViewMode('path')}
                                className={clsx(
                                    "px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-all",
                                    viewMode === 'path' ? "bg-primary text-dark" : "text-slate-400 hover:text-white"
                                )}
                            >
                                <Map size={16} /> Path
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={clsx(
                                    "px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-all",
                                    viewMode === 'grid' ? "bg-primary text-dark" : "text-slate-400 hover:text-white"
                                )}
                            >
                                <Grid size={16} /> Grid
                            </button>
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input
                                type="text"
                                placeholder="Search tags..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-surface border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 w-64 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* PATH VIEW */}
                {viewMode === 'path' && (
                    <div className="space-y-16 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

                        {Object.entries(levels).map(([levelName, tags]) => (
                            tags.length > 0 && (
                                <div key={levelName} className="relative md:pl-24">
                                    {/* Level Marker */}
                                    <div className="absolute left-0 top-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-dark border-2 border-primary text-primary font-bold shadow-[0_0_20px_rgba(204,255,0,0.2)] z-10">
                                        {levelName.split('.')[0]}
                                    </div>

                                    <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="md:hidden text-primary">#</span> {levelName.replace(/^\d+\.\s/, '')}
                                    </h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {tags.map(tag => (
                                            <TagCard key={tag.id} tag={tag} />
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                )}

                {/* GRID VIEW */}
                {viewMode === 'grid' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredTags.map((tag) => (
                            <TagCard key={tag.id} tag={tag} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

function TagCard({ tag }) {
    const Icon = tag.icon;
    return (
        <Link
            to={`/learn/${tag.id}`}
            className="group relative bg-surface border border-white/5 rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-colors">
                    <Icon size={20} className="text-slate-400 group-hover:text-dark" />
                </div>
                <span className="text-xs font-mono text-slate-500 border border-white/5 px-2 py-1 rounded-full uppercase tracking-wider">
                    {tag.category}
                </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                {tag.tag}
            </h3>
            <p className="text-sm text-slate-400 line-clamp-2">
                {tag.description}
            </p>
        </Link>
    );
}
