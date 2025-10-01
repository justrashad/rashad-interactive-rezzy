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

  const handleKeyPress = useCallback((event) => {
    if (isLoading) return;

    setIsMoving(true);
    
    switch (event.key) {
      case 'ArrowLeft':
      case 'a':
      case 'A':
        setWorldPosition(prev => Math.max(0, prev - 25)); // Smaller, smoother increments
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        setWorldPosition(prev => Math.min(12000, prev + 25)); // Smaller, smoother increments
        
        // Update level based on world position
        const newLevel = Math.floor(worldPosition / 1600); // Longer sections // Each section is 1000px
        if (newLevel !== currentLevel && newLevel < resumeData.levels.length) {
          setCurrentLevel(newLevel);
        }
        break;
      case 'ArrowUp':
      case 'w':
      case 'W':
      case ' ':
        if (gameState === 'basketball') {
          // Trigger basketball shot
          const shotBall = document.getElementById('shot-ball');
          const scorePopup = document.getElementById('score-popup');
          const swishEffect = document.getElementById('swish-animation');
          const crowdCheer = document.getElementById('crowd-celebration');
          
          if (shotBall) {
            shotBall.classList.add('shooting');
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
      default:
        setIsMoving(false);
        return;
    }
    
    setTimeout(() => setIsMoving(false), 300);
  }, [isLoading, currentLevel, worldPosition, isJumping, resumeData.levels.length]);

  // Update level based on world position and trigger level-specific games
  useEffect(() => {
    const newLevel = Math.floor(worldPosition / 1000);
    if (newLevel !== currentLevel && newLevel < resumeData.levels.length) {
      setCurrentLevel(newLevel);
      setLevelProgress(0);
      
      // Trigger level-specific game states
      switch(newLevel) {
        case 2: // Houston Basketball
          if (worldPosition >= 4500) { // Mid-section of basketball court
            setGameState('basketball');
          }
          break;
        case 3: // Underwater Swimming  
          if (worldPosition >= 6200) {
            setGameState('swimming');
          }
          break;
        case 4: // Boss Battle
          if (worldPosition >= 8000) {
            setGameState('bossfight');
          }
          break;
        case 5: // Flying
          if (worldPosition >= 9500) {
            setGameState('flying');
          }
          break;
        case 6: // Landing
          if (worldPosition >= 11000) {
            setGameState('landing');
          }
          break;
        default:
          setGameState('exploring');
      }
    }
  }, [worldPosition, currentLevel, resumeData.levels.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

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