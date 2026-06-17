import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div style={{
        padding: '1rem',
        margin: '1rem 0',
        borderRadius: '8px',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        borderLeft: '4px solid #38bdf8'
      }}>
        <h3>Home Component</h3>
        <p>Welcome to the Home page of Student Management Portal</p>
      </div>
    );
  }
}

export default Home;
