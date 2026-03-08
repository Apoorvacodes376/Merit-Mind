import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Loader, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

export default function Interview() {
  const [answer, setAnswer] = useState('');
  const [jobRole, setJobRole] = useState('Frontend Developer');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!answer.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        standardScore: 61,
        emotionBlindScore: 84,
        biasDetected: 23,
        strengths: [
          'Clear logical structure in your reasoning',
          'Strong technical understanding demonstrated',
          'Relevant examples provided to support your points'
        ],
        improvements: [
          'Add more specific metrics to quantify your achievements',
          'Structure your answer using the STAR method for better clarity'
        ]
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen animated-bg">
      <Navbar />
      <div className="container mx-auto px-6 py-8 fade-in">
        <h1 className="text-4xl font-bold gradient-text mb-8">Interview Prep with EmotionBlind AI</h1>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-purple-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Practice with EmotionBlind AI</h2>
              <p className="text-purple-300 leading-relaxed">
                Your answer is evaluated on reasoning quality only. Not your tone. Not your accent. Not your confidence level.
                This ensures fair evaluation based purely on the substance of your response.
              </p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-purple-300 mb-2 font-semibold">Select Job Role</label>
              <select
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500"
              >
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Data Analyst</option>
                <option>ML Engineer</option>
                <option>Product Manager</option>
                <option>UX Designer</option>
              </select>
            </div>

            <div>
              <label className="block text-purple-300 mb-2 font-semibold">Type or paste your interview answer here</label>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows="10"
                placeholder="Example: Tell me about a time when you faced a challenging technical problem..."
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 resize-none"
              ></textarea>
              <p className="text-purple-400 text-sm mt-2">{answer.length} characters</p>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading || !answer.trim()}
              className="w-full py-4 gradient-bg text-white rounded-full font-semibold text-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="animate-spin" size={20} />
                  Analyzing Answer...
                </>
              ) : (
                'Analyze Answer'
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6 fade-in">
            {/* Score Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Standard Score */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Standard Score</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle cx="64" cy="64" r="56" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="12" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="#ef4444" strokeWidth="12" fill="none"
                        strokeDasharray={`${(result.standardScore / 100) * 352} 352`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-4xl font-bold text-red-400">{result.standardScore}</span>
                      <span className="text-xs text-purple-300">/100</span>
                    </div>
                  </div>
                </div>
                <p className="text-purple-300 text-sm text-center">Includes emotional tone factors</p>
              </div>

              {/* EmotionBlind Score */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-4">EmotionBlind Score</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle cx="64" cy="64" r="56" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="12" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="#10b981" strokeWidth="12" fill="none"
                        strokeDasharray={`${(result.emotionBlindScore / 100) * 352} 352`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-4xl font-bold text-green-400">{result.emotionBlindScore}</span>
                      <span className="text-xs text-purple-300">/100</span>
                    </div>
                  </div>
                </div>
                <p className="text-purple-300 text-sm text-center">Reasoning quality only</p>
              </div>
            </div>

            {/* Bias Alert */}
            <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-yellow-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">⚠️ Emotional Bias Detected</h3>
                  <p className="text-purple-200 leading-relaxed">
                    Your answer scored <span className="font-bold text-yellow-400">{result.biasDetected} points lower</span> due to emotional tone markers. 
                    In a Merit Mind pipeline, your <span className="font-bold text-green-400">EmotionBlind score ({result.emotionBlindScore}/100)</span> is used, 
                    ensuring fair evaluation based on reasoning quality alone.
                  </p>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-green-500/30">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-green-400" size={24} />
                <h3 className="text-xl font-bold text-white">Strengths</h3>
              </div>
              <ul className="space-y-3">
                {result.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-purple-200">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Improvements */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">Areas for Improvement</h3>
              </div>
              <ul className="space-y-3">
                {result.improvements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <span className="text-purple-200">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Try Again Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  setResult(null);
                  setAnswer('');
                }}
                className="px-8 py-3 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full font-semibold hover:bg-purple-500/30 transition-all"
              >
                Try Another Answer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
