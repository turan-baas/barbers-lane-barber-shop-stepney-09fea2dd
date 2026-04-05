"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-36 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text Column — 60% */}
          <div className="lg:col-span-3 reveal">
            <p className="text-[0.8rem] uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium mb-4">
              About Us
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] leading-tight tracking-[-0.02em] mb-8">
              A Cut Above the Rest,{" "}
              <span className="text-[var(--color-accent)]">Since Day One</span>
            </h2>
            <div className="text-[1.05rem] md:text-[1.125rem] leading-[1.8] text-[var(--color-text-muted)]">
              <p className="mb-6">
                Tucked away on Ben Jonson Road in the heart of Stepney, Barbers
                Lane isn&apos;t just another barbershop — it&apos;s a neighbourhood
                institution. We opened our doors with a simple promise: deliver
                exceptional grooming in a space where every client feels like
                family.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <span>Experienced barbers with years of expertise in fades, scissor cuts, and traditional shaves</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <span>No rushing, no compromises — just honest craftsmanship tailored to you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <span>Walk-ins welcome — a friendly, relaxed atmosphere in the heart of East London</span>
                </li>
              </ul>

              <p>
                Walk in, take a seat, and experience the difference that care
                and attention to detail can make.
              </p>
            </div>
          </div>

          {/* Decorative Column — 40% */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="relative flex items-center justify-center">
              {/* Abstract decorative composition */}
              <div className="relative w-72 h-80 lg:w-full lg:h-96">
                {/* Background shape */}
                <div className="absolute inset-4 bg-[var(--color-surface)] rounded-3xl" />

                {/* Accent border frame */}
                <div className="absolute top-0 left-8 right-0 bottom-8 border-2 border-[var(--color-accent)]/20 rounded-3xl" />

                {/* Rating display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium mb-2">
                    Google Rating
                  </span>
                  <span className="font-[family-name:var(--font-playfair)] text-[5rem] font-bold text-[var(--color-text)] leading-none">
                    4.8
                  </span>
                  <div className="flex gap-1 mt-3 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[var(--color-accent)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)] tracking-wide">
                    95+ reviews
                  </span>
                </div>

                {/* Small accent square */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--color-accent)]/10 rotate-12 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
