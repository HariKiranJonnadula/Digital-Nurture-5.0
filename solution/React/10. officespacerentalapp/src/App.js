import React from 'react';

function App() {
  const offices = [
    {
      id: 1,
      name: "Downtown Co-working Hub",
      rent: 45000,
      address: "102 Main Street, Sector 4, Bangalore",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Executive Penthouse Office",
      rent: 85000,
      address: "Penthouse B, Sky Tower, MG Road, Mumbai",
      imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Creative Studio Space",
      rent: 55000,
      address: "404 Arts District, Lane 3, Pune",
      imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Tech Startup Launchpad",
      rent: 120000,
      address: "IT Park Phase 2, Gachibowli, Hyderabad",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="card-container" style={{ maxWidth: '850px' }}>
      <h1 style={{ marginBottom: '2rem' }}>Office Space Rental Portal</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        textAlign: 'left'
      }}>
        {offices.map(office => {
          // Conditional Rent Styling
          const rentColor = office.rent < 60000 ? '#ef4444' : '#22c55e';

          return (
            <div 
              key={office.id} 
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img 
                src={office.imageUrl} 
                alt={office.name} 
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#f8fafc', fontSize: '1.2rem' }}>
                    {office.name}
                  </h3>
                  <p style={{ margin: '0 0 1rem 0', color: '#94a3b8', fontSize: '0.9rem' }}>
                    📍 {office.address}
                  </p>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '0.75rem',
                  marginTop: '0.5rem'
                }}>
                  <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Monthly Rent:</span>
                  <span style={{ 
                    color: rentColor, 
                    fontWeight: '700', 
                    fontSize: '1.15rem' 
                  }}>
                    ₹{office.rent.toLocaleString('en-IN')}/mo
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
