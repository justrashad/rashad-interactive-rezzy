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
      case 0:
        return null; // Intro background is now inside the intro-section div
      case 1:
        return (
          <>
            <div className="pixel-sun"></div>
            <div className="pixel-hill pixel-hill-1"></div>
            <div className="pixel-hill pixel-hill-2"></div>
          </>
        );
      case 2:
        return (
          <>
            <div className="stadium-light light-left"></div>
            <div className="stadium-light light-right"></div>
            <div className="court-line court-center"></div>
            <div className="court-line court-horizontal"></div>
          </>
        );
      case 3:
        return (
          <>
            <div className="light-ray ray-1"></div>
            <div className="light-ray ray-2"></div>
            <div className="light-ray ray-3"></div>
            <div className="pixel-bubble bubble-1"></div>
            <div className="pixel-bubble bubble-2"></div>
            <div className="pixel-bubble bubble-3"></div>
            <div className="pixel-bubble bubble-4"></div>
          </>
        );
      case 4:
        return (
          <>
            <div className="factory-window"></div>
            <div className="machinery machine-1"></div>
            <div className="machinery machine-2"></div>
            <div className="machinery machine-3"></div>
          </>
        );
      case 5:
        return (
          <>
            <div className="sky-cloud sky-cloud-1"></div>
            <div className="sky-cloud sky-cloud-2"></div>
            <div className="distant-building building-1"></div>
            <div className="distant-building building-2"></div>
            <div className="distant-building building-3"></div>
          </>
        );
      case 6:
        return (
          <>
            <div className="pixel-star star-1"></div>
            <div className="pixel-star star-2"></div>
            <div className="pixel-star star-3"></div>
            <div className="pixel-star star-4"></div>
            <div className="pixel-star star-5"></div>
            <div className="pixel-star star-6"></div>
            <div className="pixel-star star-7"></div>
            <div className="city-light light-1"></div>
            <div className="city-light light-2"></div>
            <div className="city-light light-3"></div>
            <div className="city-light light-4"></div>
            <div className="city-light light-5"></div>
            <div className="city-light light-6"></div>
            <div className="city-light light-7"></div>
            <div className="city-light light-8"></div>
          </>
        );
      default:
        return null;
    }
  };

  const getBackgroundStyle = () => {
    const progress = worldPosition / 21000;
    const colorStops = [
      { pos: 0, colors: ['#00bfff', '#87ceeb'] },
      { pos: 0.125, colors: ['#FFE4B5', '#FFA500'] },
      { pos: 0.33, colors: ['#87CEEB', '#4682B4'] },
      { pos: 0.5, colors: ['#1E90FF', '#0077BE'] },
      { pos: 0.67, colors: ['#2F4F4F', '#696969'] },
      { pos: 0.83, colors: ['#87CEEB', '#B0E0E6'] },
      { pos: 1, colors: ['#191970', '#483D8B'] }
    ];
    let fromSection = colorStops[0];
    let toSection = colorStops[1];
    let sectionProgress = 0;
    for (let i = 0; i < colorStops.length - 1; i++) {
      if (progress >= colorStops[i].pos && progress <= colorStops[i + 1].pos) {
        fromSection = colorStops[i];
        toSection = colorStops[i + 1];
        sectionProgress = (progress - fromSection.pos) / (toSection.pos - fromSection.pos);
        break;
      }
    }
    const blendFactor = Math.sin(sectionProgress * Math.PI * 0.5);
    return {
      background: `linear-gradient(to bottom, color-mix(in srgb, ${fromSection.colors[0]} ${(1-blendFactor)*100}%, ${toSection.colors[0]} ${blendFactor*100}%) 0%, color-mix(in srgb, ${fromSection.colors[0]} ${(1-blendFactor)*100}%, ${toSection.colors[0]} ${blendFactor*100}%) 70%, color-mix(in srgb, ${fromSection.colors[1]} ${(1-blendFactor)*100}%, ${toSection.colors[1]} ${blendFactor*100}%) 100%)`,
      transition: 'background 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <div className={`game-container level-${currentLevel}`} style={getBackgroundStyle()}>
      <div className="world-container" style={{ transform: `translateX(-${worldPosition}px)`, transition: 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)' }}>
        {renderLevelBackground()}
        <div className="world-content" style={{ width: '21000px', position: 'relative' }}>
          <div className="world-section intro-section" style={{ left: '0px', width: '3000px' }}>
            {/* Title at the beginning */}
            <div className="main-title-intro">
              <div className="title-banner-ribbon">Interactive Resume of</div>
              <h1 className="main-name-large">RASHAD WASHINGTON</h1>
              <div className="subtitle-intro">PRINCIPAL SYSTEMS ANALYST</div>
              <div className="location-intro">LIVE AND WORK IN HOUSTON, TX</div>
              <div className="instructions-box">USE ARROW KEYS OR WASD TO MOVE</div>
            </div>
            
            {/* Background elements for intro */}
            <div className="pixel-mountain" style={{ left: '400px', width: '500px', height: '400px' }}></div>
            <div className="pixel-mountain" style={{ left: '1200px', width: '600px', height: '450px' }}></div>
            
            <div className="pixel-cloud" style={{ left: '150px', top: '80px', width: '140px', height: '70px' }}>
              <div className="cloud-puff" style={{ left: '-35px', top: '25px', width: '90px', height: '60px' }}></div>
              <div className="cloud-puff" style={{ right: '-35px', top: '20px', width: '80px', height: '65px' }}></div>
            </div>
            <div className="pixel-cloud" style={{ left: '700px', top: '50px', width: '160px', height: '80px' }}>
              <div className="cloud-puff" style={{ left: '-40px', top: '30px', width: '100px', height: '70px' }}></div>
              <div className="cloud-puff" style={{ right: '-40px', top: '25px', width: '90px', height: '75px' }}></div>
            </div>
            <div className="pixel-cloud" style={{ left: '1400px', top: '100px', width: '150px', height: '75px' }}>
              <div className="cloud-puff" style={{ left: '-38px', top: '28px', width: '95px', height: '65px' }}></div>
              <div className="cloud-puff" style={{ right: '-38px', top: '22px', width: '85px', height: '70px' }}></div>
            </div>
            
            <div className="pixel-hill pixel-hill-1" style={{ left: '100px', width: '700px', height: '350px' }}></div>
            <div className="pixel-hill pixel-hill-2" style={{ left: '600px', width: '600px', height: '300px' }}></div>
            <div className="pixel-hill pixel-hill-3" style={{ left: '1100px', width: '650px', height: '320px' }}></div>
            
            {/* Trees with varied sizes positioned on hills */}
            <div className="pixel-tree tree-large tree-dark" style={{ left: '200px', bottom: '320px' }}>
              <div className="tree-trunk"></div>
              <div className="tree-foliage"></div>
            </div>
            <div className="pixel-tree tree-medium tree-bright" style={{ left: '400px', bottom: '300px' }}>
              <div className="tree-trunk"></div>
              <div className="tree-foliage"></div>
            </div>
            <div className="pixel-tree tree-small tree-medium-green" style={{ left: '700px', bottom: '250px' }}>
              <div className="tree-trunk"></div>
              <div className="tree-foliage"></div>
            </div>
            <div className="pixel-tree tree-large tree-bright" style={{ left: '900px', bottom: '240px' }}>
              <div className="tree-trunk"></div>
              <div className="tree-foliage"></div>
            </div>
            <div className="pixel-tree tree-medium tree-dark" style={{ left: '1200px', bottom: '270px' }}>
              <div className="tree-trunk"></div>
              <div className="tree-foliage"></div>
            </div>
            <div className="pixel-tree tree-small tree-lime" style={{ left: '1500px', bottom: '220px' }}>
              <div className="tree-trunk"></div>
              <div className="tree-foliage"></div>
            </div>
            
            {/* Ground/Grass layer */}
            <div className="pixel-ground">
              <div className="grass-top"></div>
              <div className="dirt-layer"></div>
            </div>
          </div>
          <div className="world-section about-section" style={{ left: '3000px', width: '3000px' }}>
            {/* Left side - ABOUT with orange stripes */}
            <div className="about-title-large">ABOUT</div>
            <div className="about-diagonal-stripes"></div>
            
            {/* Hills continuing from intro */}
            <div className="pixel-hill pixel-hill-1" style={{ left: '0px', width: '500px', height: '280px' }}></div>
            <div className="pixel-hill pixel-hill-2" style={{ left: '300px', width: '400px', height: '240px' }}></div>
            
            {/* Trees on hills */}
            <div className="pixel-tree tree-medium tree-bright" style={{ left: '150px', bottom: '220px' }}>
              <div className="tree-trunk"></div>
              <div className="tree-foliage"></div>
            </div>
            <div className="pixel-tree tree-small tree-dark" style={{ left: '400px', bottom: '200px' }}>
              <div className="tree-trunk"></div>
              <div className="tree-foliage"></div>
            </div>
            
            {/* Right side - Skills visualization */}
            <div className="skills-banner-ribbon">Multidisciplinary Designer</div>
            
            {/* Skill category boxes */}
            <div className="skill-category-box" style={{ left: '1200px', top: '180px' }}>DESIGN</div>
            <div className="skill-category-box" style={{ left: '1400px', top: '180px' }}>ILLUSTRATION</div>
            <div className="skill-category-box" style={{ left: '1650px', top: '180px' }}>CODE</div>
            <div className="skill-category-box" style={{ left: '1850px', top: '180px' }}>ANIMATION</div>
            
            {/* Skill level labels */}
            <div className="skill-level-label" style={{ top: '220px' }}>EXPERT</div>
            <div className="skill-level-label" style={{ top: '300px' }}>ADVANCED</div>
            <div className="skill-level-label" style={{ top: '380px' }}>INTERMEDIATE</div>
            <div className="skill-level-label" style={{ top: '460px' }}>ELEMENTARY</div>
            <div className="skill-level-label" style={{ top: '540px' }}>BEGINNER</div>
            
            {/* Skill tree visualization */}
            <div className="skill-tree-grid">
              {/* Design column */}
              <div className="skill-flower red-flower" style={{ left: '1250px', top: '240px' }}></div>
              <div className="skill-leaf" style={{ left: '1250px', top: '320px' }}></div>
              <div className="skill-leaf" style={{ left: '1250px', top: '400px' }}></div>
              <div className="skill-leaf" style={{ left: '1250px', top: '480px' }}></div>
              <div className="skill-stem" style={{ left: '1263px', top: '260px', height: '280px' }}></div>
              
              {/* Illustration column */}
              <div className="skill-flower red-flower" style={{ left: '1480px', top: '240px' }}></div>
              <div className="skill-leaf" style={{ left: '1480px', top: '320px' }}></div>
              <div className="skill-leaf" style={{ left: '1480px', top: '400px' }}></div>
              <div className="skill-stem" style={{ left: '1493px', top: '260px', height: '200px' }}></div>
              
              {/* Code column */}
              <div className="skill-flower red-flower" style={{ left: '1700px', top: '320px' }}></div>
              <div className="skill-leaf" style={{ left: '1700px', top: '400px' }}></div>
              <div className="skill-leaf" style={{ left: '1700px', top: '480px' }}></div>
              <div className="skill-leaf" style={{ left: '1700px', top: '560px' }}></div>
              <div className="skill-stem" style={{ left: '1713px', top: '340px', height: '280px' }}></div>
              
              {/* Animation column */}
              <div className="skill-flower red-flower" style={{ left: '1900px', top: '320px' }}></div>
              <div className="skill-leaf" style={{ left: '1900px', top: '400px' }}></div>
              <div className="skill-leaf" style={{ left: '1900px', top: '480px' }}></div>
              <div className="skill-leaf" style={{ left: '1900px', top: '560px' }}></div>
              <div className="skill-stem" style={{ left: '1913px', top: '340px', height: '280px' }}></div>
            </div>
            
            {/* Ground */}
            <div className="pixel-ground">
              <div className="grass-top"></div>
              <div className="dirt-layer"></div>
            </div>
          </div>
          <div className="world-section basketball-section" style={{ left: '6000px', width: '3000px' }}>
            <div className="section-title">
              <h2 className="level-name">HOME COURT - HOUSTON</h2>
              <p className="section-description">Where precision meets passion</p>
            </div>
          </div>
          <div className="world-section underwater-section" style={{ left: '9000px', width: '3000px' }}>
            <div className="section-title underwater-title">
              <h2 className="level-name">DEEP DIVE - SKILLS</h2>
              <p className="section-description">Exploring the depths of technology</p>
            </div>
          </div>
          <div className="world-section industrial-section" style={{ left: '12000px', width: '3000px' }}>
            <div className="section-title">
              <h2 className="level-name">BOSS BATTLE - EXPERIENCE</h2>
              <p className="section-description">Conquering IT challenges</p>
            </div>
          </div>
          <div className="world-section flying-section" style={{ left: '15000px', width: '3000px' }}>
            <div className="section-title">
              <h2 className="level-name">SOARING HIGH - ACHIEVEMENTS</h2>
              <p className="section-description">Reaching new heights</p>
            </div>
          </div>
          <div className="world-section contact-section" style={{ left: '18000px', width: '3000px' }}>
            <div className="section-title">
              <h2 className="level-name">THE SUMMIT - CONTACT</h2>
              <p className="section-description">Let's connect at the top!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="transition-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: `linear-gradient(90deg, transparent ${Math.max(0, (worldPosition / 12000) * 100 - 5)}%, rgba(255,255,255,0.1) ${(worldPosition / 12000) * 100}%, transparent ${Math.min(100, (worldPosition / 12000) * 100 + 5)}%)`, transition: 'background 0.2s ease-out' }}></div>
      <div className="ui-overlay">
        <Character position={characterPosition} isMoving={isMoving} currentLevel={currentLevel} gameAction={currentLevelData.gameAction} gameState={gameState} />
        <SkillsIndicator skills={currentLevelData.skills} />
        <LevelIndicator currentLevel={currentLevel + 1} totalLevels={resumeData.levels.length} />
        {currentLevel > 0 && (<ContentPanel data={currentLevelData} level={currentLevel} />)}
        <NavigationHints />
      </div>
    </div>
  );
};

export default GameScene;