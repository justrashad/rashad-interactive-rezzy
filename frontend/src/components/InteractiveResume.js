import React, { useState, useEffect, useCallback } from 'react';
import LoadingScreen from './LoadingScreen';
import GameScene from './GameScene';
import { resumeData } from '../data/resumeData';

const InteractiveResume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [characterPosition, setCharacterPosition] = useState({ x: 50, y: 130 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    // Skip loading screen for testing
    setIsLoading(false);
  }, []);

  const [worldPosition, setWorldPosition] = useState(0); // Track position in the continuous world
  const [isJumping, setIsJumping] = useState(false);
  const [gameState, setGameState] = useState('exploring'); // exploring, basketball, swimming, bossfight, flying, landing
  const [levelProgress, setLevelProgress] = useState(0); // Progress within current level's game
  const [keysPressed, setKeysPressed] = useState(new Set()); // Track held keys for smooth movement

  // Handle key down (start movement)
  const handleKeyDown = useCallback((event) => {
    if (isLoading) return;
    
    const key = event.key.toLowerCase();
    if (['arrowleft', 'arrowright', 'a', 'd'].includes(key)) {
      
      // Immediate movement on key press
      setWorldPosition(prev => {
        let newPosition = prev;
        
        if (key === 'arrowleft' || key === 'a') {
          newPosition = Math.max(0, newPosition - 50);
        }
        if (key === 'arrowright' || key === 'd') {
          newPosition = Math.min(12000, newPosition + 50);
        }
        
        return newPosition;
      });
      
      setKeysPressed(prev => new Set(prev).add(key));
      setIsMoving(true);
    }
    
    // Handle non-movement keys
    switch (event.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
      case ' ':
        if (gameState === 'basketball') {
          // Trigger basketball shot sequence
          const characterBall = document.getElementById('character-ball');
          const shotBall = document.getElementById('shot-ball');
          const scorePopup = document.getElementById('score-popup');
          const swishEffect = document.getElementById('swish-animation');
          const crowdCheer = document.getElementById('crowd-celebration');
          
          // Start shooting sequence
          if (characterBall) {
            characterBall.classList.add('shooting-up');
          }
          
          if (shotBall) {
            setTimeout(() => {
              shotBall.classList.add('shooting');
            }, 200);
            
            setTimeout(() => {
              if (scorePopup) scorePopup.classList.add('show');
              if (swishEffect) swishEffect.style.display = 'block';
              if (crowdCheer) crowdCheer.style.display = 'block';
              
              // Update score
              const homeScore = document.getElementById('home-score');
              if (homeScore) {
                const currentScore = parseInt(homeScore.textContent) || 0;
                homeScore.textContent = currentScore + 2;
              }
            }, 1800);
            
            // Reset after animation
            setTimeout(() => {
              if (characterBall) characterBall.classList.remove('shooting-up');
              shotBall.classList.remove('shooting');
              if (scorePopup) scorePopup.classList.remove('show');
              if (swishEffect) swishEffect.style.display = 'none';
              if (crowdCheer) crowdCheer.style.display = 'none';
            }, 4000);
          }
        } else if (!isJumping) {
          setIsJumping(true);
          setCharacterPosition(prev => ({ ...prev, y: prev.y + 50 }));
          setTimeout(() => {
            setCharacterPosition(prev => ({ ...prev, y: 130 }));
            setIsJumping(false);
          }, 600);
        }
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        // Duck/crouch animation
        setCharacterPosition(prev => ({ ...prev, y: Math.max(110, prev.y - 20) }));
        setTimeout(() => {
          setCharacterPosition(prev => ({ ...prev, y: 130 }));
        }, 300);
        break;
    }
  }, [isLoading, gameState, isJumping]);

  // Handle key up (stop movement)
  const handleKeyUp = useCallback((event) => {
    const key = event.key.toLowerCase();
    setKeysPressed(prev => {
      const newSet = new Set(prev);
      newSet.delete(key);
      if (newSet.size === 0) {
        setIsMoving(false);
      }
      return newSet;
    });
  }, []);

  // Smooth continuous movement for sustained key presses
  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (keysPressed.size > 0) {
        setWorldPosition(prev => {
          let newPosition = prev;
          
          if (keysPressed.has('a') || keysPressed.has('arrowleft')) {
            newPosition = Math.max(0, newPosition - 8);
          }
          if (keysPressed.has('d') || keysPressed.has('arrowright')) {
            newPosition = Math.min(12000, newPosition + 8);
          }
          
          return newPosition;
        });
      }
    }, 50); // Slower for sustained movement

    return () => clearInterval(moveInterval);
  }, [keysPressed]);

  // Update level based on world position and trigger level-specific games
  useEffect(() => {
    let newLevel = 0;
    
    // ALL SECTIONS NOW 2000px WIDE - EQUAL LENGTH!
    // Section boundaries: 0, 2000, 4000, 6000, 8000, 10000, 12000
    // Add 500px buffer for smooth transitions
    const buffer = 500;
    
    if (worldPosition >= 12000 + buffer) newLevel = 6; // Contact
    else if (worldPosition >= 10000 + buffer) newLevel = 5; // Flying
    else if (worldPosition >= 8000 + buffer) newLevel = 4; // Boss
    else if (worldPosition >= 6000 + buffer) newLevel = 3; // Swimming
    else if (worldPosition >= 4000 + buffer) newLevel = 2; // Basketball
    else if (worldPosition >= 2000 + buffer) newLevel = 1; // About
    else newLevel = 0; // Intro
    
    console.log(`worldPosition: ${worldPosition}, level: ${newLevel}`);
    
    if (newLevel !== currentLevel && newLevel < resumeData.levels.length) {
      setCurrentLevel(newLevel);
      setLevelProgress(0);
    }
    
  // Trigger level-specific game states based on position within section
  // These trigger AFTER costume changes for smoother experience
  if (worldPosition >= 5000 && worldPosition < 6000) { // Mid basketball section
    setGameState('basketball');
  } else if (worldPosition >= 7000 && worldPosition < 8000) { // Mid swimming section
    setGameState('swimming');
  } else if (worldPosition >= 9000 && worldPosition < 10000) { // Mid boss section
    setGameState('bossfight');
  } else if (worldPosition >= 11000 && worldPosition < 12000) { // Mid flying section
    setGameState('flying');
  } else if (worldPosition >= 13000) { // Contact/Landing section
    setGameState('landing');
  } else {
    setGameState('exploring');
  }
}, [worldPosition, currentLevel]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <GameScene
      currentLevel={currentLevel}
      characterPosition={characterPosition}
      isMoving={isMoving}
      worldPosition={worldPosition}
      gameState={gameState}
      onLevelChange={setCurrentLevel}
    />
  );
};

export default InteractiveResume;