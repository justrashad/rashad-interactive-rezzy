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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleKeyPress = useCallback((event) => {
    if (isLoading) return;

    setIsMoving(true);
    
    switch (event.key) {
      case 'ArrowLeft':
        setCharacterPosition(prev => ({ ...prev, x: Math.max(10, prev.x - 15) }));
        if (currentLevel > 0) {
          setCurrentLevel(prev => Math.max(0, prev - 1));
        }
        break;
      case 'ArrowRight':
        setCharacterPosition(prev => ({ ...prev, x: Math.min(80, prev.x + 15) }));
        if (currentLevel < resumeData.levels.length - 1) {
          setCurrentLevel(prev => Math.min(resumeData.levels.length - 1, prev + 1));
        }
        break;
      case 'ArrowUp':
        if (currentLevel > 0) {
          setCurrentLevel(prev => Math.max(0, prev - 1));
        }
        break;
      case 'ArrowDown':
      case ' ':
        if (currentLevel < resumeData.levels.length - 1) {
          setCurrentLevel(prev => Math.min(resumeData.levels.length - 1, prev + 1));
        }
        break;
      case 'Enter':
        if (currentLevel < resumeData.levels.length - 1) {
          setCurrentLevel(prev => Math.min(resumeData.levels.length - 1, prev + 1));
        }
        break;
      default:
        setIsMoving(false);
        return;
    }
    
    setTimeout(() => setIsMoving(false), 400);
  }, [isLoading, currentLevel, resumeData.levels.length]);

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
      onLevelChange={setCurrentLevel}
    />
  );
};

export default InteractiveResume;