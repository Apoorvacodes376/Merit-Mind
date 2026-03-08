import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Loader, Download } from 'lucide-react';

export default function Simulator() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({
    job: 'Frontend Developer',
    profiles: 1000,
    demographics: ['gender', 'ethnicity']
  });

  const handleRun = () => {
    setLoading(true);
    setStep(2);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 3000);
  };

  const metrics = [
    { name: 'Demographic Parity', value: 0.64, threshold: 0.8, status: 'failed' },
    { name: 'Disparate Impact Ratio', value: 0.71, threshold: 0.8, status: 'failed' },
    { name: 'Statistical Parity Difference', value: 0.23, threshold: 0.2, status: 'warning' },
    { name: 'Equalized Odds', value: 0.81, threshold: 0.8, status: 'passed' }
  ];

  const demographics = [
    { group: 'Male', rate: 45 },
    { group: 'Female', rate: 25 },
    { group: 'Non-binary', rate: 30 },
    { group: 'White', rate: 42 },
    { group: 'Black', rate: 28 },
    { group: 'Asian', rate: 38 },
    { group: 'Hispanic', rate: 32 }
  ];

  const recommendations = [
    { severity: 'red', text: 'JD language is filtering female candidates at 1.8x rate. Activate JD Rewriting Agent.', action: 'Fix Now' },
    { severity: 'red', text: 'Career gap candidates rejected at 2.4x rate. Adjust scoring weights.', action: 'Fix Now' },
    { severity: 'yellow', text: 'Tier-3 university candidates score 18pts lower on average. Review college tier bias.', action: 'Review' }
  ];

  return (
    <div className="flex min-h-screen animated-bg">
      <Sidebar />
      <div className="flex-1 p-8 fade-in overflow-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Reverse Bias Simulator</h1>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= s ? 'gradient-bg text-white' : 'bg-white/5 text-purple-400'
              }`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`w-24 h-1 ${step > s ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-white/10'}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step 1 - Configure */}
        {step === 1 && (
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Configure Simulation</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-purple-300 mb-2">Select Job</label>
                <select
                  value={config.job}
                  onChange={(e) => setConfig({ ...config, job: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500"
                >
                  <option>Frontend Developer</option>
                  <option>Data Analyst</option>
                  <option>ML Engineer</option>
                  <option>Product Manager</option>
                  <option>UX Designer</option>
                </select>
              </div>

              <div>
                <label className="block text-purple-300 mb-2">Number of Synthetic Profiles: {config.profiles}</label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={config.profiles}
                  onChange={(e) => setConfig({ ...config, profiles: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-purple-400 mt-1">
                  <span>100</span>
                  <span>5000</span>
                </div>
              </div>

              <div>
                <label className="block text-purple-300 mb-3">Demographic Distribution</label>
                <div className="space-y-2">
                  {['gender', 'ethnicity', 'age', 'university', 'career_gaps'].map((demo) => (
                    <label key={demo} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={config.demographics.includes(demo)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setConfig({ ...config, demographics: [...config.demographics, demo] });
                          } else {
                            setConfig({ ...config, demographics: config.demographics.filter(d => d !== demo) });
                          }
                        }}
                        className="w-5 h-5"
                      />
                      <span className="text-white capitalize">{demo.replace('_', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleRun}
                className="w-full py-4 gradient-bg text-white rounded-full font-semibold text-lg hover:scale-105 transition-all"
              >
                Run Simulation
              </button>
            </div>
          </div>
        )}

        {/* Step 2 - Running */}
        {step === 2 && (
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-12 border border-purple-500/30 text-center">
            <Loader className="w-16 h-16 text-pink-400 animate-spin mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Running Simulation...</h2>
            <div className="space-y-3 text-purple-300">
              <p className="animate-pulse">Generating synthetic profiles...</p>
              <p className="animate-pulse" style={{ animationDelay: '0.5s' }}>Simulating hiring pipeline...</p>
              <p className="animate-pulse" style={{ animationDelay: '1s' }}>Computing fairness metrics...</p>
              <p className="animate-pulse" style={{ animationDelay: '1.5s' }}>Calculating Bias Risk Score...</p>
            </div>
            <div className="mt-8 bg-white/5 rounded-full h-2 overflow-hidden">
              <div className="h-full gradient-bg progress-bar"></div>
            </div>
          </div>
        )}

        {/* Step 3 - Results */}
        {step === 3 && (
          <div className="space-y-8">
            {/* BRS Gauge */}
            <div className="max-w-md mx-auto bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <svg className="transform -rotate-90 w-48 h-48">
                  <circle cx="96" cy="96" r="88" stroke="rgba(124, 58, 237, 0.2)" strokeWidth="16" fill="none" />
                  <circle cx="96" cy="96" r="88" stroke="#ef4444" strokeWidth="16" fill="none"
                    strokeDasharray={`${(67 / 100) * 553} 553`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-5xl font-bold text-red-400">67</span>
                  <span className="text-sm text-purple-300">/ 100</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-2">HIGH BIAS RISK</h3>
              <p className="text-purple-300 text-sm">Action required before going live</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, idx) => (
                <div key={idx} className={`bg-white/5 backdrop-blur-md rounded-xl p-6 border ${
                  metric.status === 'passed' ? 'border-green-500/30' :
                  metric.status === 'warning' ? 'border-yellow-500/30' :
                  'border-red-500/30'
                }`}>
                  <h4 className="text-white font-semibold mb-2">{metric.name}</h4>
                  <p className={`text-3xl font-bold mb-1 ${
                    metric.status === 'passed' ? 'text-green-400' :
                    metric.status === 'warning' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {metric.value}
                  </p>
                  <p className="text-xs text-purple-400">Threshold: {metric.threshold}</p>
                  <p className={`text-sm mt-2 ${
                    metric.status === 'passed' ? 'text-green-400' :
                    metric.status === 'warning' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {metric.status === 'passed' ? '✓ Passed' : metric.status === 'warning' ? '⚠ Warning' : '✗ Failed'}
                  </p>
                </div>
              ))}
            </div>

            {/* Bar Chart */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Selection Rate by Demographic Group</h3>
              <div className="space-y-4">
                {demographics.map((demo, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-purple-300">{demo.group}</span>
                      <span className="text-white font-semibold">{demo.rate}%</span>
                    </div>
                    <div className="h-8 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg transition-all duration-1000"
                        style={{ width: `${demo.rate}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Recommendations</h3>
              <div className="space-y-4">
                {recommendations.map((rec, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border flex items-start justify-between gap-4 ${
                    rec.severity === 'red' ? 'bg-red-500/10 border-red-500/30' : 'bg-yellow-500/10 border-yellow-500/30'
                  }`}>
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        rec.severity === 'red' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}></div>
                      <p className="text-purple-200 text-sm">{rec.text}</p>
                    </div>
                    <button className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                      rec.severity === 'red' ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                    }`}>
                      {rec.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Button */}
            <div className="text-center">
              <button className="px-8 py-3 gradient-bg text-white rounded-full font-semibold hover:scale-105 transition-all flex items-center gap-2 mx-auto">
                <Download size={20} />
                Export Bias Audit Report (PDF)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
