import React from 'react';
import './Character.css';

const Character = ({ position, currentLevel, isMoving, gameAction, gameState }) => {
  
  const renderOutfitDetails = () => {
    // Level-specific costume elements rendered on top
    switch(currentLevel) {
      case 0:
      case 1:
        // Business Professional
        return (
          <>
            <div className="business-tie">
              <div className="tie-knot"></div>
            </div>
            <div className="business-briefcase"></div>
          </>
        );
      
      case 2:
        // Basketball Player
        return (
          <>
            <div className="basketball-jersey-number">23</div>
            <div className="basketball-headband"></div>
            <div className={`basketball-prop ${isMoving ? 'dribbling' : ''}`}></div>
          </>
        );
      
      case 3:
        // Marvel Stingray
        return (
          <>
            <div className="stingray-helmet">
              <div className="helmet-glass"></div>
            </div>
            <div className="stingray-chest-emblem"></div>
            <div className="oxygen-tank">
              <div className="tank-valve"></div>
            </div>
            <div className="bubble-stream">
              <div className="bubble b1"></div>
              <div className="bubble b2"></div>
              <div className="bubble b3"></div>
            </div>
          </>
        );
      
      case 4:
        // Black Panther
        return (
          <>
            <div className="panther-mask">
              <div className="panther-ear left"></div>
              <div className="panther-ear right"></div>
              <div className="panther-eye left"></div>
              <div className="panther-eye right"></div>
            </div>
            <div className="panther-necklace"></div>
            <div className="vibranium-claws left"></div>
            <div className="vibranium-claws right"></div>
          </>
        );
      
      case 5:
        // Iron Man
        return (
          <>
            <div className="ironman-helmet">
              <div className="faceplate-top"></div>
              <div className="faceplate-bottom"></div>
              <div className="helmet-eyes left"></div>
              <div className="helmet-eyes right"></div>
            </div>
            <div className="arc-reactor">
              <div className="reactor-core"></div>
              <div className="reactor-ring"></div>
            </div>
            <div className="repulsor-hand left">
              <div className="repulsor-glow"></div>
            </div>
            <div className="repulsor-hand right">
              <div className="repulsor-glow"></div>
            </div>
            <div className="repulsor-foot left">
              <div className="repulsor-glow"></div>
            </div>
            <div className="repulsor-foot right">
              <div className="repulsor-glow"></div>
            </div>
          </>
        );
      
      case 6:
        // Black Adam
        return (
          <>
            <div className="black-adam-cape">
              <div className="cape-collar"></div>
            </div>
            <div className="lightning-bolt">
              <div className="bolt-glow"></div>
            </div>
            <div className="adam-crown">
              <div className="crown-jewel"></div>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      className={`character-modern level-${currentLevel} ${isMoving ? 'moving' : ''} ${gameState === 'swimming' ? 'swimming' : ''} ${gameState}`}
      style={{
        left: `${position.x}%`,
        bottom: `${position.y}px`,
      }}
    >
      {/* Shadow */}
      <div className="character-shadow"></div>
      
      {/* Main Character Body */}
      <div className="character-body-container">
        
        {/* Head */}
        <div className="char-head-modern">
          <div className="head-shape">
            {/* Face (hidden when wearing full helmets) */}
            <div className="face-container">
              <div className="eyes-modern">
                <div className="eye left">
                  <div className="pupil"></div>
                  <div className="eye-shine"></div>
                </div>
                <div className="eye right">
                  <div className="pupil"></div>
                  <div className="eye-shine"></div>
                </div>
              </div>
              <div className="nose-modern"></div>
              <div className="mouth-modern">
                <div className="smile-line"></div>
              </div>
            </div>
            
            {/* Ears */}
            <div className="ears-modern">
              <div className="ear left"></div>
              <div className="ear right"></div>
            </div>
          </div>
        </div>
        
        {/* Neck */}
        <div className="neck-modern"></div>
        
        {/* Torso */}
        <div className="torso-modern">
          <div className="torso-shape">
            {/* Base shirt/body */}
            <div className="torso-fill"></div>
            
            {/* Arms */}
            <div className="arms-modern">
              <div className="arm left">
                <div className="upper-arm"></div>
                <div className="forearm"></div>
                <div className="hand">
                  <div className="fingers"></div>
                  <div className="thumb"></div>
                </div>
              </div>
              <div className="arm right">
                <div className="upper-arm"></div>
                <div className="forearm"></div>
                <div className="hand">
                  <div className="fingers"></div>
                  <div className="thumb"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Waist/Belt */}
        <div className="waist-modern">
          <div className="belt">
            <div className="belt-buckle"></div>
          </div>
        </div>
        
        {/* Legs */}
        <div className="legs-modern">
          <div className="leg left">
            <div className="thigh"></div>
            <div className="shin"></div>
            <div className="foot">
              <div className="shoe"></div>
              <div className="shoe-sole"></div>
            </div>
          </div>
          <div className="leg right">
            <div className="thigh"></div>
            <div className="shin"></div>
            <div className="foot">
              <div className="shoe"></div>
              <div className="shoe-sole"></div>
            </div>
          </div>
        </div>
        
        {/* Outfit-specific details */}
        <div className="outfit-details-layer">
          {renderOutfitDetails()}
        </div>
      </div>
    </div>
  );
};

export default Character;