import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        padding: '2rem',
        border: '2px solid #0066cc',
        borderRadius: '8px',
      }}
    >
      <h2>Counter: {count}</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            style={{ marginLeft: '0.5rem', width: '60px' }}
          />
        </label>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={decrement}>- {step}</button>
        <button onClick={increment}>+ {step}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
