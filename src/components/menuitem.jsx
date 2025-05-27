// src/components/MenuItem.jsx
import React from 'react';
import './menuitem.css'; // We'll create this CSS file soon

function MenuItem({ item }) {
  // Construct a descriptive alt text. Using name and description if available.
  const altText = `Foto de ${item.name}${item.description ? ': ' + item.description : ''}`;

  return (
    <div className="menu-item">
      {/* Add descriptive alt, width, height, and keep lazy loading */}
      {item.image && 
        <img 
          src={item.image} 
          alt={altText} 
          className="menu-item-image" 
          width="100" 
          height="100"
          loading="lazy" // Keep lazy loading as it's good practice
        />
      }
      <div className="menu-item-details">
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
      </div>
      <p className="menu-item-price">${item.price.toFixed(2)}</p>
    </div>
  );
}

export default MenuItem;

