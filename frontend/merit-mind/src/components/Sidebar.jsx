import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Users, RefreshCw, BarChart3, Settings, LogOut, Menu, X } from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/recruiter/dashboard' },
    { icon: FileText, label: 'Job Postings', path: '/recruiter/jobs' },
    { icon: Users, label: 'Candidates', path: '/recruiter/candidates' },
    { icon: RefreshCw, label: 'Bias Simulator', path: '/recruiter/simulator' },
    { icon: BarChart3, label: 'Bias Reports', path: '/recruiter/reports' },
    { icon: Settings, label: 'Settings', path: '/recruiter/settings' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-purple-500/30"
      >
        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white/5 backdrop-blur-md border-r border-purple-500/30 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-2xl font-bold gradient-text">Merit Mind</h1>
            <p className="text-xs text-purple-400 mt-1">Recruiter Portal</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'gradient-bg text-white'
                    : 'text-purple-300 hover:bg-white/5'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* User Profile & Logout */}
          <div className="border-t border-purple-500/30 pt-4 mt-4">
            <div className="flex items-center gap-3 mb-4 px-2">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                {localStorage.getItem('userName')?.[0] || 'R'}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{localStorage.getItem('userName') || 'Recruiter'}</p>
                <p className="text-xs text-purple-400">Recruiter</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-pink-400 hover:bg-white/5 transition-all duration-300"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        ></div>
      )}
    </>
  );
}
