import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Network, MessageSquare, Settings, LogOut } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/candidate/dashboard' },
    { icon: FileText, label: 'My Applications', path: '/candidate/dashboard' },
    { icon: Network, label: 'My Skill Graph', path: '/candidate/skills' },
    { icon: MessageSquare, label: 'Interview Prep', path: '/candidate/interview' },
    { icon: Settings, label: 'Settings', path: '/candidate/settings' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <nav className="bg-white/5 backdrop-blur-md border-b border-purple-500/30 sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold gradient-text">Merit Mind</h1>
            
            {/* Nav Items - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'gradient-bg text-white'
                      : 'text-purple-300 hover:bg-white/5'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                {localStorage.getItem('userName')?.[0] || 'C'}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{localStorage.getItem('userName') || 'Candidate'}</p>
                <p className="text-xs text-purple-400">Candidate</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-pink-400 hover:bg-white/5 rounded-lg transition-all"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex gap-2 mt-4 overflow-x-auto pb-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                location.pathname === item.path
                  ? 'gradient-bg text-white'
                  : 'text-purple-300 bg-white/5'
              }`}
            >
              <item.icon size={16} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
