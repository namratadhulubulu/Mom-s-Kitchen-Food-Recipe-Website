// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Login - Name:', name);
    console.log('Login - Password:', password);
    // After successful login logic, redirect to home
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
