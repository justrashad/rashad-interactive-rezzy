import React from 'react';

const SkillsIndicator = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  const getSkillLevel = (level) => {
    const levels = {
      'BEGINNER': 20,
      'ELEMENTARY': 40,
      'INTERMEDIATE': 60,
      'ADVANCED': 80,
      'EXPERT': 100
    };
    return levels[level] || 50;
  };

  return (
    <div className="skills-indicator">
      <h3 style={{ marginBottom: '15px', fontSize: '16px', color: '#333' }}>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="skill-category">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-level">
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${getSkillLevel(skill.level)}%` }}
              ></div>
            </div>
            <span className="skill-text">{skill.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsIndicator;