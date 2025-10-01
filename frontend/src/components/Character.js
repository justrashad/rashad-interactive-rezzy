import React from 'react';

const Character = ({ position, isMoving, currentLevel, gameAction, gameState }) => {
  const getCharacterClass = () => {
    let classes = 'character';
    if (isMoving) classes += ' moving';
    
    // Use gameState for more dynamic animations
    switch (gameState) {
      case 'basketball':
        classes += ' playing-basketball dribbling';
        break;
      case 'swimming':
        classes += ' swimming underwater';
        break;
      case 'bossfight':
        classes += ' fighting-boss battle-stance';
        break;
      case 'flying':
        classes += ' flying jetpack-active';
        break;
      case 'landing':
        classes += ' landing superhero-landing';
        break;
      default:
        if (gameAction) {
          classes += ` ${gameAction}`;
        }
        break;
    }
    
    return classes;
  };

  return (
    <div 
      className={getCharacterClass()}
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

      {/* Special effects for different actions */}
      {gameAction === 'flying' && (
        <div className="jetpack">
          <div className="jetpack-flame flame1"></div>
          <div className="jetpack-flame flame2"></div>
        </div>
      )}
      
      {gameAction === 'swimming' && (
        <div className="swim-bubbles">
          <div className="swim-bubble bubble1"></div>
          <div className="swim-bubble bubble2"></div>
          <div className="swim-bubble bubble3"></div>
        </div>
      )}
      
      {gameAction === 'bossfight' && (
        <div className="power-aura"></div>
      )}
    </div>
  );
};

export default Character;