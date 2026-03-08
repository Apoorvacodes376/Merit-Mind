import React, { useState } from 'react';
import api from '../api';

const SkillGraph = () => {
  const [jdText, setJdText] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const handleMatch = async () => {
    if (!jdText || !resumeText) return;
    setLoading(true);
    setError('');
    setResults(null);

    try {
      // Send them coupled in a payload object to match backend expected format logically
      const response = await api.post('/skill-graph', { text: JSON.stringify({ jd: jdText, resume: resumeText }) });
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to generate skill graph. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
        Skill Graph Matching
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Avoid keyword-matching bias by mapping underlying skills from a Resume directly to the Job Description.
      </p>

      {error && <div className="error-message">{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Job Description</h3>
          <textarea
            value={jdText}
            onChange={(e) => setJdText(e.target.value)}
            placeholder="Paste Job Description here..."
            rows="8"
            style={{ resize: 'vertical' }}
          ></textarea>
        </div>
        <div className="card">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Candidate Resume</h3>
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste Resume text here..."
            rows="8"
            style={{ resize: 'vertical' }}
          ></textarea>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <button 
          onClick={handleMatch}
          disabled={loading || !jdText || !resumeText}
          style={{ display: 'inline-flex', alignItems: 'center', minWidth: '200px', justifyContent: 'center' }}
        >
          {loading ? <div className="spinner"></div> : 'Generate Skill Match'}
        </button>
      </div>

      {results && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--accent-purple)' }}>Match Results</h3>
            <div style={{ padding: '0.5rem 1rem', background: 'var(--gradient)', borderRadius: '20px', fontWeight: 'bold' }}>
              {results.match_score || 0}% Overall Match
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--success)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                Skills Found
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {results.skills_matched?.map((skill, idx) => (
                  <li key={idx} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span> {skill}
                  </li>
                ))}
                {!results.skills_matched?.length && <li style={{ color: 'var(--text-secondary)' }}>No matches found</li>}
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--danger)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                Missing Competencies
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {results.skills_missing?.map((skill, idx) => (
                  <li key={idx} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--danger)' }}>✗</span> {skill}
                  </li>
                ))}
                {!results.skills_missing?.length && <li style={{ color: 'var(--text-secondary)' }}>No missing core competencies</li>}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillGraph;
