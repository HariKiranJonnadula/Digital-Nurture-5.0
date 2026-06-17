import React, { useState } from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="card-container" style={{ maxWidth: '600px' }}>
      <h2>Cricket Application</h2>
      
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <span>Current Component: <strong>{flag ? "ListofPlayers" : "IndianPlayers"}</strong></span>
        <button onClick={() => setFlag(!flag)}>
          Toggle Flag
        </button>
      </div>

      <div style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.3)' }}>
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </div>
    </div>
  );
}

export default App;
