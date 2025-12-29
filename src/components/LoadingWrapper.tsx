type LoadingWrapperProps = {
  isLoading: boolean;
  error?: string;
  children: React.ReactNode;
};

function LoadingWrapper({ isLoading, error, children }: LoadingWrapperProps) {
  // Early return for loading
  if (isLoading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div>Loading...</div>
      </div>
    );
  }

  // Early return for error
  if (error) {
    return (
      <div style={{ padding: '2rem', backgroundColor: '#fee', color: '#c00' }}>
        Error: {error}
      </div>
    );
  }

  // Main content
  return <>{children}</>;
}

export default LoadingWrapper;
