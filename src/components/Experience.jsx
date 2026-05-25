import React from 'react';

export const Experience = () => {
  const services = [
    {
      title: 'IA Aplicada & Automatización',
      description: 'Implementamos modelos de lenguaje y visión computacional de forma segura para automatizar procesos y mejorar la atención al cliente.',
      tech: 'Python • OpenAI • HuggingFace • LangChain'
    },
    {
      title: 'HCI & Accesibilidad Web',
      description: 'Ingeniería enfocada en la interacción humano-computador. Creamos sitios inclusivos que cumplen con estándares WCAG y son un placer de usar.',
      tech: 'UX Research • WCAG • React • Figma'
    },
    {
      title: 'Data Science & Analytics',
      description: 'Analizamos los datos de tu negocio para descubrir patrones de comportamiento y oportunidades de crecimiento mediante visualizaciones claras.',
      tech: 'Pandas • SQL • PowerBI • Google Analytics'
    },
    {
      title: 'Desarrollo Web Fullstack',
      description: 'Arquitectura de software sólida para aplicaciones web escalables. Enfoque en código limpio, mantenible y alto rendimiento.',
      tech: 'Node.js • React • PostgreSQL • Docker'
    },
    {
      title: 'Seguridad y DevOps',
      description: 'Implementamos prácticas modernas de CI/CD y seguridad de la información para que tu plataforma esté siempre disponible y protegida.',
      tech: 'GitActions • AWS • SSL • OWASP'
    },
    {
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento directo en la elección de stacks tecnológicos y modernización de sistemas existentes para empresas en crecimiento.',
      tech: 'Arquitectura de Sistemas • Roadmap IT'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-main">Nuestra Experiencia</h2>
          <p className="text-xl text-text-main/60">Capacidades técnicas y proyectos que demuestran nuestro compromiso</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-hover p-8 rounded-xl bg-background-secondary border border-primary/5 dark:border-background-tertiary/30 hover:border-primary/30 shadow-lg dark:shadow-none">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">💻</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-3">{service.title}</h3>
              <p className="text-text-main/50 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="text-sm font-semibold text-primary">
                {service.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
