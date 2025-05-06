// src/components/MenuItem.js
import React from 'react';
import './menuitem.css'; // We'll create this CSS file soon

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      {item.image && <img src={item.image} alt={item.name} className="menu-item-image" />}
      <div className="menu-item-details">
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
      </div>
      <p className="menu-item-price">${item.price.toFixed(2)}</p>
    </div>
  );
}

export default MenuItem;
