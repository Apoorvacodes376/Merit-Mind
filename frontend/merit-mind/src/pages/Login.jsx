import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState(searchParams.get('role') || 'recruiter');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '', password: '', confirmPassword: '', fullName: '',
    company: '', jobRole: '', skills: '', experience: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', formData.fullName || 'User');
    if (role === 'recruiter') {
      navigate('/recruiter/dashboard');
    } else {
      navigate('/candidate/dashboard');
    }
  };

  return (
    <div className="min-h-screen animated-bg flex items-center justify-center px-4 fade-in">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <h1 className="text-6xl font-bold gradient-text mb-6">Merit Mind</h1>
          <p className="text-2xl text-purple-200 mb-8">
            Agentic AI System for Bias-Free and Inclusive Recruitment
          </p>
          <div className="space-y-4 text-purple-300">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>100% Bias-Free Evaluation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>AI-Powered Fairness</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Merit-Based Selection</span>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
          {/* Tab Switcher */}
          <div className="flex gap-2 mb-8 bg-white/5 p-1 rounded-full">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-full font-semibold transition-all duration-300 ${
                isLogin ? 'gradient-bg text-white' : 'text-purple-300'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-full font-semibold transition-all duration-300 ${
                !isLogin ? 'gradient-bg text-white' : 'text-purple-300'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Role Selector */}
          <div className="flex gap-2 mb-8 bg-white/5 p-1 rounded-full">
            <button
              onClick={() => setRole('recruiter')}
              className={`flex-1 py-3 rounded-full font-semibold transition-all duration-300 ${
                role === 'recruiter' ? 'gradient-bg text-white' : 'text-purple-300'
              }`}
            >
              Recruiter
            </button>
            <button
              onClick={() => setRole('candidate')}
              className={`flex-1 py-3 rounded-full font-semibold transition-all duration-300 ${
                role === 'candidate' ? 'gradient-bg text-white' : 'text-purple-300'
              }`}
            >
              Candidate
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 transition-all"
                required
              />
            )}
            
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 transition-all"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!isLogin && (
              <>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 transition-all"
                  required
                />

                {role === 'recruiter' && (
                  <>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Job Role"
                      value={formData.jobRole}
                      onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 transition-all"
                    />
                  </>
                )}

                {role === 'candidate' && (
                  <>
                    <input
                      type="text"
                      placeholder="Skills (comma separated)"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Years of Experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 transition-all"
                    />
                  </>
                )}
              </>
            )}

            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-pink-400 text-sm hover:text-pink-300">Forgot Password?</a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 gradient-bg text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-purple-500/30"></div>
              <span className="text-purple-400 text-sm">or continue with</span>
              <div className="flex-1 h-px bg-purple-500/30"></div>
            </div>

            <button
              type="button"
              className="w-full py-3 bg-white/10 border border-purple-500/30 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/20 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">G</span>
              <span>Sign in with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
