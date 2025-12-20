import { useState, useEffect } from 'react';

function WindowEvents() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // No dependencies - set up once

  // Window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ padding: '2rem', minHeight: '150vh' }}>
      <h2>Window Events</h2>

      <div
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          padding: '1rem',
          border: '1px solid #ddd',
        }}
      >
        <p>Window width: {windowWidth}px</p>
        <p>Scroll position: {Math.round(scrollY)}px</p>
        <p>
          Mouse: ({mousePosition.x}, {mousePosition.y})
        </p>
      </div>

      <p style={{ marginTop: '2rem', color: '#666' }}>
        Scroll down to see scroll position change...
      </p>
    </div>
  );
}

export default WindowEvents;