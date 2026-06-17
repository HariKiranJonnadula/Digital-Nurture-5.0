import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookedTickets, setBookedTickets] = useState([]);
  const [bookingForm, setBookingForm] = useState({ flightId: '', passengerName: '', seatNumber: '' });
  const [bookingMessage, setBookingMessage] = useState('');

  const flights = [
    { id: "FL101", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", departure: "08:30 AM", fare: 5500 },
    { id: "FL102", origin: "Bangalore (BLR)", destination: "Delhi (DEL)", departure: "11:15 AM", fare: 6800 },
    { id: "FL103", origin: "Mumbai (BOM)", destination: "Chennai (MAA)", departure: "03:45 PM", fare: 4200 },
    { id: "FL104", origin: "Hyderabad (HYD)", destination: "Bangalore (BLR)", departure: "07:00 PM", fare: 3100 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBookTicket = (e) => {
    e.preventDefault();
    if (!bookingForm.flightId || !bookingForm.passengerName || !bookingForm.seatNumber) {
      alert("Please fill all details.");
      return;
    }

    const selectedFlight = flights.find(f => f.id === bookingForm.flightId);
    const newBooking = {
      id: "TKT-" + Math.floor(1000 + Math.random() * 9000),
      flightId: bookingForm.flightId,
      origin: selectedFlight.origin,
      destination: selectedFlight.destination,
      departure: selectedFlight.departure,
      passengerName: bookingForm.passengerName,
      seatNumber: bookingForm.seatNumber,
      fare: selectedFlight.fare
    };

    setBookedTickets(prev => [...prev, newBooking]);
    setBookingMessage(`Success! Ticket booked with ID: ${newBooking.id}`);
    setBookingForm({ flightId: '', passengerName: '', seatNumber: '' });
    
    // Clear message after 3 seconds
    setTimeout(() => setBookingMessage(''), 4000);
  };

  return (
    <div className="card-container" style={{ maxWidth: '850px', textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
        <h2 style={{ margin: 0, color: '#38bdf8' }}>FlyHigh Aviation Portal</h2>
        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          style={{
            margin: 0,
            background: isLoggedIn 
              ? 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' 
              : 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      {/* Guest vs User Dashboard status banner */}
      <div style={{
        background: isLoggedIn ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
        borderLeft: `4px solid ${isLoggedIn ? '#22c55e' : '#ef4444'}`,
        padding: '0.75rem 1rem',
        borderRadius: '4px',
        marginBottom: '1.5rem'
      }}>
        <span>Status: <strong>{isLoggedIn ? "Logged in as User" : "Guest Mode (Read-Only)"}</strong></span>
        {!isLoggedIn && <span style={{ marginLeft: '1rem', color: '#f87171', fontSize: '0.9rem' }}>⚠️ Please log in to book tickets.</span>}
      </div>

      {/* Flight Details Section (Accessible to both Guest and Logged-in User) */}
      <div>
        <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Available Flights</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '8px', overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: '#1e293b', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left' }}>Flight ID</th>
                <th style={{ padding: '12px 16px', textAlign: 'left' }}>Route</th>
                <th style={{ padding: '12px 16px', textAlign: 'left' }}>Departure</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Fare</th>
              </tr>
            </thead>
            <tbody>
              {flights.map(flight => (
                <tr key={flight.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600', color: '#38bdf8' }}>{flight.id}</td>
                  <td style={{ padding: '12px 16px' }}>{flight.origin} ➔ {flight.destination}</td>
                  <td style={{ padding: '12px 16px', color: '#94a3b8' }}>{flight.departure}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: '600' }}>₹{flight.fare.toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conditional Section: Booking and Booked Tickets (Only visible to logged-in users) */}
      {isLoggedIn ? (
        <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {/* Booking Form */}
          <div style={{ flex: 1, minWidth: '300px', background: 'rgba(30, 41, 59, 0.5)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <h3 style={{ margin: '0 0 1.25rem 0', color: '#38bdf8' }}>Book Flight Ticket</h3>
            
            {bookingMessage && (
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', border: '1px solid #22c55e', padding: '0.75rem', borderRadius: '6px', marginBottom: '1rem', fontWeight: '500' }}>
                {bookingMessage}
              </div>
            )}

            <form onSubmit={handleBookTicket}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', color: '#94a3b8', fontSize: '0.9rem' }}>Select Flight</label>
                <select 
                  name="flightId" 
                  value={bookingForm.flightId} 
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', background: '#0f172a', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }}
                  required
                >
                  <option value="">-- Choose Flight --</option>
                  {flights.map(f => (
                    <option key={f.id} value={f.id}>{f.id} ({f.origin} to {f.destination})</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', color: '#94a3b8', fontSize: '0.9rem' }}>Passenger Name</label>
                <input 
                  type="text" 
                  name="passengerName" 
                  placeholder="Enter passenger name"
                  value={bookingForm.passengerName} 
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.6rem', boxSizing: 'border-box', borderRadius: '6px', background: '#0f172a', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', color: '#94a3b8', fontSize: '0.9rem' }}>Seat Choice (e.g., 12A, 14F)</label>
                <input 
                  type="text" 
                  name="seatNumber" 
                  placeholder="e.g. 10B"
                  value={bookingForm.seatNumber} 
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.6rem', boxSizing: 'border-box', borderRadius: '6px', background: '#0f172a', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }}
                  required
                />
              </div>

              <button type="submit" style={{ width: '100%', margin: 0 }}>Book Now</button>
            </form>
          </div>

          {/* Booked Tickets List */}
          <div style={{ flex: 1.2, minWidth: '300px' }}>
            <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Your Bookings</h3>
            
            {bookedTickets.length === 0 ? (
              <div style={{ padding: '2rem', border: '1px dashed rgba(255, 255, 255, 0.1)', borderRadius: '12px', textAlign: 'center', color: '#64748b' }}>
                No tickets booked yet.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {bookedTickets.map(tkt => (
                  <div 
                    key={tkt.id} 
                    style={{
                      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '1rem',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '700', color: '#22c55e' }}>{tkt.id}</span>
                      <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Flight: <strong>{tkt.flightId}</strong></span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                      <div>
                        <p style={{ margin: '0 0 0.25rem 0', color: '#f1f5f9' }}>Passenger: <strong>{tkt.passengerName}</strong></p>
                        <p style={{ margin: 0, color: '#94a3b8' }}>{tkt.origin} ➔ {tkt.destination}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: '0 0 0.25rem 0', color: '#fbbf24' }}>Seat: {tkt.seatNumber}</p>
                        <p style={{ margin: 0, color: '#f1f5f9', fontWeight: '600' }}>₹{tkt.fare.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Guest warning card */
        <div style={{
          marginTop: '2.5rem',
          padding: '2.5rem',
          border: '1px dashed rgba(239, 68, 68, 0.2)',
          borderRadius: '12px',
          background: 'rgba(239, 68, 68, 0.02)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#f87171', margin: '0 0 0.5rem 0' }}>Ticket Booking Disabled</h3>
          <p style={{ color: '#94a3b8', margin: '0 0 1.5rem 0', fontSize: '0.95rem' }}>
            You are browsing as a guest. To search, customize, and book tickets, please log in using the button in the upper right.
          </p>
          <button onClick={() => setIsLoggedIn(true)} style={{ margin: 0 }}>
            Login Now
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
