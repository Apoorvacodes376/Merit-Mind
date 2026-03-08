import Sidebar from '../../components/Sidebar';
import { TrendingUp, TrendingDown, AlertTriangle, Users, Eye, Wrench } from 'lucide-react';

export default function RecruiterDashboard() {
  const stats = [
    { label: 'Total Applications', value: '248', change: '↑ 12%', trend: 'up' },
    { label: 'Shortlisted', value: '47', change: '↑ 8%', trend: 'up' },
    { label: 'Bias Alerts', value: '13', change: '↓ 23%', trend: 'down' },
    { label: 'Avg Bias Risk Score', value: '24/100', change: 'Low Risk', trend: 'good' }
  ];

  const jobs = [
    { title: 'Frontend Developer', apps: 34, brs: 18, status: 'Active', color: 'green' },
    { title: 'Data Analyst', apps: 56, brs: 67, status: 'Under Review', color: 'red' },
    { title: 'Product Manager', apps: 28, brs: 31, status: 'Active', color: 'yellow' },
    { title: 'ML Engineer', apps: 41, brs: 12, status: 'Active', color: 'green' },
    { title: 'UX Designer', apps: 19, brs: 45, status: 'Active', color: 'yellow' }
  ];

  const candidates = [
    { id: 'A1042', skills: ['React', 'TypeScript', 'Node.js'], score: 89, match: 94 },
    { id: 'B2031', skills: ['Python', 'ML', 'TensorFlow'], score: 92, match: 91 },
    { id: 'C3012', skills: ['Java', 'Spring', 'AWS'], score: 87, match: 88 },
    { id: 'D4023', skills: ['UI/UX', 'Figma', 'React'], score: 85, match: 90 },
    { id: 'E5014', skills: ['Data Science', 'SQL', 'Python'], score: 91, match: 93 }
  ];

  const alerts = [
    { type: 'red', text: "JD for Data Analyst contains 'rockstar developer' — exclusionary language detected. Click to rewrite." },
    { type: 'yellow', text: 'Candidate #B2031 flagged: Career gap + Tier-3 college compound penalty detected.' },
    { type: 'green', text: 'JD for ML Engineer rewritten successfully. Bias removed.' },
    { type: 'yellow', text: "Language Influence Ratio spike: 3 candidates' rankings shifted >15 positions when name was revealed." }
  ];

  const getBRSColor = (brs) => {
    if (brs < 30) return { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Low' };
    if (brs < 60) return { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'Medium' };
    return { bg: 'bg-red-500/20', text: 'text-red-400', label: 'High' };
  };

  return (
    <div className="flex min-h-screen animated-bg">
      <Sidebar />
      <div className="flex-1 p-8 fade-in overflow-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Dashboard</h1>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 card-hover">
              <div className="flex justify-between items-start mb-2">
                <p className="text-purple-300 text-sm">{stat.label}</p>
                {stat.trend === 'up' && <TrendingUp className="text-green-400" size={20} />}
                {stat.trend === 'down' && <TrendingDown className="text-green-400" size={20} />}
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className={`text-sm ${stat.trend === 'down' || stat.trend === 'good' ? 'text-green-400' : 'text-purple-400'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Job Postings Table */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Recent Job Postings</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left py-3 text-purple-300 font-semibold">Job Title</th>
                    <th className="text-left py-3 text-purple-300 font-semibold">Apps</th>
                    <th className="text-left py-3 text-purple-300 font-semibold">BRS</th>
                    <th className="text-left py-3 text-purple-300 font-semibold">Status</th>
                    <th className="text-left py-3 text-purple-300 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, idx) => {
                    const brsStyle = getBRSColor(job.brs);
                    return (
                      <tr key={idx} className="border-b border-purple-500/10">
                        <td className="py-4 text-white">{job.title}</td>
                        <td className="py-4 text-purple-300">{job.apps}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${brsStyle.bg} ${brsStyle.text}`}>
                            {job.brs} {brsStyle.label}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300">
                            {job.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <button className="text-pink-400 hover:text-pink-300 text-sm">
                            {job.brs > 60 ? 'Fix' : 'View'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* BRS Gauge */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <h2 className="text-xl font-bold text-white mb-4">Bias Risk Score</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-40 h-40">
                <svg className="transform -rotate-90 w-40 h-40">
                  <circle cx="80" cy="80" r="70" stroke="rgba(124, 58, 237, 0.2)" strokeWidth="12" fill="none" />
                  <circle cx="80" cy="80" r="70" stroke="#10b981" strokeWidth="12" fill="none"
                    strokeDasharray={`${(32 / 100) * 440} 440`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-4xl font-bold text-green-400">32</span>
                  <span className="text-xs text-purple-300">/ 100</span>
                </div>
              </div>
            </div>
            <p className="text-center text-purple-300 text-sm mb-4">
              Your pipeline is <span className="text-yellow-400 font-semibold">MEDIUM RISK</span>. 3 recommendations pending.
            </p>
            <button className="w-full py-2 gradient-bg text-white rounded-full text-sm hover:scale-105 transition-all">
              Run New Simulation
            </button>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Candidates */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Top Candidates</h2>
            <div className="space-y-4">
              {candidates.map((candidate, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-4 border border-purple-500/20 hover:border-pink-500/50 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                        {candidate.id[0]}
                      </div>
                      <div>
                        <p className="text-white font-semibold">Candidate #{candidate.id}</p>
                        <p className="text-xs text-purple-400">SilenceRank: {candidate.score}/100</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-pink-400 font-bold">{candidate.match}%</p>
                      <p className="text-xs text-purple-400">Match</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {candidate.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="text-pink-400 text-sm hover:text-pink-300">View Profile →</button>
                </div>
              ))}
            </div>
          </div>

          {/* Bias Alerts Feed */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Bias Alerts Feed</h2>
            <div className="space-y-4">
              {alerts.map((alert, idx) => (
                <div key={idx} className={`p-4 rounded-lg border ${
                  alert.type === 'red' ? 'bg-red-500/10 border-red-500/30' :
                  alert.type === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
                  'bg-green-500/10 border-green-500/30'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === 'red' ? 'bg-red-500' :
                      alert.type === 'yellow' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}></div>
                    <p className="text-sm text-purple-200 flex-1">{alert.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
