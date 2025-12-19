type UserProfileProps = {
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'guest';
  isOnline: boolean;
};

function UserProfile({ name, email, avatar, role, isOnline }: UserProfileProps) {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: avatar ? 'transparent' : '#0066cc',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        {avatar ? <img src={avatar} alt={name} style={{ width: '100%', borderRadius: '50%' }} /> : name[0]}
      </div>
      <div>
        <h3 style={{ margin: '0 0 0.25rem 0' }}>
          {name}
          <span
            style={{
              marginLeft: '0.5rem',
              padding: '0.25rem 0.5rem',
              fontSize: '0.75rem',
              backgroundColor: role === 'admin' ? '#ff6b6b' : '#51cf66',
              color: 'white',
              borderRadius: '4px',
            }}
          >
            {role}
          </span>
        </h3>
        <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>{email}</p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem' }}>
          <span style={{ color: isOnline ? '#51cf66' : '#aaa' }}>●</span> {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;