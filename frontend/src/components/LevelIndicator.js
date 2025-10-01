import React from 'react';

const LevelIndicator = ({ currentLevel, totalLevels }) => {
  return (
    <div className="level-indicator">
      <div className="level-text">
        LEVEL {currentLevel}
      </div>
      <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
        {currentLevel} / {totalLevels}
      </div>
    </div>
  );
};

export default LevelIndicator;