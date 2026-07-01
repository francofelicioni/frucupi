import Image from "next/image";

const cookies = [
  {
    src: "/images/cookies/la-mejor-pistacho-cookie-graphic.jpg",
    alt: "Por qué nuestra Pistacho cookie es la mejor: centro de ganache de choco blanco, chips de choco blanco, base de vainilla y pistacho, topping de chips y pistacho, 100% casera",
    name: "Pistacho",
  },
  {
    src: "/images/cookies/la-mejor-red-velvet-cookie-graphic.jpg",
    alt: "Por qué nuestra Red Velvet cookie es la mejor: centro de queso crema old style, chips de choco blanco, base red velvet, frescura garantizada, 100% casera",
    name: "Red Velvet",
  },
  {
    src: "/images/cookies/la-mejor-doble-chocolate-ddl-cookie-graphic.jpg",
    alt: "Por qué nuestra Doble Chocolate cookie es la mejor: centro de ganache de choco + DDL, chips de chocolate, base doble chocolate, topping de chunks de choco, 100% casera",
    name: "Doble Chocolate",
  },
  {
    src: "/images/cookies/la-mejor-chocolate-chip-nutella-cookie-graphic.jpg",
    alt: "Por qué nuestra cookie de vainilla, chips y Nutella es la mejor: relleno de nutella, chips de choco con leche, base de vainilla, los mejores ingredientes, 100% casera",
    name: "Vainilla Chips y Nutella",
  },
  {
    src: "/images/cookies/la-mejor-key-lime-cookie-graphic.jpg",
    alt: "Por qué nuestra Key Lime cookie es la mejor: lime curd, ingredientes premium, base de vainilla y lima, ralladura de lima, 100% casera",
    name: "Key Lime",
  },
];

export default function Cookies() {
  return (
    <section id="cookies" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-primary mb-4 reveal">
          Nuestras Cookies
        </h2>
        <p className="text-center text-ink/60 mb-12 max-w-2xl mx-auto reveal">
          Todas horneadas en el local, todos los días. Cinco sabores fijos,
          más el infaltable sabor del mes.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 reveal-stagger">
          {cookies.map((c, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-sm ${
                i === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={640}
                height={1136}
                className="w-full h-auto"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-ink/60 mt-10 reveal">
          $6.200 cada una · Preguntá también por la{" "}
          <span className="text-accent font-medium">cookie del mes</span>
        </p>
      </div>
    </section>
  );
}
