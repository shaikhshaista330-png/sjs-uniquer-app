import React, { useState } from 'react';

const COLORS = { royalBlue: "#003366", gold: "#C5A059", white: "#FFFFFF", success: "#28a745" };

export default function SJSUniquerApp() {
  const [view, setView] = useState('landing');
  const [isAdmin, setIsAdmin] = useState(false);

  const unlockOwner = () => {
    const pin = prompt("Enter Master PIN:");
    if (pin === "7860") { setIsAdmin(true); setView('owner'); }
    else { alert("Unauthorized Access!"); }
  };

  return (
    <div style={{ backgroundColor: "#F4F7F6", minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {view === 'landing' && (
        <div style={{ textAlign: 'center', padding: '50px 20px' }}>
          <div style={{ backgroundColor: COLORS.royalBlue, padding: '30px', borderRadius: '20px', marginBottom: '20px' }}>
            <h1 style={{ color: COLORS.gold }}>SJS UNIQUER</h1>
            <p style={{ color: 'white' }}>Professional Salon Services</p>
          </div>
          <button onClick={() => setView('customer')} style={btnLarge}>I am a Customer</button>
          <button onClick={() => setView('partner')} style={btnLarge}>I am a Partner</button>
          <p onClick={unlockOwner} style={{ marginTop: '50px', color: '#ccc', cursor: 'pointer' }}>Owner Login</p>
        </div>
      )}

      {view === 'partner' && (
        <div style={{ padding: '15px' }}>
          <button onClick={() => setView('landing')} style={{marginBottom:'10px'}}>← Back</button>
          <div style={card}>
            <h3>Monthly Earnings: <span style={{color: COLORS.success}}>₹19,258</span></h3>
            <p>Verification: <span style={{color: COLORS.gold}}>Pending</span></p>
          </div>
          <div style={card}>
            <h4>Partner KYC</h4>
            <input type="file" /> Aadhar Card Photo
            <br/><br/>
            <input type="file" /> PAN Card Photo
            <button style={btnSmall}>Submit for Review</button>
          </div>
        </div>
      )}

      {view === 'owner' && isAdmin && (
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: COLORS.royalBlue }}>Owner Control</h2>
          <div style={card}><h4>New Partner Requests: 5</h4></div>
          <div style={card}><h4>Total Revenue: ₹45,200</h4></div>
          <button onClick={() => {setIsAdmin(false); setView('landing');}} style={btnSmall}>Secure Logout</button>
        </div>
      )}
    </div>
  );
}

const btnLarge = { width: '100%', padding: '15px', margin: '10px 0', backgroundColor: COLORS.royalBlue, color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold' };
const btnSmall = { width: '100%', padding: '12px', backgroundColor: COLORS.royalBlue, color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' };
const card = { backgroundColor: 'white', padding: '15px', borderRadius: '10px', marginBottom: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' };
