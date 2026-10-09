import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: string;
  items: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ logo, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-brand">{logo}</div>

      {/* Botón de menú responsive */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary"
        style={{ display: 'none', padding: '6px 12px', fontSize: '0.9rem' }}
      >
        {isOpen ? '✕ Cerrar' : '☰ Menú'}
      </button>

      {/* Enlaces de navegación */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        {items.map((item, index) => (
          <a key={index} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
