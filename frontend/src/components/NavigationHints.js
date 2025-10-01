import React from 'react';

const NavigationHints = () => {
  return (
    <div className="nav-hints">
      <div className="hint-item">
        <span className="key-icon">←→</span>
        <span>Walk</span>
      </div>
      <div className="hint-item">
        <span className="key-icon">SPACE</span>
        <span>Jump</span>
      </div>
      <div className="hint-item">
        <span className="key-icon">WASD</span>
        <span>Alt Controls</span>
      </div>
    </div>
  );
};

export default NavigationHints;