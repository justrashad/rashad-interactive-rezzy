import React from 'react';
import Character from './Character';
import SkillsIndicator from './SkillsIndicator';
import LevelIndicator from './LevelIndicator';
import NavigationHints from './NavigationHints';
import ContentPanel from './ContentPanel';
import { resumeData } from '../data/resumeData';

const GameScene = ({ currentLevel, characterPosition, isMoving, worldPosition, onLevelChange }) => {
  const currentLevelData = resumeData.levels[currentLevel];

  const renderLevelBackground = () => {
    switch (currentLevel) {
      case 0: // Introduction - Classic Mario Hills
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
            </div>
          </>
        );
      
      case 1: // About Rashad - Peaceful meadow with sunrise
        return (
          <>
            <div className="cloud cloud1 sunrise-cloud"></div>
            <div className="cloud cloud2 sunrise-cloud"></div>
            <div className="landscape about-level">
              <div className="sunrise-sun"></div>
              <div className="about-hill hill1"></div>
              <div className="about-hill hill2"></div>
              <div className="about-flowers flower1"></div>
              <div className="about-flowers flower2"></div>
              <div className="about-flowers flower3"></div>
              <div className="story-book"></div>
            </div>
          </>
        );
      
      case 2: // Houston Basketball Court
        return (
          <>
            <div className="houston-skyline">
              <div className="houston-building building1"></div>
              <div className="houston-building building2"></div>
              <div className="houston-building building3"></div>
              <div className="houston-building building4"></div>
              <div className="houston-building building5"></div>
            </div>
            <div className="landscape basketball-level">
              <div className="basketball-court">
                <div className="court-lines"></div>
                <div className="basketball-hoop">
                  <div className="hoop-rim"></div>
                  <div className="hoop-net"></div>
                  <div className="hoop-backboard"></div>
                </div>
                <div className="basketball" id="basketball"></div>
              </div>
            </div>
          </>
        );
      
      case 3: // Underwater Swimming Scene
        return (
          <>
            <div className="underwater-scene">
              <div className="water-surface"></div>
              <div className="bubble bubble1"></div>
              <div className="bubble bubble2"></div>
              <div className="bubble bubble3"></div>
              <div className="underwater-plants plant1"></div>
              <div className="underwater-plants plant2"></div>
              <div className="underwater-rocks rock1"></div>
              <div className="underwater-rocks rock2"></div>
              <div className="fish fish1"></div>
              <div className="fish fish2"></div>
              <div className="treasure-chest"></div>
            </div>
          </>
        );
      
      case 4: // Industrial Boss Battle
        return (
          <>
            <div className="industrial-scene">
              <div className="factory-complex main-factory"></div>
              <div className="factory-complex side-factory"></div>
              <div className="industrial-smokestacks stack1"></div>
              <div className="industrial-smokestacks stack2"></div>
              <div className="conveyor-systems belt1"></div>
              <div className="conveyor-systems belt2"></div>
              <div className="boss-robot" id="boss-robot">
                <div className="robot-head"></div>
                <div className="robot-body"></div>
                <div className="robot-arms arm-left"></div>
                <div className="robot-arms arm-right"></div>
                <div className="robot-eyes eye1"></div>
                <div className="robot-eyes eye2"></div>
              </div>
              <div className="danger-sparks spark1"></div>
              <div className="danger-sparks spark2"></div>
            </div>
          </>
        );
      
      case 5: // Flying Scene with Houston Skyline
        return (
          <>
            <div className="sky-scene">
              <div className="cloud cloud1 flying-cloud"></div>
              <div className="cloud cloud2 flying-cloud"></div>
              <div className="cloud cloud3 flying-cloud"></div>
              <div className="houston-skyline-distant">
                <div className="distant-building db1"></div>
                <div className="distant-building db2"></div>
                <div className="distant-building db3"></div>
                <div className="distant-building db4"></div>
                <div className="distant-building db5"></div>
                <div className="tallest-building" id="tallest-building"></div>
              </div>
              <div className="achievement-stars star1"></div>
              <div className="achievement-stars star2"></div>
              <div className="achievement-stars star3"></div>
            </div>
          </>
        );
      
      case 6: // Rooftop Landing - Contact
        return (
          <>
            <div className="rooftop-scene">
              <div className="building-rooftop"></div>
              <div className="rooftop-details antenna"></div>
              <div className="rooftop-details helipad"></div>
              <div className="houston-cityscape">
                <div className="city-lights light1"></div>
                <div className="city-lights light2"></div>
                <div className="city-lights light3"></div>
                <div className="city-lights light4"></div>
              </div>
              <div className="contact-beacon"></div>
              <div className="victory-fireworks firework1"></div>
              <div className="victory-fireworks firework2"></div>
              <div className="victory-fireworks firework3"></div>
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
        currentLevel={currentLevel}
        gameAction={currentLevelData.gameAction}
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