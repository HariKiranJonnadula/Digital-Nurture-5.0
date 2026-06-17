import React from 'react';

function ListofPlayers() {
  // 11 Players with scores
  const players = [
    { name: 'Virat Kohli', score: 82 },
    { name: 'Rohit Sharma', score: 68 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Suryakumar Yadav', score: 112 },
    { name: 'Hardik Pandya', score: 75 },
    { name: 'Rishabh Pant', score: 35 },
    { name: 'Ravindra Jadeja', score: 55 },
    { name: 'Ravichandran Ashwin', score: 28 },
    { name: 'Bhuvneshwar Kumar', score: 12 },
    { name: 'Mohammed Shami', score: 8 },
    { name: 'Jasprit Bumrah', score: 4 }
  ];

  // Filter out players with scores below 70 using ES6 arrow function (scores >= 70)
  const topPerformers = players.filter(player => player.score >= 70);

  return (
    <div style={{ textAlign: 'left' }}>
      <h3 style={{ borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '0.5rem', color: '#38bdf8' }}>
        List of Players (All Squad)
      </h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'right' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <td style={{ padding: '8px' }}>{player.name}</td>
              <td style={{ padding: '8px', textAlign: 'right' }}>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ borderBottom: '1px solid rgba(34, 197, 94, 0.2)', paddingBottom: '0.5rem', color: '#22c55e' }}>
        Top Performers (Score &ge; 70)
      </h3>
      <ul style={{ paddingLeft: '1.25rem', color: '#a7f3d0' }}>
        {topPerformers.map((player, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            <strong>{player.name}</strong> - {player.score} runs
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
