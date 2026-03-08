import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { X, AlertCircle } from 'lucide-react';

export default function Candidates() {
  const [silenceRank, setSilenceRank] = useState(true);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    { id: 'A1042', name: 'Sarah Johnson', job: 'Frontend Developer', score: 89, match: 94, flags: 0, lir: 0.12, status: 'Shortlisted', skills: ['React', 'TypeScript', 'Node.js'] },
    { id: 'B2031', name: 'Michael Chen', job: 'Data Analyst', score: 92, match: 91, flags: 2, lir: 0.28, status: 'Under Review', skills: ['Python', 'ML', 'TensorFlow'] },
    { id: 'C3012', name: 'Priya Sharma', job: 'ML Engineer', score: 87, match: 88, flags: 0, lir: 0.09, status: 'Shortlisted', skills: ['Java', 'Spring', 'AWS'] },
    { id: 'D4023', name: 'Alex Martinez', job: 'UX Designer', score: 85, match: 90, flags: 1, lir: 0.15, status: 'Under Review', skills: ['UI/UX', 'Figma', 'React'] },
    { id: 'E5014', name: 'Emma Wilson', job: 'Product Manager', score: 91, match: 93, flags: 0, lir: 0.11, status: 'Shortlisted', skills: ['Data Science', 'SQL', 'Python'] },
    { id: 'F6025', name: 'David Kim', job: 'Backend Developer', score: 88, match: 89, flags: 0, lir: 0.13, status: 'Shortlisted', skills: ['Go', 'Docker', 'Kubernetes'] }
  ];

  return (
    <div className="flex min-h-screen animated-bg">
      <Sidebar />
      <div className="flex-1 p-8 fade-in overflow-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold gradient-text">Candidates</h1>
          
          <div className="flex gap-2 bg-white/5 p-1 rounded-full">
            <button
              onClick={() => setSilenceRank(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                silenceRank ? 'gradient-bg text-white' : 'text-purple-300'
              }`}
            >
              SilenceRank View
            </button>
            <button
              onClick={() => setSilenceRank(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                !silenceRank ? 'gradient-bg text-white' : 'text-purple-300'
              }`}
            >
              Standard View
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="px-4 py-2 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500">
            <option>All Jobs</option>
            <option>Frontend Developer</option>
            <option>Data Analyst</option>
            <option>ML Engineer</option>
          </select>
          <select className="px-4 py-2 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500">
            <option>All Statuses</option>
            <option>Shortlisted</option>
            <option>Under Review</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-purple-500/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left py-4 px-6 text-purple-300 font-semibold">Candidate</th>
                  <th className="text-left py-4 px-6 text-purple-300 font-semibold">Applied For</th>
                  <th className="text-left py-4 px-6 text-purple-300 font-semibold">SilenceRank</th>
                  <th className="text-left py-4 px-6 text-purple-300 font-semibold">Match %</th>
                  <th className="text-left py-4 px-6 text-purple-300 font-semibold">Flags</th>
                  <th className="text-left py-4 px-6 text-purple-300 font-semibold">LIR</th>
                  <th className="text-left py-4 px-6 text-purple-300 font-semibold">Status</th>
                  <th className="text-left py-4 px-6 text-purple-300 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate, idx) => (
                  <tr key={idx} className="border-t border-purple-500/10 hover:bg-white/5 transition-all">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                          {candidate.id[0]}
                        </div>
                        <div>
                          <p className={`font-semibold ${silenceRank ? 'blur-sm' : 'text-white'}`}>
                            {silenceRank ? 'Hidden Name' : candidate.name}
                          </p>
                          <p className="text-purple-400 text-sm">#{candidate.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-purple-300">{candidate.job}</td>
                    <td className="py-4 px-6">
                      <span className="text-white font-semibold">{candidate.score}</span>
                      <span className="text-purple-400 text-sm">/100</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-pink-400 font-semibold">{candidate.match}%</span>
                    </td>
                    <td className="py-4 px-6">
                      {candidate.flags > 0 ? (
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs flex items-center gap-1 w-fit">
                          <AlertCircle size={12} />
                          {candidate.flags}
                        </span>
                      ) : (
                        <span className="text-green-400 text-sm">✓</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-purple-300">{candidate.lir}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        candidate.status === 'Shortlisted' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {candidate.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => setSelectedCandidate(candidate)}
                        className="text-pink-400 hover:text-pink-300 text-sm"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Drawer */}
        {selectedCandidate && (
          <div className="fixed inset-0 bg-black/70 z-50 flex justify-end">
            <div className="w-full max-w-2xl bg-[#1a1a2e] h-full overflow-y-auto p-8 fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">Candidate #{selectedCandidate.id}</h2>
                <button onClick={() => setSelectedCandidate(null)} className="text-purple-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCandidate.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Graph */}
              <div className="mb-6 bg-white/5 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-semibold text-white mb-4">Skill Graph</h3>
                <div className="relative h-64 flex items-center justify-center">
                  <svg width="300" height="200" className="mx-auto">
                    <circle cx="150" cy="100" r="30" fill="#7c3aed" />
                    <text x="150" y="105" textAnchor="middle" fill="white" fontSize="12">Core</text>
                    {selectedCandidate.skills.map((skill, i) => {
                      const angle = (i * 2 * Math.PI) / selectedCandidate.skills.length;
                      const x = 150 + 80 * Math.cos(angle);
                      const y = 100 + 80 * Math.sin(angle);
                      return (
                        <g key={i}>
                          <line x1="150" y1="100" x2={x} y2={y} stroke="#ec4899" strokeWidth="2" />
                          <circle cx={x} cy={y} r="20" fill="#ec4899" />
                          <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="10">{skill}</text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Scores */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-purple-500/30">
                  <p className="text-purple-400 text-sm mb-1">SilenceRank Score</p>
                  <p className="text-3xl font-bold text-white">{selectedCandidate.score}/100</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-purple-500/30">
                  <p className="text-purple-400 text-sm mb-1">Counterfactual Fairness</p>
                  <p className="text-3xl font-bold text-green-400">0.94</p>
                </div>
              </div>

              {/* Bias Flags */}
              {selectedCandidate.flags > 0 && (
                <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-red-400 mb-2">Bias Flags ({selectedCandidate.flags})</h3>
                  <ul className="space-y-2 text-sm text-purple-300">
                    <li>• Career gap + Tier-3 college compound penalty detected</li>
                    <li>• Language influence ratio above threshold</li>
                  </ul>
                </div>
              )}

              {/* Explainability */}
              <div className="mb-6 bg-white/5 rounded-xl p-4 border border-purple-500/30">
                <h3 className="text-lg font-semibold text-white mb-2">Why this ranking?</h3>
                <p className="text-purple-300 text-sm leading-relaxed">
                  Ranked #{Math.floor(Math.random() * 5) + 1} because skills match {selectedCandidate.match}% of requirements. 
                  Strong proficiency in {selectedCandidate.skills[0]} and {selectedCandidate.skills[1]}. 
                  Promoted due to fairness correction that detected potential bias in initial scoring.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex-1 py-3 gradient-bg text-white rounded-full font-semibold hover:scale-105 transition-all">
                  Shortlist
                </button>
                <button className="flex-1 py-3 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full font-semibold hover:bg-red-500/30 transition-all">
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
