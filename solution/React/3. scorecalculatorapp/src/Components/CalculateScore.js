import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ Name, School, Total, goal }) {
  // Calculate average score
  const average = goal > 0 ? (Total / goal).toFixed(2) : 0;

  return (
    <div className="scorecard-container">
      <h3 className="scorecard-header">Student Scorecard</h3>
      <div className="scorecard-row">
        <span className="label">Student Name:</span>
        <span className="value">{Name}</span>
      </div>
      <div className="scorecard-row">
        <span className="label">School:</span>
        <span className="value">{School}</span>
      </div>
      <div className="scorecard-row">
        <span className="label">Total Marks:</span>
        <span className="value">{Total}</span>
      </div>
      <div className="scorecard-row">
        <span className="label">Number of Subjects (Goal):</span>
        <span className="value">{goal}</span>
      </div>
      <hr className="divider" />
      <div className="scorecard-row highlight">
        <span className="label">Average Score:</span>
        <span className="value">{average}</span>
      </div>
    </div>
  );
}

export default CalculateScore;
