import Sidebar from '../../components/Sidebar';
import { CheckCircle, Calendar, TrendingDown } from 'lucide-react';

export default function Reports() {
  const summary = [
    { label: 'Total Simulations Run', value: '12' },
    { label: 'Avg BRS', value: '34' },
    { label: 'Issues Fixed', value: '28' },
    { label: 'Compliance Status', value: 'Passing', status: 'good' }
  ];

  const simulations = [
    { date: '2025-01-15', job: 'Frontend Developer', brsBefore: 67, brsAfter: 18, status: 'Fixed' },
    { date: '2025-01-14', job: 'Data Analyst', brsBefore: 72, brsAfter: 31, status: 'Fixed' },
    { date: '2025-01-12', job: 'ML Engineer', brsBefore: 45, brsAfter: 12, status: 'Fixed' },
    { date: '2025-01-10', job: 'Product Manager', brsBefore: 58, brsAfter: 28, status: 'Fixed' },
    { date: '2025-01-08', job: 'UX Designer', brsBefore: 51, brsAfter: 22, status: 'Fixed' },
    { date: '2025-01-05', job: 'Backend Developer', brsBefore: 39, brsAfter: 15, status: 'Fixed' }
  ];

  return (
    <div className="flex min-h-screen animated-bg">
      <Sidebar />
      <div className="flex-1 p-8 fade-in overflow-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Bias Reports & Compliance</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summary.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 card-hover">
              <p className="text-purple-300 text-sm mb-2">{item.label}</p>
              <p className={`text-3xl font-bold ${item.status === 'good' ? 'text-green-400' : 'text-white'}`}>
                {item.value}
              </p>
              {item.status === 'good' && (
                <div className="flex items-center gap-1 mt-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  <span>Compliant</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Compliance Certificate */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-xl p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3">Compliance Certificate</h2>
              <p className="text-green-300 mb-4 leading-relaxed">
                This pipeline has passed Merit Mind bias audit. Compliant with NYC LL144 and EU AI Act guidelines.
              </p>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <Calendar size={16} />
                <span>Last tested: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-green-500/20 text-green-400 rounded-full font-semibold hover:bg-green-500/30 transition-all">
              Download Certificate
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
          <h2 className="text-2xl font-bold text-white mb-6">Simulation History</h2>
          <div className="space-y-4">
            {simulations.map((sim, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-6 border border-purple-500/20 hover:border-pink-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="text-purple-400" size={16} />
                      <span className="text-purple-300 text-sm">{sim.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{sim.job}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-purple-300">
                        BRS Before: <span className="text-red-400 font-semibold">{sim.brsBefore}</span>
                      </span>
                      <TrendingDown className="text-green-400" size={16} />
                      <span className="text-purple-300">
                        BRS After: <span className="text-green-400 font-semibold">{sim.brsAfter}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        -{Math.round(((sim.brsBefore - sim.brsAfter) / sim.brsBefore) * 100)}%
                      </div>
                      <div className="text-xs text-purple-400">Improvement</div>
                    </div>
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      {sim.status}
                    </span>
                    <button className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all text-sm">
                      View Report
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4">Top Bias Patterns Fixed</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Exclusionary Language</span>
                <span className="text-pink-400 font-semibold">8 cases</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Career Gap Penalty</span>
                <span className="text-pink-400 font-semibold">6 cases</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">University Tier Bias</span>
                <span className="text-pink-400 font-semibold">5 cases</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Gender-coded Terms</span>
                <span className="text-pink-400 font-semibold">4 cases</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Age Discrimination</span>
                <span className="text-pink-400 font-semibold">3 cases</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4">Fairness Metrics Trend</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-purple-300">Demographic Parity</span>
                  <span className="text-green-400 font-semibold">0.87 ↑</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-purple-300">Disparate Impact</span>
                  <span className="text-green-400 font-semibold">0.84 ↑</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '84%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-purple-300">Equalized Odds</span>
                  <span className="text-green-400 font-semibold">0.91 ↑</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '91%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
