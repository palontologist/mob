// pages/spell-page.tsx
"use client"
import { useState } from 'react';
import { startSpell } from './api/api';

export default function Reports() {
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartSpell = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await startSpell();
      setResult(data);
    } catch (err) {
      setError('Failed to start spell');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Spell Page</h1>
      <button onClick={handleStartSpell} disabled={loading}>
        {loading ? 'Starting Spell...' : 'Start Spell'}
      </button>
      {error && <p>Error: {error}</p>}
      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}