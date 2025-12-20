import { useState } from 'react';

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'user' | 'guest'>('guest');
  const [notifications, setNotifications] = useState(3);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Conditional Rendering Patterns</h2>

      {/* Pattern 1: && operator (render if truthy) */}
      {notifications > 0 && (
        <div style={{ padding: '1rem', backgroundColor: '#fff3cd', marginBottom: '1rem' }}>
          You have {notifications} new notifications
        </div>
      )}

      {/* Pattern 2: Ternary operator (render A or B) */}
      <div style={{ marginBottom: '1rem' }}>
        Status: {isLoggedIn ? '✅ Logged In' : '❌ Logged Out'}
      </div>

      {/* Pattern 3: If/else blocks (complex logic) */}
      <div style={{ marginBottom: '1rem' }}>
        {isLoggedIn ? (
          <div>
            <p>Welcome back!</p>
            {userRole === 'admin' && <p style={{ color: 'red' }}>⚡ Admin Dashboard Access</p>}
            {userRole === 'user' && <p>Standard user access</p>}
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please log in to continue</p>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          </div>
        )}
      </div>

      {/* Pattern 4: Early return (in actual components) */}
      {/* We'll show this in a separate component below */}

      {/* Controls */}
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <h3>Controls</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
          <button onClick={() => setNotifications(notifications + 1)}>Add Notification</button>
          <button onClick={() => setNotifications(0)}>Clear Notifications</button>
        </div>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value as any)}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
}

export default ConditionalRendering;