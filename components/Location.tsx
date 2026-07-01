const amenities = [
  { icon: "🐾", label: "Pet Friendly — agua y snacks para peludos" },
  { icon: "🥐", label: "Pastelería y cookies horneadas en el local" },
  { icon: "🥑", label: "Brunch todo el día" },
  { icon: "🛵", label: "Pedidos por PedidosYa" },
];

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div className="reveal">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
            Encontranos
          </h2>

          <p className="text-ink/80 mb-1">Moldes 2110, Belgrano</p>
          <p className="text-ink/80 mb-6">Ciudad Autónoma de Buenos Aires</p>

          <table className="w-full text-sm mb-8">
            <tbody>
              <tr className="border-b border-cream-dark">
                <td className="py-2 text-ink/60">Todos los días</td>
                <td className="py-2 text-right text-ink font-medium">
                  8:00 – 20:00
                </td>
              </tr>
            </tbody>
          </table>

          <div className="space-y-3 mb-8">
            {amenities.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl">{a.icon}</span>
                <span className="text-sm text-ink/80">{a.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/frucupi.cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark transition-colors text-white px-5 py-2.5 rounded-full text-sm font-sans"
            >
              Instagram
            </a>
            <a
              href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/frucupi--belgrano-71275fc3-ee55-4893-ba3a-ad108c2cd7a5-menu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark transition-colors text-white px-5 py-2.5 rounded-full text-sm font-sans"
            >
              Pedir por PedidosYa
            </a>
          </div>
        </div>

        <div className="relative h-80 md:h-full min-h-[320px] rounded-2xl overflow-hidden reveal">
          <iframe
            title="Ubicación de Frucupi Café"
            src="https://www.google.com/maps?q=Frucupi+Cafe,+Moldes+2110,+Buenos+Aires&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
