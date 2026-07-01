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
    src: "/images/food/iced-coffee-caramel-drizzle-pour-glass-cup.jpg",
    alt: "Café helado con caramelo sirviéndose en vaso de vidrio",
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
    src: "/images/food/pistachio-matcha-cookie-white-drizzle-cafe-interior.jpg",
    alt: "Cookie de pistacho con glaseado blanco",
  },
  {
    src: "/images/food/cinnamon-roll-closeup-hands-cream-cheese-frosting.jpg",
    alt: "Roll de canela con frosting de queso crema",
  },
  {
    src: "/images/food/hands-holding-chocolate-caramel-cookie-latte-table.jpg",
    alt: "Manos sosteniendo cookie de chocolate y caramelo junto a un latte",
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
  {
    src: "/images/food/takeaway-cup-croissant-kraft-paper-bag-frucupi-sticker.jpg",
    alt: "Croissant y café para llevar con sticker de Frucupi",
  },
  {
    src: "/images/food/takeaway-cup-frucupi-sticker-latte-art-lid-off.jpg",
    alt: "Vaso para llevar con latte art y tapa abierta",
  },
  {
    src: "/images/food/hastext/fresh-baked-croissants-tray-golden-glaze-closeup.jpg",
    alt: "Croissants recién horneados con glaseado dorado en bandeja",
  },
];

export default function FoodGallery() {
  return (
    <section id="galeria-food" className="pt-20 md:pt-28 pb-8 md:pb-10 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-primary mb-8 md:mb-10 reveal">
          Lo Que Servimos
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i < 6}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
