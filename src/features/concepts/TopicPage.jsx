import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { htmlTags } from '../../data/html-tags';
import BoxModelVisualizer from './Visualizers/BoxModelVisualizer';
import { ArrowLeft, Code2, BookOpen, Sparkles } from 'lucide-react';

// Map specific visualizers
const VISUALIZERS = {
    'box-model': BoxModelVisualizer,
};

export default function TopicPage() {
    const { topicId } = useParams();

    // Find the tag data
    const tagData = htmlTags.find(t => t.id === topicId) || htmlTags.find(t => t.id === 'html');
    const Visualizer = VISUALIZERS[topicId];

    if (!tagData) return <div className="text-white">Topic not found</div>;

    return (
        <div className="max-w-4xl mx-auto pb-20 pt-6">
            <Link to="/learn" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-6 transition-colors group text-sm font-medium">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Concepts
            </Link>

            <div className="space-y-8">

                {/* Compact Header */}
                <div className="flex items-start gap-5 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <tagData.icon className="text-primary" size={24} strokeWidth={2} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-2">{tagData.tag}</h1>
                        <p className="text-lg text-slate-300 font-medium">
                            {tagData.description}
                        </p>
                    </div>
                </div>

                {/* Explanation - Clean & Breathable */}
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-slate-300 leading-relaxed">
                        {tagData.explanation || "No detailed explanation available yet."}
                    </p>
                </div>

                {/* Interactive Visualizer (if exists) */}
                {Visualizer && (
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Sparkles className="text-primary" size={20} />
                            Interactive Lab
                        </h3>
                        <div className="border border-white/10 rounded-xl overflow-hidden bg-surface shadow-lg">
                            <div className="p-6">
                                <Visualizer />
                            </div>
                        </div>
                    </div>
                )}

                {/* Live Example - Compact & Functional */}
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Code2 className="text-primary" size={20} />
                        Live Example
                    </h3>

                    <div className="bg-surface border border-white/10 rounded-xl overflow-hidden shadow-lg ring-1 ring-white/5">

                        {/* Window Controls */}
                        <div className="bg-dark border-b border-white/5 px-4 py-2 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-500">
                                <span className="text-xs font-mono font-bold uppercase tracking-wider">Preview</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                        </div>

                        {/* Code Block */}
                        <div className="p-4 bg-dark/50 border-b border-white/5">
                            <pre className="font-mono text-sm text-blue-300 overflow-x-auto custom-scrollbar">
                                <code>{tagData.exampleCode || "<!-- No example code -->"}</code>
                            </pre>
                        </div>

                        {/* Preview */}
                        <div className="relative group">
                            <div className="h-48 bg-white">
                                <iframe
                                    title="preview"
                                    srcDoc={tagData.exampleCode}
                                    className="w-full h-full border-none"
                                    sandbox="allow-scripts"
                                />
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-3 bg-dark border-t border-white/5">
                            <Link
                                to="/playground"
                                className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white/5 hover:bg-primary hover:text-dark text-white text-sm font-bold transition-all duration-200 group"
                            >
                                <Code2 size={16} />
                                Open in Playground
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
