import React, { useState } from 'react';
import api from '../api';

const Counterfactual = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const handleTest = async () => {
    if (!text) return;
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await api.post('/counterfactual', { text });
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to simulate counterfactuals. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
        Counterfactual Fairness
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Paste a candidate's evaluation or resume snippet to test if changing demographic indicators alters the algorithmic assessment.
      </p>

      {error && <div className="error-message">{error}</div>}

      <div className="card" style={{ marginBottom: '2.5rem' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste evaluation text here..."
          rows="6"
          style={{ marginBottom: '1rem', resize: 'vertical' }}
        ></textarea>
        <button 
          onClick={handleTest}
          disabled={loading || !text}
          style={{ display: 'inline-flex', alignItems: 'center', minWidth: '150px', justifyContent: 'center' }}
        >
          {loading ? <div className="spinner"></div> : 'Run Simulation'}
        </button>
      </div>

      {results && (
        <div className="card">
          <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>Simulation Results</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ flex: 1, padding: '1rem', background: 'rgba(13, 13, 26, 0.4)', borderRadius: '8px' }}>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Original Rating</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{results.original_score || 0}/100</div>
            </div>
            
            <div style={{ color: 'var(--accent-pink)', fontSize: '1.5rem' }}>&rarr;</div>
            
            <div style={{ flex: 1, padding: '1rem', background: 'rgba(13, 13, 26, 0.4)', borderRadius: '8px' }}>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Counterfactual Rating</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{results.counterfactual_score || 0}/100</div>
            </div>
          </div>
          
          <div style={{ padding: '1.5rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '8px', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
            <h4 style={{ color: 'var(--accent-pink)', marginBottom: '0.5rem' }}>Variance Analysis</h4>
            <p style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
              A variance of <strong style={{ color: results.variance > 5 ? 'var(--danger)' : 'var(--success)' }}>{results.variance}%</strong> was detected when swapping demographic markers.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {results.passed ? 
                '✅ This assessment passes counterfactual fairness constraints (variance < 5%).' : 
                '❌ This assessment failed counterfactual fairness. The evaluation heavily depends on identity indicators.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Counterfactual;
