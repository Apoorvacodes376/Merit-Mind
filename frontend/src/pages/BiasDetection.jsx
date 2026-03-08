import React, { useState } from 'react';
import api from '../api';

const BiasDetection = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const handleDetection = async () => {
    if (!text) return;
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await api.post('/detect-bias', { text });
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to detect bias. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
        Bias Detection
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Paste your job description below to identify biased language and receive an overall bias matrix score.
      </p>

      {error && <div className="error-message">{error}</div>}

      <div className="card" style={{ marginBottom: '2.5rem' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste Job Description here..."
          rows="8"
          style={{ marginBottom: '1rem', resize: 'vertical' }}
        ></textarea>
        <button 
          onClick={handleDetection}
          disabled={loading || !text}
          style={{ display: 'inline-flex', alignItems: 'center', minWidth: '150px', justifyContent: 'center' }}
        >
          {loading ? <div className="spinner"></div> : 'Detect Bias'}
        </button>
      </div>

      {results && (
        <div className="card">
          <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>Detection Results</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{ padding: '1.5rem', background: 'rgba(13, 13, 26, 0.4)', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--success)', marginBottom: '0.5rem' }}>
                {results.gender_score || 0}%
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Gender Neutrality</div>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(13, 13, 26, 0.4)', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--warning)', marginBottom: '0.5rem' }}>
                {results.age_score || 0}%
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Age Agnostic</div>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(13, 13, 26, 0.4)', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--danger)', marginBottom: '0.5rem' }}>
                {results.race_score || 0}%
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Racial Equity</div>
            </div>
          </div>
          
          <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Problematic Phrases Identified:</h4>
          {results.phrases && results.phrases.length > 0 ? (
             <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                {results.phrases.map((phrase, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-pink)' }}>"{phrase.word}"</span> - {phrase.reason}
                  </li>
                ))}
             </ul>
          ) : (
            <p style={{ color: 'var(--text-secondary)' }}>No explicitly biased phrases detected.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BiasDetection;
