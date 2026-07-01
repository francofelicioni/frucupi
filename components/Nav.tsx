"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Cookies", href: "#cookies" },
  { label: "Galería", href: "#galeria-food" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logos/logo.jpg"
            alt="Frucupi Café"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <span
            className={`font-serif text-xl transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Frucupi
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-sans tracking-wide transition-colors ${
                scrolled
                  ? "text-ink hover:text-accent"
                  : "text-white hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Abrir menú"
        >
          <div
            className={`w-6 h-0.5 mb-1.5 transition-all ${
              scrolled ? "bg-ink" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <div
            className={`w-6 h-0.5 mb-1.5 transition-all ${
              scrolled ? "bg-ink" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`w-6 h-0.5 transition-all ${
              scrolled ? "bg-ink" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark py-6 px-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ink text-lg font-sans py-2 border-b border-cream-dark"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
