import React, { useState } from 'react';
import api from '../api';

const JobRewriter = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const handleRewrite = async () => {
    if (!text) return;
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await api.post('/rewrite-jd', { text });
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to rewrite job description. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
        Job Rewriter
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Paste a biased job description to see auto-generated text alternatives optimized for inclusion.
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
          onClick={handleRewrite}
          disabled={loading || !text}
          style={{ display: 'inline-flex', alignItems: 'center', minWidth: '150px', justifyContent: 'center' }}
        >
          {loading ? <div className="spinner"></div> : 'Rewrite JD'}
        </button>
      </div>

      {results && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card" style={{ borderLeft: '4px solid var(--success)' }}>
            <h3 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>Conservative Rewrite</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Minor grammar corrections resolving explicit bias.
            </p>
            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
              {results.conservative || 'N/A'}
            </div>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--accent-purple)' }}>
            <h3 style={{ color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>Balanced Rewrite</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Tone adjustment and structural improvements for a neutral output.
            </p>
            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
              {results.balanced || 'N/A'}
            </div>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--accent-pink)' }}>
            <h3 style={{ color: 'var(--accent-pink)', marginBottom: '0.5rem' }}>Inclusive Rewrite</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Maximum appeal to underrepresented demographics without compromising skill requirements.
            </p>
            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
              {results.inclusive || 'N/A'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobRewriter;
