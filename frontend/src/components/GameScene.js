import React from 'react';
import Character from './Character';
import SkillsIndicator from './SkillsIndicator';
import LevelIndicator from './LevelIndicator';
import NavigationHints from './NavigationHints';
import ContentPanel from './ContentPanel';
import { resumeData } from '../data/resumeData';

const GameScene = ({ currentLevel, characterPosition, isMoving, onLevelChange }) => {
  const currentLevelData = resumeData.levels[currentLevel];

  const renderLevelBackground = () => {
    switch (currentLevel) {
      case 0: // Intro Level - Hills and Trees
        return (
          <>
            <div className="cloud cloud1"></div>
            <div className="cloud cloud2"></div>
            <div className="landscape intro-level">
              <div className="hill hill1"></div>
              <div className="hill hill2"></div>
              <div className="hill hill3"></div>
              <div className="mountain"></div>
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
          </>
        );
      
      case 1: // Skills Level - Tech City
        return (
          <>
            <div className="cloud cloud1 tech-cloud"></div>
            <div className="cloud cloud2 tech-cloud"></div>
            <div className="landscape tech-level">
              <div className="building building1"></div>
              <div className="building building2"></div>
              <div className="building building3"></div>
              <div className="tech-pipes pipe1"></div>
              <div className="tech-pipes pipe2"></div>
              <div className="data-blocks block1"></div>
              <div className="data-blocks block2"></div>
              <div className="data-blocks block3"></div>
            </div>
          </>
        );
      
      case 2: // Current Role - Office Environment
        return (
          <>
            <div className="cloud cloud1 office-cloud"></div>
            <div className="landscape office-level">
              <div className="office-building main-building"></div>
              <div className="office-windows window1"></div>
              <div className="office-windows window2"></div>
              <div className="office-windows window3"></div>
              <div className="hospital-cross"></div>
              <div className="server-racks rack1"></div>
              <div className="server-racks rack2"></div>
            </div>
          </>
        );
      
      case 3: // Previous Experience - Industrial
        return (
          <>
            <div className="cloud cloud1 industrial-cloud"></div>
            <div className="landscape industrial-level">
              <div className="factory factory1"></div>
              <div className="factory factory2"></div>
              <div className="industrial-pipes ipipe1"></div>
              <div className="industrial-pipes ipipe2"></div>
              <div className="smokestacks stack1"></div>
              <div className="smokestacks stack2"></div>
              <div className="conveyor-belt belt1"></div>
            </div>
          </>
        );
      
      case 4: // Education - Campus
        return (
          <>
            <div className="cloud cloud1 campus-cloud"></div>
            <div className="landscape campus-level">
              <div className="campus-building main-hall"></div>
              <div className="campus-building library"></div>
              <div className="campus-trees ctree1">
                <div className="tree-leaves"></div>
                <div className="tree-trunk"></div>
              </div>
              <div className="campus-trees ctree2">
                <div className="tree-leaves"></div>
                <div className="tree-trunk"></div>
              </div>
              <div className="campus-flag flag1"></div>
              <div className="campus-path path1"></div>
            </div>
          </>
        );
      
      case 5: // Contact - Futuristic
        return (
          <>
            <div className="cloud cloud1 future-cloud"></div>
            <div className="cloud cloud2 future-cloud"></div>
            <div className="landscape contact-level">
              <div className="contact-portal portal1"></div>
              <div className="contact-screens screen1"></div>
              <div className="contact-screens screen2"></div>
              <div className="contact-platforms platform1"></div>
              <div className="contact-platforms platform2"></div>
              <div className="energy-beams beam1"></div>
              <div className="energy-beams beam2"></div>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`game-container level-${currentLevel}`}>
      {renderLevelBackground()}

      {/* Main title area - only show on intro level */}
      {currentLevel === 0 && (
        <div className="main-title">
          <div className="title-banner">
            Interactive Resume of
          </div>
          <h1 className="main-name">RASHAD WASHINGTON</h1>
          <div className="subtitle">Principal Systems Analyst</div>
          <div className="location">Live and Work in Missouri City, TX</div>
          <div className="instructions">
            Scroll down mouse OR press keyboard's down-arrow<br/>
            Swipe from right to left
          </div>
        </div>
      )}

      {/* Level titles for other levels */}
      {currentLevel > 0 && (
        <div className="level-title">
          <h2 className="level-name">{currentLevelData.name}</h2>
        </div>
      )}

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