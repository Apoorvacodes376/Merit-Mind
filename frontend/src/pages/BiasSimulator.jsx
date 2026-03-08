import React, { useState } from 'react';
import api from '../api';

const BiasSimulator = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const handleSimulate = async () => {
    if (!text) return;
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await api.post('/bias-simulator', { text });
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to run simulation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
        Bias Risk Simulator
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Forecast the long-term diversity impact of your current hiring parameters and receive strategic recommendations.
      </p>

      {error && <div className="error-message">{error}</div>}

      <div className="card" style={{ marginBottom: '2.5rem' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste process parameters, historical hiring metrics, or strategy details..."
          rows="6"
          style={{ marginBottom: '1rem', resize: 'vertical' }}
        ></textarea>
        <button 
          onClick={handleSimulate}
          disabled={loading || !text}
          style={{ display: 'inline-flex', alignItems: 'center', minWidth: '180px', justifyContent: 'center' }}
        >
          {loading ? <div className="spinner"></div> : 'Run Simulation'}
        </button>
      </div>

      {results && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '2rem' }}>
          
          <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Forecasted Bias Risk</h3>
            <div style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              border: `8px solid ${results.risk_score > 60 ? 'var(--danger)' : results.risk_score > 30 ? 'var(--warning)' : 'var(--success)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: results.risk_score > 60 ? 'var(--danger)' : results.risk_score > 30 ? 'var(--warning)' : 'var(--success)'
            }}>
              {results.risk_score || 0}%
            </div>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
              {results.risk_score > 60 ? 'High Risk of Disparate Impact' : results.risk_score > 30 ? 'Moderate Bias Risk' : 'Low Risk / Inclusive Process'}
            </p>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--accent-pink)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.8rem' }}>
              Strategic Recommendations
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {results.recommendations?.map((rec, idx) => (
                <li key={idx} style={{ 
                  padding: '1rem', 
                  marginBottom: '1rem', 
                  background: 'rgba(236, 72, 153, 0.05)', 
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--accent-pink)',
                  lineHeight: '1.5'
                }}>
                  {rec}
                </li>
              ))}
              {!results.recommendations?.length && (
                <li style={{ color: 'var(--text-secondary)' }}>No recommendations generated for this input.</li>
              )}
            </ul>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default BiasSimulator;
