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

    switch (event.key) {
      case 'ArrowLeft':
        setIsMoving(true);
        setCharacterPosition(prev => ({ ...prev, x: Math.max(0, prev.x - 10) }));
        setTimeout(() => setIsMoving(false), 300);
        break;
      case 'ArrowRight':
        setIsMoving(true);
        setCharacterPosition(prev => ({ ...prev, x: Math.min(90, prev.x + 10) }));
        setTimeout(() => setIsMoving(false), 300);
        if (characterPosition.x > 80) {
          setCurrentLevel(prev => Math.min(resumeData.levels.length - 1, prev + 1));
        }
        break;
      case 'ArrowUp':
        setIsMoving(true);
        setTimeout(() => setIsMoving(false), 300);
        break;
      case 'ArrowDown':
        setIsMoving(true);
        setCurrentLevel(prev => Math.min(resumeData.levels.length - 1, prev + 1));
        setTimeout(() => setIsMoving(false), 300);
        break;
      default:
        break;
    }
  }, [isLoading, characterPosition.x, resumeData.levels.length]);

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