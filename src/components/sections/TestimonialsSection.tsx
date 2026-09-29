import React from 'react';
import { INITIAL_TESTIMONIALS } from '../../data/initialData';
import { Star, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600] mb-3">
            10 — Experiência do Cliente
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Quem já passou <br />
            <span className="text-chrome">por aqui.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AA]">
            A percepção dos proprietários após receberem seus veículos com a estética e originalidade totalmente recuperadas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {INITIAL_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#0D0F12] border border-white/[0.08] p-8 rounded-xl flex flex-col justify-between hover:border-[#E10600]/30 transition-all duration-300"
            >
              <div>
                {/* 5 Stars rating */}
                <div className="flex items-center gap-1 text-[#E10600] mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#D7DADF] leading-relaxed italic mb-6">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author & Vehicle metadata */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <div className="font-display text-sm font-bold uppercase text-white">
                    {testimonial.name}
                  </div>
                  <span className="font-mono-tech text-[10px] text-[#9CA3AA]">
                    {testimonial.date}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#E10600] font-mono-tech mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{testimonial.vehicle}</span>
                </div>
                <div className="text-[11px] text-[#9CA3AA] mt-0.5 truncate">
                  Serviço: {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
