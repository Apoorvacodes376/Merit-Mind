import React, { useState } from 'react';
import api from '../api';

const EmotionBlind = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const handleEvaluate = async () => {
    if (!text) return;
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await api.post('/emotion-blind', { text });
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to evaluate response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
        Emotion Blind Evaluation
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Paste interview transcripts or candidate responses to assess professional substance independently of tone or emotive framing.
      </p>

      {error && <div className="error-message">{error}</div>}

      <div className="card" style={{ marginBottom: '2.5rem' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste interview response transcript here..."
          rows="8"
          style={{ marginBottom: '1rem', resize: 'vertical' }}
        ></textarea>
        <button 
          onClick={handleEvaluate}
          disabled={loading || !text}
          style={{ display: 'inline-flex', alignItems: 'center', minWidth: '180px', justifyContent: 'center' }}
        >
          {loading ? <div className="spinner"></div> : 'Extract Semantics'}
        </button>
      </div>

      {results && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Semantic Competence</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--success)' }}>
                {results.semantic_score || 0}%
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Objective, fact-based value of response
              </p>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Emotional Framing</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--warning)' }}>
                {results.emotion_score || 0}%
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Subjective or persuasive elements
              </p>
            </div>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>Filtered Response Transcript</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              The following text has been stripped of emotive influence, leaving only core logical points:
            </p>
            <div style={{ 
              padding: '1.5rem', 
              background: 'rgba(13, 13, 26, 0.6)', 
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              minHeight: '200px',
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: 'var(--text-primary)'
            }}>
              "{results.filtered_response || 'No core semantics detected.'}"
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default EmotionBlind;
