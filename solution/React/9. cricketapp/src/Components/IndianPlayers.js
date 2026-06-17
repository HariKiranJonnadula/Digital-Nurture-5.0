import React from 'react';

function IndianPlayers() {
  // Array of 6 players for destructuring demonstration
  const squad = [
    "Dinesh Karthik",  // Index 1 (Odd Team)
    "Hardik Pandya",   // Index 2 (Even Team)
    "Ravindra Jadeja", // Index 3 (Odd Team)
    "Bhuvneshwar Kumar",// Index 4 (Even Team)
    "Ravichandran Ashwin",// Index 5 (Odd Team)
    "Jasprit Bumrah"   // Index 6 (Even Team)
  ];

  // Destructure players from the array
  const [first, second, third, fourth, fifth, sixth] = squad;

  // Group into Odd Team (1st, 3rd, 5th) and Even Team (2nd, 4th, 6th)
  const oddTeam = [first, third, fifth];
  const evenTeam = [second, fourth, sixth];

  // Two arrays to merge using spread operator (...)
  const T20players = ["Virat Kohli", "Rohit Sharma", "Suryakumar Yadav"];
  const RanjiTrophyplayers = ["Sarfaraz Khan", "Yashasvi Jaiswal", "Abhimanyu Easwaran"];

  // Merge the two arrays
  const mergedPlayers = [...T20players, ...RanjiTrophyplayers];

  return (
    <div style={{ textAlign: 'left' }}>
      <h3 style={{ borderBottom: '1px solid rgba(168, 85, 247, 0.2)', paddingBottom: '0.5rem', color: '#a855f7' }}>
        Destructuring Demonstration
      </h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, background: 'rgba(168, 85, 247, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#c084fc' }}>Odd Team Players</h4>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#e9d5ff' }}>
            {oddTeam.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div style={{ flex: 1, background: 'rgba(34, 197, 94, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.1)' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#4ade80' }}>Even Team Players</h4>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#bbf7d0' }}>
            {evenTeam.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>

      <h3 style={{ borderBottom: '1px solid rgba(251, 191, 36, 0.2)', paddingBottom: '0.5rem', color: '#fbbf24' }}>
        Merged Squad (T20 + Ranji Trophy)
      </h3>
      <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#94a3b8', margin: '0 0 0.75rem 0' }}>
        Merged using ES6 Spread syntax: <code>[...T20players, ...RanjiTrophyplayers]</code>
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {mergedPlayers.map((player, index) => (
          <span 
            key={index} 
            style={{
              background: 'rgba(251, 191, 36, 0.1)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '20px',
              padding: '0.4rem 0.8rem',
              color: '#fde047',
              fontSize: '0.9rem'
            }}
          >
            {player}
          </span>
        ))}
      </div>
    </div>
  );
}

export default IndianPlayers;
