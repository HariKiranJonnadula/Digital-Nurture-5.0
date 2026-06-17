import React, { useState } from 'react';

// CurrencyConverter Component
function CurrencyConverter() {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState('');
  const [convertedInr, setConvertedInr] = useState(null);
  const [convertedEuro, setConvertedEuro] = useState(null);

  // Exchange rate: 1 Euro = 90 INR
  const EXCHANGE_RATE = 90.0;

  const handleInrToEuro = (e) => {
    e.preventDefault();
    if (!inr || isNaN(inr)) return;
    const result = parseFloat(inr) / EXCHANGE_RATE;
    setConvertedEuro(result.toFixed(2));
  };

  const handleEuroToInr = (e) => {
    e.preventDefault();
    if (!euro || isNaN(euro)) return;
    const result = parseFloat(euro) * EXCHANGE_RATE;
    setConvertedInr(result.toFixed(2));
  };

  return (
    <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
      <h3 style={{ color: '#38bdf8', marginBottom: '1rem' }}>Currency Converter</h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {/* INR to Euro Form */}
        <form onSubmit={handleInrToEuro} style={{ flex: 1, minWidth: '240px', background: 'rgba(15, 23, 42, 0.4)', padding: '1rem', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 0.75rem 0', color: '#fbbf24' }}>Convert INR to Euro</h4>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <input 
              type="number" 
              placeholder="Enter INR (₹)" 
              value={inr}
              onChange={(e) => setInr(e.target.value)}
              style={{
                flex: 1,
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: '#1e293b',
                color: 'white'
              }}
              required
            />
            <button type="submit" style={{ margin: 0, padding: '0.5rem 1rem' }}>Convert</button>
          </div>
          {convertedEuro !== null && (
            <p style={{ margin: 0, color: '#4ade80', fontWeight: '600' }}>
              Result: €{convertedEuro}
            </p>
          )}
        </form>

        {/* Euro to INR Form */}
        <form onSubmit={handleEuroToInr} style={{ flex: 1, minWidth: '240px', background: 'rgba(15, 23, 42, 0.4)', padding: '1rem', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 0.75rem 0', color: '#a855f7' }}>Convert Euro to INR</h4>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <input 
              type="number" 
              placeholder="Enter Euro (€)" 
              value={euro}
              onChange={(e) => setEuro(e.target.value)}
              style={{
                flex: 1,
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: '#1e293b',
                color: 'white'
              }}
              required
            />
            <button type="submit" style={{ margin: 0, padding: '0.5rem 1rem', background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)' }}>Convert</button>
          </div>
          {convertedInr !== null && (
            <p style={{ margin: 0, color: '#4ade80', fontWeight: '600' }}>
              Result: ₹{convertedInr}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [welcomeMsg, setWelcomeMsg] = useState('');
  const [clickMsg, setClickMsg] = useState('');
  const [helloMsg, setHelloMsg] = useState('');

  // Increment invokes multiple methods: increments the value, and says hello followed by a static message
  const handleIncrement = () => {
    // Method 1: Increment value
    setCount(prev => prev + 1);
    // Method 2: Say Hello followed by static message
    sayHello("Hello! This is a static event message.");
  };

  const sayHello = (msg) => {
    setHelloMsg(msg);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  // Function taking argument
  const handleSayWelcome = (arg) => {
    setWelcomeMsg(`Welcome function invoked with argument: "${arg}"`);
  };

  // Synthetic Event Press handler
  const handleOnPress = (event) => {
    // Log synthetic event detail
    console.log("Synthetic Event Type:", event.type);
    setClickMsg(`I was clicked! Event Type: ${event.type}`);
  };

  return (
    <div className="card-container" style={{ maxWidth: '650px', textAlign: 'left' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Event Handling Examples</h2>

      {/* Counter Section */}
      <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '1.25rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <h3 style={{ margin: '0 0 0.75rem 0', color: '#38bdf8' }}>Counter (Multi-method Event)</h3>
        <p style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0.5rem 0' }}>Counter Value: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} style={{ background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)' }}>Decrement</button>
        
        {helloMsg && (
          <p style={{ margin: '0.5rem 0 0 0', color: '#38bdf8', fontStyle: 'italic' }}>
            🔔 {helloMsg}
          </p>
        )}
      </div>

      {/* Welcome & Synthetic Event Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ flex: 1, minWidth: '240px', background: 'rgba(30, 41, 59, 0.4)', padding: '1.25rem', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 0.75rem 0', color: '#38bdf8' }}>Custom Parameter Event</h4>
          <button onClick={() => handleSayWelcome('welcome')} style={{ margin: '0 0 0.5rem 0' }}>
            Say Welcome
          </button>
          {welcomeMsg && <p style={{ margin: '0.5rem 0 0 0', color: '#10b981' }}>{welcomeMsg}</p>}
        </div>

        <div style={{ flex: 1, minWidth: '240px', background: 'rgba(30, 41, 59, 0.4)', padding: '1.25rem', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 0.75rem 0', color: '#38bdf8' }}>Synthetic Event</h4>
          <button onClick={handleOnPress} style={{ margin: '0 0 0.5rem 0', background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)' }}>
            OnPress Button
          </button>
          {clickMsg && <p style={{ margin: '0.5rem 0 0 0', color: '#f472b6' }}>{clickMsg}</p>}
        </div>
      </div>

      {/* Currency Converter */}
      <CurrencyConverter />
    </div>
  );
}

export default App;
