import React from 'react';

export const Navigation = ({ onContactClick, isDark, toggleTheme }) => {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-primary/5 bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">DIGITALIZA TU WORK</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-text-main/70 hover:text-primary transition-colors duration-300">Inicio</a>
            <a href="#about" className="text-text-main/70 hover:text-primary transition-colors duration-300">Sobre Nosotros</a>
            <a href="#projects" className="text-text-main/70 hover:text-primary transition-colors duration-300">Proyectos</a>
            <a href="#contact" className="text-text-main/70 hover:text-primary transition-colors duration-300">Contacto</a>
          </div>

          <div className="flex items-center gap-3">
            <label
              className="theme-switch"
              role="switch"
              aria-checked={isDark}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              <input type="checkbox" checked={isDark} onChange={toggleTheme} />
              <span className="theme-slider">
                <span className="theme-slider-inner" />
              </span>
            </label>

            <button 
              onClick={onContactClick}
              className="px-6 py-2 rounded-full btn-primary text-white font-semibold text-sm hover:shadow-lg transition-all duration-300"
            >
              Empezar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
