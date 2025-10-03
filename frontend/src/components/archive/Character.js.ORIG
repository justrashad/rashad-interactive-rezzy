import React from 'react';

const Character = ({ position, isMoving, currentLevel, gameAction, gameState }) => {
  const getCharacterClass = () => {
    let classes = 'character';
    if (isMoving) classes += ' moving';
    
    // Add outfit class based on level
    classes += ` outfit-level-${currentLevel}`;
    
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

  // Render different character details based on level
  const renderCharacterDetails = () => {
    switch (currentLevel) {
      case 0: // Introduction - Normal outfit
      case 1: // About Rashad - Nerd outfit
        return (
          <>
            <div className="nerd-glasses"></div>
            <div className="pocket-protector"></div>
            <div className="tie"></div>
            <div className="calculator"></div>
          </>
        );
      case 2: // Basketball - Basketball uniform
        return (
          <>
            <div className="basketball-headband"></div>
            <div className="jersey-number">23</div>
            <div className="basketball-shorts"></div>
            <div className="sneakers"></div>
          </>
        );
      case 3: // Swimming - Scuba gear
        return (
          <>
            <div className="scuba-mask"></div>
            <div className="oxygen-tank"></div>
            <div className="wetsuit"></div>
            <div className="fins"></div>
            <div className="bubbles-stream"></div>
          </>
        );
      case 4: // Boss Battle - Black Panther suit
        return (
          <>
            <div className="panther-suit"></div>
            <div className="panther-mask"></div>
            <div className="vibranium-claws"></div>
            <div className="power-aura-bp"></div>
          </>
        );
      case 5: // Flying - Jetpack outfit
        return (
          <>
            <div className="pilot-goggles"></div>
            <div className="flight-suit"></div>
            <div className="jetpack-detailed"></div>
            <div className="jetpack-flames-detailed"></div>
          </>
        );
      case 6: // Landing - Hero cape
        return (
          <>
            <div className="hero-cape"></div>
            <div className="victory-crown"></div>
            <div className="champion-medal"></div>
          </>
        );
      default:
        return null;
    }
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
        <div className="character-collar"></div>
        <div className="character-tie"></div>
        
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

      {/* Level-specific character details */}
      {renderCharacterDetails()}

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