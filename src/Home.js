// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header style={{ display: 'flex', alignItems: 'center', padding: '60px', backgroundColor: 'rgba(0, 128, 128, 0.8)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '10px' }}>
          <img src="./images/logo.jpg" alt="Mom's Kitchen Logo" style={{ borderRadius: '50%', maxWidth: '100px' }} />
        </div>
        <h1 style={{ margin: 0, textAlign: 'center', flexGrow: 1 }}>Mom's Kitchen</h1>
        
        {/* Sign In and Login buttons */}
        <div style={{ position: 'absolute', right: '20px', top: '20px', display: 'flex', gap: '10px' }}>
          <Link to="/sign-in" style={{ padding: '10px 15px', fontSize: '14px', backgroundColor: '#004a4a', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
            Sign In
          </Link>
          <Link to="/login" style={{ padding: '10px 15px', fontSize: '14px', backgroundColor: '#004a4a', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
            Login
          </Link>
        </div>
      </header>

      <h2>Delicious Recipes, Fresh Ideas – Cook, Savor, Enjoy!</h2>

      {/* Share Your Recipe Button */}
      <div style={{ textAlign: 'center' }}>
        <p>Share your Recipe by clicking below button</p>
        <Link to="/share-recipe" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#008080', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Share Your Recipe
        </Link>
      </div>
    </div>
  );
}

export default Home;
