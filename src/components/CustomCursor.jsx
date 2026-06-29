import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-target') ||
        target.classList.contains('cursor-pointer');
      
      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth lagging effect for the outer ring
  useEffect(() => {
    let animationFrameId;
    
    const updateRing = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Interpolation factor: 0.15 makes the outer ring drag smoothly behind the cursor
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateRing);
    };

    animationFrameId = requestAnimationFrame(updateRing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner snap dot */}
      <div 
        className={`custom-cursor-dot ${isHovered ? 'bg-neon-pink shadow-[0_0_15px_#ec4899] scale-125' : 'bg-neon-cyan shadow-[0_0_10px_#00f0ff]'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Outer drag ring */}
      <div 
        className={`custom-cursor-ring ${isHovered ? 'scale-150 border-neon-pink bg-neon-pink/5' : 'border-neon-cyan/50 bg-transparent'}`}
        style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}
      />
    </>
  );
}
