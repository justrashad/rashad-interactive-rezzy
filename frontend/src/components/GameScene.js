import React from 'react';
import Character from './Character';
import SkillsIndicator from './SkillsIndicator';
import LevelIndicator from './LevelIndicator';
import NavigationHints from './NavigationHints';
import ContentPanel from './ContentPanel';
import { resumeData } from '../data/resumeData';

const GameScene = ({ currentLevel, characterPosition, isMoving, onLevelChange }) => {
  const currentLevelData = resumeData.levels[currentLevel];

  return (
    <div className="game-container">
      {/* Animated clouds */}
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      
      {/* Landscape */}
      <div className="landscape">
        <div className="hill hill1"></div>
        <div className="hill hill2"></div>
        <div className="hill hill3"></div>
        <div className="mountain"></div>
        
        {/* Trees */}
        <div className="tree tree1">
          <div className="tree-leaves"></div>
          <div className="tree-trunk"></div>
        </div>
        <div className="tree tree2">
          <div className="tree-leaves"></div>
          <div className="tree-trunk"></div>
        </div>
        <div className="tree tree3">
          <div className="tree-leaves"></div>
          <div className="tree-trunk"></div>
        </div>
      </div>

      {/* Main title area */}
      <div className="main-title">
        <div className="title-banner">
          Interactive Resume of
        </div>
        <h1 className="main-name">RASHAD WASHINGTON</h1>
        <div className="subtitle">Principal Systems Analyst</div>
        <div className="location">Live and Work in Missouri City, TX</div>
        <div className="instructions">
          {currentLevel === 0 ? (
            <>
              Scroll down mouse OR press keyboard's down-arrow<br/>
              Swipe from right to left
            </>
          ) : (
            'Use arrow keys to navigate through levels'
          )}
        </div>
      </div>

      {/* Character */}
      <Character 
        position={characterPosition} 
        isMoving={isMoving}
      />

      {/* Skills indicator */}
      <SkillsIndicator skills={currentLevelData.skills} />

      {/* Level indicator */}
      <LevelIndicator 
        currentLevel={currentLevel + 1} 
        totalLevels={resumeData.levels.length}
      />

      {/* Content panel for current level */}
      {currentLevel > 0 && (
        <ContentPanel 
          data={currentLevelData}
          level={currentLevel}
        />
      )}

      {/* Navigation hints */}
      <NavigationHints />
    </div>
  );
};

export default GameScene;