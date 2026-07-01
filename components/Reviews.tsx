const reviews = [
  {
    name: "Soy Yas",
    isLocalGuide: true,
    rating: 5,
    text: "Si estás buscando pasar un lindo momento comiendo cosas muy ricas, de excelente materia prima y a muy buen precio, este es el lugar. La atención es un lujo. Son todos un amor!",
  },
  {
    name: "Susana",
    isLocalGuide: true,
    rating: 5,
    text: "Súper amable, excelente atención de esta niña venezolana que trabaja allí... hasta que pude desayunar. Probé la cookie de...",
  },
  {
    name: "Lea Igounet",
    isLocalGuide: true,
    rating: 5,
    text: "Muy bueno el café y cosas riquísimas. Me atendió Ezequiel que me contó que hace el mismo las cosas que ofrecen. Me pedí un alfajor que estaba 100 puntos. Volveremos por supuesto!",
  },
];

const WRITE_REVIEW_URL =
  "https://www.google.com/maps/place/Frucupi+Cafe/@-34.5635766,-58.462209,17z/data=!4m8!3m7!1s0x95bcb5007818cda1:0x2c890b3d3978e50!8m2!3d-34.5635766!4d-58.4596341!9m1!1b1!16s%2Fg%2F11yq_7mf_7?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D";

export default function Reviews() {
  return (
    <section id="resenas" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <p className="font-serif text-6xl text-primary">⭐ 4.8</p>
          <p className="text-ink/60 mt-2">Basado en 79 reseñas en Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal-stagger">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-sans font-medium text-sm text-ink">
                    {r.name}
                  </p>
                  {r.isLocalGuide && (
                    <p className="text-xs text-accent">Local Guide</p>
                  )}
                </div>
                <p className="text-accent">{"★".repeat(r.rating)}</p>
              </div>
              <p className="text-sm text-ink/70 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark transition-colors text-white px-6 py-3 rounded-full font-sans text-sm"
          >
            Dejá tu reseña en Google →
          </a>
        </div>
      </div>
    </section>
  );
}
