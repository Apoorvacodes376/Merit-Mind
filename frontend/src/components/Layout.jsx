import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 10 }}>
          <Link 
            to="/login"
            style={{ 
              display: 'inline-block',
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)', 
              color: 'white',
              padding: '8px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'opacity 0.25s'
            }}
            onMouseOver={(e) => e.target.style.opacity = 0.9}
            onMouseOut={(e) => e.target.style.opacity = 1}
          >
            Login / Sign Up
          </Link>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
