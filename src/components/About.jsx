import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">The Minds Behind</span>
          <h2 className="text-5xl md:text-7xl font-black text-text-main text-center">
            NUESTRO <span className="gradient-text">PERFIL</span>
          </h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-fuchsia-500/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-primary/20 dark:border-white/10 bg-white dark:bg-[#120a1d] shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between px-6 py-3 border-b border-primary/10 dark:border-white/5 bg-primary/[0.02] dark:bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 dark:bg-red-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 dark:bg-yellow-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 dark:bg-green-500/30"></div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 dark:text-primary/40 flex items-center gap-2">
                <span className="w-1 h-3 bg-primary/40 rounded-full animate-pulse"></span>
                Team Profile v2.0
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-12 p-8 md:p-10 relative">
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
                  <div className="rounded-[1.8rem] border border-primary/10 dark:border-white/10 bg-background-secondary/80 dark:bg-white/[0.03] p-7 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] relative overflow-hidden">
                    <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
                    <div className="relative">
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-4">Lo fundamental</div>
                      <h3 className="text-3xl md:text-4xl font-black text-text-main leading-tight mb-5">Victor Salazar & Cristóbal Piña</h3>
                      <p className="text-lg text-text-muted leading-relaxed mb-4 font-light">
                        Como estudiantes de <span className="text-primary font-semibold">4to año de Ingeniería Civil Informática</span> en la UTEM, nuestra misión es democratizar la tecnología de alta gama para negocios locales y globales.
                      </p>
                      <p className="text-lg text-text-muted leading-relaxed">
                        Combinamos la precisión de la <span className="text-text-main font-medium">Ciencia de Datos</span> con la elegancia del <span className="text-text-main font-medium">Diseño HCI</span> para crear herramientas que se sienten naturales y funcionan con una eficiencia implacable.
                      </p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        {['IA Aplicada', 'Fullstack App', 'UI/UX Research', 'Data Science'].map((tag) => (
                          <span key={tag} className="px-4 py-2 rounded-full bg-background border border-primary/20 dark:border-primary/10 text-text-main text-[10px] font-black uppercase tracking-[0.2em] shadow-[2px_2px_0px_rgba(168,85,247,0.08)] dark:shadow-none transition-all hover:-translate-y-1 hover:shadow-primary/20 cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] border border-primary/10 dark:border-white/10 bg-white dark:bg-[#120a1d] shadow-2xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-fuchsia-500/10 opacity-80"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-fuchsia-500/20 rounded-[1.8rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                      <div className="flex items-center justify-between px-4 py-3 rounded-2xl border border-primary/10 dark:border-white/5 bg-primary/[0.02] dark:bg-white/[0.02]">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 dark:bg-red-500/30"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 dark:bg-yellow-500/30"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 dark:bg-green-500/30"></div>
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 dark:text-primary/40 flex items-center gap-2">
                          <span className="w-1 h-3 bg-primary/40 rounded-full animate-pulse"></span>
                          Team Profile v2.0
                        </div>
                      </div>

                      <div className="flex-1 flex items-center justify-center py-8">
                        <div className="relative group/ring">
                          <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-full blur-2xl opacity-0 group-hover/ring:opacity-100 transition-opacity"></div>
                          <svg className="w-36 h-36 md:w-44 md:h-44 transform -rotate-90 scale-110">
                            <circle cx="50%" cy="50%" r="45%" className="stroke-primary/10 dark:stroke-white/5 fill-none" strokeWidth="6" />
                            <circle
                              cx="50%" cy="50%" r="45%"
                              className="stroke-primary fill-none animate-[dash_4s_ease-in-out_infinite]"
                              strokeWidth="6"
                              strokeLinecap="round"
                              strokeDasharray="280"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl md:text-5xl font-black text-text-main tracking-tighter">2<span className="text-primary text-2xl">x</span></span>
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60">Focus</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {[
                          { label: 'IA & Data', value: 'Soluciones aplicadas', width: 'w-[85%]' },
                          { label: 'HCI', value: 'Interfaces claras', width: 'w-[70%]' },
                          { label: 'Fullstack', value: 'Entrega web', width: 'w-[92%]' }
                        ].map((item) => (
                          <div key={item.label} className="space-y-1.5">
                            <div className="flex justify-between text-[9px] font-black text-text-muted dark:text-primary/60 uppercase tracking-[0.22em]">
                              <span>{item.label}</span>
                              <span>{item.value}</span>
                            </div>
                            <div className="h-1.5 w-full bg-primary/10 dark:bg-white/5 rounded-full overflow-hidden">
                              <div className={`h-full bg-primary/70 dark:bg-primary ${item.width} rounded-full animate-pulse`}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
