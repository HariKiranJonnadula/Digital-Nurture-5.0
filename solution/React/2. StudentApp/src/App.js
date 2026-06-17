import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="card-container" style={{ textAlign: 'left' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Student Management Portal</h2>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
