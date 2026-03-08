import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileEdit, Users, Brain, Scale, RefreshCw, TrendingUp, Award } from 'lucide-react';

const Dashboard = () => {
  const name = localStorage.getItem('name') || 'User';

  const features = [
    {
      id: 'bias-detection',
      title: 'Bias Detection',
      description: 'Analyze job descriptions to detect and quantify biased language across gender, age, and race vectors.',
      path: '/bias-detection',
      icon: Search,
    },
    {
      id: 'job-rewriter',
      title: 'Job Rewriter',
      description: 'Automatically rewrite biased JDs into Conservative, Balanced, or Inclusive variants.',
      path: '/job-rewriter',
      icon: FileEdit,
    },
    {
      id: 'counterfactual',
      title: 'Counterfactual Fairness',
      description: "Test if a candidate's evaluation would change if their demographic attributes were different.",
      path: '/counterfactual',
      icon: Users,
    },
    {
      id: 'skill-graph',
      title: 'Skill Graph Matching',
      description: 'Map resumes against job descriptions based entirely on skills rather than keywords.',
      path: '/skill-graph',
      icon: Brain,
    },
    {
      id: 'fairness-optimizer',
      title: 'Fairness Optimizer',
      description: 'Re-rank candidate lists to adhere to the 80% rule and maintain diverse representation.',
      path: '/fairness-optimizer',
      icon: Scale,
    },
    {
      id: 'silence-rank',
      title: 'Silence Rank',
      description: 'Strip all identity-revealing text from resumes to rank based strictly on merit and experience.',
      path: '/silence-rank',
      icon: RefreshCw,
    },
    {
      id: 'emotion-blind',
      title: 'Emotion Blind',
      description: 'Evaluate interview responses based purely on semantic value and professional content.',
      path: '/emotion-blind',
      icon: TrendingUp,
    },
    {
      id: 'bias-simulator',
      title: 'Bias Risk Simulator',
      description: 'Forecast potential algorithmic biases and receive actionable recommendations.',
      path: '/bias-simulator',
      icon: Award,
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#0d0d1a', position: 'relative', overflow: 'hidden' }}>

      {/* Floating Orbs */}
      <div style={{
        position: 'fixed', top: '5rem', left: '2.5rem',
        width: '16rem', height: '16rem',
        background: 'rgba(124,58,237,0.2)',
        borderRadius: '9999px', filter: 'blur(60px)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'fixed', bottom: '5rem', right: '2.5rem',
        width: '24rem', height: '24rem',
        background: 'rgba(236,72,153,0.2)',
        borderRadius: '9999px', filter: 'blur(60px)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Top Nav Bar */}
      <div style={{
        position: 'relative', zIndex: 20,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(124,58,237,0.2)',
      }}>
        <span style={{
          fontSize: '1.5rem', fontWeight: '800',
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Merit Mind
        </span>

        <Link
          to="/login"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '9999px',
            padding: '10px 24px',
            fontWeight: '600',
            fontSize: '0.95rem',
          }}
        >
          Login / Sign Up
        </Link>
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Welcome Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}>
            Welcome to Merit Mind, {name}.
          </h1>
          <p style={{
            color: '#a78bfa',
            fontSize: '1.2rem',
            maxWidth: '40rem',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Select a tool below to begin analyzing data without bias.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {features.map((feature) => (
            <Link
              to={feature.path}
              key={feature.id}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  border: '1px solid rgba(124,58,237,0.3)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(236,72,153,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(236,72,153,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
                }}
              >
                <feature.icon style={{
                  width: 40, height: 40,
                  color: '#f472b6',
                  marginBottom: '1rem',
                }} />

                <h3 style={{
                  color: '#e9d5ff',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  marginBottom: '0.75rem',
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  color: 'rgba(196,181,253,0.8)',
                  lineHeight: 1.6,
                  flex: 1,
                }}>
                  {feature.description}
                </p>

                <div style={{
                  marginTop: '1.5rem',
                  color: '#a78bfa',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  Launch Tool →
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;