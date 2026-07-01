import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <Image
        src="/images/lifestyle/cafe-interior-terrazzo-tables-terracotta-chairs-dog-pastry-case.png"
        alt="Interior de Frucupí Café con mesas de terrazo, sillas terracota y vitrina de pastelería"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-primary-dark/20" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <Image
          src="/images/logos/logo.jpg"
          alt="Frucupí Café"
          width={110}
          height={110}
          className="rounded-full shadow-lg mb-6"
          priority
        />
        <h1 className="font-serif text-5xl md:text-7xl text-white drop-shadow-md">
          Frucupí Café
        </h1>
        <p className="mt-4 font-sans text-lg md:text-xl text-cream max-w-xl">
          Café y cookies para humanos 👩🏼 · Agua y snacks para peludos 🐾
        </p>
        <p className="mt-2 font-sans text-sm md:text-base text-cream/80">
          Moldes &amp; Juramento, Belgrano · Todos los días de 8 a 20hs
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#menu"
            className="bg-accent hover:bg-accent-dark transition-colors text-white font-sans px-6 py-3 rounded-full text-sm tracking-wide"
          >
            Ver Menú
          </a>
          <a
            href="#ubicacion"
            className="bg-white/10 hover:bg-white/20 transition-colors border border-white/60 text-white font-sans px-6 py-3 rounded-full text-sm tracking-wide backdrop-blur-sm"
          >
            Cómo Llegar
          </a>
        </div>
      </div>

      <a
        href="#nosotros"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
