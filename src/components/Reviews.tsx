"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const reviews = [
  {
    text: "Best barbershop in Stepney, hands down. I've been coming here for over a year and every cut is spot on. The lads really know what they're doing — always leave feeling like a million quid. Wouldn't trust anyone else with my fade.",
    name: "James Mitchell",
    stars: 5,
    service: "Skin Fade",
    delay: "reveal-delay-1",
  },
  {
    text: "Walked in without an appointment and they still took great care of me. The hot towel shave was absolutely class — proper old-school service with a modern touch. The whole experience was so relaxing I nearly fell asleep in the chair. Highly recommend.",
    name: "David Rahman",
    stars: 5,
    service: "Hot Towel Shave",
    delay: "reveal-delay-2",
  },
  {
    text: "My go-to barber in East London. They listen to what you want and deliver every time. Clean shop, friendly atmosphere, and the attention to detail is second to none. Even my missus noticed the difference. Five stars from me.",
    name: "Marcus Thompson",
    stars: 5,
    service: "Haircut & Beard Trim",
    delay: "reveal-delay-3",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className || "w-4 h-4 text-[var(--color-accent)]"}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  useScrollReveal();

  return (
    <section id="reviews" className="py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Rating Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[0.8rem] uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium mb-4">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[4.5rem] md:text-[6rem] font-bold text-[var(--color-text)] leading-none mb-4">
            4.8
          </h2>
          <div className="flex justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} className="w-6 h-6 text-[var(--color-accent)]" />
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-lg">
            Google Rating — 95+ reviews
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className={`reveal ${review.delay} relative bg-white rounded-2xl shadow-sm p-8 lg:p-10`}
            >
              {/* Decorative quote mark */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-[var(--color-accent)] opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <p className="italic text-[var(--color-text)] leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[var(--color-text)] text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {review.service} · Google Review
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
