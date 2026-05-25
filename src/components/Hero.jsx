import React from 'react';

export const Hero = ({ onDemoClick, onLearnMore }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-5xl mx-auto text-center fade-in-up relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-text-main text-xs font-medium mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
          Ingeniería de 4to Año • UTEM
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
          <span className="text-text-main">CIENCIA Y </span>
          <br />
          <span className="gradient-text">TECNOLOGÍA</span>
          <br />
          <span className="text-text-main">PARA TU NEGOCIO</span>
        </h1>

        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Fusionamos <span className="text-text-main font-semibold">Data Science</span>, <span className="text-text-main font-semibold">IA Aplicada</span> e <span className="text-text-main font-semibold">Ingeniería HCI</span> para crear sistemas que no solo funcionan, sino que escalan.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
          <button 
            onClick={onDemoClick}
            className="group relative px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            Solicitar Demo
          </button>
          <button 
            onClick={onLearnMore}
            className="px-8 py-4 rounded-2xl border border-primary/20 bg-background-tertiary/10 text-text-main font-semibold text-lg hover:bg-background-tertiary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-md"
          >
            Nuestras Tecnologías
          </button>
        </div>

        {/* Dashboard Visual Rediseñado (Estilo Ingeniería Limpia) */}
        <div className="relative max-w-4xl mx-auto mt-20 group">
          {/* Sombra de profundidad adaptativa */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-fuchsia-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative rounded-[1.8rem] border border-primary/20 dark:border-white/10 bg-white dark:bg-[#120a1d] shadow-2xl overflow-hidden backdrop-blur-sm">
            {/* Header del Dashboard */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-primary/10 dark:border-white/5 bg-primary/[0.02] dark:bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 dark:bg-red-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 dark:bg-yellow-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 dark:bg-green-500/30"></div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 dark:text-primary/40 flex items-center gap-2">
                <span className="w-1 h-3 bg-primary/40 rounded-full animate-pulse"></span>
                System Monitor v4.0
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Lateral Izquierdo: Terminal / Status */}
              <div className="md:col-span-4 p-6 border-b md:border-b-0 md:border-r border-primary/10 dark:border-white/5 bg-primary/[0.01] dark:bg-transparent">
                <div className="space-y-4">
                  {[
                    { label: 'CPU LOAD', val: '12%', color: 'w-[12%]' },
                    { label: 'NEURAL NET', val: '89%', color: 'w-[89%]' },
                    { label: 'BUFFER', val: '45%', color: 'w-[45%]' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[9px] font-black text-text-muted dark:text-primary/60">
                        <span>{item.label}</span>
                        <span>{item.val}</span>
                      </div>
                      <div className="h-1 w-full bg-primary/10 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full bg-primary/60 dark:bg-primary ${item.color} rounded-full`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary/10 dark:border-white/5">
                  <div className="text-[9px] font-mono text-primary/40 dark:text-primary/30 leading-relaxed">
                    &gt; init_core_engine...<br/>
                    &gt; load_assets: 100%<br/>
                    &gt; status: optimal
                  </div>
                </div>
              </div>

              {/* Centro: Métrica Principal */}
              <div className="md:col-span-8 p-8 flex flex-col items-center justify-center relative bg-white dark:bg-transparent">
                {/* Rejilla de Fondo Técnica */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-10 relative">
                  {/* Ancho Ring Animado */}
                  <div className="relative group/ring">
                    <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-full blur-2xl opacity-0 group-hover/ring:opacity-100 transition-opacity"></div>
                    <svg className="w-32 h-32 md:w-44 md:h-44 transform -rotate-90 scale-110">
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
                      <span className="text-4xl md:text-5xl font-black text-text-main tracking-tighter">0.9<span className="text-primary text-2xl">s</span></span>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60">Response</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 items-start">
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                        Efficiency Optimized
                      </div>
                      <div className="text-4xl md:text-5xl font-black text-text-main tracking-tight">99.9%</div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="px-3 py-1.5 rounded-lg bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10">
                        <div className="text-[8px] font-black text-text-muted dark:text-primary/40 uppercase">Latency</div>
                        <div className="text-xs font-bold text-text-main">Ultra Low</div>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10">
                        <div className="text-[8px] font-black text-text-muted dark:text-primary/40 uppercase">Architecture</div>
                        <div className="text-xs font-bold text-text-main">Hybrid</div>
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

export default Hero;
