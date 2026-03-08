import { useNavigate } from 'react-router-dom';
import { Search, FileEdit, Users, Brain, Scale, RefreshCw, TrendingUp, Award } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    { icon: Search, title: 'Intersectional Bias Detection', desc: 'Catches compounded discrimination' },
    { icon: FileEdit, title: 'Autonomous JD Rewriting', desc: 'Eliminates bias at the source' },
    { icon: Users, title: 'Counterfactual Simulator', desc: 'Tests fairness scientifically' },
    { icon: RefreshCw, title: 'Dynamic Fairness Optimizer', desc: 'Merit + fairness balanced' },
    { icon: Brain, title: 'Skill Graph Intelligence', desc: 'Capability over keywords' },
    { icon: RefreshCw, title: 'Reverse Bias Simulator', desc: 'Pre-hiring stress test' },
    { icon: TrendingUp, title: 'Emotion-Blind AI', desc: 'Merit + fairness balanced' },
    { icon: Scale, title: 'Silence Rank AI', desc: 'Pre-hiring stress test' }
  ];

  const stats = [
    { label: '↑ 30% Diversity Index', value: 30 },
    { label: '↑ 44% Hiring Quality', value: 44 },
    { label: '↓ 50% Bias Cases', value: 50 },
    { label: '↑ 25% Candidate Trust', value: 25 }
  ];

  return (
    <div className="min-h-screen animated-bg fade-in">
      {/* Floating Orbs */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl floating" style={{ animationDelay: '0s' }}></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-1/2 left-1/2 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl floating" style={{ animationDelay: '4s' }}></div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-purple-500/30 mb-6">
            <span className="text-sm text-purple-300">Hack'her'thon 3.0 | SVCE | SW-02</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold gradient-text mb-6">Merit Mind</h1>
          <p className="text-2xl md:text-3xl text-purple-200 mb-12 max-w-4xl mx-auto">
            Agentic AI System for Bias-Free and Inclusive Recruitment
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate('/login?role=recruiter')}
              className="px-10 py-4 gradient-bg text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              I'm a Recruiter
            </button>
            <button
              onClick={() => navigate('/login?role=candidate')}
              className="px-10 py-4 bg-transparent border-2 border-pink-500 text-pink-300 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-pink-500/10 hover:scale-105"
            >
              I'm a Candidate
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 mb-32">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Powered by AI Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 transition-all duration-300 card-hover cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-purple-200">{feature.title}</h3>
                <p className="text-purple-300/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Real Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 text-center transition-all duration-300 card-hover"
              >
                <div className="text-5xl font-bold gradient-text mb-2">{stat.value}%</div>
                <div className="text-purple-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-purple-400 py-8 border-t border-purple-500/20">
          <p>Merit Mind © 2025 | Team Merit Mind | SVCE</p>
        </div>
      </div>
    </div>
  );
}
