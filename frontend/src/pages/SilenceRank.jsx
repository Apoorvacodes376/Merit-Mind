import React, { useState } from 'react';
import api from '../api';

const SilenceRank = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const handleRank = async () => {
    if (!text) return;
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await api.post('/silence-rank', { text });
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to process silence rank. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
        Silence Rank
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Strip names, pronouns, graduation years, and cultural affiliations from a resume to generate an anonymous, merit-based profile.
      </p>

      {error && <div className="error-message">{error}</div>}

      <div className="card" style={{ marginBottom: '2.5rem' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste candidate resume text here..."
          rows="10"
          style={{ marginBottom: '1rem', resize: 'vertical' }}
        ></textarea>
        <button 
          onClick={handleRank}
          disabled={loading || !text}
          style={{ display: 'inline-flex', alignItems: 'center', minWidth: '180px', justifyContent: 'center' }}
        >
          {loading ? <div className="spinner"></div> : 'Anonymize & Rank'}
        </button>
      </div>

      {results && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="card" style={{ borderTop: '4px solid var(--warning)' }}>
            <h3 style={{ color: 'var(--warning)', marginBottom: '1rem' }}>Identified Sensitivities</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {results.stripped_entities?.map((entity, idx) => (
                <li key={idx} style={{ 
                  padding: '0.8rem', 
                  marginBottom: '0.5rem', 
                  background: 'rgba(245, 158, 11, 0.1)', 
                  borderRadius: '6px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(245, 158, 11, 0.2)'
                }}>
                  <span style={{ textDecoration: 'line-through', color: 'var(--text-secondary)' }}>{entity.original}</span>
                  <span style={{ color: 'var(--warning)', fontSize: '0.8rem', fontWeight: 'bold' }}>{entity.type}</span>
                </li>
              ))}
              {!results.stripped_entities?.length && (
                <li style={{ color: 'var(--text-secondary)', padding: '1rem', textAlign: 'center' }}>No sensitive entities found.</li>
              )}
            </ul>
          </div>
          
          <div className="card" style={{ borderTop: '4px solid var(--accent-purple)' }}>
            <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>Anonymized Text Output</h3>
            <div style={{ 
              padding: '1.5rem', 
              background: 'rgba(13, 13, 26, 0.6)', 
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              minHeight: '200px',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6'
            }}>
              {results.anonymized_text || 'No output generated.'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SilenceRank;
