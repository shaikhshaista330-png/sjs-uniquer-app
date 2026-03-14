import React, { useState } from 'react';

const COLORS = { royalBlue: "#003366", gold: "#C5A059", white: "#FFFFFF", success: "#28a745", danger: "#dc3545", gray: "#f4f7f6" };

export default function SJSUniquerSuperApp() {
  const [view, setView] = useState('landing');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  if (isBlocked) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', color: COLORS.danger }}>
        <h1>Access Denied!</h1>
        <p>Your account has been blocked by SJS Administration.</p>
      </div>
    );
  }

  const unlockOwner = () => {
    const pin = prompt("Enter Master PIN:");
    if (pin === "7860") { setIsAdmin(true); setView('owner'); }
    else { alert("Access Denied!"); }
  };

  return (
    <div style={{ backgroundColor: COLORS.gray, minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {view === 'landing' && (
        <div style={{ textAlign: 'center', padding: '50px 20px' }}>
          <div style={{ backgroundColor: COLORS.royalBlue, padding: '30px', borderRadius: '20px', marginBottom: '30px' }}>
            <h1 style={{ color: COLORS.gold }}>SJS UNIQUER</h1>
            <p style={{ color: 'white' }}>Premium Home Salon Services</p>
          </div>
          <button onClick={() => setView('customer')} style={btnLarge}>Customer Portal</button>
          <button onClick={() => setView('partner')} style={btnLarge}>Partner Portal</button>
          <p onClick={unlockOwner} style={{ marginTop: '50px', color: '#bbb', cursor: 'pointer' }}>Admin Login</p>
        </div>
      )}

      {view === 'customer' && (
        <div style={{ padding: '20px' }}>
          <button onClick={() => setView('landing')} style={btnBack}>← Back</button>
          <div style={card}>
            <h4>Rate your service:</h4>
            <div style={{color: COLORS.gold, fontSize: '24px'}}>★★★★☆</div>
            <button style={{...btnSmall, backgroundColor: COLORS.success}}>Submit Review</button>
          </div>
        </div>
      )}

      {view === 'partner' && (
        <div style={{ padding: '15px' }}>
          <button onClick={() => setView('landing')} style={btnBack}>← Back</button>
          <div style={card}>
            <h3>Monthly Earnings: <span style={{color: COLORS.success}}>₹19,258</span></h3>
            <p>Rating: <span style={{color: COLORS.gold}}>4.8 ★</span></p>
          </div>
        </div>
      )}

      {view === 'owner' && isAdmin && (
        <div style={{ padding: '20px' }}>
          <button onClick={() => {setIsAdmin(false); setView('landing');}} style={btnBack}>Logout</button>
          <h2 style={{ color: COLORS.royalBlue }}>Owner Control</h2>
          <div style={card}>
            <h4>Manage Users</h4>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>User: Amit</span>
              <button onClick={() => setIsBlocked(true)} style={{backgroundColor: COLORS.danger, color: 'white', border: 'none', borderRadius: '5px', padding: '5px'}}>Block</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const btnLarge = { width: '100%', padding: '15px', margin: '10px 0', backgroundColor: COLORS.royalBlue, color: 'white', border: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold' };
const btnSmall = { width: '100%', padding: '10px', backgroundColor: COLORS.royalBlue, color: 'white', border: 'none', borderRadius: '5px' };
const btnBack = { marginBottom: '20px', padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' };
const card = { backgroundColor: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' };
