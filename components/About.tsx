import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
            Nuestra Historia
          </h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            Frucupi nació en la esquina de Moldes y Juramento con una idea simple:
            un café de barrio donde el buen café, la pastelería casera y las cookies
            gourmet compartan mesa con quienes más queremos — incluidos los de
            cuatro patas.
          </p>
          <p className="text-ink/80 leading-relaxed mb-4">
            Todo lo horneamos nosotros: rolls de canela, cookies rellenas,
            budines y alfajores que salen del horno todos los días. Café de
            especialidad, brunch todo el día y una barra siempre lista para
            recomendarte el sabor del mes.
          </p>
          <p className="text-ink/80 leading-relaxed">
            Y porque en Frucupi las mascotas también son bienvenidas, siempre hay
            agua fresca y snacks para peludos esperando en la puerta.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-10 reveal-stagger">
            <div className="text-center">
              <p className="font-serif text-3xl text-accent">4.8★</p>
              <p className="text-xs text-ink/60 mt-1">79 reseñas en Google</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-accent">100%</p>
              <p className="text-xs text-ink/60 mt-1">Pastelería propia</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-accent">🐾</p>
              <p className="text-xs text-ink/60 mt-1">Pet Friendly</p>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4 reveal">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden col-span-2">
            <Image
              src="/images/food/cinnamon-rolls-strawberry-chocolate-glaze-marble-board.jpg"
              alt="Rolls dulces de Frucupi Café"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-48 rounded-2xl overflow-hidden">
            <Image
              src="/images/food/pink-flower-latte-art-closeup-white-cup.jpg"
              alt="Latte art de Frucupi Café"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative h-48 rounded-2xl overflow-hidden">
            <Image
              src="/images/food/four-gourmet-cookies-chocolate-pistachio-orange-tray.jpg"
              alt="Cookies gourmet de Frucupi Café"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
