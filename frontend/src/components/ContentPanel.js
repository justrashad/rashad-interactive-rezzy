import React from 'react';

const ContentPanel = ({ data, level }) => {
  if (!data) return null;

  const renderExperience = (exp) => (
    <div key={exp.id} className="experience-item" style={{
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ color: '#333', marginBottom: '10px' }}>{exp.title}</h3>
      <div style={{ color: '#666', marginBottom: '10px', fontSize: '14px' }}>
        {exp.company} | {exp.period}
      </div>
      <p style={{ color: '#444', lineHeight: '1.5', marginBottom: '15px' }}>
        {exp.description}
      </p>
      {exp.skills && (
        <div className="experience-skills">
          {exp.skills.map((skill, index) => (
            <span key={index} style={{
              background: skill.color || '#4CAF50',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '15px',
              fontSize: '12px',
              marginRight: '8px',
              marginBottom: '5px',
              display: 'inline-block'
            }}>
              {skill.name} {skill.percentage}%
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const renderAwards = (awards) => (
    <div className="awards-section">
      {awards.map((award, index) => (
        <div key={index} className="award-item" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ color: '#333', marginBottom: '5px' }}>{award.title}</h4>
          <div style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
            {award.organization} | {award.date}
          </div>
          <p style={{ color: '#444', fontSize: '14px' }}>{award.description}</p>
        </div>
      ))}
    </div>
  );

  const renderContact = (contact) => (
    <div className="contact-section" style={{
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ color: '#333', marginBottom: '15px' }}>Contact Information</h3>
      <div style={{ marginBottom: '10px' }}>
        <strong>Email:</strong> {contact.email}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Phone:</strong> {contact.phone}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Location:</strong> {contact.location}
      </div>
      {contact.website && (
        <div style={{ marginBottom: '10px' }}>
          <strong>Website:</strong> <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a>
        </div>
      )}
    </div>
  );

  return (
    <div className="content-panel" style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '600px',
      maxHeight: '70vh',
      overflowY: 'auto',
      padding: '20px',
      zIndex: 15
    }}>
      {data.experience && data.experience.map(renderExperience)}
      {data.awards && renderAwards(data.awards)}
      {data.contact && renderContact(data.contact)}
    </div>
  );
};

export default ContentPanel;