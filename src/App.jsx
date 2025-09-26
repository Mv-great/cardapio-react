// src/App.jsx - Cardápio Digital Otimizado para SEO
import React from 'react';
import { menuData } from './menudata'; // Import your menu data
import MenuCategory from './components/menucategory';
import './App.css'; // For overall app styling (and restaurant name)

function App() {
  return (
    <div className="App">
      <header className="app-header" role="banner">
        <h1>Cardápio Digital Restaurante</h1>
        <p className="restaurant-subtitle">Menu Online Interativo com Pratos Deliciosos</p>
        <nav className="main-navigation" role="navigation" aria-label="Navegação principal">
          <ul>
            <li><a href="#appetizers">Entradas</a></li>
            <li><a href="#main-courses">Pratos Principais</a></li>
            <li><a href="#desserts">Sobremesas</a></li>
            <li><a href="#drinks">Bebidas</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="menu-container" role="main">
        <section className="menu-intro">
          <h2>Explore Nosso Menu Completo</h2>
          <p>Descubra uma seleção cuidadosa de pratos preparados com ingredientes frescos e técnicas culinárias refinadas. Nosso cardápio digital oferece uma experiência gastronômica única com opções para todos os gostos.</p>
        </section>
        
        <div className="menu-categories">
          {menuData.map((category, index) => (
            <MenuCategory 
              key={category.category + index} 
              category={category}
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
            />
          ))}
        </div>
        
        <section id="sobre" className="about-section">
          <h2>Sobre Nosso Restaurante Digital</h2>
          <p>Somos pioneiros em oferecer uma experiência gastronômica digital completa. Nosso cardápio interativo permite que você explore cada prato com detalhes, facilitando sua escolha e tornando sua experiência mais agradável.</p>
          
          <h3>Por que Escolher Nosso Cardápio Digital?</h3>
          <ul>
            <li><strong>Menu Interativo:</strong> Navegue facilmente entre categorias e pratos</li>
            <li><strong>Descrições Detalhadas:</strong> Conheça cada ingrediente e preparo</li>
            <li><strong>Experiência Responsiva:</strong> Funciona perfeitamente em qualquer dispositivo</li>
            <li><strong>Atualização Constante:</strong> Novos pratos e promoções sempre disponíveis</li>
          </ul>
          
          <h3>Nossa Filosofia Culinária</h3>
          <p>Acreditamos que a tecnologia pode aprimorar a experiência gastronômica sem perder o toque humano. Cada prato em nosso menu digital é cuidadosamente preparado por chefs experientes, utilizando ingredientes selecionados e técnicas tradicionais combinadas com inovação moderna.</p>
          
          <h3>Sustentabilidade e Qualidade</h3>
          <p>Nosso compromisso vai além do sabor. Priorizamos fornecedores locais, ingredientes orgânicos quando possível, e práticas sustentáveis em nossa cozinha. O cardápio digital também contribui para a redução do uso de papel, alinhado com nossa visão ecológica.</p>
        </section>
      </main>
      
      <footer className="app-footer" role="contentinfo">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Restaurante Digital</h3>
            <p>Cardápio online interativo com os melhores pratos da culinária internacional.</p>
          </div>
          
          <div className="footer-section">
            <h4>Links Úteis</h4>
            <ul>
              <li><a href="#appetizers">Entradas</a></li>
              <li><a href="#main-courses">Pratos Principais</a></li>
              <li><a href="#desserts">Sobremesas</a></li>
              <li><a href="#drinks">Bebidas</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contato</h4>
            <p>Email: contato@restaurantedigital.com</p>
            <p>Telefone: (11) 9999-9999</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Restaurante Digital. Todos os direitos reservados. | Cardápio Digital Interativo</p>
        </div>
      </footer>
    </div>
  );
}

export default App;