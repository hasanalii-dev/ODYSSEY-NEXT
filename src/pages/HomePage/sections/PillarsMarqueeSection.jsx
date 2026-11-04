import React from 'react';

export const PillarsMarqueeSection = () => {
  const items = [
    { label: 'Healthier Lives', icon: 'bi-heart-pulse', color: 'text-brand-orange' },
    { label: 'Safer Communities', icon: 'bi-shield-check', color: 'text-brand-teal' },
    { label: 'Smarter Cities', icon: 'bi-buildings', color: 'text-brand-red' },
    { label: 'Sustainable Future', icon: 'bi-tree-fill', color: 'text-brand-dark-teal' },
    { label: 'Functional Prototypes', icon: 'bi-tools', color: 'text-brand-beige' },
    { label: 'Robotics & AI', icon: 'bi-cpu', color: 'text-brand-teal' },
    { label: 'Design Thinking', icon: 'bi-lightbulb', color: 'text-brand-orange' },
  ];

  return (
    <section id="competitions" className="reveal delay-100 py-16 bg-[#0B0F14] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between">
        <div>
          <span className="text-brand-orange font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            Odyssey 2027 Pillars
          </span>
          <h3 className="font-display text-3xl font-bold text-white tracking-tight">
            Impact Areas &amp; Focus Sectors
          </h3>
        </div>
        <div className="hidden md:block w-32 h-[1px] bg-white/10" />
      </div>

      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="flex w-max animate-scroll">
          {/* First loop */}
          <div className="flex gap-6 px-3">
            {items.map((item, idx) => (
              <span
                key={`p1-${idx}`}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-slate-300 text-base font-medium shadow-sm whitespace-nowrap flex items-center"
              >
                <i className={`bi ${item.icon} mr-3 ${item.color}`}></i>
                {item.label}
              </span>
            ))}
          </div>
          {/* Second loop for infinite seamless scroll */}
          <div className="flex gap-6 px-3">
            {items.map((item, idx) => (
              <span
                key={`p2-${idx}`}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-slate-300 text-base font-medium shadow-sm whitespace-nowrap flex items-center"
              >
                <i className={`bi ${item.icon} mr-3 ${item.color}`}></i>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
