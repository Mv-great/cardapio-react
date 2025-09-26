// src/components/MenuCategory.jsx
import React from 'react';
import MenuItem from './menuitem';
import './menucategory.css'; // We'll create this CSS file soon

function MenuCategory({ category }) {
  return (
    <section className="menu-category">
      <h2 className="menu-category-title">{category.category}</h2>
      <div className="menu-items-container">
        {category.items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default MenuCategory;
