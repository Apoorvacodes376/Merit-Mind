import React, { useState } from 'react';
import api from '../api';

const FairnessOptimizer = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const handleOptimize = async () => {
    if (!text) return;
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await api.post('/fairness-optimizer', { text });
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to optimize candidate ranking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
        Fairness Optimizer
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Paste a list of candidate profiles to re-rank them ensuring the four-fifths (80%) rule and diverse representation.
      </p>

      {error && <div className="error-message">{error}</div>}

      <div className="card" style={{ marginBottom: '2.5rem' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste candidate data (JSON or CSV format)..."
          rows="10"
          style={{ marginBottom: '1rem', resize: 'vertical', fontFamily: 'monospace' }}
        ></textarea>
        <button 
          onClick={handleOptimize}
          disabled={loading || !text}
          style={{ display: 'inline-flex', alignItems: 'center', minWidth: '180px', justifyContent: 'center' }}
        >
          {loading ? <div className="spinner"></div> : 'Optimize Ranking'}
        </button>
      </div>

      {results && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--accent-purple)' }}>Optimized Results</h3>
            <div style={{ padding: '0.5rem 1rem', background: results.fairness_achieved ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', border: `1px solid ${results.fairness_achieved ? 'var(--success)' : 'var(--danger)'}`, borderRadius: '20px', color: results.fairness_achieved ? 'var(--success)' : 'var(--danger)', fontWeight: 'bold' }}>
              {results.fairness_achieved ? 'Fairness Threshold Met' : 'Warning: Targets Missed'}
            </div>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '1rem' }}>Rank</th>
                  <th style={{ padding: '1rem' }}>Candidate ID</th>
                  <th style={{ padding: '1rem' }}>Original Score</th>
                  <th style={{ padding: '1rem' }}>Adjusted Score</th>
                  <th style={{ padding: '1rem' }}>Selection Status</th>
                </tr>
              </thead>
              <tbody>
                {results.optimized_ranking?.map((candidate, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(124, 58, 237, 0.1)', background: candidate.selected ? 'rgba(124, 58, 237, 0.05)' : 'transparent' }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>#{idx + 1}</td>
                    <td style={{ padding: '1rem' }}>{candidate.id}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{candidate.original_score}</td>
                    <td style={{ padding: '1rem', color: 'var(--accent-pink)' }}>{candidate.optimized_score}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '12px', 
                        fontSize: '0.8rem',
                        background: candidate.selected ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                        color: candidate.selected ? 'var(--success)' : 'var(--text-secondary)'
                      }}>
                        {candidate.selected ? 'Shortlisted' : 'Archived'}
                      </span>
                    </td>
                  </tr>
                ))}
                {!results.optimized_ranking?.length && (
                  <tr>
                    <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                      No ranking data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FairnessOptimizer;
