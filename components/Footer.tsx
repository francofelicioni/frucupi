import Image from "next/image";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Cookies", href: "#cookies" },
  { label: "Galería", href: "#galeria-food" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-cream">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logos/logo.jpg"
            alt="Frucupí Café"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="font-serif text-xl">Frucupí Café</span>
        </div>

        <nav className="flex flex-wrap gap-6 justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://www.instagram.com/frucupi.cafe/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Frucupí Café"
          className="text-cream/80 hover:text-white transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.62.07 4.81 0 3.2 0 3.56-.07 4.81-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07-3.2 0-3.56 0-4.81-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.61-.07-4.81 0-3.19.01-3.56.07-4.81.15-3.23 1.67-4.77 4.92-4.92C8.44 2.21 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.33 0 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C0 8.33 0 8.74 0 12s0 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 24 8.74 24 12 24s3.67 0 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.07-1.28.07-1.69.07-4.95s0-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67 0 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
          </svg>
        </a>
      </div>

      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Frucupí Café. Moldes &amp; Juramento, Belgrano.
      </div>
    </footer>
  );
}
