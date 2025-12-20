import { useState, useEffect } from 'react';

function DocumentTitle() {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      document.title = `Count: ${count}`;
    }

    // Cleanup: restore title when component unmounts
    return () => {
      document.title = 'React Workshop';
    };
  }, [count, paused]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Document Title Sync</h2>
      <p>Look at your browser tab title!</p>

      <p style={{ fontSize: '2rem', margin: '1rem 0' }}>{count}</p>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setPaused(!paused)}>
          {paused ? 'Resume' : 'Pause'} Title Updates
        </button>
      </div>
    </div>
  );
}

export default DocumentTitle;