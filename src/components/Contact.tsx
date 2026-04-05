"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <section id="contact" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — Contact Info & Form */}
          <div className="reveal">
            <p className="text-[0.8rem] uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium mb-4">
              Get in Touch
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] leading-tight tracking-[-0.02em] mb-8">
              Visit Us or{" "}
              <span className="text-[var(--color-accent)]">Drop a Line</span>
            </h2>

            {/* Contact Details */}
            <div className="space-y-5 mb-10">
              {/* Phone */}
              <a
                href="tel:+442035616043"
                className="flex items-center gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-surface)] flex items-center justify-center group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Phone</p>
                  <p className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    +44 20 3561 6043
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-surface)] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Address
                  </p>
                  <p className="font-medium text-[var(--color-text)]">
                    55 Ben Jonson Rd, London E1 4SA
                  </p>
                </div>
              </div>

              {/* Google Maps link */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=55+Ben+Jonson+Rd+London+E1+4SA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors ml-16"
              >
                Open in Google Maps
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-text)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--color-text)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--color-text)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-[var(--color-primary)] hover:scale-[1.02] hover:shadow-lg hover:brightness-110 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right — Map Placeholder */}
          <div className="reveal reveal-delay-1">
            <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden border-2 border-[var(--color-accent)]/20 bg-[var(--color-primary)]">
              {/* Decorative map illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Pin icon */}
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-lg shadow-[var(--color-accent)]/30">
                    <svg
                      className="w-8 h-8 text-[var(--color-primary)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="w-3 h-3 bg-[var(--color-accent)]/50 rounded-full mt-2 animate-pulse" />
                </div>
              </div>

              {/* Business info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/90 to-transparent p-8 pt-16">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-1">
                  Barbers Lane
                </h3>
                <p className="text-sm text-white/60">
                  55 Ben Jonson Rd, London E1 4SA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
