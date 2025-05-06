// src/App.jsx (or src/App.js)
import React from 'react';
import { menuData } from './menudata'; // Import your menu data
import MenuCategory from './components/menucategory';
import './App.css'; // For overall app styling (and restaurant name)

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Our Restaurant Menu</h1>
      </header>
      <main className="menu-container">
        {menuData.map((category, index) => (
          <MenuCategory key={category.category + index} category={category} />
          // Using category.category + index as key is okay for static list,
          // but if categories could be reordered, a unique ID for category would be better
        ))}
      </main>
      <footer className="app-footer">
        <p>© 2023 Your Restaurant Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;