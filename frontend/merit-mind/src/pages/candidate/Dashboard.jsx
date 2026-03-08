import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Shield, CheckCircle, X } from 'lucide-react';

export default function CandidateDashboard() {
  const [selectedApp, setSelectedApp] = useState(null);

  const stats = [
    { label: 'Applications Submitted', value: '5' },
    { label: 'Shortlisted', value: '2' },
    { label: 'Under Review', value: '2' },
    { label: 'SilenceRank Score', value: '87/100' }
  ];

  const applications = [
    { id: 1, company: 'Company #R1', job: 'Frontend Developer', date: '2025-01-15', status: 'Shortlisted', score: 89, reason: 'Ranked #2 because your React and TypeScript skills match 94% of requirements. Promoted due to fairness correction that detected career gap penalty.' },
    { id: 2, company: 'Company #R2', job: 'Full Stack Developer', date: '2025-01-14', status: 'Under Review', score: 85, reason: 'Currently under evaluation. Your Node.js and database skills are strong matches for this role.' },
    { id: 3, company: 'Company #R3', job: 'UI/UX Developer', date: '2025-01-12', status: 'Shortlisted', score: 91, reason: 'Ranked #1 because your UI/UX and React skills perfectly match requirements. Strong portfolio demonstration.' },
    { id: 4, company: 'Company #R4', job: 'Software Engineer', date: '2025-01-10', status: 'Under Review', score: 82, reason: 'Your technical skills meet the requirements. Evaluation in progress.' },
    { id: 5, company: 'Company #R5', job: 'Web Developer', date: '2025-01-08', status: 'Rejected', score: 68, reason: 'While your skills are strong, other candidates had more specific experience with the required tech stack.' }
  ];

  const topSkills = ['React', 'TypeScript', 'Node.js', 'Python', 'UI/UX'];

  return (
    <div className="min-h-screen animated-bg">
      <Navbar />
      <div className="container mx-auto px-6 py-8 fade-in">
        {/* Welcome Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold">
                {localStorage.getItem('userName')?.[0] || 'C'}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Welcome back, {localStorage.getItem('userName') || 'Candidate'}
                </h1>
                <p className="text-purple-300">You are evaluated on your skills. Nothing else.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <Shield className="text-green-400" size={20} />
              <span className="text-green-400 font-semibold text-sm">Bias-Free Evaluation Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 card-hover">
              <p className="text-purple-300 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Applications - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">My Applications</h2>
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="bg-white/5 rounded-lg p-5 border border-purple-500/20 hover:border-pink-500/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{app.job}</h3>
                      <p className="text-purple-400 text-sm">{app.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        app.status === 'Shortlisted' ? 'bg-green-500/20 text-green-400' :
                        app.status === 'Under Review' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-purple-300">Applied: {app.date}</span>
                      <span className="text-purple-300">Score: <span className="text-pink-400 font-semibold">{app.score}/100</span></span>
                    </div>
                    <button
                      onClick={() => setSelectedApp(app)}
                      className="text-pink-400 hover:text-pink-300 text-sm font-semibold"
                    >
                      Why this decision? →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skill Graph Preview */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">My Skill Graph</h3>
              <div className="relative h-32 mb-4">
                <svg width="100%" height="128" viewBox="0 0 200 128">
                  <circle cx="100" cy="64" r="20" fill="#7c3aed" />
                  <text x="100" y="69" textAnchor="middle" fill="white" fontSize="10">You</text>
                  {topSkills.slice(0, 3).map((skill, i) => {
                    const angle = (i * 2 * Math.PI) / 3;
                    const x = 100 + 50 * Math.cos(angle);
                    const y = 64 + 50 * Math.sin(angle);
                    return (
                      <g key={i}>
                        <line x1="100" y1="64" x2={x} y2={y} stroke="#ec4899" strokeWidth="2" />
                        <circle cx={x} cy={y} r="15" fill="#ec4899" />
                        <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="8">{skill}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
              <div className="space-y-2 mb-4">
                {topSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <span className="text-purple-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => window.location.href = '/candidate/skills'}
                className="w-full py-2 gradient-bg text-white rounded-full text-sm hover:scale-105 transition-all"
              >
                View Full Graph
              </button>
            </div>

            {/* Fair Evaluation Badge */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-green-400" />
                <h3 className="text-lg font-bold text-white">Fair Evaluation Badge</h3>
              </div>
              <p className="text-green-300 text-sm mb-4 leading-relaxed">
                Your identity was protected. Our blind screening removed your name, institution, and demographics before evaluation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  <span>Emotional Bias: Eliminated</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  <span>Language Influence: Monitored</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  <span>Intersectional Bias: Checked</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explainability Modal */}
        {selectedApp && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a2e] rounded-xl p-8 max-w-2xl w-full border border-purple-500/30">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">Why this decision?</h2>
                <button onClick={() => setSelectedApp(null)} className="text-purple-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{selectedApp.job}</h3>
                <p className="text-purple-400">{selectedApp.company}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-purple-500/30 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedApp.status === 'Shortlisted' ? 'bg-green-500/20' :
                    selectedApp.status === 'Under Review' ? 'bg-yellow-500/20' :
                    'bg-red-500/20'
                  }`}>
                    <span className={`text-2xl ${
                      selectedApp.status === 'Shortlisted' ? 'text-green-400' :
                      selectedApp.status === 'Under Review' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {selectedApp.status === 'Shortlisted' ? '✓' : selectedApp.status === 'Under Review' ? '⏳' : '✗'}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Status: {selectedApp.status}</p>
                    <p className="text-purple-400 text-sm">SilenceRank Score: {selectedApp.score}/100</p>
                  </div>
                </div>
                <p className="text-purple-200 leading-relaxed">{selectedApp.reason}</p>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="w-full py-3 gradient-bg text-white rounded-full font-semibold hover:scale-105 transition-all"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
