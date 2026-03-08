import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Plus, X, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: '', proficiency: 80 });

  const skills = [
    { name: 'React', proficiency: 95, category: 'Technical' },
    { name: 'TypeScript', proficiency: 90, category: 'Technical' },
    { name: 'Node.js', proficiency: 85, category: 'Technical' },
    { name: 'Python', proficiency: 80, category: 'Technical' },
    { name: 'UI/UX Design', proficiency: 88, category: 'Technical' },
    { name: 'Problem Solving', proficiency: 92, category: 'Soft' },
    { name: 'Communication', proficiency: 87, category: 'Soft' },
    { name: 'Team Collaboration', proficiency: 90, category: 'Soft' },
    { name: 'Data Analysis', proficiency: 75, category: 'Domain' },
    { name: 'Agile Methodology', proficiency: 82, category: 'Domain' }
  ];

  const transferableSkills = [
    { your: 'Business Analytics', equivalent: 'Data Analysis', status: 'Recognized' },
    { your: 'Frontend Development', equivalent: 'UI Development', status: 'Recognized' },
    { your: 'JavaScript', equivalent: 'TypeScript', status: 'Recognized' },
    { your: 'Team Leadership', equivalent: 'Project Management', status: 'Recognized' }
  ];

  const getCategoryColor = (category) => {
    if (category === 'Technical') return { bg: 'bg-purple-500', text: 'text-purple-400' };
    if (category === 'Soft') return { bg: 'bg-pink-500', text: 'text-pink-400' };
    return { bg: 'bg-purple-300', text: 'text-purple-300' };
  };

  return (
    <div className="min-h-screen animated-bg">
      <Navbar />
      <div className="container mx-auto px-6 py-8 fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold gradient-text">My Skill Graph</h1>
          <button
            onClick={() => setShowAddSkill(true)}
            className="flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-full hover:scale-105 transition-all"
          >
            <Plus size={20} />
            Add Skill
          </button>
        </div>

        {/* Skill Graph Visualization */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Skill Network</h2>
          <div className="relative h-96 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 600 400" className="mx-auto">
              {/* Central Node */}
              <circle cx="300" cy="200" r="40" fill="#7c3aed" />
              <text x="300" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                {localStorage.getItem('userName') || 'You'}
              </text>

              {/* Skill Nodes */}
              {skills.slice(0, 10).map((skill, i) => {
                const angle = (i * 2 * Math.PI) / 10;
                const radius = 150;
                const x = 300 + radius * Math.cos(angle);
                const y = 200 + radius * Math.sin(angle);
                const nodeSize = 15 + (skill.proficiency / 100) * 20;
                const color = getCategoryColor(skill.category);
                
                return (
                  <g key={i}>
                    <line x1="300" y1="200" x2={x} y2={y} stroke={color.bg.replace('bg-', '#')} strokeWidth="2" opacity="0.5" />
                    <circle cx={x} cy={y} r={nodeSize} fill={color.bg.replace('bg-', '#')} opacity="0.8" />
                    <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="11" fontWeight="500">
                      {skill.name}
                    </text>
                    <text x={x} y={y + nodeSize + 15} textAnchor="middle" fill="#a78bfa" fontSize="9">
                      {skill.proficiency}%
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              <span className="text-purple-300 text-sm">Technical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-pink-500"></div>
              <span className="text-purple-300 text-sm">Soft Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-300"></div>
              <span className="text-purple-300 text-sm">Domain</span>
            </div>
          </div>
        </div>

        {/* Skills List */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Skill Proficiency</h2>
          <div className="space-y-4">
            {skills.map((skill, idx) => {
              const color = getCategoryColor(skill.category);
              return (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className={`px-2 py-1 rounded text-xs ${color.bg}/20 ${color.text}`}>
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-pink-400 font-semibold">{skill.proficiency}%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-bg transition-all duration-1000"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transferable Skills */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
          <h2 className="text-2xl font-bold text-white mb-6">Transferable Skills</h2>
          <p className="text-purple-300 mb-6">
            Our AI recognizes equivalent skills across different job descriptions
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="text-left py-3 text-purple-300 font-semibold">Your Skill</th>
                  <th className="text-center py-3 text-purple-300 font-semibold">→</th>
                  <th className="text-left py-3 text-purple-300 font-semibold">Equivalent JD Term</th>
                  <th className="text-left py-3 text-purple-300 font-semibold">Match Status</th>
                </tr>
              </thead>
              <tbody>
                {transferableSkills.map((skill, idx) => (
                  <tr key={idx} className="border-b border-purple-500/10">
                    <td className="py-4 text-white">{skill.your}</td>
                    <td className="py-4 text-center text-pink-400">→</td>
                    <td className="py-4 text-purple-300">{skill.equivalent}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle size={16} />
                        <span>{skill.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Skill Modal */}
        {showAddSkill && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a2e] rounded-xl p-8 max-w-md w-full border border-purple-500/30">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">Add New Skill</h2>
                <button onClick={() => setShowAddSkill(false)} className="text-purple-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-purple-300 mb-2">Skill Name</label>
                  <input
                    type="text"
                    value={newSkill.name}
                    onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500"
                    placeholder="e.g., Docker"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 mb-2">Proficiency: {newSkill.proficiency}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={newSkill.proficiency}
                    onChange={(e) => setNewSkill({ ...newSkill, proficiency: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 mb-2">Category</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500">
                    <option>Technical</option>
                    <option>Soft</option>
                    <option>Domain</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAddSkill(false)}
                  className="w-full py-3 gradient-bg text-white rounded-full font-semibold hover:scale-105 transition-all"
                >
                  Add Skill
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
