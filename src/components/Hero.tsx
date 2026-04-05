"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-primary)]"
    >
      {/* Background geometric composition */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#0A0A0A]" />

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A96E 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Large floating accent circle */}
        <div className="animate-float absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/[0.06] blur-3xl" />

        {/* Geometric shapes */}
        <div className="animate-float-slow absolute top-1/4 left-[10%] w-64 h-64 border border-[var(--color-accent)]/10 rounded-full" />
        <div className="animate-float absolute bottom-1/4 right-[15%] w-40 h-40 border border-[var(--color-accent)]/[0.08] rotate-45" />
        <div className="animate-float-slow absolute top-[60%] left-[5%] w-20 h-20 bg-[var(--color-accent)]/[0.05] rotate-12" />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/10 to-transparent rotate-12 origin-top" />
        <div className="absolute top-0 right-[70%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/[0.05] to-transparent -rotate-6 origin-top" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Small label */}
        <p className="text-[0.8rem] uppercase tracking-[0.25em] text-[var(--color-accent)] font-medium mb-8">
          Premium Barbershop · Stepney, East London
        </p>

        {/* Main heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-8">
          Barbers
          <span className="text-[var(--color-accent)]"> Lane</span>
        </h1>

        {/* Tagline */}
        <p className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-white/60 font-normal max-w-xl mx-auto leading-relaxed mb-12">
          Where tradition meets modern craft. Expert cuts, classic shaves, and a
          barbershop experience like no other in the heart of Stepney.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-[var(--color-primary)] hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-all duration-300"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/30">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
