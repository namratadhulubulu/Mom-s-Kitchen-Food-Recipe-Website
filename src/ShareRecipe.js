// src/components/ShareRecipe.js
import React, { useState } from 'react';

function ShareRecipe() {
  const [recipeName, setRecipeName] = useState('');
  const [userName, setUserName] = useState('');

  const handleShare = () => {
    if (recipeName && userName) {
      alert(`Thank you for sharing your recipe: ${recipeName} by ${userName}`);
      // Additional logic for saving the recipe can be added here
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Share Your Recipe</h2>
      <input
        type="text"
        placeholder="Enter the recipe name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '200px' }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '200px' }}
      />
      <br />
      <button onClick={handleShare} style={{ padding: '10px 20px', backgroundColor: '#004a4a', color: 'white', border: 'none', borderRadius: '5px' }}>
        Share Recipe
      </button>
    </div>
  );
}

export default ShareRecipe;
