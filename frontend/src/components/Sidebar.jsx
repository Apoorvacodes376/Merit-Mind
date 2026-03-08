import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const name = localStorage.getItem('name') || 'User';

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/bias-detection', label: 'Bias Detection' },
    { path: '/job-rewriter', label: 'Job Rewriter' },
    { path: '/counterfactual', label: 'Counterfactual Fairness' },
    { path: '/skill-graph', label: 'Skill Graph' },
    { path: '/fairness-optimizer', label: 'Fairness Optimizer' },
    { path: '/silence-rank', label: 'Silence Rank' },
    { path: '/emotion-blind', label: 'Emotion Blind' },
    { path: '/bias-simulator', label: 'Bias Simulator' },
  ];

  return (
    <aside style={{
      width: '280px',
      backgroundColor: 'var(--bg-card)',
      borderRight: '1px solid var(--border-color)',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0
    }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ 
          background: 'var(--gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem'
        }}>
          Merit Mind
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Welcome, {name}
        </p>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              color: location.pathname === item.path ? '#fff' : 'var(--text-primary)',
              backgroundColor: location.pathname === item.path ? 'rgba(124, 58, 237, 0.2)' : 'transparent',
              borderLeft: location.pathname === item.path ? '3px solid var(--accent-purple)' : '3px solid transparent',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
