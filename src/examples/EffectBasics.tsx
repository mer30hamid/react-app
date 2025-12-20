import { useState, useEffect } from 'react';

function EffectBasics() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Effect 1: Runs after EVERY render
  useEffect(() => {
    console.log('Effect 1: Component rendered');
  });

  // Effect 2: Runs only ONCE (on mount)
  useEffect(() => {
    console.log('Effect 2: Component mounted');
    document.title = 'Effect Examples';

    // Cleanup function (runs on unmount)
    return () => {
      console.log('Effect 2: Component will unmount');
    };
  }, []); // Empty dependency array = run once

  // Effect 3: Runs when count changes
  useEffect(() => {
    console.log('Effect 3: Count changed to', count);
  }, [count]); // Only re-run if count changes

  // Effect 4: Runs when name changes
  useEffect(() => {
    console.log('Effect 4: Name changed to', name);
  }, [name]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>useEffect Examples</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>Open the console to see effect logs</p>

      <div style={{ marginBottom: '1rem' }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: '0.5rem', padding: '0.5rem' }}
          />
        </label>
      </div>
    </div>
  );
}

export default EffectBasics;