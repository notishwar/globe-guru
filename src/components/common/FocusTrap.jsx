import React, { useEffect, useRef } from 'react';

const FocusTrap = ({ children, isActive, onClose }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!isActive) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'Tab') {
        const focusable = ref.current.querySelectorAll('a[href], button, textarea, input, select');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
        else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onClose]);
  return <div ref={ref}>{children}</div>;
};

export default FocusTrap;