
import React, { useState, useEffect } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();
    
    return () => {
      removeEventListeners();
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-50 ${hidden ? 'opacity-0' : 'opacity-100'}`}
      style={{ mixBlendMode: 'exclusion' }}
    >
      <div
        className={`fixed rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out
          ${clicked ? 'scale-75 bg-white/30' : 'scale-100'}
          ${linkHovered ? 'scale-150 bg-white/20 backdrop-blur-sm' : 'bg-white'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? '36px' : '12px',
          height: linkHovered ? '36px' : '12px',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, transform 0.1s',
        }}
      />
      <div
        className="fixed rounded-full border border-white/30 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? '60px' : '36px',
          height: linkHovered ? '60px' : '36px',
          transitionDelay: '0.05s',
          opacity: linkHovered ? 1 : 0.5,
        }}
      />
    </div>
  );
}
