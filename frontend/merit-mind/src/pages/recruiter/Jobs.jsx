import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Plus, X, Loader } from 'lucide-react';

export default function Jobs() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    title: '', department: '', description: '', skills: '', experience: '0-2 yrs'
  });

  const jobs = [
    { title: 'Frontend Developer', dept: 'Engineering', posted: '2 days ago', apps: 34, brs: 18, status: 'Active' },
    { title: 'Data Analyst', dept: 'Analytics', posted: '5 days ago', apps: 56, brs: 67, status: 'Under Review' },
    { title: 'Product Manager', dept: 'Product', posted: '1 week ago', apps: 28, brs: 31, status: 'Active' },
    { title: 'ML Engineer', dept: 'AI/ML', posted: '3 days ago', apps: 41, brs: 12, status: 'Active' },
    { title: 'UX Designer', dept: 'Design', posted: '4 days ago', apps: 19, brs: 45, status: 'Active' },
    { title: 'Backend Developer', dept: 'Engineering', posted: '1 day ago', apps: 22, brs: 28, status: 'Active' }
  ];

  const getBRSColor = (brs) => {
    if (brs < 30) return { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Low' };
    if (brs < 60) return { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'Medium' };
    return { bg: 'bg-red-500/20', text: 'text-red-400', label: 'High' };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({ brs: 38, issues: 2 });
    }, 2000);
  };

  return (
    <div className="flex min-h-screen animated-bg">
      <Sidebar />
      <div className="flex-1 p-8 fade-in overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold gradient-text">Job Postings</h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-full hover:scale-105 transition-all"
          >
            <Plus size={20} />
            Post New Job
          </button>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, idx) => {
            const brsStyle = getBRSColor(job.brs);
            return (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                    <p className="text-purple-400 text-sm">{job.dept}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    job.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {job.status}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Posted:</span>
                    <span className="text-white">{job.posted}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Applications:</span>
                    <span className="text-white font-semibold">{job.apps}</span>
                  </div>
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-purple-300">Bias Risk:</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${brsStyle.bg} ${brsStyle.text}`}>
                      {job.brs} {brsStyle.label}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all text-sm">
                    View Candidates
                  </button>
                  <button className="flex-1 py-2 bg-pink-500/20 text-pink-300 rounded-lg hover:bg-pink-500/30 transition-all text-sm">
                    Rewrite JD
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a2e] rounded-xl p-8 max-w-2xl w-full border border-purple-500/30 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">Post New Job</h2>
                <button onClick={() => { setShowModal(false); setResult(null); }} className="text-purple-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500"
                    required
                  />
                  <textarea
                    placeholder="Job Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows="6"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500"
                    required
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Required Skills (comma separated)"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500"
                    required
                  />
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500"
                  >
                    <option value="0-2 yrs">0-2 years</option>
                    <option value="2-5 yrs">2-5 years</option>
                    <option value="5+ yrs">5+ years</option>
                  </select>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 gradient-bg text-white rounded-full font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader className="animate-spin" size={20} />
                        Analyzing for Bias...
                      </>
                    ) : (
                      'Post & Analyze for Bias'
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full gradient-bg flex items-center justify-center text-white text-3xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Bias Analysis Complete</h3>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-yellow-400 font-semibold mb-2">BRS: {result.brs}</p>
                    <p className="text-purple-300">{result.issues} issues found</p>
                  </div>
                  <button className="px-6 py-2 bg-pink-500/20 text-pink-300 rounded-full hover:bg-pink-500/30 transition-all">
                    View Report
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
