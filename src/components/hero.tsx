"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    let cancelled = false;

    import("gsap").then(({ default: gsap }) => {
      if (cancelled) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Animate first line words
        tl.fromTo("[data-hero-word]",
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 }
        );

        // Animate second line
        tl.fromTo(
          line2Ref.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.2"
        );

        // Subtitle
        tl.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        );

        // CTA buttons
        tl.fromTo(
          "[data-hero-cta]",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 },
          "-=0.2"
        );

        // Chevron bounce (infinite)
        gsap.to(chevronRef.current, {
          y: 12,
          duration: 1.2,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, heroRef);

      cleanupRef.current = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      cleanupRef.current?.();
    };
  }, []);

  const line1Words = ["Wenn", "Leidenschaft", "zum", "Beruf", "wird..."];

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-[#0f1210]"
    >
      {/* Hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="RadSchloß Diepholz - Fahrrad-Fachhandel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1210] via-[#0f1210]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1210]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-5 pb-24 pt-40 sm:px-8 md:px-16 lg:max-w-[75%] lg:px-20 xl:px-28">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-heading font-bold leading-[0.95] tracking-tight text-[#f5f5f0]"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          {/* Line 1 */}
          <span className="block overflow-hidden">
            {line1Words.map((word) => (
              <span
                key={word}
                data-hero-word
                className={`mr-[0.25em] inline-block ${
                  word === "Leidenschaft" ? "text-[#c8ff00]" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </span>

          {/* Line 2 */}
          <span className="block overflow-hidden">
            <span
              ref={line2Ref}
              data-hero-line2
              className="mt-2 block text-[0.65em] font-medium italic text-[#f5f5f0]/80 sm:mt-3"
            >
              ...ist es das gr&ouml;&szlig;te Gl&uuml;ck!
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          data-hero-subtitle
          className="max-w-xl font-sans text-lg font-light tracking-wide text-[#f5f5f0]/60 sm:text-xl md:text-2xl"
        >
          Erstklassiger Service aus Meisterhand
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="/city-urban"
            data-hero-cta
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8ff00] px-8 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-[#0f1210] transition-all duration-300 hover:scale-[1.03] hover:bg-[#d4ff33] hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] sm:text-base"
          >
            Sortiment entdecken
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/4917622649706"
            target="_blank"
            rel="noopener noreferrer"
            data-hero-cta
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8ff00]/30 px-8 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-[#f5f5f0] transition-all duration-300 hover:border-[#c8ff00]/60 hover:bg-[#c8ff00]/10 sm:text-base"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={chevronRef}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <svg
          className="h-8 w-8 text-[#c8ff00]/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
