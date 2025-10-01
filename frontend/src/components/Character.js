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
      {/* Character head with improved design */}
      <div className="character-head">
        <div className="character-hair"></div>
        <div className="character-glasses"></div>
        <div className="character-eyes">
          <div className="character-eye left"></div>
          <div className="character-eye right"></div>
        </div>
        <div className="character-mouth"></div>
      </div>
      
      {/* Character body */}
      <div className="character-body">
        {/* Arms */}
        <div className="character-arms">
          <div className="character-arm left"></div>
          <div className="character-arm right"></div>
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