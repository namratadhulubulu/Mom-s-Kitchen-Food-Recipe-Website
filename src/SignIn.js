// SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    console.log('Sign In - Name:', name);
    console.log('Sign In - Password:', password);
    // After successful sign-in logic, redirect to home
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          style={{ padding: '10px', margin: '10px', width: '200px' }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: '10px', margin: '10px', width: '200px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#008080', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
