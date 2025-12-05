// src/components/MenuItem.jsx - Otimizado para SEO e Acessibilidade
import React from 'react';
import './menuitem.css'; // We'll create this CSS file soon

function MenuItem({ item, category }) {
  // Construct a descriptive alt text. Using name and description if available.
  const altText = `${item.name} - ${item.description || 'Prato delicioso do nosso cardápio digital'}`;
  
  // Formatação de preço em reais
  const formattedPrice = `R$ ${item.price.toFixed(2).replace('.', ',')}`;

  return (
    <article 
      className="menu-item"
      role="listitem"
      itemScope 
      itemType="https://schema.org/MenuItem"
    >
      {/* Dados estruturados ocultos para SEO */}
      <meta itemProp="menuAddOn" content={category} />
      <meta itemProp="dishType" content={item.dishType} />
      
      {/* Imagem otimizada para SEO */}
      {item.image && 
        <div className="menu-item-image-container">
          <img 
            src={item.image} 
            alt={altText}
            className="menu-item-image" 
            width="200" 
            height="150"
            loading="lazy"
            itemProp="image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      }
      
      <div className="menu-item-content">
        <div className="menu-item-details">
          <h3 
            className="menu-item-name"
            itemProp="name"
          >
            {item.name}
          </h3>
          
          <p 
            className="menu-item-description"
            itemProp="description"
          >
            {item.description}
          </p>
          
          {/* Informações adicionais para SEO */}
          <div className="menu-item-meta" aria-hidden="true">
            <span itemProp="menuAddOn">{category}</span>
            <span itemProp="dishType">{item.dishType}</span>
          </div>
        </div>
        
        <div className="menu-item-pricing">
          <span 
            className="menu-item-price"
            itemProp="offers" 
            itemScope 
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="BRL" />
            <meta itemProp="price" content={item.price} />
            <span className="price-label" aria-label={`Preço: ${formattedPrice}`}>
              {formattedPrice}
            </span>
          </span>
          
          <button 
            className="menu-item-order-btn"
            aria-label={`Pedir ${item.name} por ${formattedPrice}`}
            onClick={() => handleOrderClick(item)}
          >
            Pedir Agora
          </button>
        </div>
      </div>
    </article>
  );
}

// Função para lidar com pedidos (placeholder)
function handleOrderClick(item) {
  // Implementar lógica de pedido aqui
  console.log(`Pedido: ${item.name} - R$ ${item.price.toFixed(2)}`);
  alert(`${item.name} adicionado ao pedido!`);
}

export default MenuItem;

