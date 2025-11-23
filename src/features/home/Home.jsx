import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Layers, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Home() {
    return (
        <div className="relative isolate pt-6">
            <div className="py-6 sm:py-8 lg:pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="mx-auto max-w-4xl text-center"
                    >

                        {/* Badge */}
                        <motion.div variants={item} className="mb-8 flex justify-center">
                            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-primary ring-1 ring-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors font-mono">
                                v2.0: Interactive Learning Engine
                            </div>
                        </motion.div>

                        <motion.h1 variants={item} className="text-5xl font-display font-bold tracking-tighter text-white sm:text-8xl mb-8">
                            MASTER HTML <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">VISUALLY</span>
                        </motion.h1>

                        <motion.p variants={item} className="mt-6 text-xl leading-8 text-slate-400 max-w-2xl mx-auto font-medium">
                            Stop reading documentation. Start building. Experience the web's building blocks through
                            <span className="text-white font-bold"> interactive visualizations</span> and
                            <span className="text-white font-bold"> real-time compilation</span>.
                        </motion.p>

                        <motion.div variants={item} className="mt-12 flex items-center justify-center gap-x-6">
                            <Link
                                to="/learn"
                                className="rounded-full bg-primary px-8 py-4 text-base font-bold text-dark shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(204,255,0,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Start Learning
                            </Link>
                            <Link to="/playground" className="text-base font-bold leading-6 text-white flex items-center gap-2 hover:text-primary transition-colors group">
                                Open Playground <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Feature Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-24 flow-root sm:mt-32"
                    >
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                            <FeatureCard
                                icon={Layers}
                                title="Visual Intuition"
                                desc="Don't just memorize tags. See how the DOM works with interactive 3D-style visualizers for Box Model and Flexbox."
                            />
                            <FeatureCard
                                icon={Code2}
                                title="Live Compiler"
                                desc="Professional Monaco editor environment. Write code and see the result instantly with zero setup."
                            />
                            <FeatureCard
                                icon={Zap}
                                title="Gamified Mastery"
                                desc="20+ curated challenges with automated validation. Level up your skills from novice to architect."
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, desc }) {
    return (
        <div className="relative rounded-2xl border border-white/5 bg-surface p-8 hover:border-primary/50 transition-colors group duration-300">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                <Icon className="h-6 w-6 text-primary group-hover:text-dark" />
            </div>
            <h3 className="text-xl font-display font-bold leading-8 text-white mb-3">{title}</h3>
            <p className="text-base leading-7 text-slate-400">{desc}</p>
        </div>
    );
}
