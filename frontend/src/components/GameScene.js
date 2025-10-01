import React from 'react';
import Character from './Character';
import SkillsIndicator from './SkillsIndicator';
import LevelIndicator from './LevelIndicator';
import NavigationHints from './NavigationHints';
import ContentPanel from './ContentPanel';
import { resumeData } from '../data/resumeData';

const GameScene = ({ currentLevel, characterPosition, isMoving, worldPosition, gameState, onLevelChange }) => {
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
        <div className="world-content" style={{ width: '12000px', position: 'relative' }}>
          
          {/* Section 0: Introduction */}
          <div className="world-section intro-section" style={{ left: '0px', width: '800px' }}>
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
          <div className="world-section about-section" style={{ left: '800px', width: '800px' }}>
            <div className="section-title">
              <h2 className="level-name">ABOUT RASHAD</h2>
              <p className="section-description">The journey begins...</p>
            </div>
          </div>

          {/* Section 2: Houston Basketball */}
          <div className="world-section basketball-section" style={{ left: '1600px', width: '800px' }}>
            <div className="section-title">
              <h2 className="level-name">HOME COURT - HOUSTON</h2>
              <p className="section-description">Where precision meets passion</p>
            </div>
            
            {/* Stadium Environment */}
            <div className="basketball-stadium">
              {/* Crowd in the Background */}
              <div className="crowd-stands">
                <div className="crowd-section left-crowd">
                  <div className="crowd-person cp1">👤</div>
                  <div className="crowd-person cp2">👤</div>
                  <div className="crowd-person cp3">👤</div>
                  <div className="crowd-person cp4">👤</div>
                  <div className="crowd-person cp5">👤</div>
                  <div className="crowd-person cp6">👤</div>
                </div>
                <div className="crowd-section right-crowd">
                  <div className="crowd-person cp7">👤</div>
                  <div className="crowd-person cp8">👤</div>
                  <div className="crowd-person cp9">👤</div>
                  <div className="crowd-person cp10">👤</div>
                  <div className="crowd-person cp11">👤</div>
                  <div className="crowd-person cp12">👤</div>
                </div>
              </div>
              
              {/* Stadium Lights */}
              <div className="stadium-lights">
                <div className="light-pole lp1">
                  <div className="light-fixture"></div>
                </div>
                <div className="light-pole lp2">
                  <div className="light-fixture"></div>
                </div>
              </div>
              
              {/* Houston Skyline Background */}
              <div className="houston-skyline-bg">
                <div className="houston-building hb1"></div>
                <div className="houston-building hb2"></div>
                <div className="houston-building hb3"></div>
                <div className="houston-building hb4"></div>
                <div className="houston-building hb5"></div>
              </div>
            </div>
            
            {/* Full Basketball Court */}
            <div className="basketball-court-full">
              <div className="court-floor-detailed">
                {/* Court Lines */}
                <div className="court-centerline"></div>
                <div className="court-freethrow-line"></div>
                <div className="court-three-point-line"></div>
                <div className="court-center-circle"></div>
                <div className="court-key left-key"></div>
                <div className="court-key right-key"></div>
              </div>
              
              {/* Basketball Hoop with Backboard */}
              <div className="basketball-hoop-full">
                <div className="hoop-pole"></div>
                <div className="hoop-backboard-detailed">
                  <div className="backboard-square"></div>
                </div>
                <div className="hoop-rim-detailed"></div>
                <div className="hoop-net-detailed">
                  <div className="net-strand ns1"></div>
                  <div className="net-strand ns2"></div>
                  <div className="net-strand ns3"></div>
                  <div className="net-strand ns4"></div>
                  <div className="net-strand ns5"></div>
                </div>
              </div>
              
              {/* Interactive Basketball */}
              <div className="basketball-interactive" id="game-basketball">
                <div className="basketball-lines horizontal"></div>
                <div className="basketball-lines vertical"></div>
              </div>
            </div>
            
            {/* Score Display */}
            <div className="score-display">
              <div className="score-board">
                <div className="team-score home">RASHAD: <span id="home-score">0</span></div>
                <div className="game-time">2:30</div>
                <div className="team-score away">VISITOR: <span id="away-score">0</span></div>
              </div>
            </div>
            
            {/* Basketball Game Sequence */}
            {gameState === 'basketball' && (
              <div className="basketball-game-sequence">
                <div className="dribble-bounce-effect"></div>
                <div className="shot-arc"></div>
                <div className="swish-effect"></div>
                <div className="crowd-cheer-effect">🎉</div>
              </div>
            )}
            
            {/* Interactive Elements */}
            <div className="basketball-interactions">
              <div className="dribble-indicator">Press SPACE to shoot!</div>
              <div className="power-meter">
                <div className="power-bar">
                  <div className="power-fill"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Underwater Skills */}
          <div className="world-section underwater-section" style={{ left: '2400px', width: '800px' }}>
            <div className="section-title underwater-title">
              <h2 className="level-name">DEEP DIVE - SKILLS</h2>
              <p className="section-description">Exploring the depths of technology</p>
            </div>
            
            {/* Underwater Environment */}
            <div className="underwater-environment">
              <div className="water-surface-line"></div>
              <div className="bubble-stream bs1"></div>
              <div className="bubble-stream bs2"></div>
              <div className="bubble-stream bs3"></div>
              
              <div className="underwater-plant up1"></div>
              <div className="underwater-plant up2"></div>
              <div className="underwater-rock ur1"></div>
              <div className="underwater-rock ur2"></div>
              
              <div className="swimming-fish sf1"></div>
              <div className="swimming-fish sf2"></div>
              
              <div className="treasure-chest-skills">
                <div className="chest-glow"></div>
                <div className="skill-gems gem1"></div>
                <div className="skill-gems gem2"></div>
                <div className="skill-gems gem3"></div>
              </div>
            </div>
            
            {/* Swimming Animation */}
            {gameState === 'swimming' && (
              <div className="swimming-sequence">
                <div className="swim-trail"></div>
                <div className="water-ripples"></div>
              </div>
            )}
          </div>

          {/* Section 4: Boss Battle Experience */}
          <div className="world-section industrial-section" style={{ left: '3200px', width: '800px' }}>
            <div className="section-title">
              <h2 className="level-name">BOSS BATTLE - EXPERIENCE</h2>
              <p className="section-description">Conquering IT challenges</p>
            </div>
            
            {/* Industrial Environment */}
            <div className="industrial-environment">
              <div className="factory-bg fb1"></div>
              <div className="factory-bg fb2"></div>
              <div className="industrial-pipe ip1"></div>
              <div className="industrial-pipe ip2"></div>
              <div className="smoke-stack ss1"></div>
              <div className="smoke-stack ss2"></div>
            </div>
            
            {/* Boss Robot */}
            <div className="boss-robot-enemy" id="boss-robot-main">
              <div className="boss-head">
                <div className="boss-eye be1"></div>
                <div className="boss-eye be2"></div>
                <div className="boss-antenna"></div>
              </div>
              <div className="boss-body">
                <div className="boss-chest-panel"></div>
                <div className="boss-arm ba1"></div>
                <div className="boss-arm ba2"></div>
              </div>
              <div className="boss-legs">
                <div className="boss-leg bl1"></div>
                <div className="boss-leg bl2"></div>
              </div>
              <div className="boss-health-bar">
                <div className="health-fill" id="boss-health"></div>
              </div>
            </div>
            
            {/* Boss Battle Effects */}
            {gameState === 'bossfight' && (
              <div className="boss-battle-sequence">
                <div className="battle-sparks bs1"></div>
                <div className="battle-sparks bs2"></div>
                <div className="battle-sparks bs3"></div>
                <div className="power-beam"></div>
                <div className="victory-explosion"></div>
              </div>
            )}
          </div>

          {/* Section 5: Flying Achievements */}
          <div className="world-section flying-section" style={{ left: '4000px', width: '800px' }}>
            <div className="section-title">
              <h2 className="level-name">SOARING HIGH - ACHIEVEMENTS</h2>
              <p className="section-description">Reaching new heights</p>
            </div>
            
            {/* Sky Environment */}
            <div className="sky-environment">
              <div className="flying-cloud fc1"></div>
              <div className="flying-cloud fc2"></div>
              <div className="flying-cloud fc3"></div>
              
              <div className="houston-skyline-distant">
                <div className="distant-building db1"></div>
                <div className="distant-building db2"></div>
                <div className="tallest-houston-building" id="target-building">
                  <div className="building-spire"></div>
                  <div className="building-lights bl1"></div>
                  <div className="building-lights bl2"></div>
                  <div className="building-lights bl3"></div>
                </div>
              </div>
              
              <div className="achievement-stars">
                <div className="star-achievement sa1">★</div>
                <div className="star-achievement sa2">★</div>
                <div className="star-achievement sa3">★</div>
              </div>
            </div>
            
            {/* Flying Sequence */}
            {gameState === 'flying' && (
              <div className="flying-sequence">
                <div className="jetpack-flames jf1"></div>
                <div className="jetpack-flames jf2"></div>
                <div className="flight-trail"></div>
                <div className="upward-motion"></div>
              </div>
            )}
          </div>

          {/* Section 6: Rooftop Contact */}
          <div className="world-section contact-section" style={{ left: '4800px', width: '800px' }}>
            <div className="section-title">
              <h2 className="level-name">THE SUMMIT - CONTACT</h2>
              <p className="section-description">Let's connect at the top!</p>
            </div>
            
            {/* Rooftop Environment */}
            <div className="rooftop-environment">
              <div className="building-rooftop-surface"></div>
              <div className="rooftop-antenna ra1"></div>
              <div className="rooftop-helipad"></div>
              
              <div className="city-lights-below">
                <div className="city-light cl1"></div>
                <div className="city-light cl2"></div>
                <div className="city-light cl3"></div>
                <div className="city-light cl4"></div>
              </div>
              
              <div className="contact-beacon-signal">
                <div className="beacon-pulse"></div>
                <div className="signal-waves sw1"></div>
                <div className="signal-waves sw2"></div>
                <div className="signal-waves sw3"></div>
              </div>
            </div>
            
            {/* Landing Sequence */}
            {gameState === 'landing' && (
              <div className="landing-sequence">
                <div className="landing-impact"></div>
                <div className="victory-fireworks vf1"></div>
                <div className="victory-fireworks vf2"></div>
                <div className="victory-fireworks vf3"></div>
                <div className="superhero-pose"></div>
              </div>
            )}
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
          gameState={gameState}
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