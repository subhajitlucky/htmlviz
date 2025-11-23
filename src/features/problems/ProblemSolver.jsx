import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { problems } from '../../data/problems';
import CodeEditor from '../compiler/CodeEditor';
import LivePreview from '../compiler/LivePreview';
import { ArrowLeft, CheckCircle, XCircle, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProblemSolver() {
    const { id } = useParams();
    const navigate = useNavigate();
    const problem = problems.find(p => p.id === parseInt(id));

    const [code, setCode] = useState('');
    const [status, setStatus] = useState('idle'); // idle, success, error
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        if (problem) {
            setCode(problem.initialCode || '');
            setStatus('idle');
            setFeedback('');
        }
    }, [problem]);

    if (!problem) return <div className="text-white">Problem not found</div>;

    const checkSolution = () => {
        let passed = false;
        const { validation } = problem;

        if (validation.type === 'includes') {
            passed = validation.value.every(val => code.includes(val));
        } else if (validation.type === 'regex') {
            passed = validation.value.test(code);
        }

        if (passed) {
            setStatus('success');
            setFeedback('Great job! Solution is correct.');
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            setStatus('error');
            setFeedback('Not quite right. Check the requirements and try again.');
        }
    };

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/problems')}
                        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-white flex items-center gap-2">
                            {problem.id}. {problem.title}
                            <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                                {problem.difficulty}
                            </span>
                        </h1>
                    </div>
                </div>

                <button
                    onClick={checkSolution}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500 transition-colors font-bold shadow-lg shadow-green-900/20"
                >
                    <Play size={18} fill="currentColor" />
                    Submit Answer
                </button>
            </div>

            <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
                {/* Description Panel */}
                <div className="col-span-3 bg-slate-900/50 border border-slate-800 rounded-xl p-6 overflow-y-auto">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Description</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        {problem.description}
                    </p>

                    {status !== 'idle' && (
                        <div className={`p-4 rounded-lg border ${status === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                            <div className="flex items-center gap-2 font-bold mb-1">
                                {status === 'success' ? <CheckCircle size={18} /> : <XCircle size={18} />}
                                {status === 'success' ? 'Success!' : 'Incorrect'}
                            </div>
                            <p className="text-sm opacity-90">{feedback}</p>
                        </div>
                    )}
                </div>

                {/* Editor & Preview */}
                <div className="col-span-9 grid grid-cols-2 gap-6">
                    <CodeEditor code={code} onChange={setCode} />
                    <LivePreview code={code} />
                </div>
            </div>
        </div>
    );
}
