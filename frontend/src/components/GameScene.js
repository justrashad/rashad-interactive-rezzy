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
      {/* Continuous scrolling world */}
      <div 
        className="world-container" 
        style={{ 
          transform: `translateX(-${worldPosition * 0.8}px)`, // Parallax effect
          transition: 'transform 0.2s ease-out'
        }}
      >
        {renderLevelBackground()}
        
        {/* Fixed elements that move with world */}
        <div className="world-content" style={{ width: '7000px', position: 'relative' }}>
          
          {/* Section 0: Introduction */}
          <div className="world-section intro-section" style={{ left: '0px', width: '1000px' }}>
            <div className="main-title">
              <div className="title-banner">Interactive Resume of</div>
              <h1 className="main-name">RASHAD WASHINGTON</h1>
              <div className="subtitle">Principal Systems Analyst</div>
              <div className="location">Live and Work in Houston, TX</div>
              <div className="instructions">
                Use ARROW KEYS or WASD to move<br/>
                SPACE to jump, explore the world!
              </div>
            </div>
          </div>

          {/* Section 1: About Rashad */}
          <div className="world-section about-section" style={{ left: '1000px', width: '1000px' }}>
            <div className="section-title">
              <h2 className="level-name">ABOUT RASHAD</h2>
              <p className="section-description">The journey begins...</p>
            </div>
          </div>

          {/* Section 2: Houston Basketball */}
          <div className="world-section basketball-section" style={{ left: '2000px', width: '1000px' }}>
            <div className="section-title">
              <h2 className="level-name">HOME COURT - HOUSTON</h2>
              <p className="section-description">Where precision meets passion</p>
            </div>
            
            {/* Houston Skyline */}
            <div className="houston-skyline-bg">
              <div className="houston-building hb1"></div>
              <div className="houston-building hb2"></div>
              <div className="houston-building hb3"></div>
              <div className="houston-building hb4"></div>
              <div className="houston-building hb5"></div>
            </div>
            
            {/* Basketball Court */}
            <div className="basketball-court-game">
              <div className="court-floor"></div>
              <div className="basketball-hoop-interactive">
                <div className="hoop-backboard-game"></div>
                <div className="hoop-rim-game"></div>
                <div className="hoop-net-game"></div>
              </div>
              <div className="basketball-game" id="basketball-ball">
                <div className="ball-lines"></div>
              </div>
            </div>
            
            {/* Basketball Animation Trigger */}
            {gameState === 'basketball' && (
              <div className="basketball-sequence">
                <div className="dribble-animation"></div>
                <div className="shot-trajectory"></div>
              </div>
            )}
          </div>

          {/* Section 3: Underwater Skills */}
          <div className="world-section underwater-section" style={{ left: '3000px', width: '1000px' }}>
            <div className="section-title">
              <h2 className="level-name">DEEP DIVE - SKILLS</h2>
              <p className="section-description">Exploring the depths of technology</p>
            </div>
          </div>

          {/* Section 4: Boss Battle Experience */}
          <div className="world-section industrial-section" style={{ left: '4000px', width: '1000px' }}>
            <div className="section-title">
              <h2 className="level-name">BOSS BATTLE - EXPERIENCE</h2>
              <p className="section-description">Conquering IT challenges</p>
            </div>
          </div>

          {/* Section 5: Flying Achievements */}
          <div className="world-section flying-section" style={{ left: '5000px', width: '1000px' }}>
            <div className="section-title">
              <h2 className="level-name">SOARING HIGH - ACHIEVEMENTS</h2>
              <p className="section-description">Reaching new heights</p>
            </div>
          </div>

          {/* Section 6: Rooftop Contact */}
          <div className="world-section contact-section" style={{ left: '6000px', width: '1000px' }}>
            <div className="section-title">
              <h2 className="level-name">THE SUMMIT - CONTACT</h2>
              <p className="section-description">Let's connect at the top!</p>
            </div>
          </div>

        </div>
      </div>

      {/* UI Elements (fixed position) */}
      <div className="ui-overlay">
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
    </div>
  );
};

export default GameScene;