import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-primary/30">
            <Navbar />

            <main className="pt-24 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
