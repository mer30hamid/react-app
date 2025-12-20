import { useState, useEffect } from 'react';

function LocalStorageExample() {
  const [notes, setNotes] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('notes');
    if (saved) {
      setNotes(saved);
      console.log('Loaded notes from localStorage');
    }
  }, []); // Run once on mount

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', notes);
    console.log('Saved notes to localStorage');
  }, [notes]); // Run whenever notes changes

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Persistent Notes</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Your notes are automatically saved and will persist after refresh
      </p>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Type your notes here..."
        rows={10}
        style={{
          width: '100%',
          padding: '1rem',
          fontSize: '1rem',
          fontFamily: 'inherit',
        }}
      />

      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => setNotes('')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Clear Notes
        </button>
      </div>

      <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#999' }}>
        Try refreshing the page - your notes will still be here!
      </p>
    </div>
  );
}

export default LocalStorageExample;