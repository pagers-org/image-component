import { useState, useEffect } from 'react';

const ImageRotator = () => {
  const [tiltAngle, setTiltAngle] = useState(0);

  useEffect(() => {
    const handleTilt = (event:any) => {
      const { beta, gamma } = event.accelerationIncludingGravity;
      const angle = Math.atan2(beta, gamma) * (180 / Math.PI);
      setTiltAngle(angle);
    };

    window.addEventListener('deviceorientation', handleTilt);

    return () => {
      window.removeEventListener('deviceorientation', handleTilt);
    };
  }, []);

  return (
    <div style={{ transform: `rotate(${tiltAngle}deg)`, transition: 'transform 0.2s ease-in-out' }}>
      <img src="/penguin.jpg" alt="Rotating Image" />
    </div>
  );
};

export default ImageRotator;
