import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div style={{
        padding: '1rem',
        margin: '1rem 0',
        borderRadius: '8px',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        borderLeft: '4px solid #a855f7'
      }}>
        <h3>About Component</h3>
        <p>Welcome to the About page of the Student Management Portal</p>
      </div>
    );
  }
}

export default About;
