"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/lifestyle/dog-customer-paws-on-table-cinnamon-rolls-pet-friendly.jpg",
    alt: "Perrito cliente apoyado en la mesa junto a rolls dulces, pet friendly",
  },
  {
    src: "/images/lifestyle/fox-mascot-mural-latte-croissant-bakery-display.jpg",
    alt: "Mural del zorrito junto a la vitrina de pastelería",
  },
  {
    src: "/images/lifestyle/hand-painted-mural-dog-mascot-frucupi-cafe-wall.jpg",
    alt: "Mural pintado a mano del mascotín de Frucupi Café, pet friendly",
  },
  {
    src: "/images/lifestyle/hanging-sign-frucupi-cafe-storefront-street.jpg",
    alt: "Cartel del local de Frucupi Café en Moldes y Juramento",
  },
  {
    src: "/images/lifestyle/promo-graphic-take-away-coffee-illustration-yellow-v2.jpg",
    alt: "Ilustración de café para llevar de Frucupi Café",
  }
];

function getSlidesPerView(width: number) {
  return width >= 768 ? 3 : 1;
}

export default function LifestyleGallery() {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, images.length - slidesPerView);
  const pageCount = maxIndex + 1;
  const activeIndex = Math.min(current, maxIndex);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex],
  );

  return (
    <section id="galeria-lifestyle" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-primary mb-4 reveal">
          El Rincón de Frucupi
        </h2>
        <p className="text-center text-ink/60 mb-12 max-w-xl mx-auto reveal">
          Un local pensado para quedarse, con nuestro mascotín siempre dando la
          bienvenida a humanos y peludos.
        </p>

        <div className="relative max-w-6xl mx-auto reveal">
          <div className="overflow-hidden bg-white">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(images.length / slidesPerView) * 100}%`,
                transform: `translateX(-${(activeIndex / images.length) * 100}%)`,
              }}
            >
              {images.map((img, i) => (
                <div
                  key={img.src}
                  className="shrink-0 px-1.5 md:px-2"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={i < slidesPerView}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {pageCount > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white disabled:pointer-events-none disabled:opacity-40"
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
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === maxIndex}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white disabled:pointer-events-none disabled:opacity-40"
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

              <div className="mt-5 flex items-center justify-center gap-2">
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Ver grupo ${i + 1}`}
                    aria-current={i === activeIndex ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-6 bg-primary"
                        : "w-2 bg-primary/25 hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
