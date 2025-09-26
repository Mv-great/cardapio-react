// src/components/MenuCategory.jsx - Otimizado para SEO e Acessibilidade
import React from 'react';
import MenuItem from './menuitem';
import './menucategory.css'; // We'll create this CSS file soon

function MenuCategory({ category, id }) {
  // Tradução das categorias para português
  const categoryTranslations = {
    'Appetizers': 'Entradas',
    'Main Courses': 'Pratos Principais', 
    'Desserts': 'Sobremesas',
    'Drinks': 'Bebidas'
  };

  const translatedCategory = categoryTranslations[category.category] || category.category;
  const categoryId = id || category.category.toLowerCase().replace(/\s+/g, '-');

  return (
    <section 
      className="menu-category" 
      id={categoryId}
      aria-labelledby={`${categoryId}-title`}
    >
      <header className="menu-category-header">
        <h2 
          id={`${categoryId}-title`}
          className="menu-category-title"
        >
          {translatedCategory}
        </h2>
        <p className="menu-category-description">
          {getCategoryDescription(category.category)}
        </p>
      </header>
      
      <div 
        className="menu-items-container"
        role="list"
        aria-label={`Lista de ${translatedCategory.toLowerCase()}`}
      >
        {category.items.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            category={translatedCategory}
          />
        ))}
      </div>
    </section>
  );
}

// Função para adicionar descrições SEO-friendly para cada categoria
function getCategoryDescription(category) {
  const descriptions = {
    'Appetizers': 'Deliciosas entradas para começar sua refeição com sabor e elegância.',
    'Main Courses': 'Pratos principais cuidadosamente preparados com ingredientes selecionados.',
    'Desserts': 'Sobremesas irresistíveis para finalizar sua experiência gastronômica.',
    'Drinks': 'Bebidas refrescantes e saborosas para acompanhar sua refeição.'
  };
  
  return descriptions[category] || 'Seleção especial de pratos do nosso cardápio digital.';
}

export default MenuCategory;
