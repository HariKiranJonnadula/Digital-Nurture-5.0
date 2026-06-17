import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div style={{
        padding: '1rem',
        margin: '1rem 0',
        borderRadius: '8px',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderLeft: '4px solid #22c55e'
      }}>
        <h3>Contact Component</h3>
        <p>Welcome to the Contact page of the Student Management Portal</p>
      </div>
    );
  }
}

export default Contact;
