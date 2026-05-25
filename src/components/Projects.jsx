import React from 'react';

export const Projects = () => {
  const projects = [
    {
      title: "Data Science: Análisis Predictivo",
      description: "Modelado de datos para predicción de demanda en comercios locales usando Python y Scikit-learn.",
      github: "https://github.com",
      tags: ["Python", "Pandas", "AI"],
      category: "Data Science"
    },
    {
      title: "IA: Chatbot Corporativo",
      description: "Sistema de atención al cliente basado en RAG y modelos de lenguaje de última generación.",
      github: "https://github.com",
      tags: ["OpenAI", "React", "Node"],
      category: "IA Aplicada"
    },
    {
      title: "HCI: Portal Accesible WCAG",
      description: "Plataforma web diseñada bajo estándares internacionales de accesibilidad y usabilidad.",
      github: "https://github.com",
      tags: ["A11y", "HCI", "TypeScript"],
      category: "Ingeniería Software"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-main">Proyectos Destacados</h2>
          <p className="text-xl text-text-muted">Evidencia técnica de nuestra formación universitaria</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative p-1 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
              {/* Border Glow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-fuchsia-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-background-secondary p-8 rounded-[1.4rem] border border-primary/10 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background text-text-main hover:text-primary transition-colors border border-primary/5"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-text-main mb-3 leading-tight">{project.title}</h3>
                <p className="text-text-muted mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold py-1 px-2 rounded bg-background border border-primary/5 text-text-main/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://github.com" className="github-button inline-flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="currentColor" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;