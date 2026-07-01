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
    alt: "Mural pintado a mano del mascotín de Frucupí Café, pet friendly",
  },
  {
    src: "/images/lifestyle/hanging-sign-frucupi-cafe-storefront-street.jpg",
    alt: "Cartel del local de Frucupí Café en Moldes y Juramento",
  },
];

export default function LifestyleGallery() {
  return (
    <section id="galeria-lifestyle" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-primary mb-4 reveal">
          El Rincón de Frucupí
        </h2>
        <p className="text-center text-ink/60 mb-12 max-w-xl mx-auto reveal">
          Un local pensado para quedarse, con nuestro mascotín siempre dando la
          bienvenida a humanos y peludos.
        </p>
        <div className="grid grid-cols-2 gap-4 md:gap-6 reveal-stagger">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative h-64 md:h-[26rem] rounded-2xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
