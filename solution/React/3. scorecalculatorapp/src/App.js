import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="card-container">
      <h2>Score Calculator App</h2>
      <CalculateScore 
        Name="Hari Kiran" 
        School="Cognizant Digital Nurture Academy" 
        Total={450} 
        goal={5} 
      />
    </div>
  );
}

export default App;
