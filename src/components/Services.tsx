"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    title: "Haircuts & Styling",
    price: "From £20",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop&q=80",
    description:
      "From sharp skin fades to textured crops and classic scissor cuts — our barbers tailor every style to your face shape and personal taste. Whether you want something fresh or a timeless look, we take the time to get every detail right so you walk out feeling your absolute best.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664"
        />
      </svg>
    ),
  },
  {
    title: "Traditional Shaves",
    price: "From £25",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop&q=80",
    description:
      "Experience the ritual of a proper hot-towel shave. Warm lather, a straight razor, and the skilled hands of a master barber — pure relaxation and a flawlessly smooth finish. It's the kind of old-school luxury every man deserves, and the perfect way to unwind.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "Beard Grooming",
    price: "From £15",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop&q=80",
    description:
      "Whether you need a clean line-up, a full beard shape, or a trim to keep things tidy, we sculpt and maintain your facial hair with precision and care. Our barbers use premium products to condition and style, leaving your beard looking sharp and feeling soft.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="services" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20 reveal">
          <p className="text-[0.8rem] uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium mb-4">
            What We Offer
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] leading-tight tracking-[-0.02em]">
            Our Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group border border-neutral-200 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]/30 transition-all duration-300 bg-white flex flex-col`}
            >
              {/* Service Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-[var(--color-primary)] text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {service.price}
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-surface)] text-[var(--color-accent)] mb-6 group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg text-[var(--color-text)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm uppercase tracking-[0.1em] font-medium text-white hover:scale-[1.02] hover:shadow-lg transition-all duration-200 w-full"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below cards */}
        <div className="text-center mt-16 reveal">
          <p className="text-[var(--color-text-muted)] mb-6">
            Ready to experience the Barbers Lane difference?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
