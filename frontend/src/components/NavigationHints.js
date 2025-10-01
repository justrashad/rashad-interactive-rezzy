import React from 'react';

const NavigationHints = () => {
  return (
    <div className="nav-hints">
      <div className="hint-item">
        <span className="key-icon">↑↓←→</span>
        <span>Navigate</span>
      </div>
      <div className="hint-item">
        <span className="key-icon">↓</span>
        <span>Next Level</span>
      </div>
      <div className="hint-item">
        <span className="key-icon">→</span>
        <span>Move Forward</span>
      </div>
    </div>
  );
};

export default NavigationHints;