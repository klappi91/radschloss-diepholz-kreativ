"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { navigation, contactInfo } from "@/data/products";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const whatsappUrl = `https://wa.me/49${contactInfo.mobile}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f1210]/95 backdrop-blur-md shadow-[0_1px_0_rgba(200,255,0,0.15)]"
            : "bg-transparent"
        }`}
      >
        {/* Lime glow line at the bottom */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent, #c8ff00 30%, #c8ff00 70%, transparent)",
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10 shrink-0">
              <Image
                src="/images/brand/logo.png"
                alt="RadSchlo\u00DF"
                width={140}
                height={40}
                className="h-8 w-auto brightness-0 invert md:h-10"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 font-heading text-sm font-semibold uppercase tracking-wide transition-colors ${
                      isActive
                        ? "text-[#c8ff00]"
                        : "text-[#f5f5f0]/80 hover:text-[#c8ff00]"
                    }`}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#c8ff00]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop WhatsApp CTA + Mobile hamburger */}
            <div className="flex items-center gap-3">
              {/* WhatsApp CTA - desktop */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full bg-[#c8ff00] px-5 py-2.5 font-heading text-sm font-bold uppercase tracking-wide text-[#0f1210] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] lg:flex"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>

              {/* WhatsApp CTA - mobile (icon only) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-full bg-[#c8ff00] text-[#0f1210] transition-all hover:scale-105 lg:hidden"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-5" />
              </a>

              {/* Hamburger button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative z-10 flex size-11 items-center justify-center rounded-lg text-[#f5f5f0] transition-colors hover:text-[#c8ff00] lg:hidden"
                aria-label={mobileOpen ? "Men\u00fc schlie\u00dfen" : "Men\u00fc \u00f6ffnen"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          className="animate-fadeIn fixed inset-0 z-40 flex flex-col bg-[#0f1210]/98 backdrop-blur-sm lg:hidden"
        >
          {/* Spacer for header height */}
          <div className="h-16" />

          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <nav className="flex flex-col items-center gap-2">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`animate-slideUp font-heading text-2xl font-bold uppercase tracking-wider transition-colors sm:text-3xl ${
                      isActive
                        ? "text-[#c8ff00]"
                        : "text-[#f5f5f0] hover:text-[#c8ff00]"
                    }`}
                    style={{ animationDelay: `${150 + index * 60}ms` }}
                  >
                    {item.label}
                    {isActive && (
                      <span className="ml-2 inline-block size-2 rounded-full bg-[#c8ff00]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile overlay WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center gap-3 rounded-full bg-[#c8ff00] px-8 py-3.5 font-heading text-base font-bold uppercase tracking-wide text-[#0f1210] transition-all hover:scale-105"
            >
              <MessageCircle className="size-5" />
              WhatsApp schreiben
            </a>
          </div>
        </div>
      )}
    </>
  );
}
