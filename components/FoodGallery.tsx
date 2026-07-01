"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/food/latte-heart-foam-strawberry-cream-pastry-marble-table.jpg",
    alt: "Latte con arte en forma de corazón y pastelería con frutilla",
  },
  {
    src: "/images/food/flat-white-latte-art-danish-pastry-storefront-background.jpg",
    alt: "Flat white y danish de Frucupi Café",
  },
  {
    src: "/images/food/takeaway-cup-frucupi-logo-croissant-kraft-paper-bag.jpg",
    alt: "Café para llevar y croissant en bolsa de papel Frucupi",
  },
  {
    src: "/images/food/cappuccino-latte-art-ham-cheese-sandwich-breakfast.jpg",
    alt: "Cappuccino y sandwich de jamón y queso",
  },
  {
    src: "/images/food/cinnamon-rolls-strawberry-chocolate-glaze-marble-board.jpg",
    alt: "Rolls de canela, frutos rojos y chocolate",
  },
  {
    src: "/images/food/three-gourmet-cookies-chocolate-red-velvet-cinnamon-plate.jpg",
    alt: "Cookies gourmet chocolate, red velvet y canela",
  },
  {
    src: "/images/food/four-gourmet-cookies-chocolate-pistachio-orange-tray.jpg",
    alt: "Cuatro cookies gourmet en bandeja naranja",
  },
  {
    src: "/images/food/two-butter-croissants-latte-marble-table.jpg",
    alt: "Dos croissants de manteca y un latte",
  },
  {
    src: "/images/food/strawberry-cream-pastry-latte-art-marble-table.jpg",
    alt: "Pastelería con crema y frutilla junto a un latte",
  },
  {
    src: "/images/food/lemon-poppyseed-cake-slices-glazed-metal-plate.jpg",
    alt: "Budín de limón y semillas de amapola",
  },
  {
    src: "/images/food/pink-flower-latte-art-closeup-white-cup.jpg",
    alt: "Latte art en forma de flor rosa",
  },
  {
    src: "/images/food/breakfast-spread-lattes-sandwich-toast-eggs-orange-juice.jpg",
    alt: "Desayuno completo con lattes, sandwich, tostadas y jugo de naranja",
  },
  {
    src: "/images/food/avocado-tomato-croissant-sandwich-seeds-metal-plate.jpg",
    alt: "Croissant con palta, tomate y semillas",
  },
  {
    src: "/images/food/melted-ham-cheese-sandwich-closeup-cheese-pull.jpg",
    alt: "Sandwich tostado de jamón y queso derretido",
  },
  {
    src: "/images/food/tuna-sandwich-toasted-orange-lemonade-mint.jpg",
    alt: "Sandwich de atún tostado y limonada de naranja",
  },
  {
    src: "/images/food/focaccia-sandwich-hibiscus-iced-tea-rosemary.jpg",
    alt: "Focaccia con jamón crudo y té helado de hibiscus",
  },
  {
    src: "/images/food/avocado-toast-tomato-seeds-sourdough-closeup.jpg",
    alt: "Avocado toast con tomate y mix de semillas",
  },
  {
    src: "/images/food/espresso-shot-extraction-machine-closeup.jpg",
    alt: "Extracción de espresso en la máquina",
  },
  {
    src: "/images/food/pizza-roll-spinach-ricotta-roll-plate.jpg",
    alt: "Roll pepperoni pizza y stromboli de acelga y ricotta",
  },
  {
    src: "/images/food/alfajor-chocolate-caramel-closeup-latte.jpg",
    alt: "Alfajor de chocolate y dulce de leche junto a un latte",
  },
  {
    src: "/images/food/peanut-butter-jam-pastry-latte-marble-table.jpg",
    alt: "Pastelería con manteca de maní y mermelada junto a un latte",
  },
  {
    src: "/images/food/takeout-box-lemon-cake-cinnamon-rolls-strawberry-roll.jpg",
    alt: "Caja para llevar con budín de limón y rolls dulces",
  },
  {
    src: "/images/food/three-rolls-cinnamon-strawberry-chocolate-cutting-board.jpg",
    alt: "Rolls de canela, frutos rojos y chocolate en tabla",
  },
  {
    src: "/images/food/brownie-latte-chipa-key-lime-cookie-flatlay-outdoor-table.jpg",
    alt: "Brownie, latte, chipa y cookie key lime en mesa",
  },
  {
    src: "/images/food/chocolate-chip-cookies-bowl-chocolate-dip-sauce.jpg",
    alt: "Cookies de chocolate con salsa de chocolate para dipear",
  },
  {
    src: "/images/food/cinnamon-roll-closeup-hands-cream-cheese-frosting.jpg",
    alt: "Roll de canela con frosting de queso crema",
  },
  {
    src: "/images/food/key-lime-cookie-closeup-white-plate.jpg",
    alt: "Cookie key lime en plato blanco",
  },
  {
    src: "/images/food/latte-cinnamon-roll-overhead-marble-table.jpg",
    alt: "Latte y roll de canela vistos desde arriba en mesa de mármol",
  },
  {
    src: "/images/food/latte-two-croissants-marble-table.jpg",
    alt: "Latte con dos croissants en mesa de mármol",
  },
  {
    src: "/images/food/lemon-poppyseed-cake-slices-glass-table-closeup.jpg",
    alt: "Budín de limón y semillas de amapola en mesa de vidrio",
  },

];

export default function FoodGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goToPrevious = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length,
    );
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? null : (index + 1) % images.length,
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goToPrevious, goToNext]);

  const activeImage =
    lightboxIndex === null ? null : images[lightboxIndex];

  return (
    <section id="galeria-food" className="pt-20 md:pt-28 pb-8 md:pb-10 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-primary mb-8 md:mb-10 reveal">
          Lo Que Servimos
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Ampliar: ${img.alt}`}
              className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i < 6}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
            </button>
          ))}
        </div>
      </div>

      {activeImage && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Cerrar imagen ampliada"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goToPrevious();
            }}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="relative h-[min(85vh,900px)] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-1/2 max-w-2xl -translate-x-1/2 px-4 text-center text-sm text-white/80">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}
