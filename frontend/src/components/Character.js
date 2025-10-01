import React from 'react';

const Character = ({ position, isMoving }) => {
  return (
    <div 
      className={`character ${isMoving ? 'moving' : ''}`}
      style={{
        left: `${position.x}%`,
        bottom: `${position.y}px`
      }}
    >
      {/* Character head with brown skin */}
      <div className="character-head" style={{ background: '#8B4513' }}>
        <div className="character-hair"></div>
        <div className="character-glasses"></div>
      </div>
      
      {/* Character body */}
      <div className="character-body">
        {/* Arms */}
        <div className="character-arms">
          <div className="character-arm left" style={{ background: '#8B4513' }}></div>
          <div className="character-arm right" style={{ background: '#8B4513' }}></div>
        </div>
        
        {/* Legs */}
        <div className="character-legs">
          <div className="character-leg left"></div>
          <div className="character-leg right"></div>
        </div>
      </div>
    </div>
  );
};

export default Character;